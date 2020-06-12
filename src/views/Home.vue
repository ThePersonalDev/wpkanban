<template lang="pug">
  .wpkanban-board-wrap
    div
      //- Columns
      Container.wpkanban-container(orientation='horizontal' @drop='onColumnDrop')
        Draggable.wpkanban-list-column(v-for='(list, listIdx) in board.lists' :key='listIdx')
          ListTitle(:list='list' :listIdx='listIdx')
          Container(group-name='col' @drop='(e) => onCardDrop(list.term_id, e)' :get-child-payload='getCardPayload(list.term_id)')
            Draggable.wpkanban-card-mini(v-for='(card, cardIdx) in list.cards' :key='cardIdx')
              CardTitle(:card='card' :cardIdx='cardIdx' :listIdx='listIdx' :addedNewCard='addedNewCard' v-on:newCardMounted='addedNewCard = false')
          button.button.wpkanban-add-new-list-button(@click='addNewCard(listIdx)') New card
        .clear

      AddListButton
</template>

<script>
import {Container, Draggable} from 'vue-smooth-dnd'
import ListTitle from '@/components/ListTitle'
import CardTitle from '@/components/CardTitle'
import AddListButton from '@/components/button/AddList'
import {mapState} from 'vuex'
import {cloneDeep} from 'lodash'
import $ajax from '@/mixins/ajax'

export default {
  name: 'Home',

  mixins: [$ajax],

  components: {AddListButton, Container, Draggable, ListTitle, CardTitle},
  
  computed: {
    ...mapState(['board'])
  },

  data: () => ({
    // True after a card is added, and turned false after it's mounted method is run
    addedNewCard: false
  }),

  methods: {
    /**
     * Drop a column into a new position
     */
    onColumnDrop (dropResult) {
      const board = cloneDeep(this.board)
      board.lists = this.applyDrag(board.lists, dropResult)

      this.$store.commit('set', ['board', board])
      this.board.ajaxurl && this.persistColumnOrder()
    },

    /**
     * Drop a card into a new spot
     */
    onCardDrop (listId, dropResult) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const board = cloneDeep(this.board)
        const list = board.lists.filter(list => list.term_id === listId)[0]
        const listIdx = board.lists.indexOf(list)

        const newList = cloneDeep(list)
        newList.cards = this.applyDrag(newList.cards, dropResult)
        board.lists.splice(listIdx, 1, newList)

        this.$store.commit('set', ['board', board])
        this.board.ajaxurl && this.persistCardOrder(listIdx)
      }
    },

    /**
     * Update the vue state
     */
    applyDrag (set, dragResult) {
      const {removedIndex, addedIndex, payload} = dragResult
      if (removedIndex === null && addedIndex === null) return set

      const result = [...set]
      let itemToAdd = payload

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd)
      }

      return result
    },

    getCardPayload (listId) {
      return index => {
        return this.board.lists.filter(list => list.term_id === listId)[0].cards[index]
      }
    },

    /**
     * Adds a new card
     */
    addNewCard (listIdx) {
      const board = cloneDeep(this.board)
      board.lists[listIdx].cards.push({
        title: ' ',
        id: -1
      })

      this.addedNewCard = true
      this.$store.commit('set', ['board', board])

      this.board.ajaxurl && this.persistNewCard(listIdx)
    },

    /**
     * Sends message to WordPress to persist column order
     */
    persistColumnOrder () {
      let data = new FormData()
      let order = []
      
      this.board.lists.forEach(list => {
        order.push(list.term_id)
      })

      this.post('wpkanban_persist_list_order', {
        order: JSON.stringify(order)
      })
    },

    /**
     * Sends message to WordPress to persist card order
     */
    persistCardOrder (listIdx) {
      let data = new FormData()
      let order = []

      this.board.lists[listIdx].cards.forEach(card => {
        order.push(card.id)
      })

      this.post('wpkanban_persist_card_order', {
        order: JSON.stringify(order),
        listId: this.board.lists[listIdx].term_id
      })
    },

    /**
     * Creates a new card on the server
     */
    persistNewCard (listIdx) {
      let data = new FormData()
      let lastCardIdx = this.board.lists[listIdx].cards.length - 1

      this.post('wpkanban_persist_new_card', {
        listId: this.board.lists[listIdx].term_id,
        order: lastCardIdx
      }, res => {
          this.board.lists[listIdx].cards[lastCardIdx].id = res.data.id
          this.board.lists[listIdx].cards[lastCardIdx].editURL = res.data.editURL
      })
    }
  }
}
</script>
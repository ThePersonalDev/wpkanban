<template lang="pug">
  div
    Container.wpkanban-container(orientation='horizontal' @drop='onColumnDrop')
      Draggable.wpkanban-list-column(v-for='(list, listIdx) in board.lists' :key='listIdx')
        ColumnTitle(:list='list' :listIdx='listIdx')
        Container(group-name='col' @drop='(e) => onCardDrop(list.term_id, e)' :get-child-payload='getCardPayload(list.term_id)')
          Draggable.wpkanban-card-mini(v-for='(card, cardIdx) in list.cards' :key='cardIdx')
            CardTitle(:card='card' :cardIdx='cardIdx' :listIdx='listIdx')
      .clear
</template>

<script>
import {Container, Draggable} from 'vue-smooth-dnd'
import ColumnTitle from '@/components/ColumnTitle'
import CardTitle from '@/components/CardTitle'
import {mapState} from 'vuex'
import {cloneDeep} from 'lodash'

export default {
  name: 'Home',

  components: {Container, Draggable, ColumnTitle, CardTitle},
  
  computed: {
    ...mapState(['board'])
  },

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
     * Sends message to WordPress to persist column order
     */
    persistColumnOrder () {
      let data = new FormData()
      let order = []
      
      this.board.lists.forEach(list => {
        order.push(list.term_id)
      })
      data.append('action', 'wpkanban_persist_list_order')
      data.append('_ajax_nonce', this.board.nonce)
      data.append('order', JSON.stringify(order))

      this.axios.post(this.board.ajaxurl, data)
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
      data.append('action', 'wpkanban_persist_card_order')
      data.append('_ajax_nonce', this.board.nonce)
      data.append('order', JSON.stringify(order))
      data.append('listId', this.board.lists[listIdx].term_id)

      this.axios.post(this.board.ajaxurl, data)
    }
  }
}
</script>
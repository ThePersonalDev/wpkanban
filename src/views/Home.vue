<template lang="pug">
  div
    Container.wpkanban-container(orientation='horizontal' @drop='onColumnDrop')
      Draggable.wpkanban-list-column(v-for='list in board.lists' :key='list.id')
        h3 {{list.title}}
        Container(group-name='col' @drop='(e) => onCardDrop(list.id, e)' :get-child-payload='getCardPayload(list.id)')
          Draggable.wpkanban-card-mini(v-for='(card, key) in list.cards' :key='key')
            div {{card.title}}
      .clear
</template>

<script>
import {Container, Draggable} from 'vue-smooth-dnd'

export default {
  name: 'Home',

  components: {Container, Draggable},
  
  data: () => ({
    board: {
      lists: [
        {
          title: 'Todo',
          id: 0,
          cards: [{title: 'Card A'}, {title: 'Card B'}, {title: 'Card C'}]
        },
        {
          title: 'Doing',
          id: 1,
          cards: [{title: 'Card D'}, {title: 'Card E'}, {title: 'Card F'}]
        },
        {
          title: 'Done',
          id: 2,
          cards: [{title: 'Card G'}, {title: 'Card H'}, {title: 'Card I'}]
        }
      ]
    }
  }),

  methods: {
    /**
     * Drop a column into a new position
     */
    onColumnDrop (dropResult) {
      const board = Object.assign({}, this.board)
      board.lists = this.applyDrag(board.lists, dropResult)
      this.board = board
    },

    /**
     * Drop a card into a new spot
     */
    onCardDrop (listId, dropResult) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const board = Object.assign({}, this.board)
        const list = board.lists.filter(list => list.id === listId)[0]
        const listIdx = board.lists.indexOf(list)

        const newList = Object.assign({}, list)
        newList.cards = this.applyDrag(newList.cards, dropResult)
        board.lists.splice(listIdx, 1, newList)

        this.board = board
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
        return this.board.lists.filter(list => list.id === listId)[0].cards[index]
      }
    }
  }
}
</script>
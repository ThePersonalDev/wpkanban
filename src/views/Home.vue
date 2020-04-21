<template lang="pug">
  div
    Container.wpkanban-container(orientation='horizontal' @drop='onColumnDrop')
      Draggable.wpkanban-list-column(v-for='list in board' :key='list.id')
        h3 {{list.title}}
        Container(group-name='col' @drop='(e) => onCardDrop(list.id, e)')
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
    board: [
      {
        title: 'Todo',
        id: 0,
        cards: [{title: 'Test A'}, {title: 'Test B'}, {title: 'Test C'}]
      },
      {
        title: 'Doing',
        id: 1,
        cards: [{title: 'Test D'}, {title: 'Test E'}, {title: 'Test F'}]
      },
      {
        title: 'Done',
        id: 2,
        cards: [{title: 'Test G'}, {title: 'Test H'}, {title: 'Test I'}]
      }
    ]
  }),

  methods: {
    onColumnDrop ($event) {
      this.board = this.applyDrag(this.board, $event)
    },

    onCardDrop (listId, dropResult) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const board = this.board.slice()
        const list = board.filter(list => list.id === listId)[0]
        const listIdx = board.indexOf(list)
        const newList = Object.assign({}, list)

        newList.cards = this.applyDrag(newList.cards, dropResult)
        board.splice(listIdx, 1, newList)

        this.board = board
      }
    },

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
    }
  }
}
</script>

<style lang="scss">
$color-border: #ccd0d4;
$bg-1: #fff;

.wpkanban-container {
  overflow-x: auto;
  white-space: nowrap;
}

.wpkanban-list-column {
  width: 300px;
  border: 1px solid $color-border;
  padding: 10px;
  margin-right: 20px;
  background: $bg-1;

  h3 {
    font-size: 1rem;
    margin: 0;
  }
}

.smooth-dnd-container.horizontal {
  display: block;
  padding-bottom: 20px;
}
.smooth-dnd-container.horizontal > .smooth-dnd-draggable-wrapper {
  display: inline-block;
}

.wpkanban-card-mini {
  padding: 10px;
  border: 1px solid $color-border;
}
</style>
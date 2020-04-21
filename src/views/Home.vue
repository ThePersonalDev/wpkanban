<template lang="pug">
  div
    Container.wpkanban-container(orientation='horizontal' @drop='onColumnDrop')
      Draggable.wpkanban-list-column(v-for='(list, key) in lists' :key='key')
        h3 {{list.title}}
      
      .clear
</template>

<script>
import {Container, Draggable} from 'vue-smooth-dnd'

export default {
  name: 'Home',

  components: {Container, Draggable},
  
  data: () => ({
    lists: [
      {
        title: 'Todo'
      },
      {
        title: 'Doing'
      },
      {
        title: 'Done'
      }
    ]
  }),

  methods: {
    onColumnDrop ($event) {
      this.lists = this.applyDrop(this.lists, $event)
    },

    applyDrop (set, dragResult) {
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
</style>
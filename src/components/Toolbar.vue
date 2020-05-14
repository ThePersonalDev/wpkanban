<template lang="pug">
  div(style='margin-bottom: 10px')
    label(for='wpkanban-board-selector' style='margin-right: 10px;')
      strong Board:
    select#wpkanban-board-selector
      option(v-for='opt in board.boards' :value='opt.id') {{opt.title}}
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['board'])
  },
}
</script>
<template lang="pug">
  div(style='margin-bottom: 10px' v-if='board.currentBoard')
    label(for='wpkanban-board-selector' style='margin-right: 10px;')
      strong Board:
    select#wpkanban-board-selector(v-model.number='board.currentBoard.id' @change='loadBoard')
      option(v-for='opt in board.boards' :value='opt.id') {{opt.title}}
    //- ManageBoardButton
    CreateBoardButton
</template>

<script>
import {mapState} from 'vuex'
import CreateBoardButton from './button/CreateBoard'
import ManageBoardButton from './button/ManageBoard'
import $ajax from '@/mixins/ajax'

export default {
  mixins: [$ajax],
  
  components: {CreateBoardButton, ManageBoardButton},
  
  computed: {
    ...mapState(['board'])
  },

  methods: {
    /**
     * Change board with dropdown
     */
    loadBoard () {
      this.post('wpkanban_change_dashboard_board', {
        board: this.board.currentBoard.id
      }, res => this.$store.commit('set', ['board', res.data]))
    }
  }
}
</script>
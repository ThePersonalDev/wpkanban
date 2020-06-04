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

export default {
  components: {CreateBoardButton, ManageBoardButton},
  
  computed: {
    ...mapState(['board'])
  },

  methods: {
    /**
     * Change board with dropdown
     */
    loadBoard () {
      if (this.board.ajaxurl) {
        let data = new FormData()

        data.append('action', 'wpkanban_change_dashboard_board')
        data.append('_ajax_nonce', this.board.nonce)
        data.append('board', this.board.currentBoard.id)

        this.axios.post(this.board.ajaxurl, data).then(res => {
          this.$store.commit('set', ['board', res.data])
        })
      }
    }
  }
}
</script>
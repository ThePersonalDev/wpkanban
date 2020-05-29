<template lang="pug">
  div(style='margin-bottom: 10px' v-if='board.currentBoard')
    label(for='wpkanban-board-selector' style='margin-right: 10px;')
      strong Board:
    select#wpkanban-board-selector(v-model.number='board.currentBoard.id' @change='loadBoard')
      option(v-for='opt in board.boards' :value='opt.id') {{opt.title}}
    a.button.tpd-m-l-10.thickbox(:href='thickboxURL' title='Create Board' @click='isModalVisible = true') Create Board

    CreateBoardModal(v-if='isModalVisible' :thickbox='thickbox' v-on:close='isModalVisible = false')
</template>

<script>
import {mapState} from 'vuex'
import CreateBoardModal from './modal/CreateBoardModal'

export default {
  components: {CreateBoardModal},
  
  computed: {
    ...mapState(['board']),

    thickboxURL: function () {
      return `#TB_inline?width=${this.thickbox.width}&height=${this.thickbox.height}&inlineId=wpkanban-create-board-modal`
    }
  },

  data: () => ({
    isModalVisible: false,
    
    thickbox: {
      width: 350,
      height: 170
    }
  }),

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
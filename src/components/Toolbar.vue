<template lang="pug">
  div(style='margin-bottom: 10px')
    label(for='wpkanban-board-selector' style='margin-right: 10px;')
      strong Board:
    select#wpkanban-board-selector(v-model.number='board.currentBoard' @change='loadBoard')
      option(v-for='opt in board.boards' :value='opt.id') {{opt.title}}
    a.button.m-l-10.thickbox(href='#TB_inline?width=300&height=150&inlineId=wpkanban-create-board-modal' title='Create Board' @click='showCreateBoardModal') Create Board

    #wpkanban-create-board-modal.hidden
      div.input-text-wrap
        label(for='wpkanban-create-board-title')
          strong Board Name
        div
          input#wpkanban-create-board-title(ref='title' type='text' autocomplete='off' v-model='newBoardTitle' style='width: 100%' v-on:keyup.enter='createBoard') 
      p
        button.button.button-primary(:disabled='!newBoardTitle' @click='createBoard') Create Board
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['board'])
  },

  data: () => ({
    newBoardTitle: ''
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
        data.append('board', this.board.currentBoard)

        this.axios.post(this.board.ajaxurl, data).then(res => {
          this.$store.commit('set', ['board', res.data])
        })
      }
    },

    /**
     * Show the create board modal (via thickbox)
     */
    showCreateBoardModal () {
      this.newBoardTitle = ''

      setTimeout(() => {
        const $tb = document.querySelector('#TB_window')
        $tb.style.width = '350px'
        $tb.style.marginLeft = '-175px'
        $tb.style.height = '150px'
        $tb.style.top = '50%'
        $tb.style.marginTop = '-100px'
        this.$refs.title.focus()
      })
    },

    /**
     * Close modal (via thickbox)
     */
    closeModal () {
      window.jQuery('#TB_closeWindowButton').click()
    },

    /**
     * Create a new board and switch to it
     */
    createBoard () {
      if (this.newBoardTitle) {
        let data = new FormData()

        data.append('action', 'wpkanban_create_board')
        data.append('_ajax_nonce', this.board.nonce)
        data.append('title', this.newBoardTitle)

        this.axios.post(this.board.ajaxurl, data).then(res => {
          this.$store.commit('set', ['board', res.data])
        })

        this.closeModal()
      }
    }
  }
}
</script>
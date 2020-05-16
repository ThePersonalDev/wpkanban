<template lang="pug">
  div(style='margin-bottom: 10px')
    label(for='wpkanban-board-selector' style='margin-right: 10px;')
      strong Board:
    select#wpkanban-board-selector(v-model.number='board.currentBoard' @change='loadBoard')
      option(v-for='opt in board.boards' :value='opt.id') {{opt.title}}
    a.button.tpd-m-l-10.thickbox(:href='thickboxURL' title='Create Board' @click='showCreateBoardModal') Create Board

    //- Create Board modal
    #wpkanban-create-board-modal.hidden
      div.input-text-wrap.tpd-m-t-10
        label(for='wpkanban-create-board-title')
          strong Board Name:
        div.tpd-m-t-10
          input#wpkanban-create-board-title(ref='title' type='text' autocomplete='off' v-model='newBoardTitle' style='width: 100%' v-on:keyup.enter='createBoard')
      p.input-text-wrap
        input#wpkanban-create-board-with-defaults-checkbox(ref='checkbox' type='checkbox' v-model='shouldCreateDefaultColumns')
        label(for='wpkanban-create-board-with-defaults-checkbox')
          strong Create board with default columns
      div
        button.button.button-primary(:disabled='!newBoardTitle' @click='createBoard') Create Board
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['board']),

    thickboxURL: function () {
      return `#TB_inline?width=${this.thickbox.width}&height=${this.thickbox.height}&inlineId=wpkanban-create-board-modal`
    }
  },

  data: () => ({
    newBoardTitle: '',
    shouldCreateDefaultColumns: true,
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
      this.shouldCreateDefaultColumns = true

      setTimeout(() => {
        const $modal = document.querySelector('#TB_window')
        $modal.style.width = `${this.thickbox.width + 30}px`
        $modal.style.height = `${this.thickbox.height + 30}px`
        $modal.style.left = '50%'
        $modal.style.top = '50%'
        $modal.style.marginLeft = `${-this.thickbox.width / 2 - 15}px`
        $modal.style.marginTop = `${-this.thickbox.height / 2 - 15}px`
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
        data.append('shouldCreateDefaultColumns', this.shouldCreateDefaultColumns)

        this.axios.post(this.board.ajaxurl, data).then(res => {
          this.$store.commit('set', ['board', res.data])
        })

        this.closeModal()
      }
    }
  }
}
</script>
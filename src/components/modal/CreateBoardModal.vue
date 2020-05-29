<template lang="pug">
//- Create Board modal
#wpkanban-create-board-modal
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
    ...mapState(['board'])
  },

  props: ['thickbox'],
  
  data: () => ({
    shouldCreateDefaultColumns: true,
    newBoardTitle: ''
  }),

  /**
   * Show the create board modal (via thickbox)
   */
  mounted () {
    setTimeout(() => {
      const $modal = document.querySelector('#TB_window')
      $modal.style.width = `${this.thickbox.width + 30}px`
      $modal.style.height = `${this.thickbox.height + 30}px`
      $modal.style.left = '50%'
      $modal.style.top = '50%'
      $modal.style.marginLeft = `${-this.thickbox.width / 2 - 15}px`
      $modal.style.marginTop = `${-this.thickbox.height / 2 - 15}px`
      this.$refs.title.focus()

      window.jQuery('body').on('thickbox:removed', this.closeModal)
    })
  },

  destroyed () {
    window.jQuery('body').off('thickbox:removed', this.closeModal)
  },
  
  methods: {
    /**
     * Create a new board and switch to it
     */
    createBoard () {
      if (this.newBoardTitle && this.board.ajaxurl) {
        let data = new FormData()

        data.append('action', 'wpkanban_create_board')
        data.append('_ajax_nonce', this.board.nonce)
        data.append('title', this.newBoardTitle)
        data.append('shouldCreateDefaultColumns', this.shouldCreateDefaultColumns)

        this.axios.post(this.board.ajaxurl, data).then(res => {
          this.$store.commit('set', ['board', res.data])
        })
      }
      
      this.closeModal()
    },

    /**
     * Close modal (via thickbox)
     */
    closeModal () {
      window.jQuery('#TB_closeWindowButton').click()
      this.$emit('close')
    }
  }
}
</script>
<template lang="pug">
.wpkanban-create-list-wrap
  a.button.thickbox(:href='thickboxURL' title='Add new list' @click='showModal') Add new list

  //- Add new list modal
  #wpkanban-create-list-modal.hidden
    div.input-text-wrap.tpd-m-t-10
      label(for='wpkanban-add-list-title')
        strong List name:
      div.tpd-m-t-10
        input#wpkanban-add-list-title(ref='title' type='text' autocomplete='off' v-model='newListTitle' style='width: 100%' v-on:keyup.enter='createList')
    p.tpd-m-b-0
      button.button.button-primary(:disabled='!newListTitle' @click='createList') Creat List
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['board']),

    thickboxURL: function () {
      return `#TB_inline?width=${this.thickbox.width}&height=${this.thickbox.height}&inlineId=wpkanban-create-list-modal`
    }
  },

  data: () => ({
    newListTitle: '',
    thickbox: {
      width: 350,
      height: 140
    }
  }),

  methods: {
    showModal () {
      this.newListTitle = ''

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
     * Create the list
     */
    createList () {
      if (this.newListTitle && this.board.ajaxurl) {
        let data = new FormData()

        data.append('action', 'wpkanban_create_list')
        data.append('_ajax_nonce', this.board.nonce)
        data.append('title', this.newListTitle)
        data.append('boardID', this.board.currentBoard.id)
        data.append('boardTitle', this.board.currentBoard.title)
        data.append('order', this.board.lists.length + 1)

        this.axios.post(this.board.ajaxurl, data).then(res => {
          this.$store.commit('set', ['board', res.data])
        })
      }
      this.closeModal()
    }
  }
}
</script>
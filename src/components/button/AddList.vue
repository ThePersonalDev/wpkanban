<template lang="pug">
.wpkanban-create-list-wrap
  a.button.thickbox(:href='thickboxURL' title='Add new list' @click='showModal') Add new list

  //- Add new list modal
  Modal#wpkanban-create-list-modal(v-if='isModalVisible' :thickbox='thickbox' v-on:close='isModalVisible = false')
    div.input-text-wrap.tpd-m-t-10
      label(for='wpkanban-add-list-title')
        strong List name:
      div.tpd-m-t-10
        input#wpkanban-add-list-title(ref='title' type='text' autocomplete='off' v-model='newListTitle' style='width: 100%' v-on:keyup.enter='createList')
    p.tpd-m-b-0
      button.button.button-primary(:disabled='!newListTitle' @click='createList') Creat List
</template>

<script>
import Modal from '../Modal.vue'
import {mapState} from 'vuex'

export default {
  components: {Modal},

  computed: {
    ...mapState(['board']),

    thickboxURL: function () {
      return `#TB_inline?width=${this.thickbox.width}&height=${this.thickbox.height}&inlineId=wpkanban-create-list-modal`
    }
  },

  data: () => ({
    newListTitle: '',

    isModalVisible: false,

    thickbox: {
      width: 350,
      height: 140
    }
  }),

  methods: {
    showModal () {
      this.newListTitle = ''
      this.isModalVisible = true
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

      this.isModalVisible = false
    }
  }
}
</script>
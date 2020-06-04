<template lang="pug">
  a.button.tpd-m-l-10.thickbox(:href='thickboxURL' title='Create Board' @click='showModal')
    | Create Board
    Modal#wpkanban-create-board-modal(v-if='isModalVisible' :thickbox='thickbox' v-on:close='isModalVisible = false')
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
import Modal from '../Modal.vue'
import {mapState} from 'vuex'
import $ajax from '@/mixins/ajax'

export default {
  mixins: [$ajax],

  components: {Modal},

  computed: {
    ...mapState(['board']),
    
    thickboxURL: function () {
      return `#TB_inline?width=${this.thickbox.width}&height=${this.thickbox.height}&inlineId=wpkanban-create-board-modal`
    }
  },

  data: () => ({
    isModalVisible: false,
    
    shouldCreateDefaultColumns: true,
    newBoardTitle: '',

    thickbox: {
      width: 350,
      height: 170
    }
  }),

  methods: {
    showModal () {
      this.shouldCreateDefaultColumns = true
      this.newBoardTitle = ''
      this.isModalVisible = true
    },
    
    /**
     * Create a new board and switch to it
     */
    createBoard () {
      if (this.newBoardTitle) {
        this.post('wpkanban_create_board', {
          title: this.newBoardTitle,
          shouldCreateDefaultColumns: this.shouldCreateDefaultColumns
        }, res => this.$store.commit('set', ['board', res.data]))
      }
      
      this.isModalVisible = false
    }
  }
}
</script>
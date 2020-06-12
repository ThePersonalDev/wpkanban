<template lang="pug">
  a.button.tpd-m-l-10.thickbox(:href='thickboxURL' title='Manage Board' @click='showModal')
    | Manage Board
    Modal#wpkanban-manage-board-modal(v-if='isModalVisible' :thickbox='thickbox' v-on:close='isModalVisible = false')
      div.input-text-wrap.tpd-m-t-10
        label(for='wpkanban-manage-board-title')
          strong Board Name:
        div.tpd-m-t-10
          input#wpkanban-manage-board-title(ref='title' type='text' autocomplete='off' v-model='newBoardTitle' style='width: 100%' v-on:keyup.enter='updateBoard')
      p
        button.button.tpd-button-error(@click='deleteBoard') Delete Board
        button.button.button-primary.tpd-float-r(:disabled='!newBoardTitle' @click='updateBoard') Update Board
</template>

<script>
import Modal from '../Modal.vue'
import {mapState} from 'vuex'
import {cloneDeep} from 'lodash'
import $ajax from '@/mixins/ajax'

export default {
  mixins: [$ajax],
  
  components: {Modal},

  computed: {
    ...mapState(['board']),
    
    thickboxURL: function () {
      return `#TB_inline?width=${this.thickbox.width}&height=${this.thickbox.height}&inlineId=wpkanban-manage-board-modal`
    }
  },

  watch: {
    'board.currentBoard.title' (title) {
      this.newBoardTitle = title
    }
  },

  data: () => ({
    isModalVisible: false,
    
    shouldCreateDefaultColumns: true,
    newBoardTitle: '',

    thickbox: {
      width: 350,
      height: 140
    }
  }),

  mounted () {
    this.newBoardTitle = this.board.currentBoard.title
  },

  methods: {
    showModal () {
      this.shouldCreateDefaultColumns = true
      this.isModalVisible = true
    },
    
    /**
     * Update the boards name
     */
    updateBoard () {
      if (this.newBoardTitle) {
        this.post('wpkanban_update_board', {
          title: this.newBoardTitle,
          boardId: this.board.currentBoard.id
        }, res => this.$store.commit('set', ['board', res.data]))
      }

      this.isModalVisible = false
    },

    /**
     * Prompt user to actually delete
     * 
     * - Selects next board
     */
    deleteBoard () {
      if (confirm('Are you sure that you want to delete this board?')) {
        this.post('wpkanban_delete_board', {
          boardId: this.board.currentBoard.id
        }, res => this.$store.commit('set', ['board', res.data]))

        this.isModalVisible = false
      }
    }
  }
}
</script>
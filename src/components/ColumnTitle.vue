<template lang="pug">
  h3
    span(contenteditable @input='onTitleChange' @keypress='onTitleKeypress' @blur='onTitleBlur') {{list.name}}
</template>

<script>
import {debounce, cloneDeep} from 'lodash'
import {mapState} from 'vuex'

export default {
  name: 'ColumnTitle',
  
  props: ['list', 'listIdx'],

  computed: {
    ...mapState(['board'])
  },

  data: () => ({
    title: ''
  }),

  mounted () {
    this.title = this.list.name
  },

  methods: {
    /**
     * Prevent enter key
     */
    onTitleKeypress (ev) {
      if (ev.key === 'Enter') {
        ev.preventDefault()
      }
    },

    onTitleChange (ev) {
      this.title = ev.target.innerText

      if (this.board.ajaxurl) {
        this.persistTitle()
      }
    },
    
    /**
     * Persist title on server
     */
    persistTitle: debounce(function (ev) {      
      let data = new FormData()

      data.append('action', 'wpkanban_update_list_title')
      data.append('_ajax_nonce', this.board.nonce)
      data.append('title', this.title)
      data.append('listId', this.list.term_id)

      this.axios.post(this.board.ajaxurl, data)
    }, 500, {trailing: true}),

    /**
     * Persist title internally
     */
    onTitleBlur () {
      let board = cloneDeep(this.board)
      board.lists[this.listIdx].name = this.title

      this.$store.commit('set', ['board', board])
    }
  }
}
</script>

<style lang="scss" scoped>
  h3 {
    display: block;

    span {
      display: inline-block;
      min-width: 100px;
      min-height: 1rem;
      max-width: 100%;
      white-space: break;
    }
  }
</style>
<template lang="pug">
  div
    span(ref='title' contenteditable @input='onTitleChange' @keypress='onTitleKeypress' @blur='onBlur') {{card.title}}
</template>

<script>
import {debounce, cloneDeep} from 'lodash'
import {mapState} from 'vuex'

export default {
  name: 'CardTitle',
  
  props: ['card', 'cardIdx', 'listIdx'],

  computed: {
    ...mapState(['board'])
  },

  watch: {
    card (card) {
      this.title = card.title
    }
  },

  data: () => ({
    title: '',
  }),

  mounted () {
    this.title = this.card.title
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
    
    /**
     * Update the title
     */
    onTitleChange (ev) {
      this.title = ev.target.innerText

      if (this.board.ajaxurl) {
        this.persistTitle()
      }
    },

    /**
     * Persist title to server
     */
    persistTitle: debounce(function () {
      let data = new FormData()

      data.append('action', 'wpkanban_update_card_title')
      data.append('_ajax_nonce', this.board.nonce)
      data.append('title', this.title)
      data.append('cardId', this.card.id)

      this.axios.post(this.board.ajaxurl, data)
    }, 250, {trailing: true}),

    onBlur() {
      const board = cloneDeep(this.board)
      board.lists[this.listIdx].cards[this.cardIdx].title = this.title
      this.$store.commit('set', ['board', board])

      // Fix for newly created cards (otherwise the text is duplicated)
      this.$refs.title.innerText = this.title
    }
  }
}
</script>

<style lang="scss" scoped>
  div {
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
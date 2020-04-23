<template lang="pug">
  div
    span(contenteditable @input='onTitleChange' @keypress='onTitleKeypress') {{card.title}}
</template>

<script>
import {debounce} from 'lodash'
import {mapState} from 'vuex'

export default {
  name: 'CardTitle',
  
  props: ['card', 'cardIdx'],

  computed: {
    ...mapState(['board'])
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
    onTitleChange: debounce(function (ev) {
      if (!this.board.ajaxurl) return

      const title = ev.target.innerText
      let data = new FormData()

      data.append('action', 'wpkanban_update_list_title')
      data.append('_ajax_nonce', this.board.nonce)
      data.append('title', title)
      data.append('cardId', this.card.id)

      // this.axios.post(this.board.ajaxurl, data)
    }, 500, {trailing: true})
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
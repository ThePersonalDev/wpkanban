<template lang="pug">
  .wpkanban-card-title
    .wpkanban-card-title-wrap
      span(ref='title' contenteditable @input='onTitleChange' @keypress='onTitleKeypress' @blur='onBlur') {{card.title}}
    .wpkanban-card-title-icon-button(@click='openDropdown' :class='{"wpkanban-invisible": isDropdownOpen}')
      svg(viewBox='0 0 512 512')
        path(d='M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z')
    ul.wpkanban-card-dropdown(:class='{"wpkanban-visible": isDropdownOpen}' v-click-outside='onDropdownOutsideClick')
      li
        svg(viewBox='0 0 448 512')
          path(d='M432 80h-82.4l-34-56.7A48 48 0 0 0 274.4 0H173.6a48 48 0 0 0-41.2 23.3L98.4 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16l21.2 339a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z')
        span Delete
      li
        svg(viewBox='0 0 448 512')
          path(d='M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z')
        span Duplicate
      li.wpkanban-separater
      li
        svg(viewBox='0 0 576 512')
          path(d='M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z')
        span Rename
</template>

<script>
import {debounce, cloneDeep} from 'lodash'
import {mapState} from 'vuex'
import vClickOutside from 'v-click-outside'

export default {
  name: 'CardTitle',
  
  props: ['card', 'cardIdx', 'listIdx', 'addedNewCard'],

  directives: {
    clickOutside: vClickOutside.directive
  },

  computed: {
    ...mapState(['board'])
  },

  watch: {
    card (card) {
      this.title = card.title
      this.$refs.title.innerText = this.title
    }
  },

  data: () => ({
    title: '',
    isDropdownOpen: false
  }),

  mounted () {
    this.title = this.card.title

    if (this.addedNewCard) {
      this.$refs.title.focus()
      this.$emit('newCardMounted')
    }
  },

  methods: {
    /**
     * Prevent enter key
     */
    onTitleKeypress (ev) {
      if (ev.key === 'Enter') {
        this.$refs.title.blur()
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

    /**
     * Persist title locally
     */
    onBlur() {
      const board = cloneDeep(this.board)
      board.lists[this.listIdx].cards[this.cardIdx].title = this.title
      this.$store.commit('set', ['board', board])
      this.card.title = this.title
      this.isDropdownOpen = false
    },

    /**
     * Opens the dropdown, waiting a frame so that click-outside isn't triggered
     */
    openDropdown () {
      setTimeout(() => {
        this.isDropdownOpen = true
      }, 0)
    },

    /**
     * Called when user clicks outside the dropdown
     */
    onDropdownOutsideClick () {
      this.isDropdownOpen = false
    }
  }
}
</script>
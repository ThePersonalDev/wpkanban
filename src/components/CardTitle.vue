<template lang="pug">
.wpkanban-card-title
  .wpkanban-card-title-wrap(@click='onClick')
    span(ref='title' :contenteditable='isEditable' @input='onTitleChange' @keypress='onTitleKeypress' @blur='onBlur' v-html='cardTitle')
  .wpkanban-card-title-icon-button(@click='openDropdown' :class='{"wpkanban-invisible": isDropdownOpen}')
    DropdownIcon
  CardDropdown(:isOpen='isDropdownOpen' v-on:close='isDropdownOpen = false' v-on:rename='onRename' v-on:remove='onDelete')
</template>

<script>
import {debounce, cloneDeep} from 'lodash'
import {mapState} from 'vuex'
import CardDropdown from './CardDropdown'
import DropdownIcon from './DropdownIcon'
import $ajax from '@/mixins/ajax'

export default {
  name: 'CardTitle',
  
  mixins: [$ajax],
  
  components: {CardDropdown, DropdownIcon},
  
  props: ['card', 'cardIdx', 'listIdx', 'addedNewCard'],

  computed: {
    ...mapState(['board']),

    /**
     * Displays card flairs, like hasContent
     */
    cardTitle () {
      if (this.card.hasContent) {
        return `<div><div>${this.card.title}</div><div>📃</div></div>`
      }

      return this.card.title
    }
  },

  watch: {
    card (card) {
      this.title = card.title
      this.$refs.title.innerText = this.title
    }
  },

  data: () => ({
    title: '',
    isEditable: false,
    isDropdownOpen: false
  }),

  mounted () {
    this.title = this.card.title

    if (this.addedNewCard) {
      this.isEditable = true

      setTimeout(() => {
        this.$refs.title.focus()
        this.$emit('newCardMounted')
      })
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

      this.persistTitle()
    },

    /**
     * Persist title to server
     */
    persistTitle: debounce(function () {
      this.post('wpkanban_update_card_title', {
        title: this.title,
        cardId: this.card.id
      })
    }, 250, {trailing: true}),

    /**
     * Navigate to edit page
     */
    onClick () {
      if (!this.isEditable && this.card.editURL) {
        window.location = this.card.editURL
      }
    },

    /**
     * Persist title locally
     */
    onBlur () {
      const board = cloneDeep(this.board)
      board.lists[this.listIdx].cards[this.cardIdx].title = this.title
      this.$store.commit('set', ['board', board])
      this.card.title = this.title
      this.isDropdownOpen = false
      this.isEditable = false
    },

    /**
     * Opens the dropdown, waiting a frame so that click-outside isn't triggered
     */
    openDropdown (ev) {
      setTimeout(() => {
        this.isDropdownOpen = true
      }, 0)
      ev.preventDefault()
    },

    /**
     * Makes card editable, focuses it, and selects all
     */
    onRename () {
      this.isDropdownOpen = false
      this.isEditable = true

      setTimeout(() => {
        this.$refs.title.focus()
        document.execCommand('selectAll', false, null)
      }, 0)
    },

    /**
     * Delete the card
     */
    onDelete () {
      const board = cloneDeep(this.board)
      const card = board.lists[this.listIdx].cards.splice(this.cardIdx, 1)[0]

      this.$store.commit('set', ['board', board])
      this.isDropdownOpen = false

      this.persistCardDeletion(card)
    },

    /**
     * Delete the card on WordPress
     */
    persistCardDeletion (card) {
      this.post('wpkanban_persist_card_delete', {
        id: card.id
      })
    }
  }
}
</script>
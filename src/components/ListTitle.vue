<template lang="pug">
h3.wpkanban-card-title
  .wpkanban-card-title-wrap
    span(ref='title' :contenteditable='isEditable' @input='onTitleChange' @keypress='onTitleKeypress' @blur='onBlur') {{list.name}}
  .wpkanban-card-title-icon-button(@click='openDropdown')
    DropdownIcon
  CardDropdown(:isOpen='isDropdownOpen' v-on:close='isDropdownOpen = false' v-on:rename='onRename' v-on:remove='onDelete')
</template>

<script>
import {debounce, cloneDeep} from 'lodash'
import {mapState} from 'vuex'
import DropdownIcon from './DropdownIcon'
import CardDropdown from './CardDropdown'
import $ajax from '@/mixins/ajax'

export default {
  name: 'ColumnTitle',

  mixins: [$ajax],

  components: {DropdownIcon, CardDropdown},
  
  props: ['list', 'listIdx'],

  computed: {
    ...mapState(['board'])
  },

  data: () => ({
    title: '',
    isDropdownOpen: false,
    isEditable: false
  }),

  watch: {
    list (list) {
      this.title = list.name
    }
  },

  mounted () {
    this.title = this.list.name
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
     * Persist title on server
     */
    persistTitle: debounce(function (ev) {
      this.post('wpkanban_update_list_title', {
        title: this.title,
        listId: this.list.term_id
      })
    }, 500, {trailing: true}),

    /**
     * Persist title internally
     */
    onBlur () {      
      let board = cloneDeep(this.board)
      board.lists[this.listIdx].name = this.title
      this.$store.commit('set', ['board', board])
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
     * Rename the column
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
     * Delete columns
     */
    onDelete () {
      const board = cloneDeep(this.board)
      const list = board.lists.splice(this.listIdx, 1)[0]

      this.$store.commit('set', ['board', board])
      this.isDropdownOpen = false

      this.board.ajaxurl && this.persistListDeletion(list)
    },

    /**
     * Delete the list on WordPress, including all of its cards
     */
    persistListDeletion (list) {
      this.post('wpkanban_persist_list_delete', {
        id: list.term_id
      })
    }
  }
}
</script>
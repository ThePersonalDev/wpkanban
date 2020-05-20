<template lang="pug">
.wpkanban-create-list-wrap
  a.button.thickbox(:href='thickboxURL' title='Add new list' @click='showModal') Add new list

  //- Add new list modal
  #wpkanban-create-list-modal.hidden
    div.input-text-wrap.tpd-m-t-10
      label(for='wpkanban-create-board-title')
        strong Board Name:
      div.tpd-m-t-10
        input#wpkanban-create-board-title(ref='title' type='text' autocomplete='off' v-model='newListTitle' style='width: 100%' v-on:keyup.enter='createBoard')
    div
      button.button.button-primary(:disabled='!newListTitle') Creat List
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['board']),

    thickboxURL: function () {
      return `#TB_inline?width=${this.thickbox.width}&height=${this.thickbox.height}&inlineId=wpkanban-list-board-modal`
    }
  },

  data: () => ({
    newListTitle: '',
    thickbox: {
      width: 350,
      height: 170
    }
  }),

  methods: {
    showModal () {
      console.log('show modal')
    }
  }
}
</script>
<template lang="pug">
#wpkanban.metabox-holder
  .postbox-container
    .meta-box-sortables
      .postbox(:class='{closed: board.isDashboardMetaboxClosed}')
        button.handlediv(type='button' @click='togglePostbox')
          span.toggle-indicator
        h2.hndle
          span WP Kanban
        .inside
          router-view
</template>

<script>
import board from './store/mock'
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['board'])
  },

  mounted () {
    if (window.WPKanban) {
      this.$store.commit('set', ['board', window.WPKanban])
    } else {
      this.$store.commit('set', ['board', board])
    }

    window.WPKanbanApp = this
  },
  
  methods: {
    /**
     * Persist the open state on the server
     */
    togglePostbox () {
      this.$store.commit('set', ['board.isDashboardMetaboxClosed', !this.board.isDashboardMetaboxClosed])

      if (this.board.ajaxurl) {
        let data = new FormData()
  
        data.append('action', 'wpkanban_persist_dashboard_metabox_open_state')
        data.append('_ajax_nonce', this.board.nonce)
        data.append('isClosed', this.board.isDashboardMetaboxClosed)
  
        this.axios.post(this.board.ajaxurl, data).then(res => {
          console.log(res.data)
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/main.scss';
</style>

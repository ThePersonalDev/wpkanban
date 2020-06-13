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
          Toolbar
          Home
</template>

<script>
import board from './store/mock'
import {mapState} from 'vuex'
import Toolbar from './components/Toolbar'
import $ajax from '@/mixins/ajax'
import Home from './views/Home'

export default {
  mixins: [$ajax],
  
  components: {
    Home,
    Toolbar
  },
  
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

      this.post('wpkanban_persist_dashboard_metabox_open_state', {
        isClosed: this.board.isDashboardMetaboxClosed
      })
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/main.scss';
</style>

<template lang="pug">
  #tpd-wpkanban.metabox-holder
    .postbox-container
      .meta-box-sortables
        .postbox(:class='{closed: !isPoseboxOpen}')
          button.handlediv(type='button' @click='togglePostbox')
            span.toggle-indicator
          h2.hndle
            span WP Kanban
          .inside
            router-view
</template>

<script>
export default {
  data: () => ({
    isPoseboxOpen: true
  }),
  
  methods: {
    togglePostbox () {
      this.isPoseboxOpen = !this.isPoseboxOpen
    }
  }
}
</script>

<style lang="scss">
#tpd-wpkanban {
  .postbox-container {
    width: 100%;
  }
}
</style>

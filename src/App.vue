<template lang="pug">
#wpkanban.metabox-holder
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
@import 'assets/scss/main.scss';
</style>

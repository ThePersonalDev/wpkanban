<template lang="pug">
  div
    div.list-column(v-for='(list, key) in lists' :key='key')
      h3 {{list.title}}
    .clear
</template>

<script>
export default {
  name: 'Home',
  
  data: () => ({
    lists: [
      {
        title: 'Todo'
      },
      {
        title: 'Doing'
      },
      {
        title: 'Done'
      }
    ]
  })
}
</script>

<style lang="scss">
$color-border: #ccd0d4;

.list-column {
  width: 300px;
  border: 1px solid $color-border;
  padding: 10px;
  float: left;
  margin-right: 20px;

  h3 {
    font-size: 1rem;
    margin: 0;
  }
}
</style>
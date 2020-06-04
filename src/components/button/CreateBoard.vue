<template lang="pug">
  a.button.tpd-m-l-10.thickbox(:href='thickboxURL' title='Create Board' @click='isModalVisible = true')
    | Create Board
    CreateBoardModal(v-if='isModalVisible' :thickbox='thickbox' v-on:close='isModalVisible = false')
</template>

<script>
import CreateBoardModal from '../modal/CreateBoardModal'

export default {
  components: {CreateBoardModal},

  data: () => ({
    isModalVisible: false,
    
    thickbox: {
      width: 350,
      height: 170
    }
  }),
  
  computed: {
    thickboxURL: function () {
      return `#TB_inline?width=${this.thickbox.width}&height=${this.thickbox.height}&inlineId=wpkanban-create-board-modal`
    }
  }  
}
</script>
<template>
  <div id="content" style="margin: -8px;">
<!--    <common-use/>-->
    <about :isBuy='isBuy'/>
    <to-do @onBuy="onBuy"/>
  </div>
</template>

<script>
  import CommonUse from './portal/CommonUse.vue'
   import ToDo from './portal/ToDo.vue'
import About from './portal/About.vue'
  export default {
    components: {
     CommonUse,
     ToDo,
     About
    },
    data () {
      return {
        isBuy: true
      }
    },
    computed: {

    },
    created () {
    },
    methods: {
      onBuy() {
        this.isBuy = false
      }
    }
  }
</script>

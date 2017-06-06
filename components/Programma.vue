<template>
  <div>
    <div class="content is-large">
      <h1 class="title">Programma</h1>
    </div>
    <SVGTriangles :width="width" height="30"></SVGTriangles>
  </div>
</template>
<style scoped>
 .content{
   padding: 0 20px;
 }
 svg{
   opacity: 0.4;
 }
</style>
<script>
 import SVGTriangles from './SVGTriangles.vue'
 export default {
   components: {
     SVGTriangles
   },
   data(){
     return {
       width: 0
     }
   },
   mounted(){
     this.width = window.innerWidth
   }
 }
</script>

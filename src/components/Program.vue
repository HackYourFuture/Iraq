<template>
  <div>
    <div class="content is-large">
      <h1 class="title">{{ $t('program.title') }}</h1>
      <div v-html="$t('ProgramContent')" />
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
 import i18n from './../locales/index'
 import SVGTriangles from './SVGTriangles'

 export default {
   i18n,
   components: {
     SVGTriangles,
   },
   data() {
     return {
       width: 0,
     }
   },
   mounted() {
     this.width = window.innerWidth
   },
 }
</script>

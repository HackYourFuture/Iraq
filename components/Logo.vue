<template>
  <div class="main-screen">
    <div class="overlay"  v-if="width">
      <SVGTriangles :width="width" :height="height"></SVGTriangles>
    </div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            HackYourFuture
          </h1>
          <h2 class="subtitle is-3">
            Iraq ~ Dauk
          </h2>
          <h3 class="subtitle is-5">
            Workshop for <u>fast</u>, <u>scalable</u> and <u>open</u> web development!<br/>
            <b>02/07/2017 - 07/07/2017</b>
          </h3>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
 .hero-body{
   height: 100%;
 }
 .overlay{
   opacity: 0.1;
   position: absolute;
   top: 0;
   left: 0;
 }
</style>
<script>
 import SVGTriangles from './SVGTriangles.vue'
 export default {
   data(){
     return {
       width: 0,
       height: 0
     }
   },
   components: {
     SVGTriangles
   },
   mounted(){
     this.width = window.innerWidth
     this.height = window.innerHeight
   }
 }
</script>

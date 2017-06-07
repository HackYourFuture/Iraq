<template>
  <div class="main-screen">
    <div class="overlay">
      <SVGTriangles :width="width" :height="height"></SVGTriangles>
    </div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            HackYourFuture
          </h1>
          <h2 class="subtitle is-3">
            {{ $t('main.location') }}
          </h2>
          <h3 class="subtitle is-5">
            <p v-html="$t('main.what')"></p>
            <p>
              <b>02/07/2017 - 07/07/2017</b>
            </p>
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
 import SVGTriangles from './SVGTriangles'
import i18n from './../locales/index'

export default {
   i18n,
   data() {
     return {
       width: 0,
       height: 0,
     }
   },
   components: {
     SVGTriangles,
   },
   mounted() {
     this.width = window.innerWidth
     this.height = window.innerHeight

     if (window) {
       window.onResize = () => {
         this.width = window.innerWidth
         this.height = window.innerHeight
       }
     }
   },
 }
</script>

<template>
  <div>
    <div class="half-hero is-fullheight hero">
      <div class="columns">
        <div class="column is-half">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">{{ $t('what.title') }}</h1>
              <h2 class="subtitle"></h2>
            </div>
          </div>
        </div>
        <div class="column is-half svg">
          <SVGTriangles :width="halfWidth" :height="height"></SVGTriangles>
        </div>
      </div>
    </div>
    <div class="half-hero is-fullheight hero">
      <div class="columns">
        <div class="column is-half svg is-hidden-mobile">
          <SVGTriangles :width="halfWidth" :height="height"></SVGTriangles>
        </div>
        <div class="column is-half">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">{{ $t('what.requirements.title') }}</h1>
              <h2 class="subtitle">We wanna make sure...</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import SVGTriangles from './SVGTriangles.vue'
 import i18n from './../locales/index.js'

 export default {
   i18n,
   data(){
     return {
       halfWidth: 0,
       height: 0,
       links: []
     }
   },
   mounted(){
     this.halfWidth = window.innerWidth / 2
     this.height = window.innerHeight
     if(window) window.onResize = ()=>{
       this.width = window.innerWidth
       this.height = window.innerHeight
     }
   },
   components: {
     SVGTriangles,
   }
 }
</script>

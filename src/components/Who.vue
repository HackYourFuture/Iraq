<template>
  <div class="content is-large">
    <h1 class="title">{{ $t('who.title') }}</h1>
    <p v-html="$t('who.description')"></p>
    <hr/>
    <h1 class="title">{{ $t('who.teachers.title') }}</h1>
    <div class="media">
      <figure class="media-left image is-128x128">
        <img alt="" src="http://hackyourfuture.net/images/mentors/gijs.jpg"/>
      </figure>
      <div class="media-content content">
        <h1 class="title">Gijs</h1>
      </div>
    </div>
    <div class="media">
      <figure class="media-left image is-128x128">
        <img alt="" src="http://hackyourfuture.net/images/mentors/daan.jpg"/>
      </figure>
      <div class="media-content content">
        <h1 class="title">Daan</h1>
      </div>
    </div>
    <div class="media">
      <figure class="media-left image is-128x128">
        <img alt="" src="http://hackyourfuture.net/images/mentors/mauro.jpg"/>
      </figure>
      <div class="media-content content">
        <h1 class="title">Mauro</h1>
      </div>
    </div>
    <p class="has-text-centered">
      <a href="http://www.hackyourfuture.net" class="button">With the support and ❤ of many other</a>
    </p>
  </div>
</template>
<style scoped>
 div{
   padding: 20px;
 }
</style>
<script>
 import SVGTriangles from './SVGTriangles'
 import i18n from './../locales/index'

 export default {
   i18n,
   data() {
     return {
       halfWidth: 0,
       links: [],
     }
   },
   mounted() {
     this.halfWidth = window.innerWidth / 2
   },
   components: {
     SVGTriangles,
   },
 }
</script>

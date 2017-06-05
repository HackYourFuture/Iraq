<template>
  <div class="us half-hero is-fullheight hero">
    <div class="columns">
      <div class="column">
        <div class="hero-body">
          <div class="container content is-large">
            <h1 class="title">Who we are</h1>
            <p>
              <b>HackYourFuture</b> is a no profit organization. We run a Six month program for teaching Web Developement to refugees that are living in Europe. Preparing for the most High demanded job with the help of the latest technology.
            </p>
            <hr/>
            <h1 class="title">Teachers</h1>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import SVGTriangles from './SVGTriangles.vue'
 export default {
   data(){
     return {
       halfWidth: 0,
       links: []
     }
   },
   mounted(){
     this.halfWidth = window.innerWidth / 2
   },
   components: {
     SVGTriangles,
   }
 }
</script>

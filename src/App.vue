<template>
  <div>
    <nav class="nav">
      <div class="nav-center">
        <a class="nav-item" v-on:click="switchLang('en')">
          English
        </a>
        <a class="nav-item" v-on:click="switchLang('ar')">
          Arabic
        </a>
        <a class="nav-item" v-on:click="switchLang('ku')">
          Kurdish
        </a>
      </div>
    </nav>
    <link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono" rel="stylesheet"/>
    <Logo></Logo>
    <What></What>
    <Program></Program>
    <Who></Who>
  </div>
</template>
<style>
 nav.nav{
   position: fixed;
   width: 100%;
   top: 0;
   left: 0;
   border-bottom: 1px solid #ccc;
 }
</style>
<script>
 import Who from './components/Who'
 import What from './components/What'
 import Logo from './components/Logo'
 import Program from './components/Program'
 import i18n from './locales/index'

 export default {
   layout: 'default',
   components: {
     Logo,
     Who,
     What,
     Program,
   },
   data() {
     return {
       links: [],
     }
   },
   methods: {
     switchLang(lang) {
       i18n.locale = lang
     },
   },
 }
</script>
<style>
 @import './../node_modules/bulma/css/bulma.css';

 .half-hero .container{
   padding: 0 20px;
 }

 body{
   font-family: 'Share Tech Mono', monospace !important;
 }

 .us .hero-body{
   vertical-align: middle;
 }

 .content{
 }

 .column{
   overflow: hidden;
 }

 .column.svg{
   opacity: 0.5;
 }

 .main-screen{
   display: block;
   text-align: center;
   max-width: 100%;
   height: 100%;
 }
 .resources{
   padding: 20px;
 }
</style>

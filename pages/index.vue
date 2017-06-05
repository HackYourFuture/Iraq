<template>
  <div>
    <Logo></Logo>
    <What></What>
    <Who></Who>
  </div>
</template>
<script>
 import Who from './../components/Who.vue'
 import What from './../components/What.vue'
 import Logo from './../components/Logo.vue'

 export default {
   layout: 'default',
   components: {
     Logo,
     Who,
     What,
   },
   data(){
     return {
       links: []
     }
   }
 }
</script>
<style>
 @import url('https://fonts.googleapis.com/css?family=Share+Tech+Mono');
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

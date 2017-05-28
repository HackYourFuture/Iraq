<template>
  <div>
    <h1>Hack Your Future Resources</h1>
    <ul>
      <li v-for="link in links">{{ link }}</li>
    </ul>
  </div>
</template>
<script>
 import Firebase from 'firebase'
 Firebase.initializeApp(require('./firebase.config.json'))
 export default {
   data(){
     return {
       links: []
     }
   },
   mounted(){
     Firebase.database().ref('/links').on('value', results => {
       results.forEach(res => {
         this.links.push(res.val())
       })
     })
   }
 }
</script>
<style>
 
</style>

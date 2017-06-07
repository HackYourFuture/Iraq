<template>
  <div>
    <div class="content is-large">
      <h1 class="title">Program</h1>

      <h4>Sunday</h4>
      <hr>
      <ul>
        <li>Introductions (daan) </li>
        <li>Why become a programmer (Gijs)</li>
        <li>Web development: three parts html css js and http (who) (opening source code)</li>
        <li>Lunch</li>
        <li>One component: Vanilla dIce. variations on the dice</li>
      </ul>

      <h4>Monday</h4>
      <hr>
      <ul>
        <li>Review yesterday</li>
        <li>javascript + npm explain </li>
        <li>install yourself, codecademy</li>
        <li>Lunch</li>
        <li>Vue dice</li>
      </ul>

      <h4>Tuesday</h4>
      <hr>
      <ul>
        <li>Review yesterday</li>
        <li>bash + more javascript</li>
        <li>Web development: three parts html css js and http (who)</li>
        <li>Lunch</li>
        <li></li>
      </ul>

      <h4>Wednesday</h4>
      <hr>
      <ul>
        <li>Review yesterday</li>
        <li>github</li>
        <li>Web development: three parts html css js and http (who)</li>
        <li>Lunch</li>
        <li></li>
      </ul>

      <h4>Thursday</h4>
      <hr>
      <ul>
        <li>Review yesterday</li>
        <li>socket.io</li>
        <li>Web development: three parts html css js and http (who)</li>
        <li>Lunch</li>
        <li>One component: socket io implementation</li>
      </ul>



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
 import SVGTriangles from './SVGTriangles'

 export default {
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

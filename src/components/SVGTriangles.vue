<template>
  <svg version="1.1" :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-50,-50)">
      <path v-for="item in paths" :fill="item.color" :d="getPathString(item.vertex)"/>
    </g>
  </svg>
</template>
<script>
 function rand(to) {
   return Math.floor(Math.random() * to)
 }
 export default {
   name: 'SVGTriangles',
   props: {
     colors: {
       default: () => [
         'white',
         'red',
         'black',
         'green',
         'yellow',
       ],
     },
     width: { default: 0 },
     height: { default: 0 },
     size: { default: 30 },
     margin: { default: 50 },
   },
   serverCacheKey() {
     // Will change every 10 secondes
     return Math.floor(Date.now() / 10000)
   },
   data() {
     return {
       columns: 10,
       paths: [],
     }
   },
   mounted() {
     this.paths = this.getPaths()
     setInterval(() => {
       this.paths[rand(this.paths.length)].color = this.colors[rand(this.colors.length)]
     }, 150)
   },
   watch: {
     width() {
       this.paths = this.getPaths()
     },
     height() {
       this.paths = this.getPaths()
     },
   },
   methods: {
     getPathString(i) {
       return `M ${i} z`
     },
     getPaths() {
       const paths = []
       const size = this.size
       const columns = Math.ceil(this.width / size)
       const rows = (Math.ceil(this.height / size) * 2) + 2
       for (let row = 0; row <= rows; row++) {
         for (let column = 0; column <= columns; column++) {
           let y = this.size * row / 2
           let x = this.size * column
           const color = this.colors[rand(this.colors.length)]
           x = x + this.margin - this.size
           y = y + this.margin - this.size
           paths.push({ vertex: this.getVertex(size, { x, y }, row % 2 ? 180 : 0), color })
         }
       }

       return paths
     },

     getVertex(size, position, rotation) {
       let vertex = []
       const half = size / 2
       const full = size

       switch (rotation) {
         case 90:
           vertex[0] = [0, 0]
           vertex[1] = [half, full]
           vertex[2] = [full, 0]
           break

         case 180:
           vertex[0] = [0, 0]
           vertex[1] = [0, full]
           vertex[2] = [full, half]
           break

         case 270:
           vertex[0] = [0, full]
           vertex[1] = [full, full]
           vertex[2] = [half, 0]
           break

         default:
           vertex[0] = [0, half]
           vertex[1] = [full, full]
           vertex[2] = [full, 0]
           break
       }

       // Add postion variables
       vertex = vertex.map(item => item.map((cord, index) => (index === 0 ? cord + position.x : cord + position.y)))

       return `${vertex[0].join(',')} ${vertex[1].join(',')} ${vertex[2].join(',')}`
     },
   },
 }
</script>

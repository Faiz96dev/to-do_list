<template>
  <div style="display: flex; justify-content: center">
    <canvas class="draw-area" id="myCanvas" @mousedown="beginDrawing" @mousemove="keepDrawing"
            @mouseup="stopDrawing"/>

          <md-button @click="reset" add class="md-dense md-raised md-primary">Reset</md-button>
  </div>
</template>

<script>
export default {
  name: "CanvasDraw",
  data() {
    return {
      x: 0,
      y: 0,
      isDrawing: false,
      canvas: null,
    }
  },
    methods: {
    reset(){
      console.log('x', this.x)
      console.log('y', this.y)
      console.log('canvas', this.canvas)
    //   this.x = 0
    //   this.y = 0
    //   this.canvas = null
    //     var c = document.getElementById("myCanvas");
    // this.canvas = c.getContext('2d');
    },
    drawLine(x1, y1, x2, y2) {
      let ctx = this.canvas;
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
    },
    beginDrawing(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.isDrawing = true;
    },
    keepDrawing(e) {
      if (this.isDrawing === true) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = e.offsetX;
        this.y = e.offsetY;
      }
    },
    stopDrawing(e) {
      if (this.isDrawing === true) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
      }
    }
  },
    mounted() {
    var c = document.getElementById("myCanvas");
    this.canvas = c.getContext('2d');
  }
}
</script>

<style scoped>
.draw-area{
  border: 2px solid grey;
  border-radius: 10px;
}
</style>
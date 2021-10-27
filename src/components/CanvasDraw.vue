<template>
  <div class="">
    Draw Your note here
    <div ></div>
    <Editor class="editor"  canvasWidth="500" canvasHeight="200" ref="editor" editorId="1"/>
   <md-button @click="$refs.editor.clear()"  class="md-dense md-raised md-primary">Clear</md-button>
  </div>

</template>

<script>
import Editor from 'vue-image-markup';

export default {
  name: 'CanvasDraw',
  components: {
    Editor
  },
  methods: {
    save() {
      const img = this.$refs.editor.saveImage()
      this.$refs.editor.clear()
      return img
    },
  }, mounted() {
    // let customizeFreeDrawing = {stroke: '#4489FF', strokeWidth: "2"}
    this.$refs.editor.set('freeDrawing')
  }

}
</script>

<style scoped>
.editor{
  border: 4px solid #4489FF;
  border-radius: 10px;
}
</style>

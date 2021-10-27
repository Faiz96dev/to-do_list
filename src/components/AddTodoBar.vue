<template>
  <div class="wrapper">
    <div class="container">
      <md-field>
        <label>Todo description</label>
        <md-textarea v-model="description" md-autogrow></md-textarea>
      </md-field>
      <md-button @click="add" add class="md-dense md-raised md-primary">Add</md-button>
    </div>
    <CanvasDraw ref="draw"/>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import CanvasDraw from "@/components/CanvasDraw";
import uniqid from 'uniqid';


export default {
  name: 'AddTodoBar',
  components: {CanvasDraw},
  data() {
    return {
      description: ''
    }
  },
  computed: {
    ...mapState('todos', ['todos', 'canvas']),
  },
  methods: {
    ...mapActions('todos', ['addTodo']),
    add() {
      let img = this.$refs.draw.save()
      this.addTodo({description: this.description, completed: false, id: uniqid(), img: img})
      this.description = ''
    }
  }
}
</script>

<style scoped>
.container {
  width: 50%;
  display: flex;
  align-items: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

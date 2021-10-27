<template>
  <div class="wrapper">
    <div class="container">
      <md-field>
      <label>Todo description</label>
      <md-textarea v-model="description" md-autogrow></md-textarea>
    </md-field>
      <md-button @click="add" add class="md-dense md-raised md-primary">Add</md-button>
    </div>
    <canvas-draw/>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import uniqid from 'uniqid';
import CanvasDraw from "@/components/CanvasDraw";


export default {
  name: 'AddTodoBar',
  components: {CanvasDraw},
  data() {
    return {
      description: ''
    }
  },
  computed: {
    ...mapState('todos', ['todos']),
  },
  methods: {
    ...mapActions('todos', ['addTodo']),
    add() {
      this.addTodo({description: this.description, completed: false, id: uniqid() })
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

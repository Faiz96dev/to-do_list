<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <span class="md-title">Geniusee To-Do list</span>
      </md-app-toolbar>
      <md-app-content>
        <add-todo-bar/>
        <todo-list/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import AddTodoBar from './components/AddTodoBar.vue'
import TodoList from './components/TodoList.vue'
import {mapActions} from "vuex";

export default {
  name: 'App',
  components: {
    TodoList,
    AddTodoBar
  },
  methods:{
     ...mapActions('todos', ['loadData']),
  },
  mounted() {
    this.loadData()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

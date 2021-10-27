<template>
      <md-table v-if="todos.length">
        <md-table-row>
          <md-table-head>Description</md-table-head>
          <md-table-head>Status</md-table-head>
          <md-table-head>Actions</md-table-head>
        </md-table-row>

        <md-table-row v-for="todo in todos" :key="todo.id">
          <md-table-cell >{{ todo.description }}</md-table-cell>
          <md-table-cell v-if="!todo.completed">Completed</md-table-cell>
          <md-table-cell v-else>In process</md-table-cell>
          <md-table-cell>
            <md-button @click="toggleActive(todo.id)" v-if="!todo.completed" class="md-dense md-raised md-primary">Activate</md-button>
            <md-button @click="toggleActive(todo.id)" v-else class="md-dense md-raised md-primary">Deactivate</md-button>
            <md-button @click="removeTodo(todo.id)" class="md-dense md-raised md-accent">Remove</md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>
</template>

<script>

import {mapActions, mapState} from "vuex";

export default {
  name: 'AddTodoList',
  props: {
    msg: String
  },
  computed: {
    ...mapState('todos', ['todos']),
  },
  methods:{
      ...mapActions('todos', ['removeTodo', 'toggleActive']),

  }
}
</script>

<style scoped>

.md-table .md-table-cell.md-has-action .md-table-cell-container {
  justify-content: space-around;
}

.md-table .md-table-head {
  text-align: center;
}

.md-table .md-table-cell {
  text-align: center;
}

</style>

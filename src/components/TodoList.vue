<template>
  <md-table v-if="todos.length">
    <md-table-row>
      <md-table-head>Description</md-table-head>
      <md-table-head>Note</md-table-head>
      <md-table-head>Status</md-table-head>
      <md-table-head>Actions</md-table-head>
    </md-table-row>
    <list-item v-for="todo in todos" :todo="todo" :key="todo.id"/>
  </md-table>
</template>

<script>

import {mapActions, mapState} from "vuex";
import ListItem from "@/components/ListItem";

export default {
  name: 'AddTodoList',
  components: {ListItem},
  computed: {
    ...mapState('todos', ['todos']),
  },
  methods: {
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

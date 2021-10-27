import {getFromLocalStorage, setToLocalStorage} from "@/helpers/LocalStorageHelper";

export default {
    namespaced: true,
    state: {
        todos: [],
    },
    mutations: {
        SET_TODOS(state, todos) {
            state.todos = todos
            setToLocalStorage(state.todos)

        },
    },
    actions: {
        addTodo({commit, state}, todo) {
            commit('SET_TODOS', [todo, ...state.todos]);
        },

        toggleActive({commit, state}, id) {
            let copy = [...state.todos]
            const todoIndex = state.todos.findIndex(todo => todo.id === id)
            copy[todoIndex].completed = !copy[todoIndex].completed
            state.todos = copy
            commit('SET_TODOS', copy);
        },

        removeTodo({commit, state}, id) {
            commit('SET_TODOS', state.todos.filter(todo => todo.id !== id));
        },

        loadData({commit}) {
            let todos = getFromLocalStorage()
            if (!todos) todos = []
            commit('SET_TODOS', todos)
        },

    },
    getters: {
        getTodos: state => {
            return state.todos
        },

    },
};
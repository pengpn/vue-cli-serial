<template>
    <div id="todos">
    <ul class="list-group" >
        <li class="list-group-item"
            v-bind:class="{ 'completed' : todo.completed}"
            v-for="(todo,index) in todos">

            <router-link :to="{ name : 'todo',params : { id : todo.id }}">{{ todo.title }}</router-link>

            <button class="btn btn-warning btn-xs pull-right"
                    v-on:click="deleteTodo(todo,index)"
            >Delete</button>

            <button class="btn btn-xs pull-right margin-right-10"
                    v-bind:class="[todo.completed ? 'btn-danger' : 'btn-success']"
                    v-on:click="toggleCompleteTodo(todo)"
            >{{todo.completed? 'Undo' : 'completed'}}</button>

        </li>
    </ul>
    <todo-form ></todo-form>
    </div>
</template>
<style>
    .completed{
        color: #5cb85c;
        text-decoration: line-through;
    }
    .margin-right-10 {
        margin-right: 10px;
    }
</style>

<script>
    import TodoForm from './TodoForm'
    export default {
        name: 'todos',
        computed: {
          todos () {
              return this.$store.state.todos
          }
        },
        methods: {
            deleteTodo(todo,index){
                this.$store.dispatch('removeTodo', todo, index)
            },
            toggleCompleteTodo(todo){
                this.$store.dispatch('completeTodo', todo)

            }
        },
        components: {
            TodoForm
        }
    }
</script>
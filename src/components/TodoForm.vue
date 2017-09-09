<template>
    <form v-on:submit.prevent="addTodo(newTodo)">
        <div class="form-group">
            <input type="text"
                   v-model="newTodo.title"
                   class="form-control"
                   placeholder="Add a new todo">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-success">Add Todo</button>
        </div>
    </form>
</template>

<script>
    export default {
        props: ['todos'],
        data(){
            return {
                newTodo: {id:null,title:'',completed:false}
            }
        },
        methods: {
            addTodo(newTodo){
                this.axios.post('http://laravel.dev/api/todo/create',{title:this.newTodo.title}).then(response => {
                    console.log(response.data)
                    this.todos.push(response.data)
                })

                this.newTodo = {id:null,title:'',completed:false}
            },

        }
    }
</script>
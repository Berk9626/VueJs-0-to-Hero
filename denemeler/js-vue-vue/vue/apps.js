const app = Vue.createApp({
    
    data() {
        return {
            todoText: null,
            todoList: [],
        };
    },

    methods: {
        addTodo() {
            
            this.todolist.push(this.todoText);
            
        },
    },
}).mount("#app");
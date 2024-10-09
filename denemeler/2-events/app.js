const app = Vue.createApp({

    data(){
        return{
            fullName: "küpeli",
            

        }
    },

    methods: {
        updateValue(event){
            
            this.fullName = event.target.value;

        },
    },
   
}).mount('#app');
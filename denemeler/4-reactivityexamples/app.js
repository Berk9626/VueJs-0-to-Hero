const app = Vue.createApp({
    data(){
        return{
            search: "",
            itemlist: ["elma", "armut", "kiraz", "çilek"],
            //filteredList: [],

           

        };
    },

    methods: {
        searchList(){
            // const filteredList = this.itemlist.filter(x=>x.includes(this.search));
            //this.filteredList = this.itemlist.filter(x=>x.includes(this.search));
            
        }
    },
    computed: {
        filteredList(){
            return this.itemlist.filter(x=>x.includes(this.search));
            

        },
        

    }

 




}).mount("#app");
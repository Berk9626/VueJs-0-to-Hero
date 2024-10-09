const app = Vue.createApp({
    data(){
        return{
            title: "Test VueJs 1. gün",
            content: "Lorem ipsum dolor si amet...",
            
            eduflow: {
                title: "Müfredat ve açıklamalar için tıklayınız",
                target: "_blank",
                url: "https://eduflow.kablosuzkedi.com",
                alt: "mufredat-kablosuzkedi-vuejs3-bootcamp",   

            },

            owner: "Pogaca",
            cords: {
                x:0,
                y:0
            }

            
        };
    },

    methods: {
        changeTitle(pTitle){
           
            this.title = pTitle;
        },
        updateCords(message, event ){
            //console.log(event.x, event.y);
            this.changeTitle(`${event.x}, ${event.y}`);
            this.cords.x = event.x;
            this.cords.y = event.y;
            //console.log(message, event)

        }
    }





}).mount("#app");
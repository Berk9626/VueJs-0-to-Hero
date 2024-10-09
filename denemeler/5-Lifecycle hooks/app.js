const app = Vue.createApp({

        data(){
            return {

              title:"Test basligi",
              itemlist:[],
              
            }
           
        },
        //eğer başlangıç anında bir elemente erişm. istiyorsak,
        //mounteddan sonra yapmamız gerek.çünkü dom oluşmamış oluyor

        beforeCreate(){
          console.log(" beforeCreate calisti");
        },
        created(){
          console.log(" created calisti");

          setTimeout(() => {
            this.itemlist = [1,2,3,4,5,6,7,8]
            
          }, 2000);

          setTimeout(() => {
            this.title="Bu yeni başlık"
            
          },3000);
        },
        beforeMount(){
          console.log(" beforeMount calisti");
        },
        mounted(){
          console.log("mounted calisti");
        },
        beforeUpdate(){
          console.log("beforeUpdate calisti");
        },
        updated(){
          console.log("updated calisti");
        },
        beforeUnmount(){
          console.log("beforeUnmount calisti");
        },
        unmounted(){
          console.log("unmounted calisti");
        },



});
app.mount("#app");

setTimeout(() => {
  app.unmount();
  
}, 5000);
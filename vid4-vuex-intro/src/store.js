import { createStore } from "vuex";

const store = createStore({
    state: { //uygulama boyunca benim erişebileceğim arkadaşlarım

        user: {
            name: "Berk",
            surname: "Berkmen",
            age: 26,    
            address:{},
            password: 121212121,
            tc: 5555555
        },
        theme: "dark",
        permissions: [1,2,3,4,5,6],
        fullName: "Berk Berkmen",
        userList: [
            "Gokhan",
            "Berk",
            "Zeki",
            "Sema",
            "Anil"
        ],
        itemlist: [

              {id:1, title:"Masa", type:"mobilya"},
              {id:1, title:"Bilgisayar", type:"elektronik"},
              {id:2, title:"Sofa", type:"mobilya"},
              {id:3, title:"Sandalye", type:"mobilya"},
              {id:4, title:"Tahta", type:"mobilya"},

        ]

    },
    //nasıl set ediyoruz 2 şekilde(mutations ve actionsla)
    //birisi state'in değerini andlık olarak hızlı bir şekilde update etmemizi sağlayan mutations
    mutations: { // diyelimki itemliste yeni bir arkadaş mı ekleyeceğim ? statei güncellemek mi ? bu arkadaş paramtreye o yüzden state alıyor
        //ikinci parametre ise bir istekle beraber giden yük, mesaj, data ne dersen de
        newItem(state, item){
            state.itemlist.push(item);
        }

    },
    //ek bilgiler: mutation servise atılan bilgiyi beklemez. Set etmek ister boş bir veriyle. Küçük bir gecikme olursa datanı set etmem diyor.(sync)
    //async işlemleri için farklı bir parametre kullanılıyor. Bunun adı actions
    actions: {
        //mutationla hiçbir farkı yok fakat daha güçlüler...
        newItem({commit},item) {
            //context vuexle ilgili, ilgili aksiyonları alabilmek için bilgiyi içeren gerekli donanıma sahip değişken(mesela state'e erişebilmem
            //lazım veya gettera mesela, işte bu vuexin bir clonu olsa da instance olsa da bunu kullansam işte bu o selamun aleyküm. Bir obje olarak geliyo)
            console.log("item ==>", item)

             setTimeout(() => {

                //context.state, veriye mi erişmek istiyorum ?
                //context.dispatch, actiona mı erişmek ?, bu ikisi kullanılabilir. Alttaki commitle beraber 3
                //context.commit("newItem", item)
                commit("newItem", item);


                
             }, 2000);


        }


    },




    getters: {   //bunun işi get etmek getirmek. Değişken gibi kullanılan geriye değer döndüren yapılar.
        //benim bu storedan değişken gibi davranacak yapılarım şunlardır diyorum. Getter tek işi statetteki bilgileri bize geri döndürmektir.
        _woodItems: state => state.itemlist.filter(x=>x.type == "mobilya"),
        //state'i silmeden passwordu silmek istiyorum mesela                                                                                                                            
        _activeUser(state){
            // const user = state.user
            const user = {
                 ...state.user
            };
            delete user.password
            return user;

        }

    }
});
export default store;
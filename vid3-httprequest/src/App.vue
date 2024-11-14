<template>
<div class="container">
  <h3>Alışveriş Listesi</h3>
  <hr>
  <div class="my-2">
    <input type="text" placeholder="ne alacaksiniz ?" @keydown.enter="onSave">
  </div>

  <ul v-if="itemsList.length > 0">  
    <li v-for="item in itemsList" :key="item.id" class="d-flex justify-content-between align-items-center" >
      <span>{{item.title}}</span>
      <button @click="onDelete(item)" class="sm red">Sil</button>
    </li>
   
   
    
  </ul>

  <div v-else class="bg-blue  text-white">
    Herhangi bir ürün yoktur...

  </div>

  <small class="mt-2 text-red d-flex justify-content-end align-items-center">{{itemCount}} adet alınacak ürün vardır</small>
</div>

</template>

<script>
import axios from "axios";
export default {
  data(){
    return {
      itemsList: []

    };
  },
  mounted(){
  //vue uygulamamız render edildikten sonra doma yapıştırıldığı anda biz başka bir elemente native olarak erişebilmek istiyorsak, kaydınız da
  //buna göre çekilecekse mounted daha doğru. Yoksa createdda olabilir.
    axios.get("http://localhost:3000/items").then(items_response =>{
      console.log('items response ==>', items_response);
      this.itemsList = items_response.data || [];
      console.log("itemsList ==", this.itemsList)
    });

  },
  computed: {
    itemCount(){
      return this.itemsList.length || 0;
    }

  },

  methods: {
    onSave(e){
      const saveobject = {title: e.target.value, created_at: new Date(), completed: false };
      axios.post("http://localhost:3000/items", saveobject).then(save_response =>{
        console.log(save_response);
        this.itemsList.push(save_response.data);
        e.target.value= '',
        e.target.focus();
      });
      

    },
    onDelete(item){
      axios.delete(`http://localhost:3000/items/${item.id}`).then(delete_response => {
        console.log("delete response ==", delete_response);
        this.itemsList = this.itemsList.filter(x=>x.id !== item.id);
      });

    }
  },
}
</script>




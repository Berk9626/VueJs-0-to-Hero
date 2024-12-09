<template>
    
        <button @click="updateName">Yeni Item ekle... </button>
</template>


<script>


    export default {

        methods: {

      updateName() {
        const userData = { id: new Date().getTime(), title:"Raf" + new Date().getTime(), type:"mobilya"}
        //this.$store.commit("newItem", userData ) 
        //commit mutationu çağırır, tetikler...newItem adında mutationum var onu çağır ve içine gönderilecek bilgi de

        this.$store.dispatch("newItem",userData);//actionlar dispatch edilirler.



      //this.$store.state.itemlist.push(userData)
      //this.$store.state.fullName = new Date().getTime(); 
    }

}
       

};
    
  
</script>

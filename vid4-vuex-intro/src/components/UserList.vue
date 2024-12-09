<template>
    
     <ul>
      <li v-for="(item, index) in agacElemanlari" :key="index"> 
        {{item.title}}
      </li>
    </ul>

</template>


<script>
import { mapGetters } from "vuex";
export default {

     computed: {
    //...mapGetters(["_woodItems", "_activeUser"]),
    // customComputed(){

    // }
    //bu üsttekiler bir şekilde yapılan hali alttakiyse diğer bir şekli
    ...mapGetters({
      agacElemanlari: "_woodItems",
      activeUser: "_activeUser"
    })

  }

   
};
</script>

<template>
 <p>
  {{ $store.state.mainName }}

 </p>

 <p>
    {{ $store.state.musteri.contactName }}
 </p>

 <pre>

  {{musteriAdi}}
  
 </pre>



</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'App',

  created(){
    console.log(this.$store.getters["musteri/_contactName"])

  },

  computed: {
    ...mapGetters({
      musteriAdi: "musteri/_contactName"
    })
  }

};
</script>



<template>
<div class="container">

  <div class="d-flex justify-content-between align-items-center">
    <button class="red" @click="activeComponent='Red'" >Red</button>
  <button class="green" @click="activeComponent='Green'" >Green</button>
  <button class="blue" @click="activeComponent='Blue'" >Blue</button>
  </div>
  
<!-- <RedComp msg="Red Component" v-if="activeComponent == 'Red'" class="mb-2"/>
<GreenComp v-if="activeComponent == 'Green'" class="mb-2"/>
<BlueComp v-if="activeComponent == 'Blue'" class="mb-2"/>  -->


{{activeComponent}}
<keep-alive>

   
<component msg="Red Component 2" :is="activeComponent">
<h3 class="bg-green text-white">Green Component</h3>
</component>

</keep-alive>

</div>


 
</template>

<script>

import Red from "@/components/RedComp.vue";
import Green from "@/components/GreenComp.vue";
import Blue from "@/components/BlueComp.vue";
export default {

  components: {
    Red,
    Green,
    Blue
  },
  data(){
    return {
      activeComponent: "Red"
    }
  }


}

</script>



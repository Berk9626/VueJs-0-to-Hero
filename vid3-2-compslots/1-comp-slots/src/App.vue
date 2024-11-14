<template>

<!-- <ModalComp :on-save="onSave" :title="'Modal Title'" :content="content"/> -->
<!-- <ModalComp/> -->

<ModalComp>
<template #title>
   <h3>Slot ile gelen title bilgisi</h3>
   </template>

<!-- <template #content>
<p class="text-green">Lorem ipsum come from slot daaamn shit</p>

</template> -->

<template v-slot:content>
<p class="text-green">Lorem ipsum come from slot daaamn shit</p>

</template>

<template #default>
Bu default olarak gösterilecek

</template>




   </ModalComp>

  
</template>


<script>
import ModalComp from "@/components/ModalComp.vue"

export default {

  components: {
    ModalComp
  },
  methods: {
    onSave(){
      alert("Saved!!");
    }
  },
  
  data(){
    return {
      content: `<h3 class="text-red">title</h3>`
    }
  }

}

</script>

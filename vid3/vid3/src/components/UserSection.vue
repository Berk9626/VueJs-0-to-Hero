<template>

   <!-- <ListSection :userList="userList"/> -->
   <ListSection/>
   <!-- <AddSection @new-item="$emit('new-item', $event)"/> -->
    <AddSection />

</template>


<script>
import ListSection from "@/components/ListSection.vue"
import AddSection from "@/components/AddSection.vue"


export default {
components: {
    ListSection,
    AddSection

},


    //props:["userList"],
    emits: ["new-item"]

    // data(){
    //     return {

    //     }
    // }

}

</script>

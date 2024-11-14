<template>
  <div class="container">

    <!-- <UserSection :userList="userList" @new-item="userList.push($event)"/> -->
    <!-- <UserSection  @new-item="userList.push($event)"/> -->
    <UserSection />
    
    
  </div>
</template>

<script>
import UserSection from "@/components/UserSection.vue"

export default {
  components: {
    UserSection

  },

data(){

  return {
   provideData: {
     userList: ["Berk","Sema","Meryem","Zeki","Şule","Juju","Cole","Ashley"]
   }

  };
},

provide(){
  return {

    userList: this.provideData.userList,
    newItem: this.newItem

  }
},
methods: {
  newItem(item){
    this.provideData.userList.push(item);
  }
}



}

</script>


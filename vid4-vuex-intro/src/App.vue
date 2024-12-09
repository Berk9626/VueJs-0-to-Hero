<template>

<!-- //<div class="container"> -->
  <p>
    <!-- {{$store.state.user}} , {{$store.state.permissions}} -->

    <!-- <ul>
      <li v-for="permission in $store.state.permissions" :key="permission">
        {{permission}}
      </li>
    </ul> -->

     <!-- <ul>
      <li v-for="user in $store.state.userList" :key="user">
        {{user}}
      </li>
    </ul> -->

     

    <!-- {{$store.state.fullName}} -->
    <!-- <button @click="updateName" >Fullname bilgisini degistir... </button> -->





  </p>
  <UserList/>
  <NewUser/>

<!-- </div> -->

</template>

<script>
import UserList from '@/components/UserList.vue'
//import {mapGetters} from "vuex";
import NewUser from "@/components/NewUser.vue"


export default {
  name: 'App',
  
  components: {
    UserList,
    NewUser

  }
 
  //created(){
    // console.log(this.$store.state.userList);
    // //console.log(this.$store.state.theme);
    // console.log('hey ==',this.$store.getters._woodItems)
    // //console.log(this.$store.getters.activeUser)
    // console.log('this.activeUser >>>', this.activeUser);
    
  //},

  //computed: mapGetters(["woodItems", "activeUser"]),//ben burda kendime ait computed oluşturmak istersem, o zaman iş karışıyor. Bunun yerine üç noktalı operatör
  //kullanarak dışardan gelen objedenin içindeki tüm arkadaşları alıp buranın computedının içine yerleştiririm. O zaman sorun halledilir diyebiliriz.
  //yani tam anlamıyla aşağıdaki gibi. Şahane :)
 

 

 
}
</script>

<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>












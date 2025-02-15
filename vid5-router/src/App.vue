<template>

<div class="container">
  <div class="mb-2">

    <router-link class="nav-link" active-class="active" to="/">
 Anasayfa
</router-link>

<router-link class="nav-link" active-class="active" to="/hakkimda">
 Hakkımda
</router-link>

<router-link class="nav-link" active-class="active" to="/details/1226">
 Detaylar
</router-link>

  </div>



  <router-view></router-view>

</div>


</template>

<style>
.nav-link {

  padding: 5px 10px;
  text-decoration: none;
  border: 1px solid #fa6558;
  color: #fa6558;
  margin-right: 5px;
  margin-top: 5px; 
  display: inline-block;

}
.active {

  background-color: #fa6558; 
  color: #fff;
}


</style>





<script>

</script>

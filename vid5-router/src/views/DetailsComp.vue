<template>
    <h1> {{ $route.params.userId }}</h1>
   <p>Aciklamalar burda olacaktır.</p>

   <!-- <p> {{ $route.params.userId}} </p> -->
   <p> {{ $route.query.klan }} </p>
   <button @click="goBack">Geri Dön</button>
   




  
</template>

<script>
export default {

created(){
    console.log(this.$route);
},
methods: {
    goBack(){
        
        //routerda bir navigationa ihtiyaç var. Bunu;
        this.$router.push("/") //butona basınca hop home'a git. Bu birinci yöntem. İkinci yöntem Home componente

        //bir diğer yöntemse
    }
}

}

</script>

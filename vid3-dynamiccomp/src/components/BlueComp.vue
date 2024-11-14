<template>
    <h3 class="bg-blue text-white">Blue Component</h3>
    <input type="text">
</template>

<script>
export default{
     mounted(){
        console.log("BLUE MOUNTED") 
    },
    activated(){
         console.log("BLUE actıvated") 

    },
    deactivated(){
         console.log("BLUE deactiv") 

    }
}

</script>
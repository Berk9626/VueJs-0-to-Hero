<template>
    <div class="container">

        <div class="header">
            <!-- <h1>{{title}}</h1> -->
            
                 <slot name="title"/>
        </div>



        <hr>

        <div class="content my-2">
            <slot name="content" />
            

        </div>


        <slot   />




        <hr>



        <div class="footer text-right">
            <button>Kapat</button>
            <button @click="onSave" class="green">Kaydet</button>

        </div>



    </div>
</template>

<script>

export default {
    props: ["onSave", "title","content"]
}
</script>

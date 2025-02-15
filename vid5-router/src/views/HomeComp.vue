<template>
    <h1>Home</h1>
    <p>Lorem ipsum acsa trewqrtert rtrt r rtergtregfgfdg fdgfdghdfhdjfkhdfhdkjfhds dsgfhahfudşfhuıdfhsaduıfsdyfdh udufhduısafuıdsahfudsıhfusdhfusdhfuıdh
        defreddsfndsngfhdsjuhguıpehg ruhgteuırgh uhg uıerhgtuırehgurıe hguregyhrw98yfgtru huyurhguregyhreugh h uyhuftrwuhtfgrwh uh uwhurthruhpurhtru
    </p>

    <input type="text" @keydown.enter="goToDetails">
</template>

<script>
export default{

    methods: {

        goToDetails(e){
           
           //this.$router.push(`/details/${e.target.value}`)

           //diğer bir yöntemse obje yollamayla
           this.$router.push({
            name: "DetailsPage",
            params: {
                userId: e.target.value
            },
            query: {

                type: "DetailAuth",
                user: "semaberkmen"

            }

           });

        }


    }
}

</script>

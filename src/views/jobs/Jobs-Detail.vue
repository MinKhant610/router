<template>
    <!-- in template {{ $route.params.id }} or use props -->
    <h1>Detail {{ id }}</h1>
</template>

<script>
    export default {
        props : ['id'],
        // or  
        // data(){
        //     return{
        //         id : this.$route.params.id
        //     }
        // }
    }
</script>

<style scoped>

</style>
<template>
    <!-- in template {{ $route.params.id }} or use props -->
    <div v-if="job">
        <h1> Job title - {{ job.title }}</h1>
        <p> Job detail -  {{ job.detail }}</p>
    </div>

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
        data(){
            return {
                job : null, // job object
            }
        },
        mounted(){
            fetch('http://localhost:3000/jobs/' + this.id)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                this.job = data;
            })
            .catch((err)=>{
                console.log(err.message);
            })
        }
    }
</script>

<style scoped>

</style>
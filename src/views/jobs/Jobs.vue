<template>
    <h1 >This is Jobs page</h1>
    <div class="job" v-for="job in jobs" :key="job.id">
        <router-link :to="{name : 'jobsDetail', params:{id:job.id}}">
            <h2>{{ job.title }}</h2>
        </router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                jobs : [],
            }
        },
        mounted(){
            fetch('http://localhost:3000/jobs')
            .then((response)=>{
                return response.json();
            })
            .then((datas)=>{
                this.jobs = datas;
            })
            .catch((err)=>{
                console.log(err.message());
            })
        }
    }
</script>

<style scoped>
.job{
    color: red;
}
a{
    text-decoration: none;
}
</style>
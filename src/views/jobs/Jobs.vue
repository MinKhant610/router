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
                jobs : [
                    {
                        id : "1",
                        title : "project manager",
                        detail : "code with chill project manager"
                    },
                    {
                        id : "2",
                        title : "Software Engineer",
                        detail : "code with chill Software Engineer"
                    },
                    {
                        id : "3",
                        title : "UI UX designer",
                        detail : "code with chill UI UX designer"
                    },
                    
                ]
            }
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
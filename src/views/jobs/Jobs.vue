<template>
    <h1 >This is Jobs page</h1>
    <div class="job" v-for="job in jobs" :key="job.id">
        <h2>
            {{job.title}}
        </h2>
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
    color: rgb(16, 190, 229);
}
</style>
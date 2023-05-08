<template>
  <nav>
    <router-link :to="{name : 'home'}">Home</router-link> |
    <router-link :to="{name : 'about'}">About</router-link> |
    <router-link :to="{name : 'jobs'}">Jobs</router-link>
  </nav>
  <router-view/>
  <button @click="goBack">go back</button>
  <button @click="reDirect">redirect</button>
  <button @click="forWard">forward</button> 
</template>

<script>

export default{
  methods :{
    goBack(){
      this.$router.back();
    },
    forWard(){
      this.$router.forward(1);
    },
    reDirect(){
      this.$router.push({name:'home'});
    }
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

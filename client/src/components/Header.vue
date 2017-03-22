<template>
  <div class="row">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo"><img style="width: 150px;" src="../assets/img/stuck.png" alt=""></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><a href="#" v-on:click="logout">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    logout:function () {
      localStorage.removeItem("userid")
      localStorage.removeItem("username")
      localStorage.removeItem("token")
      window.location.href = "http://localhost:8080/#/login"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
position: relative;
}
h1, h2 {
font-weight: normal;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #fff;
}
</style>

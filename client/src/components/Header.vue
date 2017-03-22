<template>
  <div class="row">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo"><img style="width: 150px;" src="../assets/img/stuck.png" alt=""></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html">Home</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
color: #42b983;
}
</style>

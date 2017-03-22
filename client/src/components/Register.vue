<template>
  <div class="main">
    <main>
      <center>
        <img class="responsive-img" style="width: 250px;" src="/img/stuck.png" />
        <div class="section"></div>

        <h5 class="indigo-text">Register Yourself</h5>
        <div class="section"></div>

        <div class="container">
          <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">

            <form class="col s12">
              <div class='row'>
                <div class='col s12'>
                </div>
              </div>

              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='text' name='username' id='username' />
                  <label for='username'>Enter your username</label>
                </div>
              </div>

              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='email' name='email' id='email' />
                  <label for='email'>Enter your Email</label>
                </div>
              </div>

              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='password' name='password' id='password' />
                  <label for='password'>Enter your password</label>
                </div>
              </div>

              <br />
              <center>
                <div class='row'>
                  <button type='button' onclick="signUp()" name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Register</button>
                </div>
              </center>
            </form>
          </div>
        </div>
        <a href="/index.html">Back to Login</a>
      </center>
      <div class="section"></div>
      <div class="section"></div>
    </main>
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

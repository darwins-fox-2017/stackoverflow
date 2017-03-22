<template>
  <div class="login">
    <div class="section"></div>
    <main>
      <center>
        <img class="responsive-img" style="width: 250px;" src="../assets/img/stuck.png" />
        <div class="section"></div>

        <h5 class="indigo-text">Welcome to Stuck over Slow</h5>
        <div class="section"></div>

        <div class="container">
          <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">

            <form class="col s12" method="post">
              <div class='row'>
                <div class='col s12'>
                </div>
              </div>

              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='text' name='username' id='username' v-model="username" />
                  <label for='username'>Enter your username</label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='password' name='password' id='password' v-model="password"/>
                  <label for='password'>Enter your password</label>
                </div>
              </div>

              <br />
              <center>
                <div class='row'>
                  <button type='button' v-on:click="signIn()" name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>
                </div>
              </center>
            </form>
          </div>
        </div>
        <a href="/signup.html">Create account</a>
      </center>

      <div class="section"></div>
      <div class="section"></div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    signIn(){
      axios.post('http://localhost:3000/signin',{
        username:this.username,
        password:this.password
      }).then(res=>{
        if(res.data == "Check Your Credentials"){
          alert("Check Your Credentials")
        }else{
          window.location.href = "/home"
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

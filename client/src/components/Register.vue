<template>
  <div class="main">
    <main>
      <center>
        <img class="responsive-img" style="width: 250px;" src="../assets/img/stuck.png" />
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
                  <input class='validate' type='text' name='username' v-model="username" id='username' />
                  <label for='username'>Enter your username</label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='text' name='fullname' v-model="fullname" id='fullname' />
                  <label for='fullname'>Enter your fullname</label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='email' name='email' v-model="email" id='email' />
                  <label for='email'>Enter your Email</label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='password' name='password' v-model="password" id='password' />
                  <label for='password'>Enter your password</label>
                </div>
              </div>

              <br />
              <center>
                <div class='row'>
                  <button type='button' v-on:click="signUp()" name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Register</button>
                </div>
              </center>
            </form>
          </div>
        </div>
        <router-link :to="{name:'Login'}"><button class="btn blue">Back to Login</button></router-link>
      </center>
      <div class="section"></div>
      <div class="section"></div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'register',
  data () {
    return {
      username: '',
      fullname:'',
      email:'',
      password:''
    }
  },
  methods:{
    signUp(){
      axios.post('http://localhost:3000/register',{
        username:this.username,
        password:this.password,
        fullname:this.fullname,
        email:this.email
      }).then(res=>{
        if(res.data){
          this.username = '',
          this.password = '',
          this.fullname = '',
          this.email = ''
          alert("you could login now")
        }else{
          alert("something wrong")
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

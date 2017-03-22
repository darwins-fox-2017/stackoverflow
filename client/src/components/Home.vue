<template>
  <div class="home">
    <Heading></Heading>
    <div class="row">
      <div class="container">
        <!-- input question -->
        <div class="row z-depth-4">
          <div class="col s12">
            <div class="container">
              <div class="row">
                <div class="input-field col s12">
                  <input id="title" type="text" class="validate" v-model="title">
                  <label for="title">Title</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="question" type="text" class="validate" v-model="question">
                  <label for="question">Question</label>
                </div>
              </div>
              <div class="row">
                <a class="waves-effect green btn right" @click="postQuestion">Create Question</a>
              </div>
            </div>
          </div>
        </div>
        <!-- input question -->
      </div>
    </div>
    <div class="row">
      <div v-for="data in questions" class="row z-depth-3">
        <div class="col s12" >
          <h4>{{data.title}}</h4>
          <p>{{data.content}}</p>
          <router-link :to="{name:'Question',params:{id: data.id}}"><button class="left waves-effect waves-light btn" type="button">View</button></router-link>
          <button class="left waves-effect waves-light btn red" type="button" v-on:click="deleteQuestion(data.id)">Delete</button>
          <p class="right blue-text chip">Posted by : {{data.User.username}}</p>
          <p class="right green-text chip">{{data.Answers.length}} Answer</p>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>

import Heading from './Header';
import Foot from './Footer';
import axios from 'axios';

export default {
  name: 'home',
  components: {
    Heading,
    Foot
  },
  data () {
    return {
      questions: [],
      question: '',
      title: ''
    }
  },
  mounted() {
    this.prevent(),
    this.getQuestions()

  },
  methods: {
    postQuestion(){
      let self = this
      axios.post('http://localhost:3000/api/question', {
        title: self.title,
        content: self.question,
        UserId: localStorage.getItem("userid")
      }).then(res => {
        self.getQuestions()
        self.clearField()
      }).catch(err => {
        console.log(err);
      })
    },
    getQuestions(){
      let self = this
      axios.get('http://localhost:3000/api/question')
        .then( (res) => {
          self.questions = res.data
        })
        .catch( (err) => {
          console.log(err);
        })
    },
    deleteQuestion(id){
      axios.delete('http://localhost:3000/api/question/'+id)
        .then( (res) => {
          this.getQuestions()
        })
        .catch( (err) => {
          console.log(err);
        })
    },
    clearField(){
      let self = this;
      self.title = '';
      self.question = '';
    },
    prevent(){
      var tokens = localStorage.getItem("token")
      axios.post('http://localhost:3000/verify',{
        token: tokens
      }).then(res => {
        if(res.data == "auth"){
        }
        else if(res.data == "nothing" || "expired"){
          window.location.href = "http://localhost:8080/#/login"
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

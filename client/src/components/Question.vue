<template>
  <div class="question">
    <Heading></Heading>
    <div class="row">
      <div class="row z-depth-4">
        <div class="col s12">
          <div class="container">
            <div class="row">
              <div class="input-field col s12">
                <h3>{{question.title}}</h3>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <h4>{{question.content}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <ul class="collection">
        <li v-for="data in answers" class="collection-item avatar">
          <img src="https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png" alt="" class="circle">
          <p class="left chip green-text">{{data.User.username}}</p>
          <span class="title">{{data.content}}</span>
          <a v-on:click="upVote(data.id)" class="right"><i class="material-icons">keyboard_arrow_up</i></a>
          <p class="right">vote</p>
          <a v-on:click="downVote(data.id)" class="right"><i class="material-icons">keyboard_arrow_down</i></a>
          <p class="right chip blue-text">{{data.Votes.length}} vote</p>
        </li>
      </ul>
    </div>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">mode_edit</i>
            <textarea id="icon_prefix2" class="materialize-textarea" v-model="answer"></textarea>
            <label for="icon_prefix2">Answer</label>
          </div>
          <a class="waves-effect waves-light btn" v-on:click="postAnswer">Answer</a>
        </div>
      </form>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>

import Heading from './Header';
import Foot from './Footer';
import axios from 'axios';

export default {
  props:['id'],
  name: 'question',
  components: {
    Heading,
    Foot
  },
  data () {
    return {
      answers: [],
      question: '',
      answer: '',
      questionId: ''
    }
  },
  mounted() {
    // this.prevent(),
    this.getQuestionAndAnswer()

  },
  methods: {
    postAnswer(){
      let self = this
      axios.post('http://localhost:3000/api/answer', {
        content: self.answer,
        QuestionId: self.questionId,
        UserId: localStorage.getItem("userid")
      }).then(res => {
        this.getQuestionAndAnswer()
        this.clearField()
      }).catch(err => {
        console.log(err);
      })
    },
    getQuestionAndAnswer(){
      let self = this
      axios.get('http://localhost:3000/api/question/'+this.id)
        .then( (res) => {
          self.question = res.data
          self.answers = res.data.Answers
          self.questionId = res.data.id
        })
        .catch( (err) => {
          console.log(err);
        })
    },
    deleteAnswer(id){
      axios.delete('http://localhost:3000/api/question/'+id)
        .then( (res) => {
          console.log("data deleted");
          getQuestionAndAnswer()
        })
        .catch( (err) => {
          console.log(err);
        })
    },
    clearField(){
      let self = this;
      self.answer = '';
    },
    upVote(id){
      axios.post('http://localhost:3000/api/upvote', {
        AnswerId: id,
        UserId: localStorage.getItem("userid")
      }).then(res => {
        this.getQuestionAndAnswer()
      }).catch(err => {
        console.log(err);
      })
    },
    downVote(id){
      axios.post('http://localhost:3000/api/downvote', {
        AnswerId: id,
        UserId: localStorage.getItem("userid")
      }).then(res => {
        this.getQuestionAndAnswer()
      }).catch(err => {
        console.log(err);
      })
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

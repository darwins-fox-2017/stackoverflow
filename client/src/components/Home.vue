<template>
<div class="">
    <router-view></router-view>
    <h2>Questions list</h2>
    <el-row>
        <el-col :span="20">
            <el-card class="box-card" v-for="item in questions">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px; font-size: 20px;">{{ item.title }}</span>
                    <el-button style="float: right;" type="primary">answer this question</el-button>
                </div>
                <div class="">
                  {{ item.content }}
                </div>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>

<script>
import axios from 'axios';
let host = 'http://localhost:3000/api';

export default {
    data() {
        return {
          questions: []
        }
    },
    created(){
      this.getData()
    },
    methods: {
      getData(){
        let self = this;
        axios.get(host + '/home')
            .then(response => {
                // JSON responses are automatically parsed.
                console.log('response:', response.data);
                self.questions = response.data
            })
            .catch(e => {
                console.log(e);
            })
      }
    }
}
</script>

<style>
.el-card{
  margin-bottom: 30px;
}
</style>

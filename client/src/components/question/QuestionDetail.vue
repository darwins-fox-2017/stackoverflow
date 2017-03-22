<template>
<div class="">
    <el-row>
        <el-col :span="20">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px; font-size: 20px;">{{ question.title }}</span>
                </div>
                <div class="">
                    {{ question.content }}
                </div>
                <br>
                <h3>Answers</h3>
                <div>
                    <el-card class="box-card" v-for="answer in question.Answers">
                        <h3>{{ answer.content }}</h3>
                        <br> - by {{answer.User.name}}
                    </el-card>

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
            question: ''
        }
    },
    created() {
        this.getItem()
    },
    methods: {
        getItem() {
            let self = this
            axios.get(host + '/questions/slug/' + self.$route.params.slug).then(question => {
                console.log('slug : ' + self.$route.params.slug, question);
                self.question = question.data.data
            })
        }
    }
}
</script>
<style>
map {
    width: 100%;
    height: 600px;
    display: block;
}
</style>

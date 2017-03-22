<template>
<div class="">
    <el-button type="primary" @click.native="backToList">back to list</el-button>
    <br/>
    <br/>
    <h2>Add new answer</h2>
    <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Content">
            <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item label="User ID">
            <el-input v-model="form.userId"></el-input>
        </el-form-item>
        <el-form-item label="Project ID">
            <el-input v-model="form.questionId"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Add answer</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import axios from 'axios';
import slug from 'slug'
let host = 'http://localhost:3000/api';
export default {
    data() {
        return {
            form: {
                content: '',
                userId: '',
                questionId: ''
            }
        }
    },
    methods: {
        backToList() {
            this.$router.push('/answers/')
        },
        onSubmit() {
            let self = this
            axios.post(host + '/answers/', self.form).then(x => {
                if (x.status) {
                    self.$router.push('/answers')
                } else {
                    console.log('something wrong');
                }
            })
            console.log('submit!');
        },
        slugIt() {
            this.form.slug = slug(this.form.title, {
                lower: true
            })
        },
    }
}
</script>

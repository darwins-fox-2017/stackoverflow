<template>
<div class="">
    <el-button type="primary" @click.native="backToList">back to list</el-button>
    <br/>
    <br/>
    <h2>Add new question</h2>
    <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Title">
            <el-input v-model="form.title" @blur="slugIt()"></el-input>
        </el-form-item>
        <el-form-item label="Slug">
            <el-input placeholder="slug" v-model="form.slug">
                <template slot="prepend">http://dikyarga.com/
</template>
              </el-input>
      </el-form-item>
      <el-form-item label="Content">
    <el-input type="textarea" v-model="form.content"></el-input>
  </el-form-item>
  <el-form-item label="User ID">
      <el-input v-model="form.user_id"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Add question</el-button>
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
                title: '',
                slug: '',
                content: '',
                user_id: ''
            }
        }
    },
    methods: {
        backToList() {
            this.$router.push('/questions/')
        },
        onSubmit() {
            let self = this
            axios.post(host + '/questions/', self.form).then(x => {
                if (x.status) {
                    self.$router.push('/questions')
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

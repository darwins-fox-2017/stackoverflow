<template>
<div class="">
    <el-button type="primary" @click.native="addItem">Add question</el-button>
    <br/>
    <br/>
    <el-table :data="questions" :default-sort="{prop: 'title', order: 'descending'}" style="width: 100%">
        <el-table-column prop="title" label="Title" sortable width="180">
        </el-table-column>
        <el-table-column prop="content" label="Content" width="180">
        </el-table-column>
        <el-table-column prop="slug" label="Slug">
        </el-table-column>
        <el-table-column prop="user_id" label="User ID">
        </el-table-column>
        <el-table-column label="Operations">
            <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
</template>
  </el-table-column>
</el-table>
  <router-view></router-view>
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
    created() {
        console.log('run');
        this.getItems()
    },

    methods: {
        getItems() {
            let self = this;
            axios.get(host + '/questions')
                .then(response => {
                    // JSON responses are automatically parsed.
                    console.log('response:', response.data);
                    self.questions = response.data
                })
                .catch(e => {
                    console.log(e);
                })
        },
        addItem() {
            this.$router.push('/questions/new')
        },
        handleDelete(index, row) {
            this.questions.slice(index, 1)
            let self = this
            axios.delete(host + '/questions/' + row.id).then(response => {
                console.log(response);
                if (response.status) {
                    self.getItems()
                } else {
                    self.$notify({
                        title: 'Error',
                        message: 'Something wrong while trying to delete this item',
                        duration: 6000
                    })
                }
            })
        },
        handleEdit(index, row) {
            this.$router.push('/questions/' + row.id + '/edit')
        },
        formatter(row, column) {
            return row.address;
        }
    }
}
</script>

<style>

</style>

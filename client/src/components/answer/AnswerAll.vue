<template>
<div class="">
    <el-button type="primary" @click.native="addItem">Add answer</el-button>
    <br/>
    <br/>
    <el-table :data="answers" :default-sort="{prop: 'title', order: 'descending'}" style="width: 100%">
        <el-table-column prop="content" label="Content" width="180">
        </el-table-column>
        <el-table-column prop="userId" label="User ID">
        </el-table-column>
        <el-table-column prop="questionId" label="Question ID">
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
export default {
    data() {
        return {
            answers: []
        }
    },
    created() {
        console.log('run');
        this.getItems()
    },

    methods: {
        getItems() {
            let self = this;
            this.axios.get('/answers')
                .then(response => {
                    // JSON responses are automatically parsed.
                    console.log('response:', response.data);
                    self.answers = response.data
                })
                .catch(e => {
                    console.log(e);
                })
        },
        addItem() {
            this.$router.push('/answers/new')
        },
        handleDelete(index, row) {
            this.answers.slice(index, 1)
            let self = this
            this.axios.delete('/answers/' + row.id).then(response => {
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
            this.$router.push('/answers/' + row.id + '/edit')
        },
        formatter(row, column) {
            return row.address;
        }
    }
}
</script>

<style>

</style>

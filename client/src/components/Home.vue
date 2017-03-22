<template>
<div class="">
    <router-view></router-view>
    <h2>Questions list</h2>
    <el-row>
        <el-col :span="24">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px;">Title</span>
                    <el-button style="float: right;" type="primary">answer this question</el-button>
                </div>
                <div class="">
                  Dess
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

        }
    },
    methods: {

    }
}
</script>

<style>

</style>

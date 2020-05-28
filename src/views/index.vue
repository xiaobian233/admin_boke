<template lang="">
    <div id="index">
        <!-- <h2>this is index</h2> -->
        
        <div class="dv">
            <el-row>
                <el-col :span="3">
                    <navigation></navigation>
                </el-col>
                <el-col :span="21">
                <div class="header">
                    <div class="user">
                        欢迎用户&nbsp;:&nbsp;<span class="marginspen">{{name}}</span> &nbsp; </span> &nbsp;
                        <span @click="remove">退出</span>
                    </div>
                </div >
                <div style="padding:0 16px;">
                        <router-view></router-view>
                </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>


<script>
import navigation from "../views/navigation";
import bus from "../main.js";

import { User } from "../assets/js/user.js";
export default {
  data() {
    return {
      name: ""
    };
  },
  created() {
    this.name = JSON.parse(localStorage.getItem("user")).name;
  },
  mounted() {},
  methods: {
    remove() {
      User.clear();
      this.$router.push("/login");
    }
  },
  components: { navigation }
};
</script>

<style lang="less">
@import url("../assets/css/index.less");
</style>
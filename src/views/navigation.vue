<template lang="">
  <div id="left_cebian">
    <div class="biaoti">
    </div>

    </el-radio-group>
    <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router :collapse="isCollapse"
      :unique-opened="true">
      <el-submenu :index="v.path" v-for="(v,i) in arr" :key="i">
        <template slot="title">
          <i :class="v.icon"></i>
          <span slot="title">{{v.name}}</span>
        </template>
        <el-menu-item :index="val.path" v-for="(val,index) in v.children" :key="index">{{val.name}}</el-menu-item>
      </el-submenu>
    </el-menu>

  </div>
</template>

<script>
import { admin_user } from "@/static/axios/index.js";
import { sizeFunction } from "../assets/js/index.js";
import { Url, User } from "../assets/js/user";
export default {
  data() {
    return {
      arr: [],
      pathName: "",
      isCollapse: false
    };
  },
  created() {
    //侧边路由
    admin_user("admin_user", { userId: "admin" }).then(res => {
      this.arr = res.data.data;
      let router=[];
      //导航本地存储
      User.atWill("path",res.data.data)
      Url.recursive(res.data.data,router)
      let perm=[];
      router.map(v=>perm.push(v.path))
      //路由跳转权限
      User.atWill("permissions",perm)
    });
  },
  mounted() {
    //动态适配屏幕
    sizeFunction(size => {
      this.isCollapse = size;
    });
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
      this.$emit("myfather", key);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less">
@import url("../assets/css/navigation.less");
</style>
<template lang="">
  <div id="left_cebian">
    <!-- <h2>this is left_cebian</h2> -->
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
  import { sizeFunction } from "../assets/js/index.js"
  export default {
    data() {
      return {
        arr: [],
        pathName: "",
        isCollapse: false,
        screenWidh: document.body.clientWidth,
      };
    },
    props: {
      "msg": String,
    },
    created() {
      //侧边路由
      admin_user("admin_user", { userId: "admin" }).then(res => this.arr = res.data.data)
    },
    mounted() {
      //动态适配屏幕
      sizeFunction((size) => { this.isCollapse = size })


    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
        this.$emit("myfather", key)
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  };
</script>

<style lang="less">
  #left_cebian {
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      // min-height: 400px;
      height: 100%;
    }

    .el-menu--collapse {
      height: 100%;
    }

    .el-menu-item {
      min-width: auto;
    }
  }
</style>
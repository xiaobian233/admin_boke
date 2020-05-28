<template lang="">
    <div id="index">
        <!-- <h2>this is index</h2> -->
        <el-row>
            <el-col :span="24">
                <div class="header">
                    <div class="user">
                        欢迎用户&nbsp;:&nbsp;<span style="color: #666">{{user.name}}</span> &nbsp; <span ref="span3"
                            class="span3" :style="imgs"></span> &nbsp;
                        <span @click="remove">退出</span>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="dv">
            <el-row>
                <el-col :span="4">
                    <leftCebian msg="fatherDemo" @myfather="show"></leftCebian>
                </el-col>
                <el-col :span="20">
                    <router-view></router-view>
                </el-col>
            </el-row>
        </div>
    </div>
</template>


<script>
    import leftCebian from "../views/leftCebian"
    import bus from "../main.js";

    import { User } from "../assets/js/user.js"
    export default {
        data() {
            return {
                user: {
                    name: "",
                    img: "",
                    fatherDemo: "demo",
                },
                imgs: {
                    backgroundImage: '',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }
            }
        },
        // created(){},
        mounted() {
            // let { name, img } = JSON.parse(sessionStorage.getItem("user"))
            // this.user.name = name.split(":")[1];
            // img=img.split(".")[0]+'.'+img.split(".")[2]
            // this.imgs.backgroundImage ="url("+ require("../assets"+img)+")"; 

        },
        methods: {
            remove() {
                User.clear()
                this.$router.push("/login")
            },
            show(v) {
                console.log(v, "indexcal");
            }
        },
        components: { leftCebian }
    };
</script>

<style lang="less">
    @import url("../assets/css/index.less");
</style>
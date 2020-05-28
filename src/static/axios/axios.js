import bus from "../../main";
import axios from "axios";

export const axios_validation = function() {
  axios.defaults.timeout = 888;
  // 添加请求拦截器
  axios.interceptors.request.use(function(config) {
    //请求数据成功
    return config;
  }, err);

  // 添加响应拦截器
  axios.interceptors.response.use(function(response) {
    //数据响应失败
    let { code, msg } = response.data;
    if (code != 0) return bus.$message.error(msg);
    return response;
  }, err);

  //请求失败后
  function err(err) {
    return bus.$message.error("数据请求失败");
  }
};

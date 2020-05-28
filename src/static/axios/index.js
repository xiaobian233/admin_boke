import AxiosUrl from "./url";
import axios from "axios";

//登陆获取用户基本数据
export const admin_user = (url, obj) => {
  return axios.post(AxiosUrl[url], obj);
};

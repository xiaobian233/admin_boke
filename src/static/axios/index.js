import AxiosUrl from "./url";
import axios from "axios";
import { axios_validation } from "./axios";
axios_validation();

//登陆获取用户基本数据
export const admin_login = (url, obj) => axios.post(AxiosUrl[url], obj);
//登陆获取用户基本数据
export const admin_user = (url, obj) => axios.post(AxiosUrl[url], obj);

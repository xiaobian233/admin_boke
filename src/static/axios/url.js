//静态url地址
class urls {
  static admin_login = `/admin/login`;
  static admin_user=`/admin/user`
}

//代理前缀封装
const AxiosUrl = new Proxy(urls, {
  get(t, k, rec) {
    return `/api${Reflect.get(t, k, rec)}`.toLocaleLowerCase();
  }
});
export default AxiosUrl;

export class User {
  //清楚用户数据--退出用户
  static clear() {
    localStorage.clear();
  }

  //保存用户数据--登录保存用户
  static setUser(obj) {
    localStorage.setItem("user", JSON.stringify(obj));
  }

  //保存任意数据--路由or权限
  static atWill(name, obj) {
    localStorage.setItem(name, JSON.stringify(obj));
  }

  //获取任意数据
  static getAll(name, callback = null) {
    let val = localStorage.getItem(name);
    if (callback) callback(val);
  }
}

export class Url {
  //获取url地址
  static getUrl(href) {
    if (typeof href != "string") return false;
    let param = href.split("?")[1];
    let arr = param.split("&");
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      let arr_param = arr[i].split("=");
      obj[arr_param[0]] = arr_param[1];
    }
    return obj;
  }

  //递归
  static recursive(arr, dataArr) {
    arr.map((v) => {
      if (v.children && v.children.length > 0)
        return this.recursive(v.children, dataArr);
      dataArr.push(v);
    });
  }
}

//适配屏幕大小
export const sizeFunction = (callback = null) => {
  let _this = this;
  let size = false;
  window.onresize = function() {
    //屏幕大小
    let wth = document.body.clientWidth;
    if (wth >= 768) size = false;
    else size = true;
    callback.call(_this, size);
  };
};

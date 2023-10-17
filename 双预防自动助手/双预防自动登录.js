let password = 'Shyf!0331'
let m = function(e) {
  e = btoa(unescape(encodeURIComponent(e)))
  for (var t = "", i = 0;
    "=" == e.substring(e.length - i - 1, e.length - i);)
    i++;
  t = "";
  for (var n = 0; n < i; n++)
    t += "=";
  return e.length - i > 7 ? e = "=" == e.substring(e.length - 1) ? e.substring(e.length - 7 - i, e.length - i) + e.substring(0, e.length - 7 - i) + t : e.substring(e.length - 7) + e.substring(0, e.length - 7) : (0 != i && (e = e.substring(0, e.length - i)),
      e = e.split("").reverse().join("") + t),
    e
}
m(e)

//验证码,获取验证码保存到本地,然后提供自动识别接口
//http://218.60.153.94:8020/auth/cmp/admin/captcha

//登录接口
// http://218.60.153.94:8020/auth/cmp/admin/login
// 接受数据
// {"username":"13504272173","password":"iEwMzMxU2h5Z","captcha":"2E3F"}
// password是经过m函数包装的值
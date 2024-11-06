//这个文件由index.html包含
if (typeof (window.wps) == "undefined") {
    window.wps = window;
}

var time=new Date().getTime() //添加时间戳，防止js文件使用浏览器缓存
document.write("<script language='javascript' src='./js/src/util.js?time="+time+"'></script>");
document.write("<script type='text/javascript' src='./js/src/ribbon.js?time="+time+"'></script>");
document.write("<script type='text/javascript' src='./js/src/systemdemo.js?time="+time+"'></script>");
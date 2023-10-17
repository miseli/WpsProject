var config, $, fs, downloadResource;

if (typeof window === 'object'){
	// window只存在于浏览器端
	config = {}
	axios = $axios
	downloadResource = function(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    e || (e = t.split("\\").pop().split("/").pop());
    var i = {}
      , o = Object.assign(i, n);
    fetch(t, o).then((function(t) {
        return t.blob()
    }
    )).then((function(t) {
        "function" == typeof callback ? callback(t) : r(URL.createObjectURL(t), e)
    }
    )).catch((function(t) {
        return console.error(t)
    }
    ))
}

}else if(Object.prototype.toString.call(process) === '[object process]'){
	//判断procss
	axios = require('axios')
	const { JSDOM } = require( "jsdom" );
	const { window } = new JSDOM( "" );
	$ = require( "jquery" )( window );
	fs = require('fs');
	config = {headers:{
		Host: "10.10.15.32",
		Origin: "http://10.10.15.32",
		Referer: "http://10.10.15.32/",
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.41",
		Cookie: "ASP.NET_SessionId=b0cvnhaeyxzkljpmyjcqawhm"
	}}
}




let instance = axios.create(config)

let d1 = "userName=20790&password=h0094600"
, d2 = "Name=20790&Password=h0094600"
, search_data = {
	"subname": "view",
	"Keywords": "东侧",
	"CreateUserID": "",
	"DiscoverUserIDs": "",
	"HIHiddenDangerLevelID": "",
	"HIHiddenDangerTypeID": "",
	"DeadLineStartDate": "",
	"DeadLineEndDate": "",
	"ResUserID": "",
	"FindDateStartDate": "",
	"FindDateEndDate": "",
	"Status": "",
	"pi_currentpage": 1,
	"_": new Date().getTime()
}
instance.post('http://10.10.15.32/Home/CheckLoginInfo', d1).then(res=>{
		debugger
		// console.log(res)
    instance.post('http://10.10.15.32/Home/PortalIndex', d2).then(res=>{
        debugger
				// console.log(res)
        instance.get('http://10.10.15.32/CommonBiz/HIHiddenDanger/List', {params:search_data}).then(res=>{
        	console.log(res.data)
			if(fs!=undefined){
				fs.writeFile('./123.html', res.data, function(error){
					if(error){
						console.log('写入失败')
					}else{
					console.log('写入成功')
					}
				});
			}

            let d = $(res.data).find('.item')
            console.log(d.length)
        })
    })
})
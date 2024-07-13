// 主要是headers的csrf_token
// data的数据加密不是必须得
const $axios = require('axios');
const $cryptojs = require('Crypto-js')
const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: false // (不推荐) 忽略所有的SSL错误
});

function getTokenheaders(text, regex = /token":"(.*?)"/) {
	let tokenMatch = text.match(regex);
	let csrf = tokenMatch[1]
	return {headers:{'X-CSRF-TOKEN': csrf}, httpsAgent: agent}
}

async function login(username = "乙烯管理员", password = 'A@1234567'){
	let ret, data, headers
	ret = await $axios.get('https://10.10.54.18/portal/cas/loginPage')
	data = ret.data

	headers = getTokenheaders(data)
	ret = await $axios.post('https://10.10.54.18/portal/login/ajax/postLoginData.do',{"userName":username},headers)
	o = ret.data.data

		if(o.userType != "0"){
			debugger
			//var f = new JSEncrypt;
			//f.setPublicKey(o.publicKey);
			//password = f.encrypt(password)
		}else{
			password = $cryptojs.SHA256($cryptojs.SHA256(password + o.salt) + o.vCode).toString()
		}

		let loginData = {
			"userName": username,
			"password": password,
			"serviceUrl": "https://10.10.54.18/portal/cas/loginPage?service=https://10.10.54.18/portal/cas/loginPage",
			"imageCode": "",
			"codeId": o.codeId,
			"userType": o.userType,
			"systemCode": "0",
			"lang": "zh_CN"
		}

		ret = await $axios.post('https://10.10.54.18/portal/login/ajax/submit.do',loginData, headers)
		if(!ret.data.success)return false

		console.log(ret.data)
		// ret = await $axios.get(ret.data.data)

		// ret = await $axios.get('https://10.10.54.18/portal/config',{headers: {Referer: 'https://10.10.54.18/portal/'}})
		// ret = await $axios.get('https://10.10.54.18/xfront-web/view/foundation')
		// data = ret.data
		// headers = getTokenheaders(data, /"token".+?content="([^"]*)"/)
		// return headers
}
let headers = await login()
// console.log(headers)

// dqkRyuP6-I0HLsFB7yM--rcTK885Ly-2Lf3A

// data = {"orgIndexCode":"24eaf493b9474e1a947197e91119a95d","person":{"personName":"临时人员3","organizationPath":"默认组织/临时入厂人员","certType":"111","certNum":null,"jobNo":"临时人员3","phone":"15204270944","pinyin":"linshirenyuan2","personEnableStartTime":"","personEnableEndTime":"","sceneId":"default","orgIndexCode":"24eaf493b9474e1a947197e91119a95d","personIndexCode":"b1001424fb4d4bdb9fa1ef76c4e6f426","oper":"modify","notRefresh":true,"status":0,"orgPath":"/org_0/1/656/"},"fingerPrint":[],"iris":[],"aesKey":"I9dPyHzxmgtCTabkbkEwOkzn74WpdZsAT5qEVcNwFHTObBCzJaniQYvmNwPz3rM/HNAljnOd8j1LNa7aRzT3qWmgVpH2jIKEiIKbtiEA8nKWcu411XGpPpIVfiBrIEevPlgHx32WC8cZF4iJA6vi2MF8avcOOS6blBOm9/+reOjbrHMRSZCbjl1xh3RYD+3+VFL26Y5hadV4wY2pB9srrg8kWYNShGkTaSlmmaGQRp7eHlkM+rP1JA8DyhYWhoXr+BwsrA0k52MYznPcVLT7cONkQFY8tRVE742EIKoKTSypiF89XoYh38cX0akMtYzcOAFaaLNAq8tJyU/lbyvAXA==","aesIv":"D4Bp+KcuKl8ECFuWY+Uxr+BRlpcDOiGdxF7uX7YLZljRHuYSCb/2JS67CNzkGDfLAnJ8TMjE5O7nz8hVSMkAs/9WUpqDW2mTEr3KE4fkCdIonqul9GJQfRatMw7OE9bFhWOBqvKaEt5fklk1y7tEdWuvbOOGlkjTkM+pHK+Gwes/c2ygiu6onTJQoC/hqUT6gR7DeHVnc4OnkDvPMnojWBD1O/ZMwCmLaeDYjcWc2pQLWHcGL3k2wNtip8AFyYW5AzJZVU5jDzwRZY5A5iHKpEi22fDE0NBoIzKI5eYz4YTPMDXRzA1MzFDvcc/VPglcCaCLGW1Fn5iw0jHidWApdQ==","personFace":[],"cards":[],"personIndexCode":"b1001424fb4d4bdb9fa1ef76c4e6f426"}

// $axios.post('https://10.10.54.18/xfront-web/foundation/person/update.do', data, headers).then((data)=>{
	// console.log(data)
// })


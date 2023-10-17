let companyCode = "211110068"
let conf = [
	// 0气体指标信息
	{
		url: 'http://218.60.151.222:8888/api/target/getTargetValueList',
		data: { "oilgas": false, "companyCode": "211110068", "page": { "orders": [{ "column": "lastAlarmTime desc nulls last,1" }, { "asc": true, "column": "hazardCode" }, { "asc": true, "column": "equipCode" }, { "asc": true, "column": "targetCode" }] } },
		callback(records) {
			// 返回信息:
			// 危险源名称	hazardName
			// 设备名称	equipName
			// 指标名称	targetName
			// 指标类型	typeName
			// 在线状态	online
			let result = []
			for (let { hazardName, equipName, targetName, typeName, online } of records) {
				if (/^乙烯/.test(hazardName) && /(可燃|有毒)气体/.test(typeName)) {
					// console.log(hazardName, equipName)
					result.push({ hazardName: equipName })
					console.log(targetName)
				}
			}
			console.log(result)
		}
	},
	// 1报警列表
	{
		url: "http://218.60.151.222:8888/api/alarm/getAlarmList",
		data: { "oilgas": false, "page": { "orders": [{ "column": "statusChangedTime desc nulls last,1" }], "size": 10 }, "targetOnlineStatus": "", "equipIsEnable": true, "endDateStr": "", "beginDateStr": "", "isDispel": false, "equipType": "", "targetType": "", "targetStatus": "", "hazardType": "", "companyCode": "211110068" },
		callback(records) {
			console.log(records)
		}
	},

	// 2风险消息列表
	{
		url: "http://218.60.151.222:8888/api/riskMsg/getRiskMsgList",
		data: { "oilgas": false, "companyCode": "211110068" },
		callback(records) {
			console.log(records)
		}
	},

	// 3视频监控列表
	{
		url: "http://218.60.151.222:8888/api/video/getVideoList",
		data: {"oilgas":false,"companyCode":"211110068","showGis":true},
		callback(records){
			console.log(records)

		}
	},

	// 4安全承诺信息
	{
		url: "http://218.60.151.222:8888/api/promise/getPromise",
		data: {"oilgas":false,"companyCode":"211110068","commitDateStr":"2023-08-23"},
		callback(records){
			console.log(records)

		}
	}
]

let c = conf[3]
$axios.post(c.url, c.data).then(({ data }) => {
	let records = data.obj.records
	c.callback.call(this, records)
})
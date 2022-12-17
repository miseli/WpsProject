function handler(reslist/*Array*/){
	const result = []
	for(let res of reslist){
		let qlist = $(res).find('#questions .question-list').toArray()
		for(let item of qlist){
			let q = $(item).find('.panel-heading'),
				o = $(item).find('.panel-body .answer'),
				a = []
	
			q = q.text().replace(/\s+/g,'').replace(/^\d+./,'')
			o = o.toArray().map((it,id)=>{
				let t = $(it).text().replace(/\s+/g,'')
				if(/正确答案/.test(t)){
					a.push(id)
					t = t.replace(/\(正确答案\)/g,'')
				}
				return t
			})
			result.push({q,a,o})
		}
	}
	return result
}

let url = 'https://www.tlsafety.com/Home/MockTest/testing/id/7.html'
let result = await Promise.all(Array(50).fill(0).map(()=>{ return $.get(url) })).then(handler)

copy($lodash.uniqBy(result, 'q')) //去重

// copy(result.map((item,id)=>{
	// return item.q.replace(/^【.+】/,'')
// }).join('\r\n'))

// $_.sortBy(arr,item=>{
	// return item.q[4]
// })

function get_bytype(arr, tpname){
	let tp = ['未知','单选', '判断', '多选']
	if(!tp.includes(tpname)){
		throw '123';
		alert(123);
		return false;
	}
	
	let arr_ = arr.map(({a,o,q},id)=>{
		//document.title = '危险化学品生产'
		let t = 0
		if(/【单选】/.test(q)){
			t = 1
		}else if(/【多选】/.test(q)){
			t = 3
		}else if(/【判断】/.test(q)){
			t = 2
		}

		if(/（错误|正确）/.test(o.join(''))){
			t = 2
		}
		
		return {a,o,q:q.replace(/【(单选|多选|判断)】/,''),t}
	})

	arr_ = arr_.filter(({a,o,q,t},id)=>t==tp.indexOf(tpname))
	return arr_
	// return $lodash.sortBy(arr_, item=>{
		// if(/.*[\u4e00-\u9fa5]+.*$/.test(item.q))
	// })
}
copy($lodash.uniqBy((get_bytype(arr,'判断')),item=>item.q).map(({a,o,q},id)=>{
	return id+'\t'+q+'\t'+o.join('|')+'\t'+a.join('|')
}).join('\r\n'))



//爬取其他组的视频
fetch("https://www.tlsafety.com/Home/Index/searchvideo", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://www.tlsafety.com/Home/Index.html",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "name=&groupid=409&videotype=0&clgroupid=0",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(res=>res.text());
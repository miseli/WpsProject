async function getCoursesByClassId(classid){
	let data = {
		classid,
		page: 1,
		limit: 50,
		type: 0,
		diff_num: 0
	}
	let ret = await $axios.post('https://www.bqrcy.com/Home/Class/getClassItemList', $qs.stringify(data))
	ret = ret.data
	if(ret.code == 200 && ret.is_all){
		return ret.data
	}
	else
	{
		throw ret
	}
}

async function updateCourse(user_id, class_id, course_id, time){
	let d = {
		"url": "User/update_course_log",
		"para": {user_id, time, course_id, class_id, dev_type: 1}
	}

	let ret = await $axios.post('https://www.bqrcy.com/Home/Api/do_api', $qs.stringify(d))
	console.log(ret.data)
	
	ret = await $axios.post('https://www.bqrcy.com/Home/Course/course_evaluate',$qs.stringify({course_id, star: '5.0'}))
	console.log(ret.data)

	d.url = 'User/update_play_count'
	delete d.para.time
	ret = await $axios.post('https://www.bqrcy.com/Home/Api/do_api', $qs.stringify(d))
	console.log(ret.data)

	d.url = 'User/create_watch_log'
	ret = await $axios.post('https://www.bqrcy.com/Home/Api/do_api', $qs.stringify(d))
	console.log(ret.data)

	// d.url = 'Course/nextCourse'
	// d.para.classid = d.para.class_id
	// delete d.para.class_id
	// ret = await $axios.post('https://www.bqrcy.com/Home/Api/do_api', $qs.stringify(d))
	// console.log(ret.data)
}

// 通过地址栏获取courseID和classID
function getClassIdCourseId() {
	let urlquery = $qs.parse($url.parse(location.href).query)
	let course_id = urlquery.course_id
	let class_id = urlquery.classid
	
	return {course_id, class_id}
}

async function main1(){
	// 获取userID
	let ret = await $axios.get('https://www.bqrcy.com/DataWeb/User/info')
	ret = ret.data
	let user_id = ret.msg.id
	debuger
	// 进入
	let {course_id, class_id} = getClassIdCourseId()
	ret = await  $axios.post('https://www.bqrcy.com/Home/Course/getCourseDetails', $qs.stringify({course_id, classid: class_id}))
	ret = ret.data
	let duration = ret.data.duration
	let time = (new Date(`1970/1/1 ${duration}`).getTime()+28800000)/1000

	return await updateCourse(user_id, class_id, course_id, time)

	// return 
	// for(let {id: course_id, duration } of getCoursesByClassId(class_id)){
		// let time = (new Date(`1970/1/1 ${duration}`).getTime()+28800000)/1000
		// debugger
		// updateCourse(user_id, class_id, course_id, time)
	// }
}

main1()
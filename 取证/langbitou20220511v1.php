<?php
/*
 * @Author: Cube
 * @Date: 2022-06-07
 * @LastEditTime: 2022-06-07
 */
// @header("content-Type: text/html; charset=utf-8");
header("content-Type: text/plain; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
require __DIR__."/../slibs/Request.php";
$req = new Request();
require("../common/common.php");

$data = [
	// [
		// 'title'=>'应知应会(安全环保部)',
		// 'textfile'=>'应知应会培训考核试题(安全环保部).txt',
		// 'jsfile'=>'应知应会培训考核试题(安全环保部).js'
	// ],
	// [
		// 'title'=>'应知应会(乙烯车间旧版)',
		// 'textfile'=>'应知应会培训考核试题(乙烯车间-旧版).txt',
		// 'jsfile'=>'应知应会培训考核试题(乙烯车间-旧版).js'
	// ],
	// [
		// 'title'=>'应知应会(乙烯车间终版)',
		// 'textfile'=>'应知应会培训考核试题(乙烯车间-终版).txt',
		// 'jsfile'=>'应知应会培训考核试题(乙烯车间-终版).js'
	// ],
	// [
		// 'title'=>'应知应会(乙烯车间终版7.4)',
		// 'textfile'=>'应知应会培训考核试题(乙烯车间-终版7.4).txt',
		// 'jsfile'=>'应知应会培训考核试题(乙烯车间-终版7.4).js'
	// ],
	// [
		// 'title'=>'应知应会7月复习题',
		// 'textfile'=>'应知应会7月复习题.txt',
		// 'jsfile'=>'应知应会7月复习题.js'
	// ],
	// [
		// 'title'=>'应知应会',
		// 'textfile'=>'tiku-应知应会.txt',
		// 'jsfile'=>'tiku-应知应会.js'
	// ],
	[
		'title'=>'裂解(裂化)工艺作业(辽宁)',
		'textfile'=>'裂解(裂化)工艺作业(辽宁).txt',
		'jsfile'=>'裂解(裂化)工艺作业(辽宁).js'
	],
	// [
		// 'title'=>'集团文化',
		// 'textfile'=>'集团文化.txt',
		// 'jsfile'=>'集团文化.js'
	// ],
	// [
		// 'title'=>'中级工唐',
		// 'textfile'=>'中级工唐.txt',
		// 'jsfile'=>'中级工唐.js'
	// ],
	[
		'title'=>'安全取证判断题',
		'textfile'=>'安全取证判断题.txt',
		'jsfile'=>'安全取证判断题.js'
	],
	[
		'title'=>'安全取证单选题',
		'textfile'=>'安全取证单选题.txt',
		'jsfile'=>'安全取证单选题.js'
	],
	[
		'title'=>'危险化学品生产-判断错',
		'textfile'=>'危险化学品生产-判断错.txt',
		'jsfile'=>'危险化学品生产-判断错.js'
	],
	[
		'title'=>'危险化学品经营-判断错',
		'textfile'=>'危险化学品经营-判断错.txt',
		'jsfile'=>'危险化学品经营-判断错.js'
	],
];

$type = _GET('type');
$id = _GET('id');
$code = _GET('code');

if($type=='list'){
    // echo "{";
    @header("content-Type: application/json; charset=utf-8");
    echo json_encode($data);
    return;
}elseif($type=="web"){
	$file = $data[$id]['jsfile'];
}elseif($type=="miniprogram"){
	$file = $data[$id]['textfile'];
}elseif($type=="login"){
	// $code = '051MbkFa1IyPkD0EhrGa1ruPo13MbkFo';
	$response = req($code);	
	// debugger($response);
	// list($session_key, $expires_in, $openid) = $response;
	echo json_encode($response);
	return;
}else{
	$file = $data[$type]['jsfile'];
}

function req($code){
	return Request::get("https://api.weixin.qq.com/sns/jscode2session?appid=wx87817e8f636b3028&secret=b39290f26d6a82775a4868aa5d100348&js_code=".$code."&grant_type=authorization_code");
	// return Request::get('https://www.baidu.com');
}

readfile($file);
// debugger(123);
?>

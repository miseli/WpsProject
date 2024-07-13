function openTishi(second)
{
    ;
    if(second==randomTime )  //随机时间提示
    {
        var tishiTime=document.form2.thzt.value;
        if('1' != '0'){//根据配置来判断是否弹窗（默认会弹窗 '' != '0'）
            alert("已经学习了"+tishiTime+",点击确定更新学习时间.");
        }
        updateStudyTime(0); 
        setRandomTipTime();
    }
}

初始化时:
function setBegintime() {
    begintime = document.form2.thzt.value;
}

更新课程时间后:
    begintime = 0

每秒
begintime++
document.form2.thzt.value = begintime

begintime = randomTime - begintime - 3

fetch("https://m-flare.bokecc.com/flash/playlog?stage=10&upid=6635061701306479811&userid=039C1380CF417F50&videoid=F27C1284068C388A9C33DC5901307461&status=1&pl_time=1&pi_time=117&uvid=1950EB9A5CCA2E7B23CDBC87006629E277391C73&ready_time=160&time=1701306481297&random=7723900&terminal_type=40&cv=3.4.17", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Microsoft Edge\";v=\"114\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "script",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "http://course.teacheredu.cn/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "no-cors",
  "credentials": "omit"
});
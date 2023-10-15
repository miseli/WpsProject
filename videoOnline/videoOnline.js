const errinfo = {
    1:'用户名不存在',
    2:'密码错误',
    3:'用户已停用',
    4:'用户已过期',
    5:'会话不存在',
    6:'系统出现异常',
    7:'请求参数不正确',
    8:'没有车辆或者设备的操作权限',
    9:'开始时间不得大于结束时间',
    10:'查询时间超过范围',
    11:'录像下载任务已存在',
    12:'账号已存在',
    13:'无操作权限',
    14:'设备管理数目限制（已达到最大添加数目）',
    15:'设备已存在',
    16:'车辆已存在',
    17:'设备已被使用',
    18:'车辆不存在',
    19:'设备不存在',
    20:'设备不属于当前公司',
    21:'设备注册数目不匹配，请检查设备数目是否超过注册数目！',
    24:'网络连接异常',
    25:'规则名称已存在',
    26:'规则不存在',
    27:'信息不存在',
    28:'回话号已存在',
    29:'公司不存在',
    32:'设备不在线',
    34:'单点登录用户,已经登录'
}

async function login(user,pwd){
    return $ajax.get(`http://www.4gxjy.com/StandardApiAction_login.action?account=${user}&password=${pwd}`).then(({data:res})=>{
        if(res.result!=0)
            alert(errinfo[res.result])
        else
            return res.jsession
    })
}

async function addDevice(deviceId='358185930220551'){
    let session = await login('BBZM','000000')
    $ajax.get(`http://www.4gxjy.com/StandardApiAction_addDevice.action?jsession=${session}&devIdno=${deviceId}&protocol=1&devType=1&factoryType=0&companyName=9999&account=BBZM&channelNum=2`)
}
addDevice()
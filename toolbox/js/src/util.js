/*** ================================ 预定义部分-开始 ======================================== ***/
let vip = 0, editor = '', isShengJi = false
// vip = 1

/* 2025年法定假https://www.gov.cn/zhengce/zhengceku/202411/content_6986383.htm **/
let FADING_INCLUDE = [
  '2025/1/1', //元旦
  '2025/1/28','2025/1/29','2025/1/30','2025/1/31','2025/2/1','2025/2/2','2025/2/3','2025/2/4', //春节
  '2025/4/4','2025/4/5','2025/4/6', //清明
  '2025/5/1','2025/5/2','2025/5/3','2025/5/4','2025/5/5', //五一
  '2025/5/31','2025/6/1','2025/6/2', //端午
  '2025/10/1','2025/10/2','2025/10/3','2025/10/4','2025/10/5','2025/10/6','2025/10/7','2025/10/8' //国庆中秋
]
/* 2025年调休日,即周末上班日期 **/
let FADING_EXCLUDE = [
  '2025/1/26','2025/2/8','2025/4/27','2025/9/28','2025/10/11'
]

FADING_INCLUDE = FADING_INCLUDE.map(item=>{
  return new Date(item).getTime()
})

FADING_EXCLUDE = FADING_EXCLUDE.map(item=>{
  return new Date(item).getTime()
})

const COLORS = {
  Red: 0X0000FF, //红色
  Green: 0X00FF00, //绿色
  Blue_deep: 0XFF0000, //深蓝色
  Blue_light: 0XFFFF00, //浅蓝色
  Pink: 0XFF00FF, //粉色
  Yellow_light: 0X00FFFF, //黄色
  Yellow_deep: 0X8FBFFF, //土黄色
  White: 0XFFFFFF, //白色
  Lavender: 0xC7A0B1, //淡紫色
}

/* 定义表头位置常量 */
const ID_COL = 'A'
const BIAOJI_COL = 'B'
const BIANHAO_COL = 'C' //暂时未使用
const GONGSI_COL = 'D' //暂时未使用
const MINGHUO_COL = 'E'
const JIBIE_COL = 'F'
const MANGBANSHU_COL = 'G'
const WORKNAME_COL = 'H'
const CHEJIAN_COL = 'I'
const QUESTION_COL = 'J'
const CONTENT_COL = 'K'
const JIEZHI_COL = 'L'
const DEPT_COL = 'M'
const POS_COL = 'N'
const START_T_COL = 'O'
const END_T_COL = 'P'
const FUZEREN_COL = 'Q'
const PERSON_COL = 'R'
const LUXIANG_COL = 'S'
const GUDINGSHEXIANGTOU_COL = 'T'
/*** ================================ 预定义部分-结束 ======================================== ***/


// 背景填充(COLORS.Red, Application.ActiveCell)

// axios.post('http://127.0.0.1:8010/tp6/public/Index/excelwordmiddle',{url:param})
// $$('tr.item>td:nth-child(3)').each((id, item)=>{
//     if(/(加氢芳烃一|裂解|乙烯二|加氢芳烃二|苯乙烯二|聚乙烯二|中心化验)/.test($$(item).text())){
//         $$(item).parent().hide()
//     }
// })

// let tds = '乙烯车间|聚乙烯一车间|聚丙烯一车间|聚丙烯二车间|苯乙烯车间|加氢抽提联合车间|聚苯乙烯车间|水汽车间|储运车间|仪表车间|电气车间'.split('|')
// $$('tr.item>td:nth-child(3)').each((id, item)=>{
//     if(/(乙烯|聚乙烯一|聚丙烯一|聚丙烯二|苯乙烯|加氢抽提联合|水汽|储运|仪表|电气)车间/.test($$(item).text())){
//         $$(item).parent().hide()
//     }
// })

// let nbtn = $$(`<button>一键确认</button>`)
// $$('body').append(nbtn)
// nbtn.attr('style',`color: white;background: #006158; border-radius: 3px; width: 76px; height: 34px; right: 0px; bottom: 30px; position: absolute; z-index: 99999; border: #cecfcf solid 1px; `)
// nbtn.click(function(){
//   let req = []
//   $$('span:contains("确认审核")').each((id,item)=>{
//     let url = $$(item).parent('a').data('url')
//     let parentid = url.match(/\/CommonBiz\/DTWorkBackupMainForm\/Excute\/(.+)\?op=QueRen/)[1]
//     req.push($axios.post('/DTWorkBackup/BatchUpQueRen', $qs.stringify({parentid})))
//   })
//   $axios.all(req).then($axios.spread(()=>{
//     console.log('所有都成功了', arguments)
//     alert('成功')
//   }))
//   .catch(errors => {
//     // 如果任何请求失败，处理错误
//     console.log('有请求失败了:', errors);
//   });
// })

// function splitStringBy19Chars(str) {
//     // 使用正则表达式匹配每19个字符，并加上捕获组
//     const regex = /(.{1,19})/g;
//     return str.match(regex);
// }

// const str = '三十防：防碰撞打击，防静电，防雷电，防装置带病运行，防腐蚀，防火花喷溅，防超温超压，防高压窜低压，防物料残留，防危化品泄漏，防误操作，防爆聚，防自聚，防超能力生产，防非正常化学反应，防危化品超流速，防冻凝，防气蚀，防物料错加，防危化品喷溅，防管道介质水击，防物料混存，防超量存储，防超员，防粉尘，防中毒窒息，防辐射，防异味逸散，防排放超标，防三违。';
// const groups = splitStringBy19Chars(str);
// copy(groups)


// function DoConverseCallTimer() {
//     videoifplayFlag = true
//   if(document.form2.thzt.value == "") {
//   } else {
//     //document.form2.conversestart.disabled=true;
//     var minute="0";
//     var second="0";
//     begintime = parseInt(begintime)+1;  //**在这里+1秒
//     minute = parseInt(begintime/60);
//     second = begintime%60;

//     document.form2.thzt.value =minute+"分"+second+"秒";
//     jQuery("#benci").html(minute+"分"+second+"秒");

//     timer1 = window.setTimeout("DoConverseCallTimer()",1000);
//     document.form2.passedtime.value = begintime;
//     openTishi(begintime);
//   }
// }


// Formula 公式
// Value 单元格格式化 后 的值
// Value 单元格格式化 前 的值

const mappingObj = {
    "安环处1": "7676",
    "乙烯车间": "9409",
    "安环处2": "7379",
    "加氢抽提联合车间": "5034",
    "聚丙烯一车间": "2032",
    "安环处4": "0704",
    "苯乙烯车间": "2198",
    "聚乙烯车间": "1935",
    "储运车间": "6082", // 0704
    "聚丙烯二车间": "9698",
    "水汽车间": "7130",
    "安环处5": "1877",
    "安环处3": "0332" // 1877
}

/**
 * 根据序号所在col计算相对位置
 * @param  {Char} col 序号所在列
 * @return {Char}     返回某一列相对于序号所在列的位置
 */
String.prototype.distance = function(col){
  // if(!vip){
  //   return col
  // }
  if(this.length>1){
    return new Error('仅对单个字符处理')
  }
  return String.fromCharCode(col - 1 + this.charCodeAt())
}

/**
 * 原型链上添加日期格式化自定义
 * 格式化日期类型 自定义函数来格式化时间
 * yyyy-MM-dd
 */
Date.prototype.format = function(format) {
  var date = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
    }
  }
  return format;
}

Date.prototype.eq = function(date) {
  if (!(date instanceof Date))
    throw 'arg1必须是日期对象';
  return this.valueOf() == date.valueOf()
}

Number.prototype.leftpadding = function(length = 2, padchar = '0'){
  return (Array(length).join(padchar) + this).slice(-length)
}

function leftpadding(num, length = 2, padchar = ' ') {
  return (Array(length).join(padchar) + num).slice(-length)
}

const events = {
  "getDocName": () => {
    let doc = Application.EtApplication().ActiveWorkbook
    let textValue = ""
    if (!doc) {
      textValue = textValue + "当前没有打开任何文档"
      return
    }
    textValue = textValue + doc.Name
    document.getElementById("text_p2").innerHTML = textValue
  },
  "createTaskPane": () => {
    let tsId = Application.PluginStorage.getItem("taskpane_id")
    if (!tsId) {
      let tskpane = Application.CreateTaskPane(GetUrlPath() + "/taskpane.html")
      let id = tskpane.ID
      Application.PluginStorage.setItem("taskpane_id", id)
      tskpane.Visible = true
    } else {
      let tskpane = Application.GetTaskPane(tsId)
      tskpane.Visible = true
    }
  },
  "newDoc": () => {
    Application.EtApplication().Workbooks.Add()
  },
  "closeDoc": () => {
    if (Application.EtApplication().Workbooks.Count < 2) {
      alert("当前只有一个文档，别关了。")
      return
    }

    let doc = Application.EtApplication().ActiveWorkbook
    if (doc)
      doc.Close()
  },
  "打印设置": () => {
    打印设置()
    分页预览(1)
  },
}

// 返回一个字典,字典带一个convert方法
function DictWrap() {
  var create = Object.create || (function() {
    function F() {}

    return function(obj) {
      var subtype;

      F.prototype = obj;

      subtype = new F();

      F.prototype = null;

      return subtype;
    };
  }())

  let obj = {
    result: {},
    convert(a, b) {
      if (a in this.result) {} else {
        this.result[a] = 0
      }
      this.result[a] += parseInt(b)
    }
  }
  return obj
}

//在后续的wps版本中，wps的所有枚举值都会通过wps.Enum对象来自动支持，现阶段先人工定义
var WPS_Enum = {
  xlColumns: 2,
  xlDataSeriesLinear: -4132,
  xlDay: 1,
  msoCTPDockPositionLeft: 0,
  msoCTPDockPositionRight: 2,
  xlVAlignCenter: -4108,
  xlHAlignCenter: -4108,
  xlPatternSolid: 1,
  xlAscending: 1,
  xlSortColumns: 1,
  xlPinYin: 1,
  xlGuess: 0,
  xlPatternNone: -4142,
  xlPrintErrorsDisplayed: 0,
  xlDownThenOver: 1,
  xlPaperA4: 9,
  xlPageBreakPreview: 2,
  xlNormalView: 1,
  //横向模式。
  xlLandscape: 2,
  //纵向模式。
  xlPortrait: 1,
  //随机筛选
  xlAnd: 1,
  //指定条件筛选
  xlFilterValues: 7,
}

function GetUrlPath() {
  let e = document.location.toString()
  return -1 != (e = decodeURI(e)).indexOf("/") && (e = e.substring(0, e.lastIndexOf("/"))),
    e
}

/**
 * 通过wps提供的接口执行一段脚本
 * @param {*} param 需要执行的脚本
 */
function shellExecuteByOAAssist(param) {
  axios.post('http://127.0.0.1:8010/tp6/public/Index/excelwordmiddle',{url:param})
  // if (wps != null) {
  //   wps.OAAssist.ShellExecute(param)
  // }
}

/**
 * 以序号单元格为基准,查找有效表格位置
 * 返回序号单元格的row,col
 * 返回当前表curSheet类似绝对的,序号所在的非空表tbl类似相对的
 */
function 获取有效表位置(title = '序号', curSheet = undefined){
  if(!vip)return;
  try{
    if(curSheet == undefined){
      curSheet = Application.ActiveSheet
    }

    let tbl = Application.Selection.CurrentRegion;
    // if (!tbl || tbl.Rows.Count<=2){
      for(let i=1; i<10; i++){
        for(let j=1; j<10; j++){

          if(new RegExp(title).test(curSheet.Columns.Item(i).Rows.Item(j).Value2)){
            // curSheet.Columns.Item(i).Rows.Item(j).Select()
            tbl = curSheet.Cells.Item(j, i).CurrentRegion
            // tbl = Application.Selection.CurrentRegion
            console.log(i,j) //列,行
            return {curSheet, tbl, row: j, col: i}
          }
        }
      }
      throw '没有找到序号标记或不是wps环境'
    // }
  }catch(e){
    debugger
    return '不是wps环境'
  }
}

/**
 * 生成随机日期
 * 不传递任何参数则返回当前月的随机日期
 * 传递year,month参数,则返回指定年月中的随机日期
 */
function getRandomDate(year, month, day = 6) {

    let today = new Date()

    if(year == undefined){
      month = today.getMonth()
      year = today.getFullYear()
    }else{
      month -= 1
    }

    // 创建一个表示月份第一天的Date对象
    let date = new Date(year, month, 1);

    // 获取该月份的天数
    // 注意getMonth()返回的是0-11的月份
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    //计算生成去掉day天的当月天数
    daysInMonth -= daysInMonth>day?day:0

    // 1至daysInMonth范围内生成一个随机天数
    let randomDay = Math.floor(Math.random() * daysInMonth) + 1;

    // 设置date对象为月份内的随机一天
    date.setDate(randomDay);

    // 格式化日期为YYYY-MM-DD
    // let formattedDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    let formattedDate = (date.getMonth() + 1) + '月' + ('0' + date.getDate()).slice(-2) + '日';
    return formattedDate;
}

function 填加日期() {
  for(let i = 3; i<45; i++){
    let tmp = Application.Range("B" + i).Value2
    if(tmp == null || tmp.trim() == ""){
      break;
    }
    Application.Range("E" + i).Value2 = getRandomDate(2024,9) + tmp
  }
}

function 合并居中单元格(obj, txt) {
  obj.UnMerge();
  obj.Merge(false);
  obj.HorizontalAlignment = WPS_Enum.xlHAlignCenter;
  if(txt!=undefined)
    obj.Value2 = txt
  return obj;
}

function 获取尺寸() {
  let curSheet = Application.ActiveSheet
  let s = ''
  for(let i = 0; i<79-65; i++){
      let o = String.fromCharCode(i+65)
      let w = curSheet.Range(o + 2).ColumnWidth
      s += `curSheet.Range("${o}2").ColumnWidth = ${w}\r\n`
  }

  document.getElementById("text_p2").innerText += Application.Selection.Width + 'x' + Application.Selection.Height + '\r\n'

  debugger
  return
  合并居中单元格(Application.ActiveSheet.Range('A1:A3'), '序号')
  合并居中单元格(Application.ActiveSheet.Range('B1:B3'), '车间')
  合并居中单元格(Application.ActiveSheet.Range('C1:C3'), '作业项目名称')
  合并居中单元格(Application.ActiveSheet.Range('D1:D3'), '类别')
  合并居中单元格(Application.ActiveSheet.Range('E1:E3'), '检查时间')
  合并居中单元格(Application.ActiveSheet.Range('F1:H1'), '监护人提问情况')
  合并居中单元格(Application.ActiveSheet.Range('F2:H2'), 'a：熟练掌握\nb：一般掌握\nc：  未掌握')
  合并居中单元格(Application.ActiveSheet.Range('F3'), '监护人职责')
  合并居中单元格(Application.ActiveSheet.Range('G3'), '作业存在风险')
  合并居中单元格(Application.ActiveSheet.Range('H3'), '安全措施落实')
  合并居中单元格(Application.ActiveSheet.Range('I1:J2'), '巡查情况')
  合并居中单元格(Application.ActiveSheet.Range('I3'), '安环处')
  合并居中单元格(Application.ActiveSheet.Range('J3'), '车间管理人员')

  合并居中单元格(Application.ActiveSheet.Range('K1:K3'), '是否开展研判')
  合并居中单元格(Application.ActiveSheet.Range('L1:L3'), '是否重点特殊作业')
  合并居中单元格(Application.ActiveSheet.Range('M1:O2'), '重点特殊作业')
  合并居中单元格(Application.ActiveSheet.Range('M3'), '是否有安全员、技术员、设备员监护')
  合并居中单元格(Application.ActiveSheet.Range('N3'), '车间主任、安环处、公司领导是否进行2次巡查')
  合并居中单元格(Application.ActiveSheet.Range('O3'), '是否全程录像')
  合并居中单元格(Application.ActiveSheet.Range('P1:P3'), '备注')
}

function 智能填充() {
  Application.Selection.DataSeries(WPS_Enum.xlColumns, WPS_Enum.xlDataSeriesLinear, WPS_Enum.xlDay, undefined, undefined, true);
}

function 分页预览(t) {
  if (undefined == t)
    Application.ActiveWindow.View = WPS_Enum.xlNormalView
  else
    Application.ActiveWindow.View = WPS_Enum.xlPageBreakPreview;
}

function 打印设置() {
  (obj => {
    obj.LeftHeader = "";
    obj.CenterHeader = "";
    obj.RightHeader = "";
    obj.LeftFooter = "";
    obj.CenterFooter = "第 &P 页，共 &N 页";
    obj.RightFooter = "";
    obj.Orientation = WPS_Enum.xlLandscape;
    obj.FitToPagesWide = 1;
    obj.FitToPagesTall = 1;
    obj.FirstPageNumber = true;
    obj.LeftMargin = 17.007874;
    obj.RightMargin = 17.007874;
    obj.TopMargin = 17.007874;
    obj.BottomMargin = 17.007874;
    obj.HeaderMargin = 11.338583;
    obj.FooterMargin = 11.338583;
    obj.CenterFooter = "第 &P 页，共 &N 页";
    obj.CenterHorizontally = false;
    obj.CenterVertically = false;
    obj.PrintErrors = WPS_Enum.xlPrintErrorsDisplayed;
    obj.Order = WPS_Enum.xlDownThenOver;
    obj.PrintGridlines = false;
    obj.PrintHeadings = false;
    obj.BlackAndWhite = false;
    obj.PrintQuality(undefined, 600);
    obj.PaperSize = WPS_Enum.xlPaperA4;
    obj.PrintComments = -4142;
    obj.PrintArea = "";
    obj.PrintTitleRows = "";
    obj.PrintTitleColumns = "";
  })(Application.ActiveSheet.PageSetup);
}

function 背景填充(color, target = Application.Selection) {
  if(!vip)return;
  (obj => {
    if (color == undefined) {
      Application.Selection.Interior.Pattern = WPS_Enum.xlPatternNone;
    } else {
      obj.Pattern = WPS_Enum.xlPatternSolid;
      obj.Color = color;
      obj.TintAndShade = 0;
      obj.PatternColorIndex = -4105;
    }
  })(target.Interior);
}

function 排序() {
  (obj => {
    (objz => {
      objz.Clear();
      objz.Add(Application.ActiveCell, undefined, WPS_Enum.xlAscending, undefined, undefined);
    })(obj.SortFields);
    obj.Header = WPS_Enum.xlGuess;
    obj.MatchCase = false;
    obj.SortMethod = WPS_Enum.xlPinYin;
    obj.Orientation = WPS_Enum.xlSortColumns;
    obj.SetRange(Application.ActiveSheet.Range('A3:N21'));
    obj.Apply();
  })(Application.ActiveSheet.Sort);
}

let $AddScript = function(t) {
  var e = $("<script>").attr("src", t);
  $("head").append(e[0])
}
let $AddCss = function(t) {
  var e = $("<link>").attr({
    href: t,
    rel: "stylesheet"
  });
  $("head").append(e[0])
}

Date.prototype.DateAdd = function(interval, number) {
  let date = this;
  switch (interval.toLowerCase()) {
    case "y":
      return new Date(date.setFullYear(date.getFullYear() + number));
    case "m":
      return new Date(date.setMonth(date.getMonth() + number));
    case "d":
      return new Date(date.setDate(date.getDate() + number));
    case "w":
      return new Date(date.setDate(date.getDate() + 7 * number));
    case "h":
      return new Date(date.setHours(date.getHours() + number));
    case "n":
      return new Date(date.setMinutes(date.getMinutes() + number));
    case "s":
      return new Date(date.setSeconds(date.getSeconds() + number));
    case "l":
      return new Date(date.setMilliseconds(date.getMilliseconds() + number));
  }
}

async function $getWork(n) {
  $('#log_text').text('')
  let host = '192.168.1.102',
    protocol = 'http',
    port = 4480
  let d = n * -1 || 0

  let startTime = $("#datachart > div.ui-searchbar > div.base > div:nth-child(2) > div.editor-field > input.ui-datetime.ui-dateperiod-start.value-elem.autosave")

  let endTime = $("#datachart > div.ui-searchbar > div.base > div:nth-child(2) > div.editor-field > input.ui-datetime.ui-dateperiod-end.value-elem.autosave")

  startTime = startTime[0] && startTime[0].value || new Date().DateAdd('d', d).toLocaleDateString().replace(/\//g, '-')
  endTime = endTime[0] && endTime[0].value || new Date().DateAdd('d', d).toLocaleDateString().replace(/\//g, '-')

  const CancelToken = axios.CancelToken;
  let urls = function() {
    let urls = ['10.10.15.32', '127.0.0.1:1532']
    Array(16).fill(1).forEach((_, i) => {
    	// 100~199
      urls.push(`192.168.0.${2 + i}:1532`)
      urls.push(`192.168.1.${101 + i}:1532`)
      urls.push(`172.16.0.${101 + i}:1532`)
      urls.push(`172.16.1.${101 + i}:1532`)
    })
    return urls
  }()

  sources = urls.map(t => CancelToken.source())
  let rs = urls.map((u, id) => axios.get(`http://${u}/DTWorkBackup/DTWorkBackupOrgDataList`, {
    cancelToken: sources[id].token,
    params: {
      "backupStatus": "1",
      //1:报备, 2:补报
      "OrganizationID": "C13362DB-BA91-41D0-9D3E-DDFC20B240F2",
      "WorkBeginDateStartDate": startTime,
      "WorkBeginDateEndDate": endTime,
      "pi_currentpage": "1",
      // "_": new Date().getTime()
    },
    proxy: {
      host,
      port,
    }
  }))

  for (let id = 0; id < rs.length; id++) {
    let r = rs[id]
    r.then(function(res) {
      printformat(res.data, startTime, endTime, id)
      let t = $('#log_text').text()
      $('#log_text').text('成功' + urls[id] + '\r\n' + t)
      sources.map((source, i) => {
        if (i != id) {
          source.cancel('1111', i)
        }
      })
    }).catch(err => {
      console.log(id)
      sources[id].cancel('没有通路', id)
      let t = $('#log_text').text()
      $('#log_text').text(t + urls[id] + ' ' + err + '\r\n')
    })
  }
}

let log = function(a, startTime, endTime) {
  console.log(a['单位'])
  console.log(a['特级动火'])
  console.log(a['一级动火'])
  console.log(a['二级动火'])
  console.log(a['受限'])
  console.log(a['盲板'])
  console.log(a['高处'])
  console.log(a['吊装'])
  console.log(a['临时用电'])
  console.log(a['动土'])
  console.log(a['断路'])
  console.log(a['检维修'])
  console.log(a['合计'])

  if (a['特级动火'] + a['一级动火'] + a['二级动火'] + a['受限'] + a['盲板'] + a['高处'] + a['吊装'] + a['临时用电'] + a['动土'] + a['断路'] + a['检维修'] != a['合计']) {
    alert('数量不对,失败')
    return;
  }

  if (a['单位'] != '乙烯分公司') {
    alert('公司不对,失败')
    return;
  }

  // let word_url = 'https://cube123.cn/wpsplugin/toolbox/jsplugins.xml'
  let word_url = `http://127.0.0.1:8010/word.php?workdata[]=${a['特级动火']}&workdata[]=${a['一级动火']}&workdata[]=${a['二级动火']}&workdata[]=${a['受限']}&workdata[]=${a['盲板']}&workdata[]=${a['高处']}&workdata[]=${a['吊装']}&workdata[]=${a['临时用电']}&workdata[]=${a['动土']}&workdata[]=${a['断路']}&workdata[]=${a['检维修']}&riqi=${new Date(startTime).getTime()/1000}`
  $('#word_url').text(word_url)
  // $('#word_url').html(`<a href="${word_url}" target="_blank" download>风险研判下载</a>`)

  let tb = $('.cube')
  if (tb.length <= 0) {
    tb = $('<div class="cube">')
    tb.appendTo('body')
  }

  tb.html(`
				<table style="text-align: center; width: 100%;" border="1">
					<thead>
						<tr class="header">
							<th>合计</th>
							<th>日期</th>
							<th>动火特级</th>
							<th>动火一级</th>
							<th>动火二级</th>
							<th>受限空间</th>
							<th class="tag" style="border-left: solid red 2px;">盲板</th>
							<th>高处</th>
							<th>吊装</th>
							<th>临时用电</th>
							<th class="tag" style="border-left: solid red 2px;">动土</th>
							<th>断路</th>
							<th>检维修</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>${a['合计']}</td>
							<td>${startTime + '至' + endTime}</td>
							<td>${a['特级动火']}</td>
							<td>${a['一级动火']}</td>
							<td>${a['二级动火']}</td>
							<td>${a['受限']}</td>
							<td class="tag" style="border-left: solid red 2px;">${a['盲板']}</td>
							<td>${a['高处']}</td>
							<td>${a['吊装']}</td>
							<td>${a['临时用电']}</td>
							<td class="tag" style="border-left: solid red 2px;">${a['动土']}</td>
							<td>${a['断路']}</td>
							<td>${a['检维修']}</td>
						</tr>
					</tbody>
				</table>
			`)
}

function printformat(res, startTime, endTime, id) {
  console.log(`成功${id}`)
  let dwp = DictWrap()

  let compute = function(k, v) {
    if (/无特殊/.test(k)) {
      dwp.convert('检维修', v)
    } else if (/(动火特级|特级动火)/.test(k)) {
      dwp.convert('特级动火', v)
    } else if (/(动火一级|一级动火)/.test(k)) {
      dwp.convert('一级动火', v)
    } else if (/(动火二级|二级动火)/.test(k)) {
      dwp.convert('二级动火', v)
    } else if (/受限/.test(k)) {
      dwp.convert('受限', v)
    } else if (/高处/.test(k)) {
      dwp.convert('高处', v)
    } else if (/盲板/.test(k)) {
      dwp.convert('盲板', v)
    } else if (/断路/.test(k)) {
      dwp.convert('断路', v)
    } else if (/动土/.test(k)) {
      dwp.convert('动土', v)
    } else if (/吊装/.test(k)) {
      dwp.convert('吊装', v)
    } else if (/临时用电/.test(k)) {
      dwp.convert('临时用电', v)
    } else if (/合计/.test(k)) {
      dwp.convert('合计', v)
    } else if (/单位/.test(k)) {
      dwp.result['单位'] = v
    }
  }

  let count = $(res).find('#C13362DB-BA91-41D0-9D3E-DDFC20B240F2 td')
  let headers = $(res).find('.header th')
  for (let i = 0; i < count.length; i++) {
    let k = $(headers[i]).text().replace(/\s+/g, '')
    let v = $(count[i]).text().replace(/\s+/g, '')
    compute(k, v)
  }
  log(dwp.result, startTime, endTime)
  console.table(dwp.result)
}

function 重点检维修分享() {
  if(!vip)return;
  let {curSheet, tbl, col, row} = 获取有效表位置()

  curSheet.Range(`${'D'.distance(col)}${row}`).ColumnWidth = 13.366666793823242
  curSheet.Range(`${'F'.distance(col)}${row}`).ColumnWidth = 28.375
  curSheet.Range(`${'H'.distance(col)}${row}`).ColumnWidth = 11.625
  curSheet.Range(`${'I'.distance(col)}${row}`).ColumnWidth = 14.858333587646484
  curSheet.Range(`${'J'.distance(col)}${row}`).ColumnWidth = 12.008333206176758
  curSheet.Range(`${'K'.distance(col)}${row}`).ColumnWidth = 16.625
  curSheet.Range(`${'L'.distance(col)}${row}`).ColumnWidth = 17
  curSheet.Range(`${'M'.distance(col)}${row}`).ColumnWidth = 5.074999809265137
  curSheet.Range(`${'N'.distance(col)}${row}`).ColumnWidth = 5.75

  //清除内容
  curSheet.Range(`${'K'.distance(col)}${row+1}:${'M'.distance(col)}` + (tbl.Rows.Count)).ClearContents()
  curSheet.Range(`${'M'.distance(col)}${row}`).Formula = '移动监控\n架设情况'
  curSheet.Range(`${'M'.distance(col)}${row+1}:${'M'.distance(col)}` + (tbl.Rows.Count)).Formula = 0
  curSheet.Range(`${'M'.distance(col)}${row+1}:${'M'.distance(col)}` + (tbl.Rows.Count)).NumberFormatLocal = "[=1]\"☑\";[=0]\"☐\";0;@" //设置单元格自定义格式:[=1]"☑";[=0]"☐";0;@
  // 数据有效性设置自定义公式:=IF(TRUE,OR(H2=0,H2=1),"Checkbox")

  //居中自动换行
  垂直水平居中自动换行(tbl)

  //删掉没有动火受限行,标记特级
  for (let i = 3, j = 0, id = 0; i <= tbl.Rows.Count; id++) {
    let tmp = curSheet.Rows.Item(i).Columns.Item("J".distance(col)).Text
		// curSheet.Rows.Item(i).Columns.Item("K".distance(col)).Select()
    // curSheet.Rows.Item(i).Columns.Item("A".distance(col)).Value2 = ""

    curSheet.Rows.Item(i).Columns.Item("N".distance(col)).Value2 = /是/.test(curSheet.Rows.Item(i).Columns.Item("N".distance(col)).Text)?1:''

    if (/(特级|受限)/.test(tmp)) {
      //涂黄
      背景填充(COLORS.Yellow_light, tbl.Rows.Item(i))
    }
    if (!/(动火|受限)/.test(tmp)) {
      // curSheet.Rows.Item(i).Delete()
      // continue
    } else {
      // 编辑序号
      j++;
      curSheet.Rows.Item(i).Columns.Item("A".distance(col)).Value2 = '' + j
    }
    i++
  }

  curSheet.Range(`${'B'.distance(col)}${row-1}`).UnMerge()
  curSheet.Range(`${'B'.distance(col)}:${'B'.distance(col)},${'C'.distance(col)}:${'C'.distance(col)},${'E'.distance(col)}:${'E'.distance(col)},${'G'.distance(col)}:${'G'.distance(col)}`).Delete()

  curSheet.Range(`${'B'.distance(col)}${row-1}:${'J'.distance(col)}${row-1}`).Merge()
  curSheet.Range(`${'B'.distance(col)}${row-1}`).Formula = curSheet.Range('B1').Formula
  curSheet.Range(`${'A'.distance(col)}:${'A'.distance(col)}`).Delete()

  //设置第二行自动筛选
  curSheet.Rows.Item(2).AutoFilter(undefined, undefined, WPS_Enum.xlAnd, undefined, undefined)

  垂直水平居中自动换行(curSheet.Range(`${'F'.distance(col)}${row+1}:${'H'.distance(col)}`.distance(col)))


  // 合并居中单元格(Application.ActiveSheet.Range('C1:J1'), Application.ActiveSheet.Range('B1').Value2)
  // curSheet.Columns.Item("H:H").Insert(-4159, undefined)
  // curSheet.Range("H2").ColumnWidth = 20
  // curSheet.Range("H2").Formula = "动火、受限作业票";
}

function 汇总格式(pattern_str = '(动火|受限)') {
  pattern_str = '.*'
  if(!vip)return;
  let {curSheet, tbl, col, row} = 获取有效表位置('序号')
  let tejinum =  0,
    yijinum = 0,
    erjinum = 0,
    shouxiannum = 0,
    minghuonum = 0,
    feiminghuonum = 0

  //保留动火受限行
  for (let i = row+1, j = 1; i <= tbl.Rows.Count;) {

    let tmp = curSheet.Rows.Item(i).Columns.Item(JIBIE_COL.distance(col)).Text
    let minghuo_state = curSheet.Rows.Item(i).Columns.Item(MINGHUO_COL.distance(col)).Text

    // if (/特级/.test(tmp) && /动火/.test(tmp) && /受限/.test(tmp)){
    //   背景填充(COLORS.Red, tbl.Rows.Item(i))
    // } else if(/受限/.test(tmp)) {
    //   // tbl.Rows.Item(i).Columns.Item("A").Value2 = "**"
    //   背景填充(COLORS.Lavender, tbl.Rows.Item(i))
    // } else if (/特级/.test(tmp)){
    //   // tbl.Rows.Item(i).Columns.Item("A").Value2 = "**"
    //   背景填充(COLORS.Yellow_light, tbl.Rows.Item(i))
    // }

    if(/特级/.test(tmp)){
      tejinum++
    }
    if(/一级动火/.test(tmp)){
      yijinum++
    }
    if(/二级动火/.test(tmp)){
      erjinum++
    }
    if(/受限/.test(tmp)){
      shouxiannum++
    }
    if(/动火/.test(tmp)){
      if(/非明火/.test(minghuo_state)){
        feiminghuonum++
      }else{
        minghuonum++
      }
    }

    // 删除动火受限以外的作业
    if (new RegExp(pattern_str, 'g').test(tmp)) {

      // 级别中删除动火受限以外的文字
      tmp = tmp.replace(/作业/g,'').split(',').filter((item)=>{
        return new RegExp(pattern_str, 'g').test(item)
      }).join(',')

      curSheet.Rows.Item(i).Columns.Item(BIAOJI_COL.distance(col)).Value2 = '乙烯'
      curSheet.Rows.Item(i).Columns.Item(ID_COL.distance(col)).Value2 = j++
      curSheet.Rows.Item(i).Columns.Item(BIANHAO_COL.distance(col)).Value2 = tmp


    } else {
      curSheet.Rows.Item(i).Delete()
      continue
      //因为删除之后,下面行上移,所以i不用改变
    }
    debugger
    i++
  }

  curSheet.Range('A2').Value2 = '申报单位'
  curSheet.Range('B2').Value2 = '序号'
  curSheet.Range('C2').Value2 = '作业级别'
  curSheet.Range('D:D,F:F,S:V').Delete()

  try{
    let tb = $('.cube')
    if (tb.length <= 0) {
      tb = $('<div class="cube">')
      tb.appendTo('body')
    }

    tb.html(`
      <table style="text-align: center; width: 100%;" border="1">
        <tbody>
          <tr>
            <td>乙烯合计</td>
            <td>明火</td>
            <td>${minghuonum}</td>
            <td>非明火</td>
            <td>${feiminghuonum}</td>
            <td>受限</td>
            <td>${shouxiannum}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan=3>汇总</td>
            <td colspan=15>2024年×月×日（周×）</td>
          </tr>
          <tr>
            <td colspan=2>特级动火</td>
            <td colspan=1>${tejinum}</td>
            <td colspan=1>一级动火</td>
            <td colspan=1>${yijinum}</td>
            <td colspan=1>二级动火</td>
            <td colspan=1>${erjinum}</td>
            <td colspan=2>受限</td>
            <td colspan=1>${shouxiannum}</td>
            <td colspan=1>明火作业</td>
            <td colspan=2>${minghuonum}</td>
            <td colspan=1>非明火作业</td>
            <td colspan=1>${feiminghuonum}</td>
          </tr>
          <tr>
            <td colspan=15>其他单位未上报</td>
          </tr>
        </tbody>
      </table>
    `)
  }catch(e){
    // console.log(e)
    alert(e)
  }

  // Application.Cells(tbl.Rows.Count + 1, "C").Rows.AutoFit()
  curSheet.Columns.Item("A:XFC,XFD:XFD").AutoFit();

  return tbl
}
  // curSheet.Columns.Item("D:D").Insert(-4159)
  // curSheet.Columns.Item("E:E").Insert(-4161)
  // curSheet.ActiveSheet.Range("C:C,S:S,T:T,U:U,V:V").Delete()



function 检维修日表() {
  if(!vip)return;
  let {curSheet, tbl, row, col} = 获取有效表位置()

  //居中自动换行
  垂直水平居中自动换行(tbl)

  // curSheet.Range("A2".distance(col-1)).ColumnWidth = 3.25
  curSheet.Range(`${"B".distance(col-1)}2`).ColumnWidth = 4.5
  curSheet.Range(`${"C".distance(col-1)}2`).ColumnWidth = 9.875
  curSheet.Range(`${"D".distance(col-1)}2`).ColumnWidth = 16.625
  curSheet.Range(`${"E".distance(col-1)}2`).ColumnWidth = 8.375
  curSheet.Range(`${"F".distance(col-1)}2`).ColumnWidth = 17.375
  curSheet.Range(`${"G".distance(col-1)}2`).ColumnWidth = 28.375
  curSheet.Range(`${"H".distance(col-1)}2`).ColumnWidth = 8.375
  curSheet.Range(`${"I".distance(col-1)}2`).ColumnWidth = 11.625
  curSheet.Range(`${"J".distance(col-1)}2`).ColumnWidth = 12.75
  curSheet.Range(`${"K".distance(col-1)}2`).ColumnWidth = 9.625
  curSheet.Range(`${"L".distance(col-1)}2`).ColumnWidth = 16.625
  curSheet.Range(`${"M".distance(col-1)}2`).ColumnWidth = 17
  curSheet.Range(`${"N".distance(col-1)}2`).ColumnWidth = 9.875
  curSheet.Range(`${"O".distance(col-1)}2`).Width = 4.5

  // curSheet.Range("A2").ColumnWidth = 3.25
  // curSheet.Range("B2").ColumnWidth = 4.5
  // curSheet.Range("C2").ColumnWidth = 9.875
  // curSheet.Range("D2").ColumnWidth = 16.625
  // curSheet.Range("E2").ColumnWidth = 8.375
  // curSheet.Range("F2").ColumnWidth = 17.375
  // curSheet.Range("G2").ColumnWidth = 28.375
  // curSheet.Range("H2").ColumnWidth = 8.375
  // curSheet.Range("I2").ColumnWidth = 11.625
  // curSheet.Range("J2").ColumnWidth = 12.75
  // curSheet.Range("K2").ColumnWidth = 9.625
  // curSheet.Range("L2").ColumnWidth = 16.625
  // curSheet.Range("M2").ColumnWidth = 17
  // curSheet.Range("N2").ColumnWidth = 9.875
  // curSheet.Range("O2").Width = 4.5

  //删掉无特殊作业行
  for (let i = row+1, j = 0; i <= tbl.Rows.Count;) {

    let tmp = curSheet.Rows.Item(i).Columns.Item("K".distance(col-1)).Text

    // 修改备注栏
    let beizhu = curSheet.Rows.Item(i).Columns.Item("O".distance(col-1)).Text
    curSheet.Rows.Item(i).Columns.Item("O".distance(col-1)).Value2 = /是/.test(beizhu)?'是':''

    // if(/无特殊/g.test(tmp)){
	   //  tbl.Rows.Item(i).Delete()
	   //  continue //删除操作后,后面的行或者列前移,位置发生变化; j是用来编辑新序号的
    // }

    if (/(动火|受限|高处四级)/g.test(tmp)) {
      背景填充(COLORS.Yellow_light, curSheet.Rows.Item(i))
    }

    if (/(特级|受限)/g.test(tmp)) {
      curSheet.Rows.Item(i).Columns.Item("B".distance(col-1)).Value2 = "**"
      curSheet.Rows.Item(i).Columns.Item("B".distance(col-1)).Font.Bold = true
    }
    i++
  }

  curSheet.Range(`${"C".distance(col-1)}:${"C".distance(col-1)}, ${"L".distance(col-1)}:${"L".distance(col-1)}, ${"M".distance(col-1)}:${"M".distance(col-1)}, ${"F".distance(col-1)}:${"F".distance(col-1)}`).EntireColumn.Hidden = true
  // curSheet.Range("A:A,C:C,L:L,M:M,F:F").EntireColumn.Hidden = true
  curSheet.PageSetup.Orientation = WPS_Enum.xlLandscape
  curSheet.PageSetup.Zoom = 100;

  // curSheet.PrintPreview(undefined);
  // curSheet.Columns.Item("G:G").Insert(-4159, undefined)
  // curSheet.Range("G2").ColumnWidth = 28.125
  // curSheet.Range("G2").Formula = "动火、受限作业票";

  // tbl.Select()
}


/*本示例选定工作表 Sheet1 上的当前区域。*/
function 选择表格有效区(sh = "Sheet1") {
  Application.Worksheets.Item(sh).Activate()
  Application.ActiveCell.CurrentRegion.Select()
}

/*本示例假定在 Sheet1 中有一个包含标题行的表。本示例选定该表，但不选定标题行。运行本示例之前，活动单元格必须处于该表中。*/
function 选择表格有效区并下移一行() {
  let tbl = Application.ActiveCell.CurrentRegion
  tbl.Offset(1, 0).Resize(tbl.Rows.Count - 1, tbl.Columns.Count).Select()
}

function 垂直水平居中自动换行(target = Application.Selection) {
  target.VerticalAlignment = WPS_Enum.xlVAlignCenter;
  target.HorizontalAlignment = WPS_Enum.xlHAlignCenter;
  target.WrapText = true;
}

function 自动行高() {
  Application.Selection.Rows.AutoFit();
}

function 自动列宽() {
  Application.Selection.Columns.AutoFit();
}

function 旧接龙统计() {
  if(!vip)return;
  let flag = 0
  let dict = {
    "乙烯车间": 1,
    "聚乙烯一车间": 2,
    "聚丙烯一车间": 3,
    "聚丙烯二车间": 3,
    "苯乙烯一车间": 4,
    "加氢抽提联合车间": 5,
    "聚苯乙烯车间": 6,
    "水汽车间": 7,
    "储运车间": 8,
    "仪表车间": 9,
    "电气车间": 10,
    "成品车间": 11
  }

  let {curSheet, tbl, row, col} = 获取有效表位置()

  let line = tbl.Rows.Count
  let s = '';
  for (let i = row + 1; i <= tbl.Rows.Count; i++) {

    (obj => {

      let id = obj.Item("A").Text.trim(),
        chejian = obj.Item("D").Text.replace(/[\r\n\t,，]/g, '').replace('车间', ''),
        workname = obj.Item("C").Text.replace(/[\r\n\t,，]/g, ''),
        content = obj.Item("C").Text.replace(/[\r\n\t,，]/g, ','),
        pos = obj.Item("I").Text.replace(/[\r\n\t,，]/g, ','),
        level = obj.Item("J").Text.replace(/[\r\n\t,，]/g, ',')
        if(/聚丙/.test(chejian)){
          delete dict['聚丙烯一车间']
          delete dict['聚丙烯二车间']
        }else{
          delete dict[obj.Item("D").Text.replace(/[\r\n\t,，]/g, '')]
          chejian = chejian.replace(/[一二]/,'')
        }
      // chejian = chejian.replace('聚丙烯一','聚丙烯').replace('聚丙烯二','聚丙烯')
      let tmp = `${level.replace(/[^火受盲高吊临土断无]/g, '')}-` + chejian + workname
			tmp = tmp.replace(/[ *]/g,'')

      if(!flag){
        s += tmp + '\r\n'
      }else{
        s += id + (tmp.length > 20 ? `*${tmp.length - 20}` : '') + '\t\t' + tmp + '\r\n'
      }

    })(tbl.Rows.Item(i).Columns)
  }

  let outname = new Date(tbl.Rows.Item(line).Columns.Item("L").Text).format('yyyy-MM-dd').replace(/-/g, '')
  let ts = new Date(tbl.Rows.Item(line).Columns.Item("L").Text).format('yyyy-MM-dd')
  ts = new Date(ts).getTime()/1000
  let excel_url = `http://localhost:8010/tp6/public/excel/get?n[]=${Object.values(dict).join('&n[]=')}&outname=${outname}&ts=${ts}`
  let excel_image_url = `http://localhost:8010/tp6/public/Excel/getimage?n[]=${Object.values(dict).join('&n[]=')}&outname=${outname}&ts=${ts}`

  if(Object.values(dict).length==0){
    excel_url = `http://localhost:8010/tp6/public/excel/get?outname=${outname}&ts=${ts}`
    excel_image_url = `http://localhost:8010/tp6/public/Excel/getimage?outname=${outname}&ts=${ts}`
  }

  try{
    $('#word_url').text('导出签到表')
    $('#word_url')[0].dataset.url = excel_url
    $('#signexport').text('生成签到表')
    $('#signexport')[0].dataset.url = excel_image_url
    document.getElementById("text_p1").innerText = excel_url + '\r\n' + excel_image_url
    // document.getElementById("text_p2").innerText = excel_image_url

    if(vip){
      if(editor==''){
            editor = CodeMirror({
              parent: document.getElementById("text_p1"),
              doc: s,
              // doc: Object.keys(dict).join(',') + '\r\n' + excel_url + '\r\n' + s,
              // BlankLineNums: 2,
            })
      }else{
        editor.dispatch({changes: {from: 0, to: editor.state.doc.length, insert: s}})
      }
    }else{
      document.getElementById("text_p1").innerText = (Object.keys(dict).join(',') + '\r\n' + excel_url + '\r\n' + s)
    }
  }catch(e){}
  return s

  // document.getElementById("text_p").innerText = (Object.keys(dict).join(',') + '\r\n' + 'http://127.0.0.1:8010/excel.php?n[]=' + Object.values(dict).join('&n[]=')+ `&outname=${outname}` + `&ts=${ts}\r\n` + s)
  // shellExecuteByOAAssist('http://127.0.0.1:8010/excel.php?n[]=' + Object.values(dict).join('&n[]=') + `&outname=${outname}`)
  return tbl;
}

function 接龙统计() {
  if(!vip)return;
  let flag = 0
  let dict = {
    "乙烯车间": 1,
    "聚乙烯一车间": 2,
    "聚丙烯一车间": 3,
    "聚丙烯二车间": 3,
    "苯乙烯一车间": 4,
    "加氢抽提联合车间": 5,
    "聚苯乙烯车间": 6,
    "水汽车间": 7,
    "储运车间": 8,
    "仪表车间": 9,
    "电气车间": 10,
    "成品车间": 11
  }

  let {curSheet, tbl, row, col} = 获取有效表位置('序号')

  let line = tbl.Rows.Count
  let s = '';
  for (let i = row + 1; i <= tbl.Rows.Count; i++) {

    (obj => {
      let id = obj.Item(ID_COL).Text.trim(),
        chejian = obj.Item(CHEJIAN_COL).Text.replace(/[\r\n\t,，]/g, '').replace('车间', ''),
        workname = obj.Item(WORKNAME_COL).Text.replace(/[\r\n\t,，]/g, ''),
        content = obj.Item(CONTENT_COL).Text.replace(/[\r\n\t,，]/g, ','),
        pos = obj.Item(POS_COL).Text.replace(/[\r\n\t,，]/g, ','),
        level = obj.Item(JIBIE_COL).Text.replace(/[\r\n\t,，]/g, ',')
        if(/聚丙/.test(chejian)){
          delete dict['聚丙烯一车间']
          delete dict['聚丙烯二车间']
        }else{
          delete dict[obj.Item(CHEJIAN_COL).Text.replace(/[\r\n\t,，]/g, '')]
          chejian = chejian.replace(/[一二]/,'')
        }
      // chejian = chejian.replace('聚丙烯一','聚丙烯').replace('聚丙烯二','聚丙烯')
      let tmp = `${level.replace(/[^火受盲高吊临土断无检]/g, '')}-` + chejian + workname
      tmp = tmp.replace(/[ *]/g,'')

      if(!flag){
        s += tmp + '\r\n'
      }else{
        s += id + (tmp.length > 20 ? `*${tmp.length - 20}` : '') + '\t\t' + tmp + '\r\n'
      }

    })(tbl.Rows.Item(i).Columns)
  }

  let outname = new Date(tbl.Rows.Item(line).Columns.Item(END_T_COL).Text).format('yyyy-MM-dd').replace(/-/g, '')
  let ts = new Date(tbl.Rows.Item(line).Columns.Item(END_T_COL).Text).format('yyyy-MM-dd')
  ts = new Date(ts).getTime()/1000
  let excel_url = `http://localhost:8010/tp6/public/excel/get?n[]=${Object.values(dict).join('&n[]=')}&outname=${outname}&ts=${ts}`
  let excel_image_url = `http://localhost:8010/tp6/public/Excel/getimage?n[]=${Object.values(dict).join('&n[]=')}&outname=${outname}&ts=${ts}`

  if(Object.values(dict).length==0){
    excel_url = `http://localhost:8010/tp6/public/excel/get?outname=${outname}&ts=${ts}`
    excel_image_url = `http://localhost:8010/tp6/public/Excel/getimage?outname=${outname}&ts=${ts}`
  }

  try{
    $('#word_url').text('导出签到表')
    $('#word_url')[0].dataset.url = excel_url
    $('#signexport').text('生成签到表')
    $('#signexport')[0].dataset.url = excel_image_url
    document.getElementById("text_p1").innerText = excel_url + '\r\n' + excel_image_url
    // document.getElementById("text_p2").innerText = excel_image_url

    if(vip){
      if(editor==''){
            editor = CodeMirror({
              parent: document.getElementById("text_p1"),
              doc: s,
              // doc: Object.keys(dict).join(',') + '\r\n' + excel_url + '\r\n' + s,
              // BlankLineNums: 2,
            })
      }else{
        editor.dispatch({changes: {from: 0, to: editor.state.doc.length, insert: s}})
      }
    }else{
      document.getElementById("text_p1").innerText = (Object.keys(dict).join(',') + '\r\n' + excel_url + '\r\n' + s)
    }
  }catch(e){}
  return s

  // document.getElementById("text_p").innerText = (Object.keys(dict).join(',') + '\r\n' + 'http://127.0.0.1:8010/excel.php?n[]=' + Object.values(dict).join('&n[]=')+ `&outname=${outname}` + `&ts=${ts}\r\n` + s)
  // shellExecuteByOAAssist('http://127.0.0.1:8010/excel.php?n[]=' + Object.values(dict).join('&n[]=') + `&outname=${outname}`)
  return tbl;
}

function 旧早会统计() {
  if(!vip)return;
  let {curSheet, tbl, row, col} = 获取有效表位置()

  let s = '', teji = '',
    levels = [],
    maptemp = {
      "受限空间": 0,
      "动火特级": 0,
      "动火一级": 0,
      "动火二级": 0
    },
    id = 1, id1 = 0

  for (let i = row+1; i <= tbl.Rows.Count; id++, i++) {
    (obj => {
      let workshop = obj.Item("D".distance(col)).Text.replace(/[\r\n\t]/g, ','),
        content = obj.Item("F".distance(col)).Text.replace(/[\r\n\t]/g, ','),
        pos = obj.Item("I".distance(col)).Text.replace(/[\r\n\t]/g, ','),
        level = obj.Item("J".distance(col)).Text.replace(/[\r\n\t,，]/g, ',').replace('高处特级', '高处四级')
      levels.push(level)
      if (/(受限|动火)/.test(level)){
        if (/(磨|焊|割)/.test(content)) {
          //明火土黄色FFBF8F
          背景填充(COLORS.Yellow_deep, tbl.Rows.Item(i))
          id1++
        }
      }
      if(/(动火特级|受限)/.test(level)){
        teji += id + '、' + workshop + '\r\n' + pos + ',' + content + '。涉及' + level + ';\r\n'
      }
      if(!/聚丙/.test(workshop))
        workshop = workshop.replace(/[一二]/,'')

      s += id + '、' + workshop + '\r\n' + pos + ',' + content + '。涉及' + level + ';\r\n'
    })(curSheet.Rows.Item(i).Columns)
  }

  levels = levels.map((item) => {
    return item.replace(/\(.*\)/g, '')
  }).join(',')

  levels = levels.split(/[,，]/).reduce(function(a,b,c){
    if(b=='动土' || b=='断路')
      b = b + '作业'

      if(a[b]==undefined){
        a[b] = 0
      }
      a[b] += 1
      return a;
  },{})

  // 删除作业数量0的key
  // console.log(Object.keys(levels).filter((key)=>levels[key]!=0).reduce((aac,key)=>({ ...aac, [key]: levels[key] }),{}))

  levels = Object.keys(maptemp).filter((key)=>levels[key]!=undefined).map((key)=>(`${key} ${levels[key]} 项`) ).join('\r\n')

  s = s.replace(/[\r\n]*$/g,'').replace(/[\.。]+/g,'。').replace(/;$/,'。')

  let line = tbl.Rows.Count
  let ts = new Date(curSheet.Rows.Item(line).Columns.Item("L".distance(col)).Text).format('M月d日')

  // s.match(/^\d+\**\d*/gm)

  try{
    document.getElementById("text_p1").innerText =  `${ts}动火、受限空间作业共计 ${id-1} 项\r\n${levels}\r\n涉及电气焊等明火作业 ${id1} 项, 防腐保温类 ${id-1-id1} 项。\r\n\r\n动火特级、受限空间作业：\r\n${teji}\r\n重点关注：\r\n`
    // document.getElementById("text_p1").innerText =  `${ts}动火、受限空间作业共计 ${id-1} 项\r\n${levels}\r\n涉及电气焊等明火作业 ${id1} 项, 防腐保温类 ${id-1-id1} 项。\r\n\r\n动火特级、受限空间作业：\r\n${teji}\r\n重点关注：\r\n${s}`
  }catch(e){}

  return tbl;
  // let curSheet = Application.EtApplication().ActiveSheet;
  // if (curSheet) {
  //  curSheet.Cells.Item(1, 1).Formula = "Hello, wps加载项!" + curSheet.Cells.Item(1, 1).Formula
  // }
  // Application.Cells(tbl.Rows.Count + 1, "C").Value2 = s
  // Application.Cells(tbl.Rows.Count + 1, "C").HorizontalAlignment = wps.Enum.xlHAlignLeft
  // Application.Cells(tbl.Rows.Count + 1, "C").Rows.AutoFit()
  //  级别:
  //  let line = tbl.Rows.Count
  //  let _tmp = tbl.Range("J3:J"+line)
  //  for(let i=1; i<=_tmp.Count; i++){
  //      let t = _tmp.Rows.Item(i).Text
  //      t = t.replace(/[\r\n]+/g,'，')
  //      level.push(t)
  //  }
}

function 早会统计() {
  if(!vip)return;
  let {curSheet, tbl, row, col} = 获取有效表位置('序号')

  let s = '', teji = '',
    levels = [],
    maptemp = {
      "受限空间": 0,
      "特级动火": 0,
      "一级动火": 0,
      "二级动火": 0
    },
    id = 1, id1 = 0, minghuo_worklist = ''

  for (let i = row+1; i <= tbl.Rows.Count; id++, i++) {
    (obj => {
      let chejian = obj.Item(CHEJIAN_COL.distance(col)).Text.replace(/[\r\n\t]/g, ','),
        content = obj.Item(CONTENT_COL.distance(col)).Text.replace(/[\r\n\t]/g, ','),
        pos = obj.Item(POS_COL.distance(col)).Text.replace(/[\r\n\t]/g, ','),
        level = obj.Item(JIBIE_COL.distance(col)).Text.replace(/[\r\n\t,，]/g, ',').replace('高处特级', '高处四级'),
        minghuo_state = obj.Item(MINGHUO_COL.distance(col)).Text

      levels.push(level)

      if(/(特级动火|受限)/.test(level)){
        teji += id + '、' + chejian + '\r\n' + pos + ',' + content + '。涉及' + level + ';\r\n'
      }

      if(!/聚丙/.test(chejian))
        chejian = chejian.replace(/[一二]/,'')

      if (/(受限|动火)/.test(level)){
        if (/(磨|焊|割)/.test(content) || (!/非明火/.test(minghuo_state))) {
          背景填充(COLORS.Yellow_deep, tbl.Rows.Item(i))
          id1++
          minghuo_worklist += id1 + '、' + chejian + '\r\n' + pos + ',' + content + '。涉及' + level + ';\r\n'
        }
      }

      s += id + '、' + chejian + '\r\n' + pos + ',' + content + '。涉及' + level + ';\r\n'
    })(curSheet.Rows.Item(i).Columns)
  }

  levels = levels.map((item) => {
    return item.replace(/\(.*\)/g, '')
  }).join(',')

  levels = levels.split(/[,，]/).reduce(function(a,b,c){
    if(b=='动土' || b=='断路')
      b = b + '作业'

      if(a[b]==undefined){
        a[b] = 0
      }
      a[b] += 1
      return a;
  },{})

  // 删除作业数量0的key
  // console.log(Object.keys(levels).filter((key)=>levels[key]!=0).reduce((aac,key)=>({ ...aac, [key]: levels[key] }),{}))

  levels = Object.keys(maptemp).filter((key)=>levels[key]!=undefined).map((key)=>(`${key} ${levels[key]} 项`) ).join('\r\n')

  s = s.replace(/[\r\n]*$/g,'').replace(/[\.。]+/g,'。').replace(/;$/,'。')

  let line = tbl.Rows.Count
  let ts = new Date(curSheet.Rows.Item(line).Columns.Item(END_T_COL.distance(col)).Text).format('M月d日')

  // s.match(/^\d+\**\d*/gm)

  try{
    document.getElementById("text_p1").innerText =  `${ts}动火、受限空间作业共计 ${id-1} 项\r\n${levels}\r\n涉及电气焊等明火作业 ${id1} 项, 防腐保温类 ${id-1-id1} 项。\r\n\r\n动火特级、受限空间作业：\r\n${teji}\r\n重点关注(明火作业)：\r\n` + minghuo_worklist
    // document.getElementById("text_p1").innerText =  `${ts}动火、受限空间作业共计 ${id-1} 项\r\n${levels}\r\n涉及电气焊等明火作业 ${id1} 项, 防腐保温类 ${id-1-id1} 项。\r\n\r\n动火特级、受限空间作业：\r\n${teji}\r\n重点关注：\r\n${s}`
  }catch(e){}

  return tbl;
  // let curSheet = Application.EtApplication().ActiveSheet;
  // if (curSheet) {
  //  curSheet.Cells.Item(1, 1).Formula = "Hello, wps加载项!" + curSheet.Cells.Item(1, 1).Formula
  // }
  // Application.Cells(tbl.Rows.Count + 1, "C").Value2 = s
  // Application.Cells(tbl.Rows.Count + 1, "C").HorizontalAlignment = wps.Enum.xlHAlignLeft
  // Application.Cells(tbl.Rows.Count + 1, "C").Rows.AutoFit()
  //  级别:
  //  let line = tbl.Rows.Count
  //  let _tmp = tbl.Range("J3:J"+line)
  //  for(let i=1; i<=_tmp.Count; i++){
  //      let t = _tmp.Rows.Item(i).Text
  //      t = t.replace(/[\r\n]+/g,'，')
  //      level.push(t)
  //  }
}

function 作业统计() {
  if(!vip)return;
  let {curSheet, tbl, row, col} = 获取有效表位置('序号')

  let s = '',
    levels = [],
    maptemp = {
      "受限空间": 0,
      "特级动火": 0,
      "一级动火": 0,
      "二级动火": 0,
      "Ⅰ级高处": 0,
      "Ⅱ级高处": 0,
      "Ⅲ级高处": 0,
      "Ⅳ级高处": 0,
      "盲板抽堵": 0,
      "断路作业": 0,
      "动土作业": 0,
      "临时用电": 0,
      "一级吊装": 0,
      "二级吊装": 0,
      "三级吊装": 0,
      "检维修": 0,
    },
    id = 1,
    minghuonum = 0

  for (let i = row+1; i <= tbl.Rows.Count; id++,
    i++) {
    (obj => {
      let chejian = obj.Item(CHEJIAN_COL.distance(col)).Text.replace(/[\r\n\t]/g, ','),
        content = obj.Item(CONTENT_COL.distance(col)).Text.replace(/[\r\n\t]/g, ','),
        pos = obj.Item(POS_COL.distance(col)).Text.replace(/[\r\n\t]/g, ','),
        level = obj.Item(JIBIE_COL.distance(col)).Text.replace(/[\r\n\t,，]/g, ',').replace('高处特级', '高处四级'),
        minghuo_state = obj.Item(MINGHUO_COL.distance(col)).Text

        content = content.replace(/\s/g, '')
        pos = pos.replace(/\s/g, '')

      if(!/聚丙/.test(chejian))
        chejian = chejian.replace(/[一二]/,'')

      if(/聚丙/.test(chejian)){
        chejian = chejian.replace('车间','')
        content = chejian + '装置,' + content
        chejian = chejian.replace(/[一二]/,'车间')
      }

      if(/火/.test(level)){
        if(/非明火/.test(minghuo_state)){
          // feiminghuonum++
        }else{
          minghuonum++
        }
      }

      levels.push(level)
      s += id + '、' + chejian + '\r\n' + pos + ',' + content + '。涉及' + level + ';\r\n'
    })(curSheet.Rows.Item(i).Columns)
  }

  levels = levels.map((item) => {
    return item.replace(/\(.*\)/g, '')
  }).join(',')

  levels = levels.split(/[,，]/).reduce(function(a,b,c){
    if(b=='动土' || b=='断路')
      b = b + '作业'

      // a[b] += 1

      if(a[b]==undefined){
        a[b] = 0
      }
      a[b] += 1
      return a;
  },{})

  // 删除作业数量0的key
  // console.log(Object.keys(levels).filter((key)=>levels[key]!=0).reduce((aac,key)=>({ ...aac, [key]: levels[key] }),{}))

  // 数量汇总
  // levels = Object.keys(maptemp).filter((key)=>levels[key]!=undefined).map((key)=>(`${key} ${levels[key]} 项`) ).join(', ')
  levels = Object.keys(levels).filter(key=>/[火受]/.test(key)).map(key=>`${key} ${levels[key]} 项`).join(', ')

  s = s.replace(/[\r\n]*$/g,'').replace(/[\.。]+/g,'。').replace(/;$/,'。')

  let line = tbl.Rows.Count
  let ts = new Date(curSheet.Rows.Item(line).Columns.Item(END_T_COL.distance(col)).Text).format('M月d日')

  // s.match(/^\d+\**\d*/gm)

  try{
    document.getElementById("text_p1").innerText = `${ts}乙烯分公司动火、受限作业：\r\n${s}\r\n\r\n${levels}, 明火 ${minghuonum} 处`
    // document.getElementById("text_p1").innerText = `${ts}乙烯分公司检维修作业：\r\n${s}\r\n\r\n其中 ${levels}，共计${id-1}项。`
  }catch(e){}

  return tbl;
  // let curSheet = Application.EtApplication().ActiveSheet;
  // if (curSheet) {
  //  curSheet.Cells.Item(1, 1).Formula = "Hello, wps加载项!" + curSheet.Cells.Item(1, 1).Formula
  // }
  // Application.Cells(tbl.Rows.Count + 1, "C").Value2 = s
  // Application.Cells(tbl.Rows.Count + 1, "C").HorizontalAlignment = wps.Enum.xlHAlignLeft
  // Application.Cells(tbl.Rows.Count + 1, "C").Rows.AutoFit()
  //  级别:
  //  let line = tbl.Rows.Count
  //  let _tmp = tbl.Range("J3:J"+line)
  //  for(let i=1; i<=_tmp.Count; i++){
  //      let t = _tmp.Rows.Item(i).Text
  //      t = t.replace(/[\r\n]+/g,'，')
  //      level.push(t)
  //  }
}

function 旧作业统计() {
  if(!vip)return;
  let {curSheet, tbl, row, col} = 获取有效表位置()

  let s = '',
    levels = [],
    maptemp = {
      "受限空间": 0,
      "动火特级": 0,
      "动火一级": 0,
      "动火二级": 0,
      "高处一级": 0,
      "高处二级": 0,
      "高处三级": 0,
      "高处四级": 0,
      "盲板抽堵一级": 0,
      "盲板抽堵二级": 0,
      "断路作业": 0,
      "动土作业": 0,
      "临时用电": 0,
      "吊装一级": 0,
      "吊装二级": 0,
      "吊装三级": 0,
      "无特殊作业": 0,
    },
    id = 1

  for (let i = row+1; i <= tbl.Rows.Count; id++,
    i++) {
    (obj => {
      let chejian = obj.Item("D".distance(col)).Text.replace(/[\r\n\t]/g, ','),
        content = obj.Item("F".distance(col)).Text.replace(/[\r\n\t]/g, ','),
        pos = obj.Item("I".distance(col)).Text.replace(/[\r\n\t]/g, ','),
        level = obj.Item("J".distance(col)).Text.replace(/[\r\n\t,，]/g, ',').replace('高处特级', '高处四级')
        content = content.replace(/\s/g, '')
        pos = pos.replace(/\s/g, '')

      if(!/聚丙/.test(chejian))
        chejian = chejian.replace(/[一二]/,'')

      if(/聚丙/.test(chejian)){
        chejian = chejian.replace('车间','')
        content = chejian + '装置,' + content
        chejian = chejian.replace(/[一二]/,'车间')
      }

      levels.push(level)
      s += id + '、' + chejian + '\r\n' + pos + ',' + content + '。涉及' + level + ';\r\n'
    })(curSheet.Rows.Item(i).Columns)
  }

  levels = levels.map((item) => {
    return item.replace(/\(.*\)/g, '')
  }).join(',')

  levels = levels.split(/[,，]/).reduce(function(a,b,c){
    if(b=='动土' || b=='断路')
      b = b + '作业'

      // a[b] += 1

      if(a[b]==undefined){
        a[b] = 0
      }
      a[b] += 1
      return a;
  },{})

  // 删除作业数量0的key
  // console.log(Object.keys(levels).filter((key)=>levels[key]!=0).reduce((aac,key)=>({ ...aac, [key]: levels[key] }),{}))

  levels = Object.keys(maptemp).filter((key)=>levels[key]!=undefined).map((key)=>(`${key} ${levels[key]} 项`) ).join(', ')

  s = s.replace(/[\r\n]*$/g,'').replace(/[\.。]+/g,'。').replace(/;$/,'。')

	let line = tbl.Rows.Count
	let ts = new Date(curSheet.Rows.Item(line).Columns.Item("L".distance(col)).Text).format('M月d日')

  // s.match(/^\d+\**\d*/gm)

  try{
    document.getElementById("text_p1").innerText = `${ts}乙烯分公司检维修作业：\r\n${s}\r\n\r\n其中涉及${levels}，共计${id-1}项。`
  }catch(e){}

  return tbl;
  // let curSheet = Application.EtApplication().ActiveSheet;
  // if (curSheet) {
  // 	curSheet.Cells.Item(1, 1).Formula = "Hello, wps加载项!" + curSheet.Cells.Item(1, 1).Formula
  // }
  // Application.Cells(tbl.Rows.Count + 1, "C").Value2 = s
  // Application.Cells(tbl.Rows.Count + 1, "C").HorizontalAlignment = wps.Enum.xlHAlignLeft
  // Application.Cells(tbl.Rows.Count + 1, "C").Rows.AutoFit()
  //  级别:
  //	let line = tbl.Rows.Count
  //  let _tmp = tbl.Range("J3:J"+line)
  //  for(let i=1; i<=_tmp.Count; i++){
  //      let t = _tmp.Rows.Item(i).Text
  //      t = t.replace(/[\r\n]+/g,'，')
  //      level.push(t)
  //  }
}

async function 线上风险研判() {
  if(!vip)return;
  $getWork(-1);
}

function 新离线风险研判() {
  console.log(new Date().toLocaleDateString())
  if(!vip){
    return
  }
  let {curSheet, tbl, row, col} = 获取有效表位置('序号')
  let logmsg = []

  let checkfun = (obj)=>{
    let {chejian, pos, fuzeren, person, jiezhi, jibie, start_t, end_t, content, minghuo_state, luxiang, workname, i, gudingshexiangtou} = obj
    let columns = curSheet.Rows.Item(i).Columns
    let personNums = person.match(/\d+/),
        personTags = person.match(/[^\s,，、。.;；\/\\]+/g)

    personNums = personNums===null?0:personNums[0]
    personTags = (personTags?.length)??0

    // ?? 如果左值为null或者undefined,则返回右值
    // ?. 无方法或者无属性,则返回null或者undefined

    let custom_rules = '@'
    try{
      custom_rules = document.getElementById('rules').value || custom_rules
    }catch(e){
      console.log('控制台环境正常报错,无法使用document对象')
    }

    let mapingComment = {
      [BIAOJI_COL]:'',
      [ID_COL]:'',
      [BIANHAO_COL]:'',
      [GONGSI_COL]:'',
      [MINGHUO_COL]:'',
      [WORKNAME_COL]:'',
      [JIBIE_COL]:'',
      [CHEJIAN_COL]:'',
      [CONTENT_COL]:'',
      [JIEZHI_COL]:'',
      [POS_COL]:'',
      [START_T_COL]:'',
      [END_T_COL]:'',
      [FUZEREN_COL]:'',
      [PERSON_COL]:'',
      [LUXIANG_COL]:'',
      [GUDINGSHEXIANGTOU_COL]: ''
    }

    if(gudingshexiangtou.length<1){
      背景填充(COLORS.Red, columns.Item(GUDINGSHEXIANGTOU_COL.distance(col)))
        mapingComment[LUXIANG_COL] += '未填写 固定摄像头\r\n'
        // columns.Item(LUXIANG_COL.distance(col)).ClearComments()
        // columns.Item(LUXIANG_COL.distance(col)).AddComment("特级动火/受限空间作业应架设录像设备");
        logmsg.push(`<i data-pos="${GUDINGSHEXIANGTOU_COL.distance(col)}${i}">${GUDINGSHEXIANGTOU_COL.distance(col)}${i}：${chejian} <b data-pos="${GUDINGSHEXIANGTOU_COL.distance(col)}${i}" style="color:red">未填写 固定摄像头</b></i>`)
    }

    //标记错误行为红色
    if(/[火受]/.test(jibie)){
      if(new RegExp(custom_rules).test(content + workname)){
        背景填充(COLORS.Red, columns.Item(WORKNAME_COL.distance(col)))
        logmsg.push(`<i data-pos="${WORKNAME_COL.distance(col)}${i}">${WORKNAME_COL.distance(col)}${i}：${chejian} <b data-pos="${WORKNAME_COL.distance(col)}${i}" style="color:red">${custom_rules}</b></i>`)
      }

      // 检查哪些作业必须录像
      // if (((/高处[特三四]级/.test(jibie)) || (/(动土|断路)/.test(jibie)) || ((/吊装[一二三]级/.test(jibie)) && (!/10吨/.test(jibie))) || (/(特级)/.test(jibie)) || (/受限/.test(jibie))) && (!/是/.test(person))) {

      if (((/(特级)/.test(jibie)) || (/受限/.test(jibie))) && (!/是/.test(luxiang))) {
        背景填充(COLORS.Red, columns.Item(LUXIANG_COL.distance(col)))
        mapingComment[LUXIANG_COL] += '特级动火/受限空间作业应架设录像设备\r\n'
        // columns.Item(LUXIANG_COL.distance(col)).ClearComments()
        // columns.Item(LUXIANG_COL.distance(col)).AddComment("特级动火/受限空间作业应架设录像设备");
        logmsg.push(`<i data-pos="${LUXIANG_COL.distance(col)}${i}">${LUXIANG_COL.distance(col)}${i}：${chejian} <b data-pos="${LUXIANG_COL.distance(col)}${i}" style="color:red">特级受限 录像</b></i>`)
      }

      if ((!/(非明火)/.test(minghuo_state)) && (/一级动火/.test(jibie)) && (!/是/.test(luxiang))) {
        背景填充(COLORS.Red, columns.Item(LUXIANG_COL.distance(col)))
        mapingComment[LUXIANG_COL] += '一级明火 录像\r\n'
        // columns.Item(LUXIANG_COL.distance(col)).ClearComments()
        // columns.Item(LUXIANG_COL.distance(col)).AddComment("一级明火 录像");
        logmsg.push(`<i data-pos="${LUXIANG_COL.distance(col)}${i}">${LUXIANG_COL.distance(col)}${i}：${chejian} <b data-pos="${LUXIANG_COL.distance(col)}${i}" style="color:red">一级明火 录像</b></i>`)
      }

      // 裂解炉可燃介质工艺管线的动火应是特级
      // if ((!/空气|水|无|蒸汽/.test(jiezhi)) && (!/特级/.test(jibie)) && (!/非明火/.test(person)) && (/(炉|H-\d\d\d\d)/.test(content)) && (/火/.test(jibie))) {
      //   背景填充(COLORS.Red, columns.Item('J'.distance(col)))
      //   logmsg.push(`<i data-pos="${'J'.distance(col)}${i}">${'J'.distance(col)}${i}： <b>炉区工艺管线</b>应是特级动火</i>`)
      // }

      // 乙烯裂解炉必须是特级动火
      if(/^乙烯车间/.test(chejian) && /炉/.test(content) && !/特级/.test(jibie) && /火/.test(jibie)){
        背景填充(COLORS.Red, columns.Item(JIBIE_COL.distance(col)))
        mapingComment[JIBIE_COL] += '裂解炉、库房、污水、污油、机柜间、配电室、中控、电缆室->特级动火作业\r\n'
        // columns.Item(JIBIE_COL.distance(col)).ClearComments()
        // columns.Item(JIBIE_COL.distance(col)).AddComment("裂解炉、库房、污水、污油、机柜间、配电室、中控、电缆室->特级动火作业");
        logmsg.push(`<i data-pos="${JIBIE_COL.distance(col)}${i}">${JIBIE_COL.distance(col)}${i}：<b data-pos="${JIBIE_COL.distance(col)}${i}" style="color:red">裂解炉、库房、污水、污油、机柜间、配电室、中控、电缆室->特级动火作业</b></i>`)
      }

      // 库房必须特级动火
      else if((/库/.test(content)||/库/.test(pos)) && !/特级/.test(jibie) && /火/.test(jibie)){
        背景填充(COLORS.Red, columns.Item(JIBIE_COL.distance(col)))
        mapingComment[JIBIE_COL] += '裂解炉、库房、污水、污油、机柜间、配电室、中控、电缆室->特级动火作业\r\n'
        // columns.Item(JIBIE_COL.distance(col)).ClearComments()
        // columns.Item(JIBIE_COL.distance(col)).AddComment("裂解炉、库房、污水、污油、机柜间、配电室、中控、电缆室->特级动火作业");
        logmsg.push(`<i data-pos="${JIBIE_COL.distance(col)}${i}">${JIBIE_COL.distance(col)}${i}：<b data-pos="${JIBIE_COL.distance(col)}${i}" style="color:red">裂解炉、库房、污水、污油、机柜间、配电室、中控、电缆室->特级动火作业</b></i>`)
      }
      // 污水系统、污油系统必须特级动火
      else if((/[污废][水油]/.test(content)||/[污废][水油]/.test(pos)) && !/特级/.test(jibie) && /火/.test(jibie)){
        背景填充(COLORS.Red, columns.Item(JIBIE_COL.distance(col)))
        mapingComment[JIBIE_COL] += '裂解炉、库房、污水、污油、机柜间、配电室、中控、电缆室->特级动火作业\r\n'
        // columns.Item(JIBIE_COL.distance(col)).ClearComments()
        // columns.Item(JIBIE_COL.distance(col)).AddComment("裂解炉、库房、污水、污油、机柜间、配电室、中控、电缆室->特级动火作业");
        logmsg.push(`<i data-pos="${JIBIE_COL.distance(col)}${i}">${JIBIE_COL.distance(col)}${i}：<b data-pos="${JIBIE_COL.distance(col)}${i}" style="color:red">裂解炉、库房、污水、污油、机柜间、配电室、中控、电缆室->特级动火作业</b></i>`)
      }
      // 机柜间，配电室，中控室，电缆室特级动火
      else  if((/(机柜|中控|配电|变电|总控|控室|制室)/.test(content)||/(机柜|中控|配电|变电|总控|控室|制室)/.test(pos)) && !/特级/.test(jibie) && /火/.test(jibie)){
        背景填充(COLORS.Red, columns.Item(JIBIE_COL.distance(col)))
        mapingComment[JIBIE_COL] += '裂解炉、库房、污水、污油、机柜间、配电室、中控、电缆室->特级动火作业\r\n'
        // columns.Item(JIBIE_COL.distance(col)).ClearComments()
        // columns.Item(JIBIE_COL.distance(col)).AddComment("裂解炉、库房、污水、污油、机柜间、配电室、中控、电缆室->特级动火作业");
        logmsg.push(`<i data-pos="${JIBIE_COL.distance(col)}${i}">${JIBIE_COL.distance(col)}${i}：<b data-pos="${JIBIE_COL.distance(col)}${i}" style="color:red">裂解炉、库房、污水、污油、机柜间、配电室、中控、电缆室->特级动火作业</b></i>`)
      }

      // if(/火/.test(jibie) && !/工具/.test(content)){
      //   背景填充(COLORS.Green, columns.Item('F'.distance(col)))
      //   logmsg.push(`<i data-pos="${'F'.distance(col)}${i}">${'F'.distance(col)}${i}：${content} 作业内容没标明<b>工具</b></i>`)
      // }

      if (/火/.test(jibie) && false){
        // 检查是否明火
        if (!/(明火)/.test(minghuo_state)) {
          背景填充(COLORS.Red, columns.Item(MINGHUO_COL.distance(col)))
          logmsg.push(`<i data-pos="${MINGHUO_COL.distance(col)}${i}">${MINGHUO_COL.distance(col)}${i}：${chejian} 未备注<b>是否明火</b></i>`)
        } else {
          // 如果备注了,判断备注的明火/非明火是否正确
          if (/非明火/.test(minghuo_state)){
            if(/(磨|焊|割)/.test(content)){
              背景填充(COLORS.Red, columns.Item(MINGHUO_COL.distance(col)))
              logmsg.push(`<i data-pos="${MINGHUO_COL.distance(col)}${i}">${MINGHUO_COL.distance(col)}${i}：${chejian} <b>应该是明火</b></i>`)
            }
          }else{
            if(!/(磨|焊|割)/.test(content)){
              背景填充(COLORS.Red, columns.Item(MINGHUO_COL.distance(col)))
              logmsg.push(`<i data-pos="${MINGHUO_COL.distance(col)}${i}">${MINGHUO_COL.distance(col)}${i}：${chejian} <b data-pos="${MINGHUO_COL.distance(col)}${i}" style="color:red">应该是fei明火</b></i>`)
            }
          }
        }
      }

      //检修内容要注明隔断措施
      if(!/隔.+措施/.test(content)){
        背景填充(COLORS.Red, columns.Item(CONTENT_COL.distance(col)))
        logmsg.push(`<i data-pos="${CONTENT_COL.distance(col)}${i}">${CONTENT_COL.distance(col)}${i}：${chejian} <b data-pos="${CONTENT_COL.distance(col)}${i}" style="color:red">未注明 隔断措施</b></i>`)
        mapingComment[CONTENT_COL] += '未注明 隔断措施\r\n'
      }

      // 介质不允许填无
      if(/无/.test(jiezhi)){
        背景填充(COLORS.Red, columns.Item(JIEZHI_COL.distance(col)))
        logmsg.push(`<i data-pos="${JIEZHI_COL.distance(col)}${i}">${JIEZHI_COL.distance(col)}${i}：${chejian} <b data-pos="${JIEZHI_COL.distance(col)}${i}" style="color:red">介质</b>不允许填无</i>`)
        mapingComment[JIEZHI_COL] += '介质不允许填无\r\n'
      }
      else if(/空气/.test(jiezhi) && /保温/.test(content) && !/非明火/.test(minghuo_state)){
        背景填充(COLORS.Yellow_light, columns.Item(JIEZHI_COL.distance(col)))
        背景填充(COLORS.Yellow_light, columns.Item(CONTENT_COL.distance(col)))
        mapingComment[JIEZHI_COL] += '保温空气对否\r\n'
        // columns.Item(JIEZHI_COL.distance(col)).ClearComments()
        // columns.Item(JIEZHI_COL.distance(col)).AddComment('空气对否')
        logmsg.push(`<i data-pos="${JIEZHI_COL.distance(col)}${i}">${JIEZHI_COL.distance(col)}${i}：${chejian} <b data-pos="${JIEZHI_COL.distance(col)}${i}" style="color:black">保温空气对否</b></i>`)
      }
      // else if(!/空气/.test(jiezhi) && !/非明火/.test(minghuo_state)){
      else if(!/空气/.test(jiezhi) && !/特级/.test(jibie)){
        mapingComment[JIEZHI_COL] += '未倒空应为特级\r\n'
        logmsg.push(`<i data-pos="${JIEZHI_COL.distance(col)}${i}">${JIEZHI_COL.distance(col)}${i}：${chejian} <b data-pos="${JIEZHI_COL.distance(col)}${i}" style="color:black">未倒空应为特级</b></i>`)
      }

      // if(!/作\s*业\s*\d+\s*人\s*/.test(person) && !/作\s*业\s*\s*人\s*数\s*\d+/.test(person)){
      //   背景填充(COLORS.Green, columns.Item(PERSON_COL.distance(col)))
      //   logmsg.push(`<i data-pos="${PERSON_COL.distance(col)}${i}">${PERSON_COL.distance(col)}${i}：${chejian} 作业N人后无冒号或未填写人数</i>`)
      // }

      // 作业人检查
      if(personTags!=personNums){
        背景填充(COLORS.Red, columns.Item(PERSON_COL.distance(col)))
        mapingComment[PERSON_COL] += '人数不同\r\n'
        // columns.Item(PERSON_COL.distance(col)).ClearComments()
        // columns.Item(PERSON_COL.distance(col)).AddComment('人数不同')
        logmsg.push(`<i data-pos="${PERSON_COL.distance(col)}${i}">${PERSON_COL.distance(col)}${i}：${chejian} <b data-pos="${PERSON_COL.distance(col)}${i}" style="color:red">人数不同</b></i>`)

      }
      else if(personTags>6 || personNums>6){
        背景填充(COLORS.Red, columns.Item(PERSON_COL.distance(col)))
        mapingComment[PERSON_COL] += '超过6人\r\n'
        // columns.Item(PERSON_COL.distance(col)).ClearComments()
        // columns.Item(PERSON_COL.distance(col)).AddComment('超过6人')
        logmsg.push(`<i data-pos="${PERSON_COL.distance(col)}${i}">${PERSON_COL.distance(col)}${i}：${chejian} <b data-pos="${PERSON_COL.distance(col)}${i}" style="color:red">超过6人</b></i>`)
      }

      //节假日期间升级管理
      if(!FADING_EXCLUDE.includes(new Date(start_t).setHours(0,0,0)) && (
            new Date(start_t).getDay()==6 ||
            new Date(start_t).getDay()==0 ||
            FADING_INCLUDE.includes(new Date(start_t).setHours(0,0,0))
          )
        ){
        if(/[一二]级动火/.test(jibie)){
          let tmp_msg = luxiang.includes('是')?'':' 架设录像'
          背景填充(COLORS.Yellow_light, columns.Item(JIBIE_COL.distance(col)))
          mapingComment[JIBIE_COL] += `节假日级别错误${tmp_msg}\r\n`
          // columns.Item(JIBIE_COL.distance(col)).ClearComments()
          // columns.Item(JIBIE_COL.distance(col)).AddComment(start_t + `节假日级别错误${tmp_msg}`)
          logmsg.push(`<i data-pos="${JIBIE_COL.distance(col)}${i}">${JIBIE_COL.distance(col)}${i}：${chejian} <b data-pos="${JIBIE_COL.distance(col)}${i}" style="color:red"> 节假日级别错误${tmp_msg}</b></i>`)
        }
      }
      // else {
      //   if(/特级动火/.test(jibie)){
      //     columns.Item(JIBIE_COL.distance(col)).AddComment(start_t + '是节日么')
      //   }
      // }

      if(new Date(end_t).getHours()>=18){
        背景填充(COLORS.Green, columns.Item(END_T_COL.distance(col)))
        mapingComment[JIBIE_COL] += '时间超限\r\n'
        logmsg.push(`<i data-pos="${END_T_COL.distance(col)}${i}">${END_T_COL.distance(col)}${i}：时间超限</i>`)
      }
      if(new Date(start_t).getHours()<8){
        背景填充(COLORS.Green, columns.Item(START_T_COL.distance(col)))
        mapingComment[JIBIE_COL] += '时间超限\r\n'
        logmsg.push(`<i data-pos="${START_T_COL.distance(col)}${i}">${START_T_COL.distance(col)}${i}：时间超限</i>`)
      }
      if(new Date(end_t).getDate() != new Date(start_t).getDate()){
        背景填充(COLORS.Green, columns.Item(START_T_COL.distance(col) + ':' + END_T_COL.distance(col)))
        mapingComment[JIBIE_COL] += '日期不合规\r\n'
        logmsg.push(`<i data-pos="${START_T_COL.distance(col)}${i}:${END_T_COL.distance(col)}${i}">${START_T_COL.distance(col)}${i}${END_T_COL.distance(col)}${i}：日期不合规</i>`)
      }
      if(new Date(end_t).getTime()<= new Date(start_t).getTime()){
        背景填充(COLORS.Green, columns.Item(START_T_COL.distance(col) + ':' + END_T_COL.distance(col)))
        mapingComment[JIBIE_COL] += '开始时间晚于结束时间\r\n'
        logmsg.push(`<i data-pos="${START_T_COL.distance(col)}${i}:${END_T_COL.distance(col)}${i}">${START_T_COL.distance(col)}${i}${END_T_COL.distance(col)}${i}：开始时间晚于结束时间</i>`)
      }
    }

    // for( let item in mapingComment){
    //   if(mapingComment[item]!=''){
    //     columns.Item(item.distance(col)).ClearComments()
    //     columns.Item(item.distance(col)).AddComment(mapingComment[item])
    //   }
    // }
    // Object.keys(mapingComment)
  }
  // if(tbl.Rows.Count==tbl.Columns.Count) 无作业

  let line = tbl.Rows.Count

  let levels = [],
    haiyangwang = ''
  for (let i = row+1, j = 0; i <= tbl.Rows.Count; i++) {
    (obj => {
      let id = obj.Item(ID_COL.distance(col)).Text.trim(),
        level = obj.Item(JIBIE_COL.distance(col)).Text.replace(/[\r\n\t,，]/g, ',')
      levels.push(level)
    })(curSheet.Rows.Item(i).Columns)

    let obj = curSheet.Rows.Item(i).Columns

    let chejian = obj.Item(CHEJIAN_COL.distance(col)).Text.replace(/[\r\n\t,，]/g, '')
    let pos = obj.Item(POS_COL.distance(col)).Text.replace(/[\r\n\t]/g, ',')
    let fuzeren = obj.Item(FUZEREN_COL.distance(col)).Text.replace(/[\r\n\t,，]/g, '')
    let person = obj.Item(PERSON_COL.distance(col)).Text.replace(/\s*$/g,'')
    let jiezhi = obj.Item(JIEZHI_COL.distance(col)).Text
    let jibie = obj.Item(JIBIE_COL.distance(col)).Text
    let start_t = obj.Item(START_T_COL.distance(col)).Text.replaceAll('-','/')
    let end_t = obj.Item(END_T_COL.distance(col)).Text.replaceAll('-','/')
    let content = obj.Item(CONTENT_COL.distance(col)).Text.replace(/\s/g,'')
    let minghuo_state = obj.Item(MINGHUO_COL.distance(col)).Text.replace(/\s/g,'')
    let luxiang = obj.Item(LUXIANG_COL.distance(col)).Text.replace(/\s/g,'')
    let workname = obj.Item(WORKNAME_COL.distance(col)).Text.replace(/[\r\n\t,，]/g, '')
    let gudingshexiangtou = obj.Item(GUDINGSHEXIANGTOU_COL.distance(col)).Text.replace(/[\r\n\t,，\s]/g, '')

    checkfun({chejian, pos, fuzeren, person, jiezhi, jibie, start_t, end_t, content, minghuo_state, luxiang, workname, curSheet, i, gudingshexiangtou})

    /* =================================================================== */
    if(vip){
      jibie = obj.Item(JIBIE_COL.distance(col)).Text.replace(/[\r\n\t,，]/g, ',').replace('高处特级|', '高处四级')
      jibie = jibie.replace(/[ⅠⅡⅢⅣ]/,function(a,b,c){
        return ({
          'Ⅰ': '一',
          'Ⅱ': '二',
          'Ⅲ': '三',
          'Ⅳ': '四'
        })[a]||a
      }).replace(/作业/g,'')

      content = content.replace(/\s/g, '').replace(/工具.+$/g,'')
      pos = pos.replace(/\s/g, '')

      if(!/聚丙/.test(chejian)){
        chejian = chejian.replace(/[一二]/,'')
      }

      if(/是/.test(obj.Item(LUXIANG_COL.distance(col)).Value2)){
        // s += mappingObj[chejian] + ' ' + chejian.replace('车间','') + '-' + pos + ',' + content + '\r\n'
        haiyangwang += mappingObj[chejian] + ' ' + chejian.replace('车间','') + '-' + pos + ',' + content + '-' + jibie + '\r\n'
        j++
      }
    }
    /* =================================================================== */

  }

  let riqi = new Date(curSheet.Rows.Item(row+1).Columns.Item(START_T_COL.distance(col)).Text).format('yyyy-MM-dd') + '至' + new Date(curSheet.Rows.Item(row+1).Columns.Item(END_T_COL.distance(col)).Text).format('yyyy-MM-dd')

  heji = 0
  heji = levels.length

  levels = levels.map((item) => {
    return item.replace(/\(.*\)/g, '')
  }).join(',')

  let a = {
    '特级动火': 0,
    '一级动火': 0,
    '二级动火': 0,
    '受限': 0,
    'Ⅰ级高处': 0,
    'Ⅱ级高处': 0,
    'Ⅲ级高处': 0,
    'Ⅳ级高处': 0,
    '一级吊装': 0,
    '二级吊装': 0,
    '三级吊装': 0,
    '盲板': 0,
    '临时用电': 0,
    '动土': 0,
    '断路': 0,
    '检维修': 0,
    '动火': 0,
    '高处': 0,
    '吊装': 0,
  }

  let convert = function(k) {
    let r = new RegExp(k, 'g')
    let result = levels.match(r)
    if (result != null)
      return result.length;
    return 0;
  }
  Object.keys(a).forEach((item) => {
    a[item] = convert(item)
    // heji += a[item]
  })

  let starttime = new Date(curSheet.Rows.Item(row+1).Columns.Item(START_T_COL.distance(col)).Text)
  let word_url = `http://localhost:8010/tp6/public/index.php/word/exportWord?workdata[]=${a['特级动火']}&workdata[]=${a['一级动火']}&workdata[]=${a['二级动火']}&workdata[]=${a['受限']}&workdata[]=${a['盲板']}&workdata[]=${a['高处']}&workdata[]=${a['吊装']}&workdata[]=${a['临时用电']}&workdata[]=${a['动土']}&workdata[]=${a['断路']}&workdata[]=${a['检维修']}&riqi=${starttime.getTime()/1000}`

  try{
    $('#word_url').text('导出风险研判表')
    $('#word_url')[0].dataset.url = word_url


    // $("#text_p1").text(haiyangwang)


    $('#text_p2').html(logmsg.join('<br>'))
    $('#text_p2').click(function(e){
      Application.ActiveSheet.Range(e.target.dataset.pos).Select()
    })

    let tb = $('.cube')
    if (tb.length <= 0) {
      tb = $('<div class="cube">')
      tb.appendTo('body')
    }

    tb.html(`
      <table style="text-align: center; width: 100%;" border="1">
        <thead>
          <tr class="header">
            <th>合计</th>
            <th>日期</th>
            <th>动火特级</th>
            <th>动火一级</th>
            <th>动火二级</th>
            <th>受限空间</th>
            <th class="tag" style="border-left: solid red 2px;">盲板</th>
            <th>高处</th>
            <th>吊装</th>
            <th>临时用电</th>
            <th class="tag" style="border-left: solid red 2px;">动土</th>
            <th>断路</th>
            <th>检维修</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${heji}</td>
            <td>${riqi}</td>
            <td>${a['特级动火']}</td>
            <td>${a['一级动火']}</td>
            <td>${a['二级动火']}</td>
            <td>${a['受限']}</td>
            <td class="tag" style="border-left: solid red 2px;">${a['盲板']}</td>
            <td>${a['高处']}</td>
            <td>${a['吊装']}</td>
            <td>${a['临时用电']}</td>
            <td class="tag" style="border-left: solid red 2px;">${a['动土']}</td>
            <td>${a['断路']}</td>
            <td>${a['检维修']}</td>
          </tr>
        </tbody>
      </table>

      <table style="text-align: center; width: 100%; margin-top: 20px" border="1">
        <thead>
          <tr class="header">
            <th colspan=3>${riqi}作业数量</th>
            <th>${heji}</th>
          </tr>

          <tr class="header">
            <th>作业类别</th>
            <th>作业级别</th>
            <th>作业数量</th>
            <th>合计</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan=4>高处作业</td>
            <td>高处一级</td>
            <td>${a['Ⅰ级高处']}</td>
            <td rowspan=4>${a['高处']}</td>
          </tr>
          <tr>
            <td>高处二级</td>
            <td>${a['Ⅱ级高处']}</td>
          </tr>
          <tr>
            <td>高处三级</td>
            <td>${a['Ⅲ级高处']}</td>
          </tr>
          <tr>
            <td>高处四级</td>
            <td>${a['Ⅳ级高处']}</td>
          </tr>
          <tr>
            <td rowspan=3>动火作业</td>
            <td>动火一级</td>
            <td>${a['一级动火']}</td>
            <td rowspan=3>${a['动火']}</td>
          </tr>
          <tr>
            <td>动火二级</td>
            <td>${a['二级动火']}</td>
          </tr>
          <tr>
            <td>动火特级</td>
            <td>${a['特级动火']}</td>
          </tr>
          <tr>
            <td colspan=2>受限</td>
            <td colspan=2>${a['受限']}</td>
          </tr>
          <tr>
            <td colspan=2>吊装</td>
            <td colspan=2>${a['吊装']}</td>
          </tr>
          <tr>
            <td colspan=2>临时用电</td>
            <td colspan=2>${a['临时用电']}</td>
          </tr>
          <tr>
            <td colspan=2>断路</td>
            <td colspan=2>${a['断路']}</td>
          </tr>
          <tr>
            <td colspan=2>动土</td>
            <td colspan=2>${a['动土']}</td>
          </tr>
          <tr>
            <td colspan=2>盲板</td>
            <td colspan=2>${a['盲板']}</td>
          </tr>
          <tr>
            <td colspan=2>检维修作业</td>
            <td colspan=2>${a['检维修']}</td>
          </tr>
        </tbody>
      </table>
    `)
  }catch(e){
    console.log(e)
    // alert(e)
  }
}

function 离线风险研判() {
  if(!vip)return;
  let {curSheet, tbl, row, col} = 获取有效表位置()
  let logmsg = []
  let checkfun = (obj)=>{
    let {person,jiezhi,jibie,start_t,end_t, tbl, i, fuzeren, chejian, content} = obj
    let columns = curSheet.Rows.Item(i).Columns
    let personNums = person.match(/\d+/)
    personNums = personNums===null?0:personNums[0]

    //标记错误行为红色
    if(
      person.length<4 ||
      (
        // 是否应该录像
        (((/高处[特三四]级/.test(jibie)) || (/(动土|断路)/.test(jibie)) || ((/吊装[一二三]级/.test(jibie)) && (!/10吨/.test(jibie))) || (/(特级)/.test(jibie)) || (/受限/.test(jibie))) && (!/是/.test(person))) ||

        /[火受]/.test(jibie) &&
        (
          //裂解炉可燃介质的明火作业必须是特级
          // ((!/空气|水|无|蒸汽/.test(jiezhi)) && (!/特级/.test(jibie)) && (!/非明火/.test(person)) && (/(炉|H-\d\d\d\d)/.test(content)) && (/火/.test(jibie))) ||

          //裂解炉必须特级动火
          (/^乙烯车间/.test(chejian) && /炉/.test(content) && !/特级/.test(jibie))||

          (/火/.test(jibie) && !/(明火)/.test(person)) ||
          (/火/.test(jibie) && /(明火)/.test(person)) ||

          //不允许填无介质
          /无/.test(jiezhi) ||

          //是否填人数了
          !/作\s*业\s*\d+\s*人\s*/.test(person) || !/作\s*业\s*\s*人\s*数\s*\d+/.test(person)

          //作业时间范围
          (
            new Date(end_t).getHours()>=18 ||
            new Date(start_t).getHours()<8 ||
            (
              new Date(end_t).getDate() != new Date(start_t).getDate() ||
              new Date(end_t).getTime() <= new Date(start_t).getTime()
            )
          )
        )
      )
    ){
      if(person.length<4){
        背景填充(COLORS.Red, columns.Item('N'.distance(col)))
        // logmsg.push(`N${i}：备注栏信息不全`)
        logmsg.push(`<i data-pos="${'N'.distance(col)}${i}">${'N'.distance(col)}${i}：${chejian} 备注栏信息不全</i>`)
      }

      // 检查哪些作业必须录像
      // if (((/高处[特三四]级/.test(jibie)) || (/(动土|断路)/.test(jibie)) || ((/吊装[一二三]级/.test(jibie)) && (!/10吨/.test(jibie))) || (/(特级)/.test(jibie)) || (/受限/.test(jibie))) && (!/是/.test(person))) {
      if (((/(特级)/.test(jibie)) || (/受限/.test(jibie))) && (!/是/.test(person))) {
        背景填充(COLORS.Red, columns.Item('N'.distance(col)))
        // logmsg.push(`N${i}：备注栏信息不全`)
        logmsg.push(`<i data-pos="${'N'.distance(col)}${i}">${'N'.distance(col)}${i}：${chejian} <b data-pos="${'N'.distance(col)}${i}" style="color:red">必须录像</b></i>`)
      }

      // 裂解炉可燃介质工艺管线的动火应是特级
      // if ((!/空气|水|无|蒸汽/.test(jiezhi)) && (!/特级/.test(jibie)) && (!/非明火/.test(person)) && (/(炉|H-\d\d\d\d)/.test(content)) && (/火/.test(jibie))) {
      //   背景填充(COLORS.Red, columns.Item('J'.distance(col)))
      //   logmsg.push(`<i data-pos="${'J'.distance(col)}${i}">${'J'.distance(col)}${i}： <b>炉区工艺管线</b>应是特级动火</i>`)
      // }

      // 乙烯裂解炉必须是特级动火
      if(/^乙烯车间/.test(chejian) && /炉/.test(content) && !/特级/.test(jibie)){
        背景填充(COLORS.Red, columns.Item('J'.distance(col)))
        logmsg.push(`<i data-pos="${'J'.distance(col)}${i}">${'J'.distance(col)}${i}：<b data-pos="${'J'.distance(col)}${i}" style="color:red">裂解炉特级</b></i>`)
      }

      // if(/火/.test(jibie) && !/工具/.test(content)){
      //   背景填充(COLORS.Green, columns.Item('F'.distance(col)))
      //   logmsg.push(`<i data-pos="${'F'.distance(col)}${i}">${'F'.distance(col)}${i}：${content} 作业内容没标明<b>工具</b></i>`)
      // }

      // if(!/(是|否)/.test(person.replace(/[\r\n]*$/g,''))){
      //   背景填充(COLORS.Green, columns.Item('N'.distance(col)))
      //   // logmsg.push(`N${i}：没有备注是否录像`)
      //   logmsg.push(`<i data-pos="${'N'.distance(col)}${i}">${'N'.distance(col)}${i}：${chejian} 没有备注是否<b>录像</b></i>`)
      // }

      if (/火/.test(jibie)){
        // 检查是否备注明火非明火
        if (!/(明火)/.test(person)) {
          背景填充(COLORS.Red, columns.Item('N'.distance(col)))
          logmsg.push(`<i data-pos="${'N'.distance(col)}${i}">${'N'.distance(col)}${i}：${chejian} 未备注<b>是否明火</b></i>`)
        } else {
          // 如果备注了,判断备注的明火/非明火是否正确
          if (/非明火/.test(person)){
            if(/(磨|焊|割)/.test(content)){
              背景填充(COLORS.Red, columns.Item('N'.distance(col)))
              logmsg.push(`<i data-pos="${'N'.distance(col)}${i}">${'N'.distance(col)}${i}：${chejian} <b>应该是明火</b></i>`)
            }
          }else{
            if(!/(磨|焊|割)/.test(content)){
              背景填充(COLORS.Red, columns.Item('N'.distance(col)))
              logmsg.push(`<i data-pos="${'N'.distance(col)}${i}">${'N'.distance(col)}${i}：${chejian} <b data-pos="${'N'.distance(col)}${i}" style="color:red">应该是fei明火</b></i>`)
            }
          }
        }
      }

      // 介质不允许填无
      if((/无/.test(jiezhi) && /火/.test(jibie))){
        背景填充(COLORS.Green, columns.Item('G'.distance(col)))
        logmsg.push(`<i data-pos="G${i}">G${i}：${chejian} <b>介质</b>不允许填无</i>`)
        logmsg.push(`<i data-pos="${'G'.distance(col)}${i}">${'G'.distance(col)}${i}：${chejian} <b>介质</b>不允许填无</i>`)
      }

      // if(/[\r\n]/.test(person.replace(/[\r\n]*$/g,''))){
      //   背景填充(COLORS.Green, columns.Item('N'.distance(col)))
      //   logmsg.push(`<i data-pos="${'N'.distance(col)}${i}">${'N'.distance(col)}${i}：${chejian} 备注栏中有换行</i>`)
      // }

      if(!/作\s*业\s*\d+\s*人\s*/.test(person) && !/作\s*业\s*\s*人\s*数\s*\d+/.test(person)){
        背景填充(COLORS.Green, columns.Item('N'.distance(col)))
        // logmsg.push(`N${i}：作业N人后无冒号或未填写人数`)
        logmsg.push(`<i data-pos="${'N'.distance(col)}${i}">${'N'.distance(col)}${i}：${chejian} 作业N人后无冒号或未填写人数</i>`)
      }

      if(new Date(end_t).getHours()>=18){
        背景填充(COLORS.Green, columns.Item('L'.distance(col)))
        // logmsg.push(`L${i}：时间超限`)
        logmsg.push(`<i data-pos="${'L'.distance(col)}${i}">${'L'.distance(col)}${i}：时间超限</i>`)
      }
      if(new Date(start_t).getHours()<8){
        背景填充(COLORS.Green, columns.Item('K'.distance(col)))
        // logmsg.push(`K${i}：时间超限`)
        logmsg.push(`<i data-pos="${'K'.distance(col)}${i}">${'K'.distance(col)}${i}：时间超限</i>`)
      }
      if(new Date(end_t).getDate() != new Date(start_t).getDate()){
        背景填充(COLORS.Green, columns.Item('K'.distance(col) + ':' + 'L'.distance(col)))
        // logmsg.push(`K${i}L${i}：日期不合规`)
        logmsg.push(`<i data-pos="${'K'.distance(col)}${i}:${'L'.distance(col)}${i}">${'K'.distance(col)}${i}${'L'.distance(col)}${i}：日期不合规</i>`)
      }
      if(new Date(end_t).getTime()<= new Date(start_t).getTime()){
        背景填充(COLORS.Green, columns.Item('K'.distance(col) + ':' + 'L'.distance(col)))
        // logmsg.push(`K${i}L${i}：开始时间晚于结束时间`)
        logmsg.push(`<i data-pos="${'K'.distance(col)}${i}:${'L'.distance(col)}${i}">${'K'.distance(col)}${i}${'L'.distance(col)}${i}：开始时间晚于结束时间</i>`)
      }
    }

    // 特级动火负责人必须是主任
    chejianfuzeren = {
      "乙烯车间": '申辉',
      "聚乙烯一车间": '庄松',
      "聚丙烯一车间": '廉强',
      "聚丙烯二车间": '廉强',
      "苯乙烯一车间": '宋晗',
      "加氢抽提联合车间": '李玉忠',
      "聚苯乙烯车间": '王春',
      "水汽车间": '吴春明',
      "储运车间": '李元元',
      "仪表车间": '肖永峰',
      "电气车间": '吕涛',
      "成品车间": '王强'
    }

    if(/[火受]/.test(jibie)){
      if(fuzeren.replace(/\s/g,'')!=chejianfuzeren[chejian]){
      // if(!new RegExp(fuzeren,'g').test(chejianfuzeren[chejian])){
        背景填充(COLORS.Green, columns.Item('M'.distance(col)))
        logmsg.push(`<i data-pos="${'M'.distance(col)}${i}">${'M'.distance(col)}${i}：负责人应该是<b data-pos="${'M'.distance(col)}${i}" style="color:green" >${chejianfuzeren[chejian]}</b></i>`)
      }

      //动火受限人数不能超过6
      if(personNums>6){
        背景填充(COLORS.Red, columns.Item('N'.distance(col)))
        logmsg.push(`<i data-pos="${'N'.distance(col)}${i}">${'N'.distance(col)}${i}：<b>人数</b>不能超过<b data-pos="${'N'.distance(col)}${i}" style="color:red" >6</b>个</i>`)
      }
    }
  }
  // if(tbl.Rows.Count==tbl.Columns.Count) 无作业

  let line = tbl.Rows.Count

  let levels = [],
    haiyangwang = ''
  for (let i = row+1, j = 0; i <= tbl.Rows.Count; i++) {
    (obj => {
      let id = obj.Item("A".distance(col)).Text.trim(),
        level = obj.Item("J".distance(col)).Text.replace(/[\r\n\t,，]/g, ',')
      levels.push(level)
    })(curSheet.Rows.Item(i).Columns)

    let obj = curSheet.Rows.Item(i).Columns

    let chejian = obj.Item("D".distance(col)).Text.replace(/[\r\n\t,，]/g, '')
    let pos = obj.Item("I".distance(col)).Text.replace(/[\r\n\t]/g, ',')
    let fuzeren = obj.Item("M".distance(col)).Text.replace(/[\r\n\t,，]/g, '')
    let person = obj.Item("N".distance(col)).Text
    let jiezhi = obj.Item("G".distance(col)).Text
    let jibie = obj.Item("J".distance(col)).Text
    let start_t = obj.Item("K".distance(col)).Text.replaceAll('-','/')
    let end_t = obj.Item("L".distance(col)).Text.replaceAll('-','/')
    let content = obj.Item("F".distance(col)).Text.replace(/\s/g,'')

    if(vip){
      checkfun({person: person.replace(/\s*$/g,''), jiezhi, jibie, start_t, end_t, curSheet, i, fuzeren, chejian, content})
    }

    /* =================================================================== */
    if(vip){
      jibie = obj.Item("J".distance(col)).Text.replace(/[\r\n\t,，]/g, ',').replace('高处特级', '高处四级')
      content = content.replace(/\s/g, '').replace(/工具.+$/g,'')
      pos = pos.replace(/\s/g, '')

      if(!/聚丙/.test(chejian)){
        chejian = chejian.replace(/[一二]/,'')
      }

      if(/是/.test(obj.Item("N".distance(col)).Value2)){
        // s += mappingObj[chejian] + ' ' + chejian.replace('车间','') + '-' + pos + ',' + content + '\r\n'
        haiyangwang += mappingObj[chejian] + ' ' + chejian.replace('车间','') + '-' + pos + ',' + content + '-' + jibie + '\r\n'
        j++
      }
    }
    /* =================================================================== */

  }

  let riqi = new Date(curSheet.Rows.Item(row+1).Columns.Item("K".distance(col)).Text).format('yyyy-MM-dd') + '至' + new Date(curSheet.Rows.Item(row+1).Columns.Item("L".distance(col)).Text).format('yyyy-MM-dd')

  heji = 0
  heji = levels.length

  levels = levels.map((item) => {
    return item.replace(/\(.*\)/g, '')
  }).join(',')

  let a = {
    '动火': 0,
    '动火特级': 0,
    '动火一级': 0,
    '动火二级': 0,
    '受限': 0,
    '盲板': 0,
    '高处': 0,
    '高处一级': 0,
    '高处二级': 0,
    '高处三级': 0,
    '高处特级': 0,
    '吊装': 0,
    '临时用电': 0,
    '动土': 0,
    '断路': 0,
    '无特殊': 0
  }
  let convert = function(k) {
    let r = new RegExp(k, 'g')
    let result = levels.match(r)
    if (result != null)
      return result.length;
    return 0;
  }
  Object.keys(a).forEach((item) => {
    a[item] = convert(item)
    // heji += a[item]
  })

  let starttime = new Date(curSheet.Rows.Item(row+1).Columns.Item("K".distance(col)).Text)
  let word_url = `http://localhost:8010/tp6/public/index.php/word/exportWord?workdata[]=${a['动火特级']}&workdata[]=${a['动火一级']}&workdata[]=${a['动火二级']}&workdata[]=${a['受限']}&workdata[]=${a['盲板']}&workdata[]=${a['高处']}&workdata[]=${a['吊装']}&workdata[]=${a['临时用电']}&workdata[]=${a['动土']}&workdata[]=${a['断路']}&workdata[]=${a['无特殊']}&riqi=${starttime.getTime()/1000}`

  try{
    $('#word_url').text('导出风险研判表')
    $('#word_url')[0].dataset.url = word_url


    $("#text_p1").text(haiyangwang)


    $('#text_p2').html(logmsg.join('<br>'))
    $('#text_p2').click(function(e){
      Application.ActiveSheet.Range(e.target.dataset.pos).Select()
    })

    let tb = $('.cube')
    if (tb.length <= 0) {
      tb = $('<div class="cube">')
      tb.appendTo('body')
    }

    tb.html(`
      <table style="text-align: center; width: 100%;" border="1">
        <thead>
          <tr class="header">
            <th>合计</th>
            <th>日期</th>
            <th>动火特级</th>
            <th>动火一级</th>
            <th>动火二级</th>
            <th>受限空间</th>
            <th class="tag" style="border-left: solid red 2px;">盲板</th>
            <th>高处</th>
            <th>吊装</th>
            <th>临时用电</th>
            <th class="tag" style="border-left: solid red 2px;">动土</th>
            <th>断路</th>
            <th>检维修</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${heji}</td>
            <td>${riqi}</td>
            <td>${a['动火特级']}</td>
            <td>${a['动火一级']}</td>
            <td>${a['动火二级']}</td>
            <td>${a['受限']}</td>
            <td class="tag" style="border-left: solid red 2px;">${a['盲板']}</td>
            <td>${a['高处']}</td>
            <td>${a['吊装']}</td>
            <td>${a['临时用电']}</td>
            <td class="tag" style="border-left: solid red 2px;">${a['动土']}</td>
            <td>${a['断路']}</td>
            <td>${a['无特殊']}</td>
          </tr>
        </tbody>
      </table>

      <table style="text-align: center; width: 100%; margin-top: 20px" border="1">
        <thead>
          <tr class="header">
            <th colspan=3>作业数量</th>
            <th>${heji}</th>
          </tr>

          <tr class="header">
            <th>作业类别</th>
            <th>作业级别</th>
            <th>作业数量</th>
            <th>合计</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan=4>高处作业</td>
            <td>高处一级</td>
            <td>${a['高处一级']}</td>
            <td rowspan=4>${a['高处']}</td>
          </tr>
          <tr>
            <td>高处二级</td>
            <td>${a['高处二级']}</td>
          </tr>
          <tr>
            <td>高处三级</td>
            <td>${a['高处三级']}</td>
          </tr>
          <tr>
            <td>高处四级</td>
            <td>${a['高处特级']}</td>
          </tr>
          <tr>
            <td rowspan=3>动火作业</td>
            <td>动火一级</td>
            <td>${a['动火一级']}</td>
            <td rowspan=3>${a['动火']}</td>
          </tr>
          <tr>
            <td>动火二级</td>
            <td>${a['动火二级']}</td>
          </tr>
          <tr>
            <td>动火特级</td>
            <td>${a['动火特级']}</td>
          </tr>
          <tr>
            <td colspan=2>吊装</td>
            <td colspan=2>${a['吊装']}</td>
          </tr>
          <tr>
            <td colspan=2>临时用电</td>
            <td colspan=2>${a['临时用电']}</td>
          </tr>
          <tr>
            <td colspan=2>断路</td>
            <td colspan=2>${a['断路']}</td>
          </tr>
          <tr>
            <td colspan=2>动土</td>
            <td colspan=2>${a['动土']}</td>
          </tr>
          <tr>
            <td colspan=2>盲板</td>
            <td colspan=2>${a['盲板']}</td>
          </tr>
          <tr>
            <td colspan=2>检维修作业</td>
            <td colspan=2>${a['无特殊']}</td>
          </tr>
        </tbody>
      </table>
    `)
  }catch(e){
    console.log(e)
    alert(e)
  }
}

function 备份工作表() {
  Application.ActiveWindow.SelectedSheets.Copy(undefined, Application.ActiveSheet);
  let oo = []
  for(let i = 1; i<=48; i++){
    let sh = Application.Sheets.Item(i);
    let o = {a: sh.Range('B9').Value2, b: sh.Range('C9').Value2, c: sh.Range('A3').Value2}
    o.c = o.c.match(/\d*月\s*\d*日/g)[0]
    oo.push(o)
  }
  console.log(oo)
  for(let i = 1; i<=48; i++){
      Application.ActiveSheet.Cells.Item(i+2,'B').Value2 = oo[i-1].c.replace(/\s*/g,'');
      Application.ActiveSheet.Cells.Item(i+2,'C').Value2 = oo[i-1].b;
      Application.ActiveSheet.Cells.Item(i+2,'D').Value2 = oo[i-1].a;
  }
}

function 拆分表格(){
  if(!vip)return;

  let {curSheet, tbl, row, col} = 获取有效表位置('序号')

  /*函数废弃不用*/
  let HandlingProcess = function(sh, date1){
    // sh.Select()
    // sh.Range("B3").Select()
    let {curSheet, tbl, row, col} = 获取有效表位置('序号', sh)
    // let curSheet = sh
    for (let i = row+1, id=1; i <= tbl.Rows.Count; ) {
      let start_t = curSheet.Rows.Item(i).Columns.Item(START_T_COL.distance(col)).Text.replaceAll('-','/')
      let end_t = curSheet.Rows.Item(i).Columns.Item(END_T_COL.distance(col)).Text.replaceAll('-','/')
      if(new Date(start_t).format("yyyy-MM-dd")!=date1){
        curSheet.Rows.Item(i).Delete()
        continue
      }else{
        curSheet.Rows.Item(i).Columns.Item(ID_COL.distance(col)).Value2 = id
        id++
      }
      i++
    }
  }

  let riqi_container = []
  for (let i = row+1; i <= tbl.Rows.Count; i++) {
    let start_t = curSheet.Rows.Item(i).Columns.Item(START_T_COL.distance(col)).Text.replaceAll('-','/')
    let outname = new Date(start_t).format("yyyy-MM-dd")
    riqi_container.push(outname)
  }

  // 遍历sheet表逐表操作,与HandlingProcess同时废弃不用
  let uniqueArray = [...new Set(riqi_container)];
  console.log(uniqueArray)
  for(let i=0; i<uniqueArray.length; i++){
    Application.ActiveWindow.ActiveSheet.Copy(undefined, Application.ActiveSheet);
    Application.Sheets.Item(i+2).Name = uniqueArray[i]
  }

  for(let i=0; i<uniqueArray.length; i++){//第一个是备份表,从第二个开始处理
    HandlingProcess(Application.Sheets.Item(i+2), uniqueArray[i])
  }

  let a = Application.Sheets.Item(2).Select()
}

function 旧拆分表格(){
  if(!vip)return;

  let {curSheet, tbl, row, col} = 获取有效表位置()

  /*函数废弃不用*/
  let HandlingProcess = function(sh, date1){
    // sh.Select()
    // sh.Range("B3").Select()
    let {curSheet, tbl, row, col} = 获取有效表位置('序号', sh)
    // let curSheet = sh
    for (let i = row+1, id=1; i <= tbl.Rows.Count; ) {
      let start_t = curSheet.Rows.Item(i).Columns.Item("K".distance(col)).Text.replaceAll('-','/')
      let end_t = curSheet.Rows.Item(i).Columns.Item("L".distance(col)).Text.replaceAll('-','/')
      if(new Date(start_t).format("yyyy-MM-dd")!=date1){
        curSheet.Rows.Item(i).Delete()
        continue
      }else{
        curSheet.Rows.Item(i).Columns.Item("A".distance(col)).Value2 = id
        id++
      }
      i++
    }
  }

  let riqi_container = []
  for (let i = row+1; i <= tbl.Rows.Count; i++) {
    let start_t = curSheet.Rows.Item(i).Columns.Item("K".distance(col)).Text.replaceAll('-','/')
    let outname = new Date(start_t).format("yyyy-MM-dd")
    riqi_container.push(outname)
  }

  // 遍历sheet表逐表操作,与HandlingProcess同时废弃不用
  let uniqueArray = [...new Set(riqi_container)];
  console.log(uniqueArray)
  for(let i=0; i<uniqueArray.length; i++){
    Application.ActiveWindow.ActiveSheet.Copy(undefined, Application.ActiveSheet);
    Application.Sheets.Item(i+2).Name = uniqueArray[i]
  }

  for(let i=0; i<uniqueArray.length; i++){//第一个是备份表,从第二个开始处理
    HandlingProcess(Application.Sheets.Item(i+2), uniqueArray[i])
  }

  let a = Application.Sheets.Item(2).Select()
}

function 安环排班(){
  if(!vip)return;
  let {curSheet, tbl, col, row} = 获取有效表位置('序号')
  let s = ''

  // Application.ActiveWindow.ActiveSheet.Copy(undefined, Application.ActiveSheet);
  // let targetSheet = Application.Sheets.Item(Application.Sheets.Count)
  // targetSheet.Name = '安环处现场监管履职表'

  for (let i = row+1, j = 0; i <= tbl.Rows.Count; i++) {
    let jibie = curSheet.Rows.Item(i).Columns.Item(JIBIE_COL.distance(col)).Text.trim(),
      chejian = curSheet.Rows.Item(i).Columns.Item(CHEJIAN_COL.distance(col)).Text.trim(),
      content = curSheet.Rows.Item(i).Columns.Item(CONTENT_COL.distance(col)).Text.trim(),
      pos = curSheet.Rows.Item(i).Columns.Item(POS_COL.distance(col)).Text.trim()
      if(jibie.includes('动火')){
        // s.push({jibie,chejian,content,pos})
        s += `<tr>
          <td>${jibie}</td>
          <td>${chejian}</td>
          <td>${content}</td>
          <td>${pos}</td>
        </tr>`
      }
  }

  let tb = $('.cube')
  if (tb.length <= 0) {
    tb = $('<div class="cube">')
    tb.appendTo('body')
  }

  tb.html(`<table border="1">${s}</table>`)
}

// 统计多日的报表中所有作业的日期,生成签到表
function 统计日期() {
  let {curSheet, tbl, col} = 获取有效表位置()

  let dict = {
    "乙烯车间": 1,
    "聚乙烯一车间": 2,
    "聚丙烯一车间": 3,
    "聚丙烯二车间": 3,
    "苯乙烯一车间": 4,
    "加氢抽提联合车间": 5,
    "聚苯乙烯车间": 6,
    "水汽车间": 7,
    "储运车间": 8,
    "仪表车间": 9,
    "电气车间": 10,
    "成品车间": 11
  }

  let riqi_container = []
  let container = {}
  for (let i = 3; i <= tbl.Rows.Count; i++) {
    let start_t = tbl.Rows.Item(i).Columns.Item("K").Text.replaceAll('-','/')
    let end_t = tbl.Rows.Item(i).Columns.Item("L").Text.replaceAll('-','/')
    let chejian = tbl.Rows.Item(i).Columns.Item("D").Text.replace(/[\r\n\t,，]/g, '')
    let outname = new Date(start_t).format("yyyy-MM-dd")
    riqi_container.push(outname)
    if(!container[outname]){
      container[outname] = []
    }
    container[outname].push(chejian)
  }

  let excel_image_urls = []
  for(let [outname,chejian] of Object.entries(container)){
    let tmpdict = Object.assign({}, dict);
    for(let chejian of chejian){
      if(/聚丙/.test(chejian)){
        delete tmpdict['聚丙烯一车间']
        delete tmpdict['聚丙烯二车间']
      }else{
        delete tmpdict[chejian]
      }
    }
    let ts = new Date(outname).getTime()/1000
    outname = new Date(outname).format('yyyyMMdd')
    let excel_image_url = `http://localhost:8010/tp6/public/Excel/getimage?n[]=${Object.values(tmpdict).join('&n[]=')}&outname=${outname}&ts=${ts}`

    if(Object.values(tmpdict).length==0){
      excel_image_url = `http://localhost:8010/tp6/public/Excel/getimage?outname=${outname}&ts=${ts}`
    }
    excel_image_urls.push(excel_image_url)
  }

  document.getElementById("text_p1").innerText = excel_image_urls.join('\r\n')

}

function 统计属地车间() {
  // I列
  alert('未完')
}

function 统计作业单位() {
  alert('未完')
}

function 删除指定级别作业(pattern_str = '无特殊作业') {
  let {curSheet, tbl, col, row} = 获取有效表位置()

  //删掉"无特殊作业"行
  for (let i = row+1; i <= tbl.Rows.Count;) {
    let tmp = curSheet.Rows.Item(i).Columns.Item('J'.distance(col)).Text
    if (new RegExp(pattern_str, 'g').test(tmp)) {
      curSheet.Rows.Item(i).Delete()
      continue
      //因为删除之后,下面行上移,所以i不用改变
    }
    i++
  }
  return tbl
}

// 删除非动火受限项目
function 动火受限(pattern_str = '(动火|受限)') {
  if(!vip)return;
  debugger
  let {curSheet, tbl, col, row} = 获取有效表位置('序号')
  let tejinum =  0,
    yijinum = 0,
    erjinum = 0,
    shouxiannum = 0,
    minghuonum = 0,
    feiminghuonum = 0


  //保留动火受限行
  for (let i = row+1, j = 1; i <= tbl.Rows.Count;) {

    let tmp = curSheet.Rows.Item(i).Columns.Item(JIBIE_COL.distance(col)).Text
    let minghuo_state = curSheet.Rows.Item(i).Columns.Item(MINGHUO_COL.distance(col)).Text

    // tbl.Rows.Item(i).Columns.Item("A").Value2 = ""

    if (/特级/.test(tmp) && /动火/.test(tmp) && /受限/.test(tmp)){
      背景填充(COLORS.Red, tbl.Rows.Item(i))
    } else if(/受限/.test(tmp)) {
      // tbl.Rows.Item(i).Columns.Item("A").Value2 = "**"
      背景填充(COLORS.Lavender, tbl.Rows.Item(i))
    } else if (/特级/.test(tmp)){
      // tbl.Rows.Item(i).Columns.Item("A").Value2 = "**"
      背景填充(COLORS.Yellow_light, tbl.Rows.Item(i))
    }

    if(/特级/.test(tmp)){
      tejinum++
    }
    if(/一级动火/.test(tmp)){
      yijinum++
    }
    if(/二级动火/.test(tmp)){
      erjinum++
    }
    if(/受限/.test(tmp)){
      shouxiannum++
    }
    if(/动火/.test(tmp)){
      if(/非明火/.test(minghuo_state)){
        feiminghuonum++
      }else{
        minghuonum++
      }
    }

    if (new RegExp(pattern_str, 'g').test(tmp)) {} else {
      curSheet.Rows.Item(i).Delete()
      continue
      //因为删除之后,下面行上移,所以i不用改变
    }
    i++
  }

  try{
    let tb = $('.cube')
    if (tb.length <= 0) {
      tb = $('<div class="cube">')
      tb.appendTo('body')
    }

    tb.html(`
      <table style="text-align: center; width: 100%;" border="1">
        <tbody>
          <tr>
            <td>乙烯合计</td>
            <td>明火</td>
            <td>${minghuonum}</td>
            <td>非明火</td>
            <td>${feiminghuonum}</td>
            <td>受限</td>
            <td>${shouxiannum}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan=4>汇总</td>
            <td colspan=15>2024年×月×日（周×）</td>
          </tr>
          <tr>
            <td colspan=2>特级动火</td>
            <td colspan=1>${tejinum}</td>
            <td colspan=1>一级动火</td>
            <td colspan=1>${yijinum}</td>
            <td colspan=1>二级动火</td>
            <td colspan=1>${erjinum}</td>
            <td colspan=2>受限</td>
            <td colspan=1>${shouxiannum}</td>
            <td colspan=1>明火作业</td>
            <td colspan=2>${minghuonum}</td>
            <td colspan=1>非明火作业</td>
            <td colspan=1>${feiminghuonum}</td>
          </tr>
          <tr>
            <td colspan=15 rowspan=2>其他单位未上报</td>
          </tr>
        </tbody>
      </table>
    `)
  }catch(e){
    // console.log(e)
    alert(e)
  }








  return tbl
}

function 隐患统计() {
  let {curSheet, tbl} = 获取有效表位置()

  let s = '';
  for (let i = 3, id = 1; i <= tbl.Rows.Count; id++,
    i++) {
    (obj => {
      let wenti = '问题' + obj.Item('A').Text + ': ' + obj.Item("F").Text.replace(/[\r\n\t]/g, ','),
        danwei = obj.Item("G").Text.replace(/[\r\n\t]/g, ','),
        ren = obj.Item("K").Text.replace(/[\r\n\t]/g, ','),
        cuoshi = obj.Item("P").Text.replace(/[\r\n\t]/g, ','),
        shijian = obj.Item("S").Text.replace(/[\r\n\t]/g, ',')
        shijian = new Date(shijian).toLocaleDateString()
        s += `${wenti}\r\n问题单位: ${danwei}\r\n整改责任人: ${ren}\r\n整改措施: ${cuoshi}\r\n整改完成时间: ${shijian}\r\n整改前\t\t整改后\t\r\n`
    })(tbl.Rows.Item(i).Columns)
  }
  try{
    // s += '模板在: cube123.cn/tp6/public/隐患图册模板.docx\r\n\r\n' + s
    document.getElementById("text_p1").innerText = s
  }catch(e){}
  return s
}

function 卡具统计() {
  let {curSheet, tbl} = 获取有效表位置()
}

function 备注列格式化(){
  let {curSheet, tbl} = 获取有效表位置()

  //保留动火受限行
  for (let i = 3; i <= tbl.Rows.Count;) {
    let tmp = tbl.Rows.Item(i).Columns.Item(col).Text

    // tbl.Rows.Item(i).Columns.Item("A").Value2 = ""
    if (/(特级|受限)/.test(tmp)) {
      // tbl.Rows.Item(i).Columns.Item("A").Value2 = "**"
      //涂黄
      背景填充(COLORS.Yellow_light, tbl.Rows.Item(i))
    }

    if (new RegExp(pattern_str, 'g').test(tmp)) {} else {
      tbl.Rows.Item(i).Delete()
      continue
      //因为删除之后,下面行上移,所以i不用改变
    }
    i++
  }
  return tbl
}

$AddCss('../js/src/style.css')

$(function() {
  // $('#rules').keypress(function(e) {
  $('#rules').dblclick(function(e) {
    // if (e.which == 13) {
      // let d = document.getElementById('rules').value
      // $getWork(d)
    // }
      document.getElementById('rules').value = ''
  })

  $("#isShengJi").change(function(){
    console.log(arguments)
    alert(localStorage.getItem('k'))
  })

  $('#text_p2, #text_p1, #log_text, .cube').dblclick(function() {
    // this.innerText = ''
		$('#word_url, .cube, #text_p1, #text_p2, #log_text').text('')
  })

  $('#replacekey').keypress(function(e) {
    if (e.which == 13) {
      $('#text_p1').text(this.value)
    }
  })

  /* ======================================================== */
  // 4连击事件
  function debounce(fn, delay) {

      let clickCount = 0;
      let clickTimeout;

      return function(...args) {
        const e = args[0]
        if(args[0].target.tagName=='B'){
          e.stopPropagation();
          return
        }
        // 增加点击计数
        clickCount++;
        clearTimeout(clickTimeout);
        console.log(`鼠标点击${e.target.tagName} ${clickCount} 次`)

        // 如果点击次数为3，则执行3连击的逻辑
        if (clickCount >= 4) {

          console.log('鼠标N连击事件触发!');
          // 在这里执行你需要的操作
          fn(...args);
          // 重置点击计数和计时器
          clickCount = 0;

        } else {

          // 如果不是N连击，则设置一个计时器来重置点击计数
          clickTimeout = setTimeout(()=>{
            // 重置点击计数和计时器
            clickCount = 0
          }, delay) // 例如，如果在delay毫秒内没有第五次点击，则重置计数
        }
      };
  }
  let fn = debounce(function(){
    vip = !vip
    alert(vip)
  }, 300)

  document.body.addEventListener('click', fn)
  /* ======================================================== */

})

// const vConsole = new VConsole()
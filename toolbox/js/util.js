// Formula 公式
// Value 单元格格式化 后 的值
// Value 单元格格式化 前 的值

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
  if (wps != null) {
    wps.OAAssist.ShellExecute(param)
  }
}

function 获取有效表位置(){
  try{
    let curSheet = Application.ActiveSheet
    let tbl = Application.Selection.CurrentRegion;
    // if (!tbl || tbl.Rows.Count<=2){
      for(let i=1; i<5; i++){
        for(let j=1; j<10; j++){
          if(/序号/.test(curSheet.Columns.Item(i).Rows.Item(j).Value2)){
            curSheet.Columns.Item(i).Rows.Item(j).Select()
            tbl = Application.Selection.CurrentRegion
            console.log(i,j) //列,行
            return {curSheet, tbl, row: j, col: i}
          }
        }
      }
    // }
  }catch(e){
    debugger
    return '不是wps环境'
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
  // 蓝:0xff0000
  // 绿:0x00ff00
  // 红:0x0000ff
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
  let {curSheet, tbl} = 获取有效表位置()

  curSheet.Range("E2").ColumnWidth = 13.366666793823242
  curSheet.Range("G2").ColumnWidth = 28.375
  curSheet.Range("I2").ColumnWidth = 11.625
  curSheet.Range("J2").ColumnWidth = 14.858333587646484
  curSheet.Range("K2").ColumnWidth = 12.008333206176758
  curSheet.Range("L2").ColumnWidth = 16.625
  curSheet.Range("M2").ColumnWidth = 17
  curSheet.Range("N2").ColumnWidth = 5.074999809265137
  curSheet.Range("O2").ColumnWidth = 5.75

  //清除内容
  curSheet.Range("L3:N" + (curSheet.Columns.CurrentRegion.Rows.Count)).ClearContents()
  curSheet.Range("N2").Formula = '移动监控\n架设情况'
  curSheet.Range("N3:N" + (curSheet.Columns.CurrentRegion.Rows.Count)).Formula = 0
  curSheet.Range("N3:N" + (curSheet.Columns.CurrentRegion.Rows.Count)).NumberFormatLocal = "[=1]\"☑\";[=0]\"☐\";0;@" //设置单元格自定义格式:[=1]"☑";[=0]"☐";0;@
  // 数据有效性设置自定义公式:=IF(TRUE,OR(H2=0,H2=1),"Checkbox")

  //居中自动换行
  垂直水平居中自动换行(tbl)

  //删掉没有动火受限行,标记特级
  for (let i = 3, j = 0; i <= tbl.Rows.Count;) {
    let tmp = tbl.Rows.Item(i).Columns.Item("K").Text
		// tbl.Rows.Item(i).Columns.Item("K").Select()
    // tbl.Rows.Item(i).Columns.Item("A").Value2 = ""

    tbl.Rows.Item(i).Columns.Item("O").Value2 = /是/.test(tbl.Rows.Item(i).Columns.Item("O").Text)?1:0

    if (/(特级|受限)/.test(tmp)) {
      //涂黄
      背景填充(0x00ffff, tbl.Rows.Item(i))
    }
    if (!/(动火|受限)/.test(tmp)) {
      // tbl.Rows.Item(i).Delete()
      // continue
    } else {
      // 编辑序号
      j++;
      tbl.Rows.Item(i).Columns.Item("B").Value2 = '' + j
    }
    i++
  }

  curSheet.Range('B1').UnMerge()
  curSheet.Range("C:C,D:D,F:F,H:H").Delete()
  curSheet.Range("C1:K1").Merge()
  curSheet.Range('C1').Formula = curSheet.Range('B1').Formula
  curSheet.Range("B:B").Delete()

  //设置第二行自动筛选
  curSheet.Rows.Item(2).AutoFilter(undefined, undefined, WPS_Enum.xlAnd, undefined, undefined)

  垂直水平居中自动换行(curSheet.Range("G3:I"))


  // 合并居中单元格(Application.ActiveSheet.Range('C1:J1'), Application.ActiveSheet.Range('B1').Value2)
  // curSheet.Columns.Item("H:H").Insert(-4159, undefined)
  // curSheet.Range("H2").ColumnWidth = 20
  // curSheet.Range("H2").Formula = "动火、受限作业票";
}

function 检维修日表() {
  let {curSheet, tbl} = 获取有效表位置()

  //居中自动换行
  垂直水平居中自动换行(tbl)

  curSheet.Range("A2").ColumnWidth = 3.25
  curSheet.Range("B2").ColumnWidth = 4.5
  curSheet.Range("C2").ColumnWidth = 9.875
  curSheet.Range("D2").ColumnWidth = 16.625
  curSheet.Range("E2").ColumnWidth = 8.375
  curSheet.Range("F2").ColumnWidth = 17.375
  curSheet.Range("G2").ColumnWidth = 28.375
  curSheet.Range("H2").ColumnWidth = 8.375
  curSheet.Range("I2").ColumnWidth = 11.625
  curSheet.Range("J2").ColumnWidth = 12.75
  curSheet.Range("K2").ColumnWidth = 9.625
  curSheet.Range("L2").ColumnWidth = 16.625
  curSheet.Range("M2").ColumnWidth = 17
  curSheet.Range("N2").ColumnWidth = 9.875
  curSheet.Range("O2").Width = 4.5

  //删掉无特殊作业行
  for (let i = 3, j = 0; i <= tbl.Rows.Count;) {
    let tmp = tbl.Rows.Item(i).Columns.Item("K").Text

    // 修改备注栏
    let beizhu = tbl.Rows.Item(i).Columns.Item("O").Text
    tbl.Rows.Item(i).Columns.Item("O").Value2 = /是/.test(beizhu)?'是':'否'
    // if(/无特殊/g.test(tmp)){
	   //  tbl.Rows.Item(i).Delete()
	   //  continue //删除操作后,后面的行或者列前移,位置发生变化; j是用来编辑新序号的
    // }

    if (/(动火|受限|高处四级)/g.test(tmp)) {
      背景填充(0x00ffff, tbl.Rows.Item(i))
    }

    if (/(特级|受限)/g.test(tmp)) {
      tbl.Rows.Item(i).Columns.Item("B").Value2 = "**"
      tbl.Rows.Item(i).Columns.Item("B").Font.Bold = true
    }
    i++
  }

  curSheet.Range("A:A,C:C,L:L,M:M,F:F").EntireColumn.Hidden = true
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

function 接龙统计() {
  // alert('系统错误')
	// return;
  let dict = {
    "乙烯车间": 1,
    "聚乙烯一车间": 2,
    "聚丙烯一车间": 3,
    "聚丙烯二车间": 4,
    "苯乙烯一车间": 5,
    "加氢抽提联合车间": 6,
    "聚苯乙烯车间": 7,
    "水汽车间": 8,
    "储运车间": 9,
    "仪表车间": 10,
    "电气车间": 11,
    "成品车间": 12
  }

  let {curSheet, tbl} = 获取有效表位置()

  let line = tbl.Rows.Count
  let s = '';
  for (let i = 3; i <= tbl.Rows.Count; i++) {
    (obj => {
      let id = obj.Item("A").Text.trim(),
        workshop = obj.Item("D").Text.replace(/[\r\n\t,，]/g, '').replace('车间', ''),
        workname = obj.Item("C").Text.replace(/[\r\n\t,，]/g, ''),
        content = obj.Item("C").Text.replace(/[\r\n\t,，]/g, ','),
        pos = obj.Item("I").Text.replace(/[\r\n\t,，]/g, ','),
        level = obj.Item("J").Text.replace(/[\r\n\t,，]/g, ',')
      delete dict[obj.Item("D").Text.replace(/[\r\n\t,，]/g, '')]
      let tmp = `${level.replace(/[^火受盲高吊临土断无]/g, '')}-` + workshop + workname
			tmp = tmp.replace(/[ *]/g,'')
      // s += id + (tmp.length > 20 ? `*${tmp.length - 20}` : '') + '\t\t' + tmp + '\r\n'
      s += tmp + '\r\n'
    })(tbl.Rows.Item(i).Columns)
  }

  let outname = new Date(tbl.Rows.Item(line).Columns.Item("L").Text).format('yyyy-MM-dd').replace(/-/g, '')
  let ts = new Date(tbl.Rows.Item(line).Columns.Item("L").Text).format('yyyy-MM-dd')
  ts = new Date(ts).getTime()/1000
  let excel_url = 'http://localhost:8010/tp6/public/excel/get?n[]=' + Object.values(dict).join('&n[]=')+ `&outname=${outname}` + `&ts=${ts}`

  try{
    $('#word_url').text('导出签到表')
    $('#word_url')[0].dataset.url = excel_url
    document.getElementById("text_p1").innerText = excel_url
    let editor = CodeMirror({
      parent: document.getElementById("text_p1"),
      doc: Object.keys(dict).join(',') + '\r\n' + excel_url + '\r\n' + s,
      BlankLineNums: 2,
    })
    // document.getElementById("text_p1").innerText = (Object.keys(dict).join(',') + '\r\n' + excel_url + '\r\n' + s)
  }catch(e){}
  return s

  // document.getElementById("text_p").innerText = (Object.keys(dict).join(',') + '\r\n' + 'http://127.0.0.1:8010/excel.php?n[]=' + Object.values(dict).join('&n[]=')+ `&outname=${outname}` + `&ts=${ts}\r\n` + s)
  // shellExecuteByOAAssist('http://127.0.0.1:8010/excel.php?n[]=' + Object.values(dict).join('&n[]=') + `&outname=${outname}`)
  return tbl;
}

function 作业统计() {
  let {curSheet, tbl} = 获取有效表位置()

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

  for (let i = 3; i <= tbl.Rows.Count; id++,
    i++) {
    (obj => {
      let workshop = obj.Item("D").Text.replace(/[\r\n\t]/g, ','),
        content = obj.Item("F").Text.replace(/[\r\n\t]/g, ','),
        pos = obj.Item("I").Text.replace(/[\r\n\t]/g, ','),
        level = obj.Item("J").Text.replace(/[\r\n\t,，]/g, ',').replace('高处特级', '高处四级')
        levels.push(level)
      s += id + '、' + workshop + '\r\n' + pos + ',' + content + '。涉及' + level + ';\r\n'
    })(tbl.Rows.Item(i).Columns)
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
	let ts = new Date(tbl.Rows.Item(line).Columns.Item("L").Text).format('M月d日')

  // s.match(/^\d+\**\d*/gm)

  try{
    document.getElementById("text_p1").innerText = `${ts}乙烯分公司检维修作业：\r\n${s}\r\n\r\n涉及${levels}，共计${id-1}项。`
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
  $getWork(-1);
}

function 离线风险研判() {
  let {curSheet, tbl} = 获取有效表位置()
  let logmsg = []
  let checkfun = (person,jiezhi,jibie,start_t,end_t, tbl, i)=>{
    //标记错误行为红色
    if(
      person.length<4 ||
      (
        /火/.test(jibie) &&
        (
          /无/.test(jiezhi) ||
          !/(是|否)$/.test(person) ||
          /[\r\n]/.test(person) ||
          !/作\s*业\s*\d+\s*人\s*[:：]/.test(person) ||
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

      背景填充(0x0000ff, tbl.Rows.Item(i)) //涂红

      //标记具体哪个单元格错误
      if((/无/.test(jiezhi) && /火/.test(jibie))){
        背景填充(0x00ff00, tbl.Rows.Item(i).Columns.Item('G'))
        logmsg.push(`<i data-pos="G${i}">G${i}：介质不允许填无</i>`)
      }

      if(person.length<4){
        背景填充(0x00ff00, tbl.Rows.Item(i).Columns.Item('N'))
        // logmsg.push(`N${i}：备注栏信息不全`)
        logmsg.push(`<i data-pos="N${i}">N${i}：备注栏信息不全</i>`)
      }

      if(!/(是|否)$/.test(person.replace(/[\r\n]*$/g,''))){
        背景填充(0x00ff00, tbl.Rows.Item(i).Columns.Item('N'))
        // logmsg.push(`N${i}：没有备注是否录像`)
        logmsg.push(`<i data-pos="N${i}">N${i}：没有备注是否录像</i>`)
      }

      if(/[\r\n]/.test(person.replace(/[\r\n]*$/g,''))){
        背景填充(0x00ff00, tbl.Rows.Item(i).Columns.Item('N'))
        logmsg.push(`N${i}：备注栏中有换行`)
        logmsg.push(`<i data-pos="N${i}">N${i}：备注栏中有换行</i>`)
      }

      if(!/作\s*业\s*\d+\s*人\s*[:：]/.test(person)){
        背景填充(0x00ff00, tbl.Rows.Item(i).Columns.Item('N'))
        // logmsg.push(`N${i}：作业N人后无冒号或未填写人数`)
        logmsg.push(`<i data-pos="N${i}">N${i}：作业N人后无冒号或未填写人数</i>`)
      }

      if(new Date(end_t).getHours()>=18){
        背景填充(0x00ff00, tbl.Rows.Item(i).Columns.Item('L'))
        // logmsg.push(`L${i}：时间超限`)
        logmsg.push(`<i data-pos="L${i}">L${i}：时间超限</i>`)
      }
      if(new Date(start_t).getHours()<8){
        背景填充(0x00ff00, tbl.Rows.Item(i).Columns.Item('K'))
        // logmsg.push(`K${i}：时间超限`)
        logmsg.push(`<i data-pos="K${i}">K${i}：时间超限</i>`)
      }
      if(new Date(end_t).getDate() != new Date(start_t).getDate()){
        背景填充(0x00ff00, tbl.Rows.Item(i).Columns.Item('K:L'))
        // logmsg.push(`K${i}L${i}：日期不合规`)
        logmsg.push(`<i data-pos="K${i}:L${i}">K${i}L${i}：日期不合规</i>`)
      }
      if(new Date(end_t).getTime()<= new Date(start_t).getTime()){
        背景填充(0x00ff00, tbl.Rows.Item(i).Columns.Item('K:L'))
        // logmsg.push(`K${i}L${i}：开始时间晚于结束时间`)
        logmsg.push(`<i data-pos="K${i}:L${i}">K${i}L${i}：开始时间晚于结束时间</i>`)
      }
    }
  }
  // if(tbl.Rows.Count==tbl.Columns.Count) 无作业

  let line = tbl.Rows.Count

  let levels = [];
  for (let i = 3; i <= tbl.Rows.Count; i++) {
    (obj => {
      let id = obj.Item("A").Text.trim(),
        level = obj.Item("J").Text.replace(/[\r\n\t,，]/g, ',')
      levels.push(level)
    })(tbl.Rows.Item(i).Columns)
    let person = tbl.Rows.Item(i).Columns.Item("N").Text
    let jiezhi = tbl.Rows.Item(i).Columns.Item("G").Text
    let jibie = tbl.Rows.Item(i).Columns.Item("J").Text
    let start_t = tbl.Rows.Item(i).Columns.Item("K").Text.replaceAll('-','/')
    let end_t = tbl.Rows.Item(i).Columns.Item("L").Text.replaceAll('-','/')

    checkfun(person.replace(/\s*$/g,''),jiezhi,jibie,start_t,end_t, tbl, i)

  }
  let riqi = new Date(tbl.Rows.Item(line).Columns.Item("K").Text).format('yyyy-MM-dd') + '至' + new Date(tbl.Rows.Item(line).Columns.Item("L").Text).format('yyyy-MM-dd')

  heji = 0

  levels = levels.map((item) => {
    return item.replace(/\(.*\)/g, '')
  }).join(',')

  let a = {
    '动火特级': 0,
    '动火一级': 0,
    '动火二级': 0,
    '受限': 0,
    '盲板': 0,
    '高处': 0,
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
    heji += a[item]
  })

  let starttime = new Date(tbl.Rows.Item(line).Columns.Item("K").Text)
  let word_url = `http://localhost:8010/tp6/public/index.php/word/exportWord?workdata[]=${a['动火特级']}&workdata[]=${a['动火一级']}&workdata[]=${a['动火二级']}&workdata[]=${a['受限']}&workdata[]=${a['盲板']}&workdata[]=${a['高处']}&workdata[]=${a['吊装']}&workdata[]=${a['临时用电']}&workdata[]=${a['动土']}&workdata[]=${a['断路']}&workdata[]=${a['无特殊']}&riqi=${starttime.getTime()/1000}`

  $('#word_url').text('导出风险研判表')
  $('#word_url')[0].dataset.url = word_url

  // $('#text_p1').text(logmsg.join('<br>'))
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
    `)
  return s;
}

function 备份工作表() {
  Application.ActiveWindow.SelectedSheets.Copy(undefined, Application.ActiveSheet);
}

function 统计属地车间() {
  // I列
  alert('未完')
}

function 统计作业单位() {
  alert('未完')
}

// 删除无特殊作业项目
function 特殊作业(col = 'J', pattern_str = '无特殊作业') {
  let {curSheet, tbl} = 获取有效表位置()

  //删掉"无特殊作业"行
  for (let i = 3; i <= tbl.Rows.Count;) {
    let tmp = tbl.Rows.Item(i).Columns.Item(col).Text
    if (new RegExp(pattern_str, 'g').test(tmp)) {
      tbl.Rows.Item(i).Delete()
      continue
      //因为删除之后,下面行上移,所以i不用改变
    }
    i++
  }
  return tbl
}

// 删除非动火受限项目
function 动火受限(col = 'J', pattern_str = '(动火|受限)') {
  let {curSheet, tbl} = 获取有效表位置()

  //保留动火受限行
  for (let i = 3; i <= tbl.Rows.Count;) {
    let tmp = tbl.Rows.Item(i).Columns.Item(col).Text

    // tbl.Rows.Item(i).Columns.Item("A").Value2 = ""
    if (/(特级|受限)/.test(tmp)) {
      // tbl.Rows.Item(i).Columns.Item("A").Value2 = "**"
      //涂黄
      背景填充(0x00ffff, tbl.Rows.Item(i))
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
      背景填充(0x00ffff, tbl.Rows.Item(i))
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

$AddCss('../js/style.css')

$(function() {
  $('#date1').keypress(function(e) {
    if (e.which == 13) {
      let d = document.getElementById('date1').value
      $getWork(d)
    }
  })
  $('#text_p1, #log_text, .cube').dblclick(function() {
    // this.innerText = ''
		$('#word_url, .cube, #text_p1, #log_text').text('')
  })

  $('#replacekey').keypress(function(e) {
    if (e.which == 13) {
      $('#text_p1').text(this.value)
    }
  })
})
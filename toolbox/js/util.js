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
	xlLandscape: 2,
	xlDownThenOver: 1,
	xlPaperA4: 9,
	xlPageBreakPreview: 2,
	xlNormalView: 1,
}

function GetUrlPath() {
	let e = document.location.toString()
	return -1 != (e = decodeURI(e)).indexOf("/") && (e = e.substring(0, e.lastIndexOf("/"))), e
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

















function 智能填充(){
	Application.Selection.DataSeries(WPS_Enum.xlColumns, WPS_Enum.xlDataSeriesLinear, WPS_Enum.xlDay, undefined, undefined, true);
}

function 分页预览(t)
{
	if(undefined==t)
		Application.ActiveWindow.View = WPS_Enum.xlNormalView
	else
		Application.ActiveWindow.View = WPS_Enum.xlPageBreakPreview;
}

function 打印设置()
{
	(obj=>{
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

function 背景填充(color, target = Application.Selection)
{
	// 蓝:0xff0000
	// 绿:0x00ff00
	// 红:0x0000ff
	(obj=>{
		if(color==undefined){
			Application.Selection.Interior.Pattern = WPS_Enum.xlPatternNone;
		}else{
			obj.Pattern = WPS_Enum.xlPatternSolid;
			obj.Color = color;
			obj.TintAndShade = 0;
			obj.PatternColorIndex = -4105;
		}
	})(target.Interior);
}

function 排序()
{
	(obj=>{
		(objz=>{
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



function $getWork(n) {

	let d = n*-1 || 0

	let startTime = $("#datachart > div.ui-searchbar > div.base > div:nth-child(2) > div.editor-field > input.ui-datetime.ui-dateperiod-start.value-elem.autosave")

	let endTime = $("#datachart > div.ui-searchbar > div.base > div:nth-child(2) > div.editor-field > input.ui-datetime.ui-dateperiod-end.value-elem.autosave")

	startTime = startTime[0] && startTime[0].value || new Date().DateAdd('d', d).toLocaleDateString().replace(/\//g, '-')
	endTime = endTime[0] && endTime[0].value || new Date().DateAdd('d', d).toLocaleDateString().replace(/\//g, '-')

	$.get('http://10.10.15.32/DTWorkBackup/DTWorkBackupOrgDataList', {
		"backupStatus": "1",
		"OrganizationID": "C13362DB-BA91-41D0-9D3E-DDFC20B240F2",
		"WorkBeginDateStartDate": startTime,
		"WorkBeginDateEndDate": endTime,
		"pi_currentpage": "1"
	}).then(res => {
		let result = {}
		let convert = function(a, b) {
			if (a in result) {} else {
				result[a] = 0
			}
			result[a] += parseInt(b)
		}
		let log = function(a) {
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

			if(a['单位']!='乙烯分公司')
			{
				alert('公司不对,失败')
				return;
			}

			let tb = $('.cube')
			if (tb.length <= 0) {
				tb = $('<div class="cube" style="z-index: 99999;position: relative;background-color:white;">')
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
		let count = $(res).find('#C13362DB-BA91-41D0-9D3E-DDFC20B240F2 td'),
			headers = $(res).find('.header th')
		for (let i = 0; i < count.length; i++) {
			let k = $(headers[i]).text().replace(/\s+/g, ''),
				v = $(count[i]).text().replace(/\s+/g, '')
			if (/无特殊/.test(k)) {
				convert('检维修', v)
			} else if (/(动火特级|特级动火)/.test(k)) {
				convert('特级动火', v)
			} else if (/(动火一级|一级动火)/.test(k)) {
				convert('一级动火', v)
			} else if (/(动火二级|二级动火)/.test(k)) {
				convert('二级动火', v)
			} else if (/受限/.test(k)) {
				convert('受限', v)
			} else if (/高处/.test(k)) {
				convert('高处', v)
			} else if (/盲板/.test(k)) {
				convert('盲板', v)
			} else if (/断路/.test(k)) {
				convert('断路', v)
			} else if (/动土/.test(k)) {
				convert('动土', v)
			} else if (/吊装/.test(k)) {
				convert('吊装', v)
			} else if (/临时用电/.test(k)) {
				convert('临时用电', v)
			} else if (/合计/.test(k)) {
				convert('合计', v)
			} else if (/单位/.test(k)) {
				result['单位'] = v
			}
		}
		log(result)
		console.table(result)
	})
}

function 重点检维修分享() {
	let curSheet = Application.ActiveSheet
	// if(Columns)
	curSheet.Range("A2").ColumnWidth = 2
	curSheet.Range("B2").ColumnWidth = 4.75
	curSheet.Range("E2").ColumnWidth = 15
	curSheet.Range("G2").ColumnWidth = 28.25
	curSheet.Range("I2").ColumnWidth = 11.25
	curSheet.Range("J2").ColumnWidth = 19.375
	curSheet.Range("K2").ColumnWidth = 10.625
	curSheet.Range("L2").ColumnWidth = 16.25
	curSheet.Range("M2").ColumnWidth = 16.5

	//清除内容
	curSheet.Range("L3:L" + (curSheet.Columns.CurrentRegion.Rows.Count)).ClearContents()
	curSheet.Range("M3:M" + (curSheet.Columns.CurrentRegion.Rows.Count)).ClearContents()

	let tbl = curSheet.Range("A2").CurrentRegion

	//居中自动换行
	垂直水平居中自动换行(tbl)

	//删掉没有动火受限行
	for (let i = 3, j = 0; i <= tbl.Rows.Count;) {
		let tmp = tbl.Rows.Item(i).Columns.Item("K").Text

		// tbl.Rows.Item(i).Columns.Item("A").Value2 = ""
		if (/特级/.test(tmp)) {
			// tbl.Rows.Item(i).Columns.Item("A").Value2 = "**"
			//涂黄
			背景填充(0x00ffff, tbl.Rows.Item(i))
		}
		if (!/(动火|受限)/.test(tmp)) {
			tbl.Rows.Item(i).Delete()
			continue
		} else { // 编辑序号
			j++;
			tbl.Rows.Item(i).Columns.Item("B").Value2 = '' + j
		}
		i++
	}

	curSheet.Range("C:C,D:D,F:F,H:H,N:N").Delete()
	curSheet.Columns.Item("F:F").Insert(-4159, undefined)
	curSheet.Range("F2").ColumnWidth = 28.125
	curSheet.Range("F2").Formula = "动火、受限作业票";

}

function 检维修日表() {
	let curSheet = Application.ActiveSheet

	let tbl = curSheet.Range("A2").CurrentRegion

	//居中自动换行
	垂直水平居中自动换行(tbl)

	//删掉没有动火受限行
	for (let i = 3, j = 0; i <= tbl.Rows.Count;i++) {
		let tmp = tbl.Rows.Item(i).Columns.Item("K").Text

		if (/(动火|受限)/g.test(tmp)) {
			背景填充(0x00ffff, tbl.Rows.Item(i))
		}
		if (/特级/g.test(tmp)){
			tbl.Rows.Item(i).Columns.Item("B").Value2 = "**"
			tbl.Rows.Item(i).Columns.Item("B").Font.Bold = true
		}
	}

	curSheet.Range("A:A,C:C,L:L,M:M").EntireColumn.Hidden = true
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

function 统计作业() {
	let curSheet = wps.EtApplication().ActiveSheet;
	let tbl = wps.Selection.CurrentRegion;
	if (!tbl)
		tbl = curSheet.Range("A2").CurrentRegion;

	// let tbl = Application.ActiveCell.CurrentRegion
	// tbl = Application.Range("A2").CurrentRegion
	let line = tbl.Rows.Count

	let s = '';
	for (let i = 3, id = 1; i <= tbl.Rows.Count; id++, i++) {
		(obj => {
			let workshop = obj.Item("D").Text.replace(/[\r\n\t]/g, ','),
				content = obj.Item("F").Text.replace(/[\r\n\t]/g, ','),
				pos = obj.Item("I").Text.replace(/[\r\n\t]/g, ','),
				level = obj.Item("J").Text.replace(/[\r\n\t]/g, ',')
			s += id + '、' + workshop + '\r\n' + pos + ',' + content + '。涉及' + level + ';\r\n'
		})(tbl.Rows.Item(i).Columns)
	}

	return s;
	Application.Cells(tbl.Rows.Count + 1, "C").Value2 = s
	Application.Cells(tbl.Rows.Count + 1, "C").HorizontalAlignment = wps.Enum.xlHAlignLeft
	Application.Cells(tbl.Rows.Count + 1, "C").Rows.AutoFit()
	//  级别:
	//  let _tmp = tbl.Range("J3:J"+line)
	//  for(let i=1; i<=_tmp.Count; i++){
	//      let t = _tmp.Rows.Item(i).Text
	//      t = t.replace(/[\r\n]+/g,'，')
	//      level.push(t)
	//  }
}

function 风险研判() {
	let data = { userName: 20421, password: 'Hjjt@123456' },
		data1 = { Name: 20421, Password: 'Hjjt@123456' }
	$.post('http://10.10.15.32/Home/CheckLoginInfo', data).then(res => {
		if (res != "") {
			alert(res)
			return false;
		}
		$.post('http://10.10.15.32/Home/PortalIndex', data1).then(res => {
			$.get('http://10.10.15.32/Home/PortalEnter').then(res => {
				$getWork(-1);
				return
				location.href = 'http://10.10.15.32/Home/MainView'
			})
		})
	})
}


function 备份当前Sheet() {
	Application.ActiveWindow.SelectedSheets.Copy(undefined, Application.ActiveSheet);
}

$AddCss('../js/style.css')

$(function(){
	$('#date1').keypress(function(e){
		if(e.which==13){
			let d = document.getElementById('date1').value
			$getWork(d)
		}
	})
	$('#text_p').dblclick(function(){
		this.innerText = ''
	})
})
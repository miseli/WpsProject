const events = {
	"风险研判":()=>{
		风险研判()
	},
	"备份当前Sheet":()=>{
		备份当前Sheet()
	},
	"重点检维修分享":()=>{
		重点检维修分享()
	},
	"垂直水平居中自动换行":()=>{
		垂直水平居中自动换行()
	},
	"自动列宽":()=>{
		自动列宽()
	},
	"自动行高":()=>{
		自动行高()
	},
	"检维修日表":()=>{
		检维修日表()
	},
	"打印设置":()=>{
		打印设置()
		分页预览(1)
	}
}

// $(function(){
// 	$('.buttons button').click(function(e){

// 	})
// })

function onbuttonclick(idStr) {
	switch (idStr) {
		case "getDocName":
			{
				let doc = wps.EtApplication().ActiveWorkbook
				let textValue = ""
				if (!doc) {
					textValue = textValue + "当前没有打开任何文档"
					return
				}
				textValue = textValue + doc.Name
				document.getElementById("text_p").innerHTML = textValue
				break
			}
		case "createTaskPane":
			{
				let tsId = wps.PluginStorage.getItem("taskpane_id")
				if (!tsId) {
					let tskpane = wps.CreateTaskPane(GetUrlPath() + "/taskpane.html")
					let id = tskpane.ID
					wps.PluginStorage.setItem("taskpane_id", id)
					tskpane.Visible = true
				} else {
					let tskpane = wps.GetTaskPane(tsId)
					tskpane.Visible = true
				}
				break
			}
		case "newDoc":
			{
				wps.EtApplication().Workbooks.Add()
				break
			}
		case "addString":
			{
				let s = 统计作业()
				document.getElementById("text_p").innerText = s
				return;
				let curSheet = wps.EtApplication().ActiveSheet;
				if (curSheet) {
					curSheet.Cells.Item(1, 1).Formula = "Hello, wps加载项!" + curSheet.Cells.Item(1, 1).Formula
				}
				break;
			}
		case "closeDoc":
			{
				if (wps.EtApplication().Workbooks.Count < 2) {
					alert("当前只有一个文档，别关了。")
					break
				}

				let doc = wps.EtApplication().ActiveWorkbook
				if (doc)
					doc.Close()
				break
			}
		case "风险研判":
			{
				风险研判()
				break;
			}
		case "备份当前Sheet":
			{
				备份当前Sheet()
				break;
			}
		case "重点检维修分享":
			{
				重点检维修分享()
				break;
			}
		case "垂直水平居中自动换行":
			{
				垂直水平居中自动换行()
				break;
			}
		case "自动列宽":
			{
				自动列宽()
				break;
			}
		case "自动行高":
			{
				自动行高()
				break;
			}
		case "检维修日表":
			{
				检维修日表()
				break;
			}
		case "打印设置":
			{
				打印设置()
				分页预览(1)
				break;
			}
	}

}

window.onload = () => {
	var xmlReq = WpsInvoke.CreateXHR();
	var url = location.origin + "/.debugTemp/NotifyDemoUrl"
	xmlReq.open("GET", url);
	xmlReq.onload = function(res) {
		var node = document.getElementById("DemoSpan");
		window.document.getElementById("DemoSpan").innerHTML = res.target.responseText;
	};
	xmlReq.send();
}
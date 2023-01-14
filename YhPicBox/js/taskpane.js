function 宋体小四()
{
    let wdCellAlignVerticalCenter=1,wdAlignParagraphCenter=1,wdAlignParagraphLeft=0
    // let wdUseDestinationStylesRecovery = 19
    // Application.Selection.PasteAndFormat(wdUseDestinationStylesRecovery);
    Application.Selection.Font.Size = 12;
    Application.Selection.Font.SizeBi = 12;
    Application.Selection.Font.Name = "宋体";

    Application.Selection.Cells.VerticalAlignment = wdCellAlignVerticalCenter;
    Application.Selection.ParagraphFormat.Alignment = wdAlignParagraphCenter;
    Application.Selection.ParagraphFormat.Alignment = wdAlignParagraphLeft;

    // console.log(Application.Selection.Start,'|')
    let wdLine = 5, wdMove = 0, wdCell = 12
    Application.Selection.SetRange(Application.Selection.Start,Application.Selection.Start+5)
    Application.Selection.Font.Bold = true
    Application.Selection.MoveRight(wdCell, 1, wdMove);
    Application.Selection.HomeKey(wdLine, wdMove);

    Application.Selection.SetRange(Application.Selection.Start,Application.Selection.Start+5)
    Application.Selection.Font.Bold = true
    Application.Selection.MoveRight(wdCell, 1, wdMove);
    // Application.Selection.HomeKey(wdLine, wdMove);

    Application.Selection.SetRange(Application.Selection.Start,Application.Selection.Start+6)
    Application.Selection.Font.Bold = true
    Application.Selection.MoveRight(wdCell, 1, wdMove);
    // Application.Selection.HomeKey(wdLine, wdMove);

    Application.Selection.SetRange(Application.Selection.Start,Application.Selection.Start+5)
    Application.Selection.Font.Bold = true
    Application.Selection.MoveRight(wdCell, 1, wdMove);
    // Application.Selection.HomeKey(wdLine, wdMove);


    Application.Selection.SetRange(Application.Selection.Start,Application.Selection.Start+7)
    Application.Selection.Font.Bold = true
    Application.Selection.MoveRight(wdCell, 1, wdMove);
    // Application.Selection.HomeKey(wdLine, wdMove);

    // console.log(Application.Selection.Start)
}


function onbuttonclick(idStr)
{
    if (typeof (wps.Enum) != "object") { // 如果没有内置枚举值
        wps.Enum = WPS_Enum
    }
    switch(idStr)
    {
        case "dockLeft":{
                let tsId = wps.PluginStorage.getItem("taskpane_id")
                if (tsId){
                    let tskpane = wps.GetTaskPane(tsId)
                    tskpane.DockPosition = wps.Enum.msoCTPDockPositionLeft
                }
                break
            }
        case "dockRight":{
            let tsId = wps.PluginStorage.getItem("taskpane_id")
                if (tsId){
                    let tskpane = wps.GetTaskPane(tsId)
                    tskpane.DockPosition = wps.Enum.msoCTPDockPositionRight
                }
                break
        }
        case "hideTaskPane":{
            let tsId = wps.PluginStorage.getItem("taskpane_id")
                if (tsId){
                    let tskpane = wps.GetTaskPane(tsId)
                    tskpane.Visible = false
                }
                break
        }
        case "addString":{
            let doc = wps.WpsApplication().ActiveDocument
            if (doc){
                doc.Range(0, 0).Text="Hello, wps加载项!"
                //好像是wps的bug, 这两句话触发wps重绘
                let rgSel = wps.WpsApplication().Selection.Range
                if (rgSel)
                    rgSel.Select()
            }
            break;
        }
        case "getDocName":{
            宋体小四()
            break;
            let doc = wps.WpsApplication().ActiveDocument
                let textValue = "";
                if (!doc){
                    textValue = textValue + "当前没有打开任何文档"
                    return
                }
                textValue = textValue + doc.Name
                document.getElementById("text_p").innerHTML = textValue
                break
        }
    }
}

window.onload = function () {
    var xmlReq = WpsInvoke.CreateXHR();
    var url = location.origin + "/.debugTemp/NotifyDemoUrl"
    xmlReq.open("GET", url);
    xmlReq.onload = function (res) {
        var node = document.getElementById("DemoSpan");
        node.innerText = res.target.responseText;
    };
    xmlReq.send();
}
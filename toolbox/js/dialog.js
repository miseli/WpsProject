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


$(()=>{
	$('button').each(function(){
		let action = $(this).data('action')
		$(this).text(action)
	}).click(function(e){
		let action = $(this).data('action')
		window[action].call(this)
	})
})
function windowOpen() {
	//window.open(url,title,속성)=> 새로운 팝업창에, url에 지정된 html을 랜더링 
	var url = "./015_open_child.html";
	var title = "자식창";
	var prop = "top=100px, left=400px, width=300px, height=400px";
	window.open(url, title, prop);

}
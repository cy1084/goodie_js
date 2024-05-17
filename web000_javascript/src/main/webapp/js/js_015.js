function windowOpen() {
	//window.open(url,title,속성)=> 새로운 팝업창에, url에 지정된 html을 랜더링 
	var url = "./015_open_child.html";
	var title = "자식창";
	var prop = "top=100px, left=400px, width=300px, height=400px";
	window.open(url, title, prop);

}

//감춰진 DIV를 보여주게 함 'display: none' 했던 것
function registForm() {
	document.getElementById("regist").style.display = "block"; //보여주겠다.
	document.body.style.backgroundColor = '#ccc';

	//회색 화면이 뜨면 버튼들 동작이 안되게 하기
	var btns = document.getElementsByName("btn-1");
	for (let i in btns) {
		btns[i].disabled = "disabled";
	}
}

function cancel(){
	document.getElementById("regist").style.display = "none"; 
	document.body.style.backgroundColor = 'white';

	var btns = document.getElementsByName("btn-1");
	for (let i in btns) {
		btns[i].disabled = "";
	}		
}

function idChk(){
	var id=document.getElementById("id").value;
	if(id==""){
		alert('중복 체크를 먼저 진행해 주세요.');
		
	
		return;  // 반복문을 벗어나는데 밑에꺼를 실행시키지 않음
		//break; 반복문을 벗어나서 밑에꺼 실행
		//continue; 반복문의 위쪽으로(반복문의 현재 단계 종료) 
	}
	console.log("return 하위 기능");
}

function idCheck(){
	open("./015_idCheck.html","","width=400px, height=500px");
}
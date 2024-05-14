/**
 *	DOM 탐색
	  작성되어 있는(렌더링 후) Node를 javascript 탐색 방법을 통해서 Element 위치를 찾음
 	
	  selector 방식
	  - css 선택자
	  id, name, tagName=>select 속성 
 */

function searchQS() {
	//var doc= document.getElementById("query1");
	//querySelector: 단일 node
	//querySelectorAll: 다중 nodelist
	var doc = document.querySelectorAll("#query1")[0];
	doc.textContent = "<span>셀렉터 표현식의 querySelectorAll은 NodeList이다.</span>";
	doc.style.display = 'none';
}

function searchQSjQuery() {
	//jquery를 통한 dom 탐색: 단일과 다중을 구분하지 않음
	var doc = $("#query2");
	// =var doc= document.querySelectorAll("#query1")[0];
	doc.html("<b>콘텐츠 변경</b>");
	doc.css("background", "lime");
	doc.hide(1000);
	//자바 스크립트와 css 같이 사용!

}
function searchId() {
	var doc = document.getElementById("testId"); //node와 element 가져옴(p 태그 가져옴)
	//내용 변경: 콘텐츠(innerHTML, textContent)
	//폰트 색, 배경 변경: style 속성 
	//title 속성 추가: html 속성

	console.log(doc.innerHTML); //<br> 같은 태그도 나타남
	console.log(doc.textContent); //내용만 가져옴
	doc.innerHTML = "<b>ID로 탐색 후 변경</b>";
	doc.style.color = "orange";
	doc.style.background = "lime";
	doc.title = "id 검색";

}

function checkAll(bool) {
	console.log(typeof bool, bool);
	var allcheck = document.getElementById("allcheck"); //DOM 탐색
	console.log("상태 checked 확인", allcheck.checked);
	console.log("값 value 확인", allcheck.value);

	var chk = document.getElementsByName("chk");	//nodelist
	console.log(chk.length);
	for (let i = 0; i < chk.length; i++) {
		chk[i].checked = bool; //전체 삭제 
	}
}

window.onload = function() {
	var chk = document.getElementsByName("chk");
	for (let i = 0; i < chk.length; i++) {
		chk[i].onclick = "checkCnt";
	}
}

var checkCnt = function() {
	console.log("chk event");
	var chk = document.getElementsByName("chk");
	
	var cnt=0;
	for (let i = 0; i < chk.length; i++) {
		if(chk[i].checked){
			cnt++;
		}
	}
	if(cnt==chk.length){
		document.getElementById("allcheck").checked=true;
	}else{
		document.getElementById("allcheck").checked=false;
	}
}

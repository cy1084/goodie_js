/**
 * tag의 동적 생성: 밑으로 계속 추가 추가...
 */

//블로그 답글 보기 기능....

function elementCreate() {
	//HTML의 문장을 text로 작성하고, 특정 위치에 innerHTML로 변경
	//body에 div를 작성하고, 속성을 입력하고, 글을 입력하고, html에 있는 <p>에 innerHTML로 안의 내용 변경
	//이제는 '내용 변경 + 추가' 까지 하고 싶다면!
	var tmp = "<div style='border:1px solid blue;'>안녕하세요 동적 HTML 입니다.</div>";
	var loc = document.getElementById("loc");
	
	//콘텐츠 영역의 text를 innerHTML로 값 변경
	//loc.innerHTML = tmp;
	
	//loc.append(tmp); 
	//append=> textNode의 객체 값으로 처리되어 html이 적용되지 않음
	//			하지만 기존 값 뒤에 붙여짐
	
	//loc.appendChild(tmp); //반드시 textNode 기반의 값이 아니라 자바스크립트 객체여야 한다.
			          		//createElement로 구성되어 있음
			          		
	//각각 따로 작성	
	//1) 속성 추가 방법 1	          		
	var div=document.createElement("div"); //<div></div>
	var attr=document.createAttribute("style"); //style="";
	attr.nodeValue="border:1px solid green;"; //style='border:1px solid green;
	var text=document.createTextNode("동적 html 추가입니다."); // 동적 html 추가입니다.

	div.setAttributeNode(attr);//<div style="border:1px solid green";></div>
	div.appendChild(text); //<div style="border:1px solid green";>동적 html 추가입니다.</div>
	
	loc.append(div);
	
	
	//2) 속성 추가 방법 2
	var div=document.createElement("div"); 
	div.setAttribute("style","border:1px solid red");
	var text=document.createTextNode("동적 html 추가입니다."); // 동적 html 추가입니다.
	
	div.appendChild(text); 
	
	loc.append(div);
}

window.onload = function() {
	var hiddenNode = document.querySelector("#loc2>div");
	hiddenNode.style.display = "none"; //숨김
}

//toggle
function show() {
	var hiddenNode = document.querySelector("#loc2>div");
	if (hiddenNode.style.display == "block") {
		hiddenNode.style.display = "none";
	} else {
		hiddenNode.style.display = "block"; //보여줌
	}
}
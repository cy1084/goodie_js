/**
 * XSS (Cross Side Script): OWASP 보안 취약점을 통계로 2년에 한번씩 발표하는 곳
 * => 2022 inject 항목
 * 
 * 콘텐츠: innerHTML, textContent, innerText
 * markup으로 되어 있는 tag는 모두 화면에 출력되어 있는 text를 가져올 수 있다(DOM 탐색)
 * 글만 가져오는 것 textContent
 * 선택된 tag의 하위의 모든 것(tag) 포함 innerHTML
 * 
 * textarea는 markup으로 되어 있다
 * 하지만 textarea는 반드시 콘텐츠를 가져오는 것이 아니라 form 요소이기 때문에 value로 가져와야 한다
 * textarea는 글자 자체를 전송한다 따라서 xss에 대비한 코드를 작성해줘야 한다
 * 
 *  -------------------------
 * <script>alert('작동')</script> => <를 지우거나 혹은 &lt로 변경 후 database에 저장 => html script가 실행
 *  -------------------------
 * 즉, java의 문자열 escape 문자와 같다. HTML 다음줄 <br>, java \n %n 13 '\000d'
 * textarea에 줄바꿈(\n\r) 표기가 되어 database에 저장 된다면 HTML 출력했을 경우,
 * 1) textarea를 textarea에 출력 시엔 문제 없음 
 * 2) 하지만 textarea를 (\n\r) => <br> 변경 => html에 보여지게 해줘야 함
 * textarea <script> => <~>사이를 지우거나, <를 &lt; 나 &gt; 로 변경 후 html tag로 보이도록 해야 한다
 * 
 * XSS 공격
 * 의도하지 않은 곳에서 script를 작성하여 강제 화면 이동, session 및 쿠키의 저장 등의 문제를 발생
 * 글에 적혀 있는 모든 tag를 삭제하는 방법인 RegEx를 통해 삭제
 * 
 */


function txtArea() {
	var txt = document.getElementById("txt");
	/**
	 * textarea는 markup이지만 form 요소이다
	 * 따라서 innerHTML, textContent로 처리할 수 없다.
	 */

	console.log("innerHTML: ", txt.innerHTML); //값 못가져옴
	console.log("textContent: ", txt.textContent); //값 못가져옴
	console.log("value: ", txt.value); //값 가져옴

	/*
	외부 script를 통해 submit 동작
	form의 탐색을 통해 해당 form 태그를 submit 이벤트 처리
	이유: 전송 해야 하는 값을 유효값 처리 해야 하기 때문
	*/
	
	/**
	 * 1) dom 탐색
	 * 2) tag 탐색
	 * 3) name 탐색
	 */


/*
	//1) dom 탐색	
	var formDom = document.getElementById("frm")
	if (txt.value == "") {
		alert('작동 불가');
	} else {
		formDom.submit();
	}

	//2) tag 탐색
	var formName = document.getElementsByTagName("form")[1];
	if (txt.value == "") {
		alert('작동 불가');
	} else {
		formTag.submit();
	}

	//3) name 탐색
	var formName = document.was;
	if (txt.value == "") {
		alert('작동 불가');
	} else {
		formTag.submit();
	}
	
*/


	//textarea에 모든 tag를 제거하는 정규화 표현식

/*
	var newText=txt.value;
	newText=newText.replace(/(<([^>]+)>)/igm,"");
	console.log("tag 삭제: ",newText);
*/


	//\n\r을 <br>로 변경
/*
	var newText=txt.value;
	newText=newText.replace(/(?:\r\n|\n|\r|\n\r)/gm,"<br>");
	console.log("<br>로 변경: ",newText);
*/

	
	// <와 >를 entity 태그로 변경
	var newText=txt.value;
	newText=newText.replace(/</g,'&lt;').replace(/>/g,'&gt;');
	console.log("entity 태그로 변경: ",newText);
	
}


window.onload = function() {
	var txt = document.getElementById("txt");
	//txt.value="안녕<br>하세요"; //안녕<br>하세요
	//txt.value="안녕\n\r하세요"; //안녕
								//하세요
	txt.innerHTML = "안녕<br>하세요"; //안녕<br>하세요 => 값을 가져오진 못하지만 입력하면 그대로 출력 가능.. 그냥 value만 된다고 생각하기..

}
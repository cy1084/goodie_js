/**
 * 
 */

 alert("링크");
console.log("링크", document.getElementById("sample").value);

/* document보다 상위 문서, 모든게 다 로드된 후 로드 */
window.onload = function() {
	alert("window.onload 실행");
}

/* 오버라이드돼서 위에거 실행안됨 */
window.onload = function() {
	alert("window.onload 임베디드 실행");
	document.getElementById("div_click").onclick = function(event) {
		console.log(event);
		alert("onload에서 이벤트를 실행시킴", event);
	}
}
//이벤트가 발생했을 때 그 이벤트에 대한 정보를 담은 Event 객체를 함수의 인자로 전달받기 위함
//이벤트가 발생할 때 브라우저는 자동으로 이벤트와 관련된 여러 정보를 담은 Event 객체를 생성
//onclick 등의 이벤트 핸들러 함수는 이벤트가 발생하면 자동으로 Event 객체를 인자로 받는다
//따라서 해당 함수의 인자로 event를 명시하면, 함수 내에서 이 객체를 통해 이벤트 관련 정보를 사용할 수 있다.
//alert 함수는 하나의 인자만 받으므로 두 번째 인자인 event는 무시된다 
//경고창에서는 이벤트 객체의 정보가 표시되지 않는다
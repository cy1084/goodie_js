/**
 * 
 */

 alert("링크");
 console.log("링크",document.getElementById("sample").value);
 
 /* document보다 상위 문서, 모든게 다 로드된 후 로드 */ 
 window.onload=function(){
	alert("window.onload 실행");
 }
 
 /* 오버라이드돼서 위에거 실행안됨 */
 window.onload=function(){
	alert("window.onload 임베디드 실행");
	document.getElementById("div_click").onclick=function(event){
		console.log(event);
		alert("onload에서 이벤트를 실행시킴",event);
	}
}

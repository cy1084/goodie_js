
//addEventListener를 통한 최근 window.onload 방식 
//DOMContentLoaded -> content 로드가 완료된 후~
document.addEventListener("DOMContentLoaded", function() {
	console.log("eventListener 동작");

	var anchs = document.querySelectorAll("a"); //nodelist
	var count = 1;
	var img = document.querySelector("img");

	console.log(anchs, count, img);

	//속성을 확인하는 함수 hasAttribute("속성명");
	//********* 속성을 추가, 변경하는 것과는 다름 *********/
	//html의 속성은 선언하지 않으면 존재하지 않음-> false!

	console.log("alt 속성이 있는지 확인", img.hasAttribute("alt")); //true
	console.log("title 속성이 있는지 확인", img.hasAttribute("title")); //true
	//나중에 setAttribute를 안하기 위해 title에 아무 값이 없더라도 미리 만들어 놓음

	//왼쪽
	anchs[0].onclick = function(event) {
		console.log("왼쪽");
		event.preventDefault(); //href 주소로 안감-> propagation 막아냄
		
		var imgAlt=img.getAttribute("alt");
		console.log(imgAlt);
		
		if(imgAlt=="img01"){
			alert('첫번째 이미지입니다.');
		}else{
			img.setAttribute("alt","img0"+(--count));
			img.setAttribute("src","./img/img0"+count+".png");
		}
	}
	
	//오른쪽
	anchs[1].onclick = function(event) {
		console.log("오른쪽");
		console.log(event);
		console.log(event.target); //event의 값과 속성 가지고 있음
		console.log(event.target.innerHTML);
		console.log(event.target.attributes[0]); //event 가져오기..
		
		//속성 변경
		event.target.attributes[0]="http://www.google.com";
		
		var imgAlt=img.getAttribute("alt");
		console.log(imgAlt);
		
		if(imgAlt=="img05"){
			alert('마지막 이미지입니다.');
		}else{
			img.setAttribute("alt","img0"+(++count));
			img.setAttribute("src","./img/img0"+count+".png");
		}
	}
});
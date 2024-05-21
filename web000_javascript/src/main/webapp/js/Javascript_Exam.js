/**
 * javascript 타입은 
 * html 화면에 출력되어있는 textNode를 가져오면 모두 string, DOM 탐색을 정확히 했다면 "" 값으로 가져옴
 * -> 값(콘텐츠): innerHTML, textContent
 * 
 * DOM 탐색
 * - document.(문서전체)
 * - document,getElement[s]: s가 붙은 탐색은 모두 nodeList 형태로 가져오고, 아닌 경우 Node로 가져옴
 *  *** DOM 탐색되어 가져온 Element는 결과의 위치가 pass by reference로 동작(OGNL 방식 내부 탐색)
 * 		속성.하위탐색, 콘텐츠는 예약어(innerHTML, textContent)
 * 		ex) <a href="http://www.naver.com">이동</a>
 * 			var a=document.getElementByTagName("a")[0];
 * 			console.log(a.href); //http://www.naver.com
 * 			console.log(a.textContent);// 이동
 * 
 *- document.querySelector[All]("셀렉터표현식"): CSS 셀렉터표현식을 통한 방법으로 탐색
 * querySelector는 node, querySelectorAll는 nodelist로 가져옴 
 * 
 * 탐색된 위치 값을 처리하는 방식
 * - Empty Element(닫힘 tag 없음): 속성으로 값을 가지고 있음, value 속성으로 값을 가져옴 ex) <input type="text" value="안녕">
 * - Element: 열림 tag + 콘텐츠 +  닫힘 tag로 구성
 * 			: Mark up(well formed) 태그
 * 				- innerHTML: 자식의 태그 포함
 * 				- textContent: 자식의 textnode만을 포함
 * 
 * form 요소: <input type=""> 서버에 값을, 선언된 name으로 전송할 수 있는 영역
 * form 요소의 textarea-> <textarea>콘텐츠</textarea>로 구성되어 있고, 콘텐츠는 보여지는 그대로 문자열(escape 포함)로 전송
 * 						따라서 필요 시 XSS 공격을 방지하기 위해 줄바꿈(\n\r)은 <br>로,
 * 						< 태그는 entity tag(&it;)로 변경해서 처리!
 * 						값을 처리할 때는 textContent나 innerHTML이 아닌 value로 처리!
 *	
 * <form> -> submit 동작 -> action -> method 서버로 전송
 * 
 * 통신규약 http 1.1: GET, POST, PUT, DELETE, TRACE
 * 
 * <form> 에서만 동작되는 이벤트는 submit, reset
 */

function numCheck01() {
	var num1 = document.getElementsByName("num")[0];
	var num2 = document.getElementById("realNum");
	//=	var numSelector=document.querySelector("input[name=num]");
	//=	var numSelector=document.querySelectorAll("input[name=num]")[0];
	//=	var numSelector=document.querySelector("#realNum");

	console.log(typeof num1, num1.value); //string
	console.log(typeof num2, num2.value); //string

	console.log("탐색값타입 num1: ", typeof num1.value, num1.value);
	console.log("탐색값타입 num2: ", typeof num2.value, num2.value);

	//숫자로 변경
	console.log(typeof parseInt(num1.value), parseInt(num1.value));
	console.log(typeof parseInt(num2.value), parseInt(num2.value));
	console.log(typeof new Number(num1.value), new Number(num1.value));
	console.log(typeof Number(num1.value), Number(num1.value));

	var checkNum = parseInt(num1.value) + "" == "NaN" ? "숫자아님" : "숫자맞음";
	console.log("NaN으로 확인: ", checkNum);


	var numValue = document.getElementsByName("num")[0].value;

	//현대식(?)ㅎ.ㅎ
	//숫자 판단
	//test, match, search(맞으면 0, 틀리면 -1 반환)
	var regExNum = /[0-9]/g;
	var numCheck = numValue.search(regExNum);
	if (numCheck == -1) {
		alert("숫자가 아닙니다.");
	} else {
		alert("숫자입니다.");
	}

	//한 개의 node를 검색(id)할 때 탐색 결과가 없다면 null
	var tmp1 = document.getElementById("tmp1");
	console.log("화면에 없는 id를 탐색해봄: ", tmp1);

	//[s]가 붙은 탐색-nodelist로 반환, 탐색 결과가 없다면 null

	//nodelist는 array이기 때문에 index를 호출, array가 new 된 상태가 아님
	//객체 자체가 undefined로 처리
	var tmp2 = document.getElementsByName("tmp")[10];
	console.log(tmp2);

	//따라서 javascript에서 판단할 때는 null을 확인하지 않아도 됨
	//numValue==null 판단 필요 없음
	if (numValue == "" || numValue == null) {
		alert("값을 입력해주세요");
	} else {
		if (isNaN(numValue)) { //Number.isNaN()
			alert("숫자가 아닙니다.");
		} else {
			alert("숫자가 맞습니다.");
		}
	}

	//전화번호 정규화 표현식
	var regExPhone = /^\d{2,3}-\d{3,4}-\d{4}$/;

}

function searchStr02() {
	var num2 = document.getElementById("num2");
	console.log("num2의 탐색 결과: ", num2);
	console.log(num2.value);//undefined
	console.log(num2.innerHTML);//span 태그까지 출력
	console.log(num2.textContent);//내용만 출력

	var vals = document.getElementById("val").value;
	var pre = document.getElementsByTagName("pre")[0].textContent;

	console.log(vals);
	console.log(pre);

	if (pre.indexOf(vals) == -1) {
		alert('검색된 단어가 없습니다.');
	} else {
		alert(pre.indexOf(vals) + '위치에 존재합니다.');
	}
}

//화면이 모두 로드(랜더링 완료)된 후 실행되는 onload를 사용하거나
//자바스크립트 link를 통해서 했다면 defer 방식-> onload 전 실행

window.onload = function() {
	console.log("첫번째 onload");
	var rdos = document.getElementsByName("site");
	console.log(rdos.length);

	//	for (let r in rdos) {
	//		console.log("in 사용: ", r);
	//
	//	}
	//	for (let r of rdos) {
	//		console.log("of 사용: ", r);
	//	}

	for (let i = 0; i < rdos.length; i++) {
		rdos[i].onclick = function() {
			//this: 현재 function을 가지고 있는 객체
			console.log(this.checked, this, this.value);
		};
	}
} //onload

function openURL(url) {
	var urlName = url.substring(url.indexOf(".") + 1, url.lastIndexOf(".")); //가운데 있는 글자들만 가져옴
	console.log("이동사이트 이름: ", urlName);
	open(url, urlName, "width=500px, height=700px");

}

function allchk04(bool) {
	var subjects = document.getElementsByName("subject");
	for (let s of subjects) {
		s.checked = bool;
	}
}

//onload가 두 개라면? 126줄과 162줄 => 오버라이드!
//window.onload = function() {
//	console.log("두번째 onload");
//}


//jQuery onload는 가장 우선되어 실행!(window.onload보다!)
//jQuery onload 끼리는 순차적으로 실행!(오버라이드 되지 않음-> 콜백함수이기 때문)
//jQuery란?
//CSS+javascript로 되어 있어, 동작 이벤트로만 구성되어 있는 라이브러리
$(function() {
	console.log("두번째 jQuery onload");
}); //jquery가 javascript 보다 먼저 실행!

$(function() {
	console.log("세번째 jQuery onload");
	$("#allj").click(function() {
		if ($("#allj").prop("checked")) {
			$("input[name=subject]").prop("checked", true);
		} else {
			$("input[name=subject]").prop("checked", false);
		}
	});
});

//위의 jQuery를 javascript로 바꾸면!
//window.onload = function() {
//	document.getElementById("allj").onclick = function() {
//		if (this.checked == true) {
//			var subject = document.getElementsByName("subjects");
//			for (let s of subject) {
//				s.checked = "true";
//			}
//		} else {
//			var subject = document.getElementsByName("subjects");
//			for (let s of subject) {
//				s.checked = "false";
//			}
//		}
//	}
//}

//for문 두번 안돌리려면 아래와 같이도 가능! checked 상태에 따라 달라짐~
document.getElementById("allj").onclick = function() {
	var subject = document.getElementsByName("subjects");
	for (let s of subject) {
		s.checked = this.checked;
	}
}

function randomNum05() {
	//Math
	//java.util.Math
	var n = Math.ceil(Math.random() * 20);
	document.getElementById("rdmNum").value = n;
}

function selPage06() {
	//selected: 자식(option)이 선택된 상태
	//options: 자식 태그의 집합(document.getElementsByTagName("option")을 하지 않아도 됨)
	//selectedIndex: 선택된 자식(option)의 index 번호

	var select = document.getElementById("selSite");
	location.href = select.options[select.selectedIndex].value;
}

//double sort
function sortNum() {
	//화면의 탐색 값은 모두 다 string
	//연산 결과가 문자형 숫자인 경우
	console.log('1' + 1); //concatenation 발생- 주의!
	var seq = document.getElementById("numVal").textContent;
	var seqVal = seq.trim();
	var arrSeq = seqVal.split(",");
	console.log(arrSeq);

	//javascript는 문자 정렬을 기본으로 수행
	//값을 무조건 문자 처리하여 정렬됨
	//따라서 sort인 결과는 letters로 정렬
	//숫자인 경우 문자로 처리되기 때문에 callback 함수를 만들어서 sort 함수에 사용해야 함
	//a-b 오름차순/ b-a 내림차순
	//callback 함수는 arrow function으로 사용하는 게 일반적
	//array-> pass by reference

	//var arrayASC = arrSeq.sort((a, b) => a - b);
	var arrayASC = arrSeq.sort(compare);
	console.log(arrayASC);

	//reverse: 역으로 출력
	console.log(arrayASC.reverse());
}

//bubble sort는 회차를 통해 가장 큰 값을 마지막의 index로 이동시키는 방식
function bubbleSort(arrStr) {
	var len = arrStr.length;
	var tmp;
	for (let i = 0; i > len - 1; i++) {
		for (let j = 0; j > len - i - 1; j++) {
			if (parseInt(arrStr[j]) > parseInt(arrStr[j + 1])) {
				tmp = parseInt(arrStr[j]);
				arrStr[j] = parseInt(arrStr[j + 1]);
				arrStr[j + 1] = tmp;
			}
		}
	}
}

function compare(a, b) {
	return a - b;
}

//화면에 시계 출력하기
//함수 리터럴 setInterval, clearInterval

//전역변수
const timeInterval = setInterval(clockStart, 1000);

function clockStart() {
	const date = new Date();
	document.getElementById("nowTime").innerHTML = date.toLocaleTimeString();
}

function clockStop() {
	clearInterval(timeInterval);
}

function life() {
	var date = new Date();
	console.log(date.toDateString);
	console.log(date.toLocaleDateString);
	console.log(date.toLocaleTimeString);
	console.log(date.toLocaleString);

	/**
	 * 화면 <input type="date"> 에서 선택한 날짜를 탐색하여 값을 가져옴
	 * 형태: yyyy-MM-dd
	 * 하지만 Date() 객체를 생성할 때는 yyyy-M-d
	 * 따라서 표준 표현 준수사항을 맞춰줘야 함 => . or -
	 */

	//1981-02-25
	var birthday = document.getElementsByName("birthday")[0];
	//전체입력방식 사용
	var birth = new Date(birthday.value);
	//var birth = new Date("1981-2-25");
	console.log(typeof birth, birth);

	//날짜를 구할 때는 객체에서 time을 통해 연산 (1000*60*60*24)
	var dateCal = (birth.getTime() - date.getTime()) / (1000 * 60 * 60 * 24); //일수
	var lifeDay = Math.abs(Math.ceil(dateCal)); //살아온 일수
	console.log("날짜 계산: ", lifeDay);

	var b = document.createElement("b");
	b.textContent = lifeDay;
	document.getElementById("dateVal").appendChild(b);

	/**
	 * 만약 javascript의 Date 객체를 사용하여 화면의 <input type="date">에 value로 입력한다면 
	 * 반드시 형식을 맞춰야 함 yyyy-MM-dd
	 * 
	 * new Date() 객체를 생성할 때 특정 날짜(년,월,일)의 값을 arguments로 입력한다면 
	 * 날짜 객체를 사용할 때는 +1, 입력할 때는 -1을 연산하여 사용해야 함
	 */

	//첫째날 구하기
	var firstDay = new Date(date.getFullYear(), date.getMonth(), 1); //2024-05-01
	var firstDayVal = new Date(2024, 5, 1);//입력 값 2024-6-1
	//따라서 2024-5-1을 출력하려면 아래와 값이 해야 함
	var firstDayVal = new Date(2024, 4, 1);
	console.log("new Date()의 월 값: ", date.getMonth() + 1);

	console.log(firstDay);
	console.log(firstDayVal);


	//마지막 날 구하기
	var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	console.log("월의 마지막 날: ", lastDay);


}

function domTest() {
	var frm = document.info; //이름으로 호출

	//화면에 입력되어 있는 값을 name을 호출해서 가져옴
	var vals = [frm.id.value, frm.pw.value, frm.addr.value, frm.phone.value];
	var id = document.getElementsByName("id")[0].value;
	console.log("화면의 값: ", vals[0], id);

	//append 할 위치 탐색
	var domTable = document.getElementById("domTable");

	//append 할 객체
	var table = document.createElement("table");
	table.style.width = "200px";
	table.style.backgroundColor = "yellow";

	var tr = document.createElement("tr");
	for (let i = 0; i < vals.length; i++) {
		var td = document.createElement("td");
		td.textContent = vals[i];
		tr.appendChild(td); // 하나 만들어질 때마다 tr에 붙이기
	}
	table.appendChild(tr);
	domTable.appendChild(table);

}

function guguDanView() {
	var guguVal = document.getElementById("guguVal").value;
	var guguPrint = document.getElementById("guguPrint");

	for (let i = 1; i <= 9; i++) {
		let div = document.createElement("div");
		let multi = guguVal * i;
		div.textContent = `${guguVal} x ${i} = ${multi}`;
		guguPrint.appendChild(div);
	}
}


/**
 * REST API: 비동기식 처리 방법(AJAX - Asynchronized Javascript And Xml)
 * 			 XMLHttpRequest 객체를 통해 값을 전달 받는다
 * 			 jQuery(설치 필요), Axios(설치 필요), Fetch(자바스크립트가 갖고 있는 기본 객체)
 * 
 */
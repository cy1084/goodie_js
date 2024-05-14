/**
 * 
 */

function stringTest01() {
	//concatenation
	//x.concat(y): 문자열로 만들어 줌

	var str01 = "String";
	var str02 = "Test";
	var str03 = str01 + (0.1 + 1) + str02;
	console.log(str03);

	//javascript의 concat 함수는 arguments의 제한이 없다.
	var str04 = str01.concat(1, false, 1 + 0.1, str02);
	console.log(str04);

	//join: Array에서 각각의 요소를 특정 conjunction을 통해 합쳐줌
	var array = ["99", 77, "s"].join("/");
	console.log(array); // 99/77/s
}

function stringTest02() {
	//다른 타입의 리터럴을 concatenation을 통해 문자열로 변경할 수 있다.
	var i = 10;
	var d = 1.1;
	var str = "월요일";
	var bool = false;

	var result = "";
	result = result + i + d + str + bool;
	console.log(result);
}

function stringTest03() {
	// ==, ===
	var numStr1 = '10';
	var numStr2 = new Number(10);
	console.log(typeof numStr1); //String
	console.log(typeof numStr2); //Number Object(객체)

	//prompt: 문자만 받아 옴
	var strVal = prompt("당신의 이름은");
	var span = document.getElementById("cmd");

	//RegEx 확인 방법
	// 1) 정규 표현식.test(값)
	// 2) 값. match(정규표현식)
	console.log(strVal.match(/[2-9]/));

	//match는 값이 맞지 않으면 null을 반환
	//1 입력하면 null 반환

	if (strVal.match(/[2-9]/)) {
		console.log(typeof strVal, strVal);
		alert("숫자 2부터 9까지는 입력 금지");
	} else if (strVal == 1) {
		span.textContent = strVal + "님 반갑습니다.";
	} else {
		span.textContent = "다시 입력해주세요.";
	}
}

function stringTest04() {
	//indexOf, lastIndexOf
	var strword="홍길동 놀부 흥부 까치 놀부 도깨비";
	var prop=prompt("검색할 단어를 입력해주세요.");
	console.log(strword.indexOf(prop));
	console.log(strword.indexOf(prop,-100)); //indexOf(검색할 문자열, 검색 시작 위치)
	console.log(strword.lastIndexOf(prop,5)); //인덱스 6부터 검색
}

function stringTest05() {
	//substring, split
	var str = "문자열 추출, indexOf		: lastIndexOf		";
	var comma = str.indexOf(", ");
	console.log(str.substring(0, comma));
	//start index 포함, end index-1

	//split: 정규화 표현식을 사용해야 함
	var val = "oop:ooo:foo";
	var split1 = val.split(/:/);
	console.log(split1, split1.length);
	
	var split2 = val.split("o"); //문자열이니까 그냥 "" 안에
	console.log(split2, split2.length);
	
	var char=val.charAt(2);
	//var char=val.chatAt(20); => 값이 넘어가면 "" 없는 값으로 
	console.log(char+"값", typeof char);

}

function stringTest06() {
	//split => 향상된 for문 가능
	//화면의 DOM 탐색이라면 객체(Element)가 가지고 있는 속성을 출력
	var val="oop,ooo,foo";
	var split=val.split(",");
	for(let i in split){
		console.log(i);
			}
}
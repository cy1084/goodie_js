/**
 * 
 */
//자바스크립트에선 ; 안찍어도됨!
/*
//변수의 사용 영역
function variable_scope() {
	console.log("작동");

	var a; //선언만 되어 있는 변수=> undefined
	console.log("선언만 되어 있음", a);
	console.log(typeof a); //1. 선언만 되어있음-> undefined
	//console.log(x); //선언되어 있지 않음, null과 혼동xxx!!
	//2. 선언되어 있지 않은 변수를 사용하면 오류 발생

	//3. 화면(document)에서 탐색할 수 없는 Element를 변수로 만들면 null이 됨


	var z = document.getElementById("empty");
	console.log(z);

	//javascript에서는 같은 변수(var)를 계속 선언할 수 있다
	//global 영역에 있는 애이기 때문에 오버라이드처럼 적용
	//scope는 var 변수에 적용
	//function 내부에서의 scope는 서로 공유

	var a = 10;
	if (true) { //고려해야 할 사항
		console.log("범위 밖에서 scope 생성 전: ", c)
		//아직 c가 선언되지 않았으므로 undefined
		//위의 x처럼 오류가 아닌 undefined인 이유: 밑에서 선언될 것이기 때문

		var b = 300;
		var b = 200;
		for (var c = 0; c < 5; c++) {
			console.log("c=", c);
		}
	}
	console.log("범위 밖에서 scope 호출: ", c, b); //5,200 /scope 밖에서도 호출 가능..

	//var ischeck=true;
	//var ischeck="작동"; 
	//var ischeck; //선언만 되어 있으면 객체 없음
	var ischeck = "true";

	if (ischeck == "false") { //자바스크립트의 if: 객체가 있으면 true로 인식
		console.log("작동");
	}

	//ES6 문법에서는 var 변수의 scope 문제로 인해 사용하기 어렵다
	//추가변수(scope 제한): let, const
	//let 지역변수, const 상수

	const PI = 3.14;
	//PI=1.11; //상수: 다시 초기화 불가

	for (let i = 0; i < 5; i++) {
		console.log("i=", i);
	}

	//console.log("범위 밖 i=",i); 불가


	var variable = 10;

	function global_variable() {
		console.log("global_variable() 작동");
		variable = variable + 10;

		document.getElementById("v1").innerHTML = "<b>+variable+</b>";
	}

//0510 scope 다시..
	function local_scope() {
		console.log("local_scope() 작동");
		//전역변수로 variable이 선언되어있다.
		//함수에서 전역변수를 다시 정의하면??
		//답> 지역변수로 되어버린다.
		alert("전역변수 호출:", variable); //10(전역변수로)
		

		//동적변수 vs 정적변수
		//동적변수: 값에 의해 타입이 정해짐
		//정적변수: 타입이 미리 정해지고 값을 대입
		var variable = variable + 99;

		var html = "";
		html += "<em>" + variable + "<em>";
		//DOM의 콘텐츠는 두가지 형태로 사용
		//1) innerHTML: HTML tag를 인식해서 사용
		//2) textContent: 문자로 인식해서 사용
		document.getElementById("v2").textContent = html;
		//text로 html에 집어 넣겠다.
	}

	function local_variable() {
		let variable = variable + 99;
		document.getElementById("v2").textContent=variable;
	}
	
	function variable_type(){
		var var02=5; //숫자 number
		var var03=3.13; //숫자 number
		var newVar=new Number(10); //Object
		console.log(typeof var02, var02);
		console.log(typeof var03, var03);
		console.log(typeof newVar, newVar);
		console.log(typeof newVar, newVar.valueOf);
		console.log(typeof newVar, newVar.toString()); //문자열로 바꿔서 보여줌
		
		
		var var04="문자"; //javascript에서는 "" 나 ' 아무거나 사용!
		var newVar04=new String("문자");
		console.log(typeof var04,var04); //string 문자
		console.log(typeof newVar04,newVar04); //String{'문자'}
		console.log(typeof newVar04,newVar04[0]); //Object 문
		console.log(var04.charAt(0));
		
		var var05=[1,2,3,"a"];
		console.log(typeof var05, var05);
		
		for(let i of var05){ //객체의 값 출력
			console.log(i);
		}
		for(let i in var05){ //index 출력
			console.log(i, var05[i]);
		}
		
	}

}
*/
//var alert = 10;
//alert('작동');

//변수의 사용 영역
function variable_scope() {
	console.log("작동");

	var a; //선언만 되어있는 변수 => undefineded
	console.log("선언만 되어 있음", a);
	console.log(typeof a);

	//javascript의 선언되지 않은 변수를 사용하여 오류가 발생
	//console.log(x); //'선언되어 있지 않습니다'와 'null'을 혼동하지 않기

	//화면(document)에서 탐색할 수 없는 Element를 변수로 만들면 null이 된다
	var z = document.getElementById("empty");
	console.log(z); //null

	//javascript에서는 같은 변수(var)를 계속 선언할 수 있다
	//scope는 var변수에 적용된다
	//function 내부에서의 scope는 서로 공유함

	var a = 10;
	if (true) { // 고려해야 할 사항
		console.log("범위 밖에서 scope 생성전", c); //undefined. 밑에서 쓸거라 미리 선언된거임
		var b = 300;
		var b = 200;
		for (var c = 0; c < 5; c++) {
			console.log("c=", c);
		}
	}

	console.log("범위 밖에서 scope 호출", c, b); //5. 200

	//var isc=true; //isc = ischeck
	//var isc="작동";
	//var isc; //이러면 객체가 없어서 false로 인식 -> 안뜸
	var isc = "true";

	if (isc == "true") { //조건식에 객체가 있으면 true로 인식.
		console.log("작동");
	}

	//ES6 문법에는 var변수 scope의 문제로 사용하기 어렵다
	//  추가변수 설정 let, const
	//  let는 지역변수, const는 상수

	//const PI; //오류
	const PI = 3.14;
	// PI = 1.11; //상수는 재정의할 수 없음

	for (let i = 0; i < 5; i++) {
		console.log("i=", i);
	}

	console.log("i=", i);
}

// 얘가 지역인지 전역인지
var variable = 10;

function global_variable() {
	console.log("global_value 작동");
	variable = variable + 10;

	document.getElementById("v1").innerHTML = "<b>" + variable + "</b>";
}

function local_scope() {
	console.log("local_scope 작동");
	// 전역변수로 variable이 선언되어 있다.
	// 함수에서 전역변수를 다시 정의하면?
	// 답> 지역변수로 되어버린다
	alert("전역변수 호출:", variable); // 화면에 undefined는 표시하지 않음.
	console.log(variable); // 아래의 선언된 지역 scope에 의해서 새로 선언

	// 동적 변수 vs 정적 변수
	var variable = variable + 99;

	// 정적변수: 타입 고정
	// 동적변수: 타입 유동적

	// undefined와 숫자를 연산한 결과는 숫자가 아닌 값 NaN(Not a Number)

	var html = "";
	html += "<em>" + variable + "</em>";

	// DOM의 콘텐츠는 두가지 형태로 사용
	// 1) innerHTML : HTML tag를 인식해서 사용 방법
	// 2) textContent : 문자로 인식해서 사용방법
	document.getElementById("v2").textContent = html; //textContent : text로 추가
}

function local_variable() {
	let variable = variable + 99;
	document.getElementById("v2").textContent = variable;
}

function variable_type() {
	var var02 = 5; // 숫자 number
	var var03 = 3.13; // 숫자 number
	// 실수, 정수 구분안함

	var newVar = new Number(10); // 객체 Object

	console.log(typeof var02, var02);
	console.log(typeof var03, var03);
	console.log(typeof newVar, newVar);
	console.log(typeof newVar.toString(), newVar.toString());

	var var04 = "문자"; // javascript에서는 " ' 아무거나 사용할 수 있다
	var newVar04 = new String("문자");
	console.log(typeof var04, var04);
	console.log(typeof newVar04, newVar04[0]);
	console.log(var04.charAt(0));

	var var05 = [1, 2, 3, "a"];
	console.log(typeof var05, var05);

	for (let i of var05) { // 객체의 값을 출력
		console.log(i);
	}

	for (let i in var05) { // index를 출력
		console.log(i, var05[i]);
	}

	var var06 = false;
	console.log(typeof var06, var06);
	console.log(typeof var06 + 1, var06 + 1);//숫자 연산
	console.log(typeof var06 + "victory", var06 + "victory");
	//문자열과 연산 

	var var07 = null; //Object
	console.log(typeof var07, var07);
	console.log(var07); //null
	console.log(var07 + 1); //1, null은 숫자 연산이 되면 해당 연산된 값을 기준으로 값을 생성
	console.log(var07 + "victory"); //nullvictory
	//console.log(var07.); //어떠한 함수도 갖고있지 않다

	//값, undefined, null
	var var08;
	console.log(typeof var08, var08); //undefined
	console.log(var08 + 1); //nan 값이 존재하지 않음
	console.log(var08 + true); //nan
	console.log(var08 + "victory");

	//--------------------------------------------//
	//이름이 있는 function: 명시적 선언 방식
	//변수에 담겨 있는 이름이 없는 function: 익명적 선언 방식
	var var09 = function(id) {
		alert("값: " + id);
	};

	//고려해야 할 사항
	//1. 이름이 없는 변수 값으로 있는 함수= 익명 함수
	//	 사용할 때는 console.log()에 사용x, 강제 실행되기 때문에
	//2. 선언되어 있는 함수가 값을 전달받지 않을 경우 전달 값은 undefined

/*
	var09(100, 200, 300); //function(id) 파라미터가 하나이기 때문에 100만 전달
	console.log(var09); //자바 스크립트에서는 function도 하나의 값이 될 수 있기 때문에 function 그대로 찍힘
	alert(var09);  //함수 내용 그대로 alert 창에
	alert(var09()); //함수 실행
	
*/

	//객체, Node, Element
	//Node tree, 각 요소 Element
	//HTML의 body의 tag를 DOM 탐색하면 element를 가지고 온다 -> Object
	//id는 document의 첫번째 혹은 한개만 탐색 getElementById ->Node/Element 가지고 옴
	//name이나 class는 여러 개 존재 가능 getElementsBy** -> Node List/ Elements 가지고 옴
	
	//**이름 없는 tag/id/class를 탐색하게 되면 null이 됨 */
	var var10=document.getElementById("v1");//Node
	var var11=document.getElementsByTagName("li");//Node List
	console.log(typeof var10);
	console.log(typeof var11);
	
	//HTML의 DOM 탐색을 묶은 단위 Object. 
	//따라서 해당 Object의 필요한 값을 가져오기 위해서는 OGNL 문법을 사용해야 함
	
	console.log(var10.id);
	
	




}

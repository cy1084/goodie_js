/**
 * 
 */

//명시적 함수: 이름을 가지고 있는 함수
function function01() {
	console.log("명시적함수: function 함수명(){}");
}

//익명적 함수: 함수인데 이름을 가지고 있지 않고 변수의 값으로 담겨 있는 함수
var function02 = function() {
	console.log("익명함수: var 변수=function(){}");
}
//function02는 변수의 이름도 되지만, function02() 하면 실행도 됨


//함수 리터럴, 가장 많이 쓰는 방식 , 다시......
//즉, 변수에 담겨 있는 function이 아닌, 값의 역할을 하는 function

//literalFn-> 인자로 함수를 받는 함수
//인자로 받은 함수 literal을 호출하면서 "안녕하세요" 문자열을 인자로 전달
//이후 "반갑습니다" 문자열을 반환
function literalFn(literal) {
	literal("안녕하세요");
	return "반갑습니다";
}

//function03은 literalFn을 호출하고 그 결과를 alert로 표시하는 함수
//literalFn을 호출할 때, 익명 함수를 인자로 전달하고, 이 익명 함수는 매개변수 msg를 받아 alert로 표시
//literalFn이 호출되면 전달된 익명 함수가 "안녕하세요" 메시지로 호출되고, 그 메시지를 alert로 표시
//마지막으로 literalFn은 "반갑습니다"를 반환하고, function03은 이 반환 값을 alert로 표시
function function03() {
	alert(literalFn(function(msg) {
		alert(msg);
	}));
}

//전역 범위에서 literal이라는 변수를 선언하고 함수로 정의
//코드가 실행되면 먼저 "memory"라는 메시지가 표시 (전역 범위에서 호출됐기 때문)
var literal = function(msg) {
	alert(msg);
}
literal("memory");



function argumentsValue(a, b, c, d) { //함수에서의 parameter는 자동으로 선언되어지게 된다
	console.log(a, b, c, d);	//d는 undefined
	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
	console.log(arguments[3]); //undefined
	console.log(arguments[4]); //undefined


	//일반 for문
	for (let i = 0; arguments.length; i++) {
		console.log('^^ ${i}' + arguments[i]);
		//# ''이 붙어 처리
		//$ 값만 출력
	}

	//향상된 for문 in
	for (let i in arguments) {
		console.log('^^^^ ${i}' + arguments[i]);
	}
	//향상된 for문 of
	for (let i of arguments) {
		console.log('^^^^ ${i}');
	}

	//forEach
	Object.entries(arguments).forEach((key, value) => { console.log(key, value) })
	//entries: 인덱스를 키값으로 만들어줘서 키와 밸류 만들어냄
	//그걸 키와 밸류로 뜯어서(forEach) 출력

	
}

function pPrint() {
		var obj = document.getElementsByTagName("p");
		console.log("p 태그의 개수:", obj.length);
		for (let i in obj) {
			console.log(obj[i].textContent, obj[i].tagName);
		}
		for (let i of obj) {
			console.log(i.textContent);
		}
	}

	//함수 리터럴
	//콜백함수(callback function): 특정 함수의 arguments 부분을 함수로 받는 함수
	//클로저함수(closure)
	//외부에서 선언된 변수를 내부에서 사용할 때, 내부 함수 부분을 클로저 함수라고 함

//클로저(인자로 받은 값을 기억) 다시..
	function closureFn(val) {
		function addVal(msg) {
			alert(val + ":" + msg);
		}
		return addVal;
		//addVal 함수를 반환, 이 반환된 함수는 val을 기억하는 클로저가 됨
	}

var amEdu=closureFn("HTML");
//closureFn 내부에서 addVal 함수가 생성되며, 이 함수는 val로 "HTML"을 기억
//addVal 함수가 반환되고, 이 반환된 함수는 amEdu 변수에 할당

function closureTest(){
	closureFn("javascript")("어려워요");	
}
//closureTest 함수는 "javascript"를 기억하는 클로저를 생성하고 즉시 호출하여 "javascript:어려워요" 메시지를 표시


//클로저가 함수 내부의 변수를 기억하고, 그 변수가 정의된 환경 밖에서도 접근할 수 있음을 보여줌
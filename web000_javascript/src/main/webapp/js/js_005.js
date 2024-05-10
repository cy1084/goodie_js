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

function literalFn(literal) {
	literal("안녕하세요");
	return "반갑습니다";
}

function function03() {
	alert(literalFn(function(msg) {
		alert(msg);
	}));
}

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

//클로저 다시..
	function closureFn(val) {
		function addVal(msg) {
			alert(val + ":" + msg);
		}
		return addVal;
	}

var amEdu=closureFn("HTML");

function closureTest(){
	closureFn("javascript")("어려워요");	
}
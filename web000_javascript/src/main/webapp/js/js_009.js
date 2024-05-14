/**
 * 
 */

function numberTest() {
	var num1 = new Number(); //대문자- 객체 생성
	var num2 = 10; //리터럴 선언 방법
	var num3 = 7; //리터럴 선언 방법

	//비교
	//객체로 선언된 Number와 리터럴 값은 같으나 타입은 다름
	// === 완벽한 비교: 타입도 같으면서 값도 같은 객체를 판별할 때 사용

	document.write((num1 == num3) + "<br>"); //값 비교
	document.write((num1 === num3) + "<br>"); //타입과 값 비교

	//Number의 객체는 valueOf()-> 리터럴로 값 반환
	//				toString()-> 문자열로 값 반환
	console.log(typeof num1.valueOf()); //number
	console.log(typeof num1.toString()); //String

	console.log(num1.valueOf === num3); //

	//NaN(Not a Number): 숫자가 아닌 문자형 숫자인지 판별
	//javascript는 암묵적으로 값을 형변환시켜서 값을 만들어 줌
	console.log("속성 NaN: " + parseInt("a"));

	//Number 객체의 함수
	//toFixed(): 반올림
	//toString()

	var double = 3.15753;
	var fix = double.toFixed(4);
	console.log("toFixed: " + fix); //+와 ,의 차이..?
	console.log(typeof fix);
	console.log(10 / 3);
	console.log(10 % 3);
	console.log(num2.toString(8));
}

function isNumber() {
	var prop = prompt("숫자만입력해주세요");
	if (isNaN(prop)) {
		alert("숫자가 아닙니다.");
	} else {
		alert("숫자입니다.");
	}
}

function isRegEx() {
	//숫자판별 정규화 표현식
	// \d(숫자) ,\D(숫자가 아닌 것)
	// []범위: 0-9(숫자) a-z(소문자) A-Z(대문자) ㄱ-뷁(한글)

	var regEx = /^[0-9]*$/; //$ 종료
	var num = document.getElementById("num").value;
	console.log(typeof num);
	if (regEx.test(num)) {
		alert("숫자가 아닙니다.");
	} else {
		alert("숫자입니다.");
	}
}

//전화번호, 우편번호, 이메일 등은 알아놓으면 좋음
function isPhone(){
	//숫자-숫자-숫자
	//(2~3자리)-(3~4자리)-(4자리)
	
	var regEx=/^\d{2,3}-\d{3,4}-\d{4}$/gim; 
	//g 전체 검색
	//i 대소문자 구분안함
	//m 한문장이 아닌 전체 문장 검색
	
	var phone=document.getElementById("phone").value;
	if(!regEx.test(phone)){
		alert('형식에 맞게 입력해주세요');
	}else{
		alert('입력되었습니다.');
	}
	
}


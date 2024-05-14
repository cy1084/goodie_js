function numTest() {
	var val = document.getElementById("num").value;
	console.log(typeof val, val); //화면에서 탐색된 값은 모두 string
	console.log(val + 10); //210, concatenation 발생 

	var cal = Number(val) + 10; //val는 string이기 때문에 number 타입으로 바꿔줘야 함
	console.log(cal); //12

	//****new Number() valueOf() toString() ****/
	var cal1 = new Number(val);
	console.log(typeof cal1, cal1); //Object, Number
	var cal2 = cal1 + 10;
	console.log(typeof cal2, cal2);
}

function intNum() {
	//숫자로 변경될 수 없는 값은 NaN이 된다
	var val = document.getElementById("valNum").value; //dom 탐색 후 안의 값을 가져옴
	console.log(parseInt(val));

}

function floatNum() { //1.11 대입 시
	var val = document.getElementById("valFloat").value;
	var cal = val + 10;	//1.1110
	console.log(cal);

	var cal1 = parseFloat(val) + 10; //11.11
	console.log(cal1);
}

function calculation() {
	var txt = document.getElementsByName("evalValue")[0].value;
	var cal = eval(txt);
	console.log(cal);
	
	document.getElementsByTagName("span")[0].textContent=(txt+"="+cal);
	//textContent-> 내용을 가져옴
}
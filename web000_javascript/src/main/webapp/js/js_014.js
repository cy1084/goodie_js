// window. 생략 가능
window.onload = function() {
	var d = new Date();
	console.log(d);
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var date = d.getDate();

	//달력
	//array 0~11 -> 가져올 때 +1 해서 가져와야 1~12가 됨
	//			 -> 넣을 땐 -1 

	console.log(typeof d.getFullYear()); //number


	var yearTwo = d.getFullYear().toString().padStart(2, '0'); //lpad rpad
	var monthTwo = (d.getMonth() + 1).toString().padStart(2, '0');
	var dateTwo = d.getDate().toString().padStart(2, '0');

	var printDate = `${year}-${month}-${date}`;
	var printDateTwo = `${yearTwo}-${monthTwo}-${dateTwo}`;

	console.log(printDate); //2024-5-14
	console.log(printDateTwo);//2024-05-14

	//document.getElementById("day").value=printDate; //에러, 2024-05-14 형식이 아님
	document.getElementById("day").value = printDateTwo;

	document.getElementsByTagName("button")[0].onclick = testDate01;
	//익명함수로, 함수리터럴을 onclick 이벤트로~
	document.getElementsByTagName("button")[1].onclick = testDate02;
	document.getElementsByTagName("button")[2].onclick = testDate03;
	document.getElementsByTagName("button")[3].onclick = testDate04;
}

function testDate01() {
	console.log("오늘 날짜 출력");
	var nowDay = document.getElementById("nowDay");

	//날짜 객체 생성
	var date = new Date();
	//java에서의 날짜형태 변환: SimpleDateFormat
	//DB에서의 날짜형태 변환: TO_CHAR();

	//기본으로 제공되는 date의 출력 형태
	//nowDay.innerHTML = date;

	//nowDay.innerHTML = date.toDateString();
	//nowDay.innerHTML = date.toLocaleString();
	nowDay.innerHTML = date.toLocaleTimeString();

	//모든 언어에서는 월의 계산이 array에서 계산되기 때문에
	//가져올 때는 +1, 입력할 때는 -1 해야 함
	console.log(date.getMonth() + 1);
}
function testDate02() {
	console.log("특정 날짜");
	//입력하는 방식에 따라 고려해야 할 사항
	var dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

	//javascript에서 문자열로 입력하는 방식
	//"yyyy-mm-dd" month를 -1 하면 안된다.
	var date = new Date("2024-05-05");
	var date = new Date("2024-5-05");
	var date = new Date("2024.5.05");
	var date = new Date("2024/5/5");
	var date = new Date("2024_5_5");
	//모두 가능

	var htmlDate = document.getElementById("inputDate").value;
	console.log(typeof htmlDate, htmlDate);//string

	var date = new Date(htmlDate); //date 객체로
	console.log(typeof date, date); //object

	date = date + 1000; //date 타입 + 숫자 = string
	console.log(date.toLocaleString, typeof date); //string

}
function testDate03() {
	console.log("경과 날짜 구하기");
	//이거 반대로 하면 d-day.

	//화면에서 탐색된 value 값은 모두 string이다.
	var dates = document.getElementById("dates").value;
	var inputD = document.getElementById("inputD").value;

	var date = new Date(dates); //string->object 변경
	date.setDate(date.getDate() + parseInt(inputD));
	document.getElementById("resultDate").value =
		date.toLocaleDateString();
}

function testDate04() {
	console.log("D-DAY 구하기");
	var dates1 = document.getElementById("dates1").value;
	var inputDate1 = document.getElementById("inputDate1").value;

	var startDate = new Date(dates1);
	var endDate = new Date(inputDate1);

	//일수계산
	var resultDate = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
	//연월일로 되어 있는게 밀리세컨드로 변환
	document.getElementById("result1").value = resultDate;





}
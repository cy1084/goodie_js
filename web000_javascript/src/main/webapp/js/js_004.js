/**
 * 
 */

//1) alert: 사용자에게 경고 혹은 확인 내용 등의 디버그 사용으로 적용
function alertTest() {
	alert('확인만 있음');
}

//prompt 거의 안씀
//2) prompt: 텍스트 입력창을 제공하여 값을 입력할 수 있도록 해주는 창
function promptTest() {
	var msg = prompt("가장 좋아하는 사슴?\n 1. 루돌프, 2. 댄서, 3. 캐쉬", "선택해주세요");
	//값을 입력하는 "확인"=> 값, prompt를 취소하는 "취소"=> null
	console.log("입력한 값", msg);
	switch (msg) {
		case "1": alert("루돌프");
		case "2": alert("댄서");
		case "3": alert("캐쉬"); break;
		default: alert("선택안함");
	}
}
//3) confirm: 확인과 취소로 되어 있다. true(1)/false(0)
function confirmTest() {
	var bool = confirm("배경색을 변경할까요?");
	console.log(typeof bool);
	var color = document.getElementById("choiceColor").value;
	if (bool) {	//객체가 존재한다면 무조건 true로 판단하기 때문에 문자열을 받는다면 비교연산을 
		document.body.style.backgroundColor = color;
	} else {
		document.body.style.backgroundColor = "#fff";
	}
}

function swalTest() {
	//부트스트랩에서 가져온 것
	Swal.fire({
		title: "<strong>SweetAlert 깔끔해요~!</strong>",
		icon: "success",

		showCloseButton: false,
		showCancelButton: false,
		focusConfirm: false,
		confirmButtonText: `
			<i class="fa fa-thumbs-up"></i> 확인 완료!
			`,
		confirmButtonAriaLabel: "Thumbs up, great!",
		cancelButtonText: `
			<i class="fa fa-thumbs-down"></i>
			`,
		cancelButtonAriaLabel: "Thumbs down"
	});

}
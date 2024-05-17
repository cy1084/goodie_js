/*
checkbox의 값(value)은 on으로만 탐색 및 출력
checkbox는 상태 값 checked의 속성을 통해 true/false를 출력
*/

//HTML에서 this. 을 통해 작성되어 있는 값을 arguments로 전달받음
function allSelect(bool) {
	console.log("this로 입력받은 값:", bool);


	//DOM 탐색을 통한 checkbox 상태값 탐색
	var checkStatus = document.getElementById("allCheck");
	console.log("checkbox의 value: ", checkStatus.value); //on만 출력, 이렇게 하면 안됨
	console.log("checkbox의 checked: ", checkStatus.checked);//true, false 출력

	var chks = document.getElementsByName("chk");
	console.log("chks의 개수: ", chks.length);

	for (let i = 0; i < chks.length; i++) {
		//chks[i].checked = bool;
		//위와 같음
		chks[i].checked = checkStatus.checked;
	}

}

//div 각 영역에 색을 표현
function selColor() {
	var chks = document.getElementsByName("chk");
	//유효성 검사
	if (chksCount(chks) > 0) {
		for (let i in chks) {
			if (chks[i].checked) {
				document.getElementById(chks[i].value).style.backgroundColor = chks[i].value;
				//변수로 사용하기 때문에 "" 사용 xxx
			} else {
				document.getElementById(chks[i].value).style.backgroundColor = "white";
			}
		}
	} else {
		alert('한 개 이상 선택해주세요');
	}
}

function chksCount(chks) {
	let cnt = 0;

	//css selector 표현식
	//input[name=chk]:checked
	for (let c of chks) {
		if (c.checked) {
			cnt++;
		}
	}
	return cnt;
}

window.onload = function() {
	var chks = document.getElementsByName("chk");
	var allCheck = document.getElementById("allCheck");

	for (let i = 0; i < chks.length; i++) {
		chks[i].onclick = function() {
			if (chks.length == chksCount(chks)) {
				allCheck.checked = true;
			} else {
				allCheck.checked = false;
			}
		}
	}
}


function clearDiv() {
	var chks = document.getElementsByName("chk");
	var allCheck = document.getElementById("allCheck");

	//allCheck.checked = false;

	for (let i = 0; i < chks.length; i++) {
		document.getElementById(chks[i].value).style.backgroundColor = "white";		
		chks[i].checked = false;
	}
}



/*
// selector 표현식
function clearDiv(){
	var colorBox= document.querySelectorAll("#colorBox>div"); //nodelist
	for(let cb of colorBox){
		cb.style.backgroundColor="white";
	}
	var checkBox=document.querySelectorAll("input[type=checkbox]");
	for(let cb of checkBox){
		cb.checked=false;
	}
}
*/

//연산된 결과를 html에 div id="printArea"에 출력하는 함수
function antSquencePrint() {
	var printArea = document.getElementById("printArea");
	var html = "";
	var stageValue = document.getElementById("stageValue").value;
	var initValue = "11";
	html += initValue + "<br>";

	for (let i = 0; i < stageValue; i++) {
		initValue = antStage(initValue);
		html += initValue + "<br>";
	}
	printArea.innerHTML = html;

}

//입력받은 초깃값을 이용하여 다음의 개미수열이 만들어지는 함수
function antStage(initValue) {
	var c = initValue.charAt(0); //현재 값
	var cnt = 1;
	var result = "";

	for (let i = 1; i < initValue.length; i++) {
		if (c == initValue.charAt(i)) {
			cnt++;
		} else {
			result = result + c + cnt;
			c = initValue.charAt(i);
			cnt = 1;
		}
	}
	result = result + c + cnt;
	console.log(result);
	return result;
}


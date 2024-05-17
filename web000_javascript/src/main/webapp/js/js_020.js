//onchange는 해당 값이 변화가 있을 때만 동작
//같은 값을 두 번 선택하면 동작하지 않음
function showFood() {
	console.log("작동");

	//선택된 option의 인덱스를 가져옴
	var select = document.getElementsByName("food")[0]; //nodelist 중 0번째
	var selIdx = select.selectedIndex;
	console.log("선택된 option의 index: ", selIdx);

	//선택된 index를 통해서 options를 사용하여 해당 option의 값(contents)을 가져옴
	var foodValue = select.options[selIdx].value;
	var foodValueContent = select.options[selIdx].textContent;
	console.log("선택된 option의 value와 content 값: ", foodValue, foodValueContent);
	//삼겹살 삼겹살
}

function showFood2() {
	var food = document.getElementsByName("food")[1];
	var foodChoice = "";
	//textarea는 java의 문자(escape)처럼 되어 있다
	for (let i = 0; i < food.length; i++) {
		if (food.options[i].selected) {
			foodChoice += food.options[i].textContent + "\n";
		}
	}
	console.log(foodChoice);

	//textarea 혹은 console, java에 출력할 때는 줄바꿈(\n)이 동작된다
	//하지만 escape 문자는 HTML에서는 동작되지 않는다
	//따라서 HTML entity tag를 통해서 변경해야 한다.

	var printFood = document.getElementById("printFood");
	printFood.innerHTML = foodChoice;

	//textarea=> textarea로 출력 한다면, text로 처리되기 때문에 escape 문자가 인식된다.
	var areaFood = document.getElementById("areaFood");
	areaFood.value = foodChoice;

	//따라서 사용자의 입력을 위해서 textarea를 사용했다면 
	//출력을 위해서는 escape 문자를 HTML 태그 혹은 entity 태그로 변경해야 한다.
	var divFood = document.getElementById("divFood");
	var newFoodChoice = foodChoice.replace(/(?:\r\n|\n|\r|\r\n)/gm, "<br>"); //한 줄이 넘어가는 것처럼 보임
	divFood.innerHTML = newFoodChoice;
	//textarea와 똑같이 나옴


}
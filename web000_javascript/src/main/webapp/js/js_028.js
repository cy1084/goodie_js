function tableInsert() {
	/**
	 * form을 사용하는 이유: 값을 서버에 전달하기 위함
	 * => action method submit
	 * 값을 유효값 처리하는 로직을 필요로 함(기본으로 없을 required)
	 * submit의 propagation 처리를 통해 값의 유효값을 처리해줘야 함 => 정규화 표현식을 사용하면 편함
	 */

	var doc = document.frm; //탐색
	//var id=document.getElementByName("id")[0].value;
	//name으로 쉽게 찾는 법
	var vals = [doc.id.value, doc.pw.value, doc.address.value, doc.phone.value];
	console.log(vals);

	//값에 대한 유효성 검사
	for (let i = 0; i < vals.length; i++) {
		if (vals[i] == "") { //null이면 탐색된 노드가 없을 경우/ undefined는 선언되어 있는 javascript 변수
			alert('모든 값을 입력해주세요');
			return; //함수의 아래 진행을 멈춤		
		}
	}
	console.log("for문 이후 실행");

	//기능에 대한 유효성 검사
	//생성된 tbody의 row의 개수를 10개로 제한
	var tbody = document.getElementById("add");
	var trLength = tbody.children.length; //tbody 태그 개수가 아닌 하위 element 개수(row의 개수)를 가져와야 하므로
	console.log(trLength);

	//javascript에 쓰지 말아야 할 코드- 욕먹고 싶으면 쓰기
	//trLength < 10 ? tbody.appendChild() : alert("10개까지만 추가할 수 있습니다");
	//자바에선 tbody.appendChild()와 alert("10개까지만 추가할 수 있습니다")의 반환 타입이 같아야 하지만
	//자바스크립트에선 돌아감 
	//하지만.. 그래도 쓰지마!!

	trLength < 10 ? tbody.appendChild(createRow(vals)) : alert("10개까지만 추가할 수 있습니다");
}

function createRow(vals) {
	var tr = document.createElement("tr");
	for (let i = 0; i < vals.length; i++) {
		let td = document.createElement("td");
		td.textContent=vals[i];
		tr.append(td);
	}
	var delBtn=document.createElement("td");
	delBtn.innerHTML='<input type="button" value="삭제" onclick="delRow(this)">';
	tr.append(delBtn);
	
	return tr;
}

function delRow(elem){
	/**
	 * this는 onclick을 포함하고 있는 input Element 자체를 이야기한다.
	 */
	console.log(elem);
	//속해 있는 tr을 찾는다
	var delTr=elem.parentNode.parentNode; //elem의 td의 tr!
	var tbody=document.getElementById("add");
	tbody.removeChild(delTr);
}

//전체 삭제
function tableDelete(){
	var tbody=document.getElementById("add");
	tbody.innerHTML=""; //삭제
	
	//최근 insert한 것부터 삭제
	tbody.removeChild(tbody.lastChild);
}


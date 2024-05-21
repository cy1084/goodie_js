function childAppend() {
	//body(document)에 존재하는 Element 탐색
	var fieldset = document.getElementById("addElement");

	//붙여 넣을 Element 생성(= tag 생성/ 문자열을 통한 innerHTML과는 다름)
	var p = document.createElement(); //<p></p>
	p.textContent = "한글";
	//p.innerHTML="<b>한글</b>"; //여기서 생성된 p는 객체
	
	//7번 라인을 node(태그)의 생성을 통한 입력이라고 한다면
	//이것도 가능
	//var txt=document.createTextNode("한글");
	//p.append(txt);
	//위 두 줄= p.textContent = "한글";
	
	fieldset.appendChild(p);
}

var cnt=1;
function beforeInsert(){
	var newP=document.createElement("p");
	newP.textContent="Element 앞에 붙여준다"+(cnt++);
	
	
	//붙여 넣을 위치
	var fieldset=document.getElementById("addElement");
	var oldDiv=document.querySelector("#addElement>div");
	
	//insertBefore(붙여넣을 객체, 붙여넣을 위치)
	fieldset.insertBefore(newP, oldDiv);
	
	/**
	 * 특정 node에서 자식 node 찾기
	 * 
	 * 1) childNodes: 포함되어 있는 모든 노드(주석, text, Element, \\n 등) 인식
	 * 2) children: 자식 node의 Element만을 인식
	 */	
}


//사실상 Element 복제
function moveElement(){
	var moveEle=document.querySelector("fieldset").children[1]; //<div>div 태그</div>
	console.log(moveEle.nodeName); //DIV
	console.log(moveEle.tagName); //DIV 
	//node와 tag 비슷한 개념
	
	/**
	 * Element의 복제가 아닌, 객체의 위치 주소를 통해 작성
	 * 따라서 객체를 복제하기 위해서는 복사함수(clone()) 필요 -> 회사에서 clonePattern 많이 사용!
	 * 만약 자식노드(textNode, Element)를 모두 복사하기 위해서는 설정값(argument)을 true로.
	 * ex) <div><p>값</p></div>
	 * 		cloneNode() 결과=> <div>
	 * 		cloneNode(true) 결과=> <div><p>값</p></div>
	 * 
	 */
	
	//장바구니 기능에서 사용..!
	var copyEle=moveEle.cloneNode(true);
	var addEle=document.body;
	//addEle.appendChild(moveEle); //복제되지 않은 객체를 변수로 만들어 사용
	//물류관리에서.. 어쩌고 강의 듣기 05/20 오전 09:35
	addEle.appendChild(copyEle); //복제된 객체를 변수로 만들어 사용
	//장바구니에 넣기
	
}

function addTest(){
	var divAdd = document.createElement("div"); 
	divAdd.textContent = "DOM TEXT";
	
	
	document.getElementById("text01").appendChild(divAdd);
}

function moveTest(){
	//위치 탐색
	var text02=document.getElementById("text02");
	var childNode=document.getElementById("text01").children[0]; 
	//nodeList는 appendChild 불가 -> 그래서 node 한 개만 가져와야 함. [0].
	
	text02.appendChild(childNode);

	

}
function createImage() {
	var rdoBtn = document.getElementsByName("rdoBtn");
	var rdoBtnValue = "";

	for (let i = 0; i < rdoBtn.length; i++) {
		if (rdoBtn[i].checked) {
			rdoBtnValue = "./img/" + rdoBtn[i].value;
		}
	}
	console.log(rdoBtnValue);

	//img 태그를 생성하고 src 속성으로 지정
	var img = document.createElement("img"); //<img>
	img.setAttribute("src", rdoBtnValue); //<img src="./img/img01.png">

	img.onclick=removeImg;
	
	//붙여넣을 위치 탐색
	var div = document.getElementById("imgView");
	div.appendChild(img); //태그 객체 붙임, 상위 태그에 붙여야 그 안의 속성으로....됨...

}
function removeImg(){
	this.parentNode.removeChild(this);
	//동적 생성된 객체(태그)를 삭제하기 위해서는 상위노드(div)에 포함되어 있는 child를 지워야 함
}

function createRemove() {
	var div = document.getElementById("imgView");
	//div에 자식 노드가 있다면 삭제하고 replace 하여 새로운 img를 붙여 넣음
	//이미지가 사라지고 다른 이미지가 나타나는 애니매이션 적용할 수 있음..

	//childNodes는 검색된 HTML의 node의 개수를 예측하기 힘듦
	//따라서 element 만을 선택하기 위해 childNodes가 아닌 children을 사용하면 
	//정확한 자식의 element만을 탐색할 수 있다.
	console.log("전체 자식의 node 개수: ", div.childNodes.length);
	console.log("자식 element 개수: ", div.children.length);

	//삭제하거나 교체할 땐 명확한 element를 찾아야 함
	//firstChild는 자식(childNodes)의 0번째 탐색, 따라서 반드시 html의 작성 형태를 확인해야한다!(text가 포함되어 있지 않은지!)
	//console.log(div.firstChild, div.firstChild.tagName);


//	if (div.childNodes.length != 0) {
//		var divImg = div.firstChild;
//		div.removeChild(divImg);
//	} else {
//		alert('노드가 존재하지 않습니다.');
//	}


////안의 html 싹 다 삭제 => clear => 주문 중 취소할 때!
//	div.innerHTML=""; 
//	console.log("innerHTML의 값으로 \"\"를 입력 후", div.childNodes.length);
//	
	
	
	//var oldImg=document.querySelector("#imgView>img");
	//querySelector 방법
	var oldImg=document.querySelectorAll("#imgView>img")[1];
	
	//dom 탐색 children 방식/ 부모에서 자식으로
	var oldImg=document.getElementById("imgView").children[1];
	
	var removeImg=document.getElementById("imgView").children[0];
	div.removeChild(removeImg);
	
	
	var img = document.createElement("img"); //<img>
	img.setAttribute("src","./img/img02.png");
	
	//replace: 대상체->대상체
	div.replaceChild(img, oldImg);arguments
	

}
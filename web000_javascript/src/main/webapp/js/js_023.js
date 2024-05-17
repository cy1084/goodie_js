function searchParent() {
	var child = document.getElementsByTagName("p")[1]; //Child02
	console.log(child.innerHTML); //HTML을 포함한 콘텐츠 가져옴(주석, 태그)

	//선택된 node의 최근접 상위 노드를 찾음
	var div = child.parentNode; //부모노드 
	var tmpText = div.textContent; //내용만 출력
	var tmpHTML = div.innerHTML;

	//HTML에 작성되어 있는 형태(node tree)에 따라서 출력되는 결과가 다름
	console.log("div의 textContent: ", tmpText);
	console.log("div의 HTML: ", tmpHTML);

	div.style.backgroundColor = "green";

}
function searchChilds() {
	var div = document.getElementsByTagName("div")[0];
	console.log(div.length); //element의 length, 객체이기 때문에 undefined
	console.log(div);

	//선택된 node의 자식 node(p 태그)를 찾아줌
	//부모를 통한 자식들의 모든 element 
	//태그 하나당 길이 1, 내용 하나당 길이 1
	//<p></p> -> 길이 2
	var divChild = div.childNodes;
	console.log(divChild.length);

	for (let i = 0; i < divChild.length; i++) {
		console.log(i, divChild[i].tagName, divChild[i]);
	}

	divChild[5].style.backgroundColor = 'yellow';


	// p 태그만 
	var p = document.getElementsByTagName("p");
	console.log("p 개수: ", p.length);
	for (let i = 0; i < p.length; i++) {
		console.log(i, p[i].textContent);
	}

}

//다시
function DOM_Example() {
	var p = document.getElementsByTagName("p")[3];
	var div = p.parentNode;
	div.style.backgroundColor = "orange";

	var div3 = document.getElementsByTagName("div")[3];
	var divChild = div3.childNodes[3];
	divChild.style.fontSize = "30pt";

	var childrens = div3.children;
	console.log(childrens.length);
	childrens[1].style.backgroundColor = "skyblue";
}

/**
 * node tree는 주석, text node, tag, 줄바꿈 등 모든 것을 포함하고 있다
 * -- 특정 tag의 자식 tag들이란 모든 tag를 얘기한다
 * 		=> childNodes
 * -- 특정 tag의 자식 element만을 선택한다면 
 * 		=> children 사용
 * 
 * 부모에게 포함된 모든 node를 확인하고 싶다면 childNodes 사용
 * 부모에게 포함된 element만 확인하고 싶다면 children 사용
 */
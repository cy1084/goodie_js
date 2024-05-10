/**
 * 
 */

var idx = 1;
function prevGallary() {
	console.log("이전");
	//	alert("prev");
	//	return false;
	idx--;
	if (idx < 1) {
		idx = 5;
	}
	document.getElementById("gallary").src = `./img/img0${idx}.png`;
	return false;
}
function nextGallary() {
	console.log("다음");
	//	alert("next");
	//	return false;
	idx++;
	if (idx > 5) {
		idx = 1;
	}
	document.getElementById("gallary").src = `./img/img0${idx}.png`;
	return false;
}


function click01(e){
	console.log(e);
}

window.onload=function(){
	const mylink=document.getElementById("addEvent");
	mylink.addEventListener("click",function(e){
		console.log(e);
	});
}
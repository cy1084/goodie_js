/**
 * 1. 객체의 작성 방법: 명시적 방법, 익명적 방법
 * 2. 객체를 생성할 때는 pascal 방법으로 작성 및 사용
 * 
 * 
 * 명시적 방법
 * - this 사용: new를 통해서 객체를 생성하면 객체명을 통해서 속성 접근이 가능(수정/삭제 가능)
 * - var로 생성된 변수는 외부에서 절대 접근 불가. 따라서 값의 은닉화(encapsulation) 가능
 * - 만약 외부에서 값을 가져가거나 입력만 하는 기능을 만들고 싶다면 익명함수를 통해 정의할 수 있다.
 */

//명시적 방법
 function Class008(){
	this.name="eclipse"; //자바의 public
	
	var name02="javascript";	//자바의 private
	this.getName02=function(){
		return name02;
	}
 }
 
//익명적 방법
var class008_2={
	name:"korea",
	print: function(){
		alert(class008_2.name+'!!!');
		return class008_2.name;
	}
 }
 
 function objectTest(){
	//명시적 객체의 사용 방법
	var class008=new Class008();
	//자바스크립트에서는 무조건 생성자 하나
	
	class008.name="미륵사지9층석탑";
	
	alert("Class008의 속성값 name: "+class008.name);
	//this로 생성되어 외부에서 접근 가능
	alert("Class008의 속성값 name02: "+class008.name02); //undefined
	//this로 선언되어 있지 않으므로 외부에서 접근 불가, 은닉화
	alert("Class008의 내부함수를 통해서 name02의 값 호출: "+class008.getName02());
	//name02는 접근하여 값을 return 해주는 getName02를 this로 가지고 있다.

	//익명적 방법 사용
	class008_2.name="하늘 맑음";
	alert("Class008_2.name의 속성 값 name: "+class008_2.name);
	alert("Class008_2.name의 속성 값 name: "+class008_2.print());
 
 	
 	//프로토타입 사용: 기존 있던 객체에 기능 추가해서 튜닝하고 싶을 때(기능 확장)
 	var class008=new Class008();
 	//Class008 기능은 값을 담는 name, 값을 반환하는 print(), 둘다 this로 되어있음(외부에서 볼수있으므로)
 	Class008.prototype.printNameAlert=function(){
		//alert(this.name+"/"+this.getName02);
		alert(name02); //외부에 추가로 만들어지는 prototype 영역이기 때문에 외부함수로서 사용 
		//갑자기 name02를 왜..
	}
	
	class008.printNameAlert();
 
 }
/**
 * 
 */

class MyClass {
	constructor(name) {
		this.name = name;
		//this: 내부에 있지만 외부에 선언한 것과 같음, 외부에서 사용할 수 있는 값
	}

	greet() {
		alert(`Hello, ${this.name}`);
		//그냥 name은 선언도 안되어 있고 전역변수가 아니기 때문에 this.name으로 써야 함!
	}
}

export default MyClass;
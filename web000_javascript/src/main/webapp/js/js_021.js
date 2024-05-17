/**
 * javascript class를 생성하고 생성자를 통해서 실행
 */
class Greeting {
	//자바스크립트에서는 생성자 한 개만 가능
	//default 생성자의 개념도 없음
	constructor(name) {
		this.greeting="Hello, "+ name;
		//this-> 외부(내가 가진 클래스의 외부)에서 볼 수 있음
	}
}

//일반 변수를 통한 전달
const name="둘리";
const age="45";

//함수를 사용한 기능 전달
//arrow 표현식
const message=(name, age)=>{
	return `${name}은 ${age}살 입니다.`;
}

//export, alias로 처리
//export default message; //message만 가져갈 때
export{ message, name, age, Greeting as insa}; //여러 개 같이 가져갈 때('component로 가지고 온다')
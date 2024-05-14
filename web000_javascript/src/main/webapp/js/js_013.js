/**
 * Array 선언과 사용
 * let number=[1,2,3,4] //type-> Object
 * console.log(typeof number, number);
 * 
 * number.forEach(function(x){
 * 		console.log(x);
 * })
 * 
 * number.forEach(x=>{console.log(x)})
 * 
 * 
 * //짝수만 출력
 * number.forEach(function(x){
 * 					if(x%2==0){
 * 						console.log(x);
 * 					}
 * 				});
 *
 * let evenNumber=number.filter(function(x){
 * 								return x%2==0
 * });
 * console.log(evenNumber); //[2,4]

 */

//1. Array의 선언 방식
var array01 = new Array(); //new를 통한 Array 클래스의 객체 선언
var array02 = [1, '1', false]; //리터럴을 통한 입력 방식(타입 구분 없음)
console.log(typeof array01); //Object
console.log(typeof array02); //Object

//2. Array의 선언 방법
var array_1 = new Array(); //new를 통해 Array 클래스의 객체 선언
var array_2 = new Array(3);//한 개의 정수값이 입력 된다면, 크기를 얘기하는 것임! -> 3개의 공간
var array_3 = new Array(1, 2, 3, 4); //4개의 값을 가지고 있는 4개의 공간
console.log(array_1.length); //0 
console.log(array_2[0]); //undefined - 공간만 만들어져있기 때문
console.log(array_2.length); //3
console.log(array_3.length); //4

//3. 공간의 크기 제약이 없다.
//없는 index를 입력하면 자동으로 해당 index까지 공간이 만들어지고, 
//값은 undefined의 값이 입력되어 array 공간이 자동으로 생성된다
//즉, array에 값을 입력하지 않았다면 기본 입력 값은 undefined이다.

//array_2 3개의 공간만 만듦
array_2[0] = 10;
array_2[1] = 90;
array_2[10] = 55;

console.log(array_2[3]); //undefined
console.log(array_2.length); //11

function multiArray() {
	var len = 3;
	var multiArr = new Array(3);
	for (let i = 0; i < len; i++) {
		multiArr[i] = new Array(3);
	} //0번 인덱스 안에 0,1,2/ 1번 인덱스 안에 0,1,2/ 2번 인덱스 안에 0,1,2

	multiArr[0][0] = "apple";
	multiArr[0][1] = "orange";
	multiArr[0][2] = "banana";

	multiArr[1][0] = 1;
	multiArr[1][1] = 2;
	multiArr[1][2] = 3;

	multiArr[2][0] = ["java", "javascript"];
	multiArr[2][1] = ["oracle", "mysql"];
	multiArr[2][2] = ["jsp", "servlet"];

	console.log(multiArr[2][1][1]);

	const json = JSON.stringify({ val: multiArr });//자동 json 문자열로 바뀜
	console.log(json);

	const jsonObject = JSON.parse(json); //JSON 객체로 변함/ map과 같이 key 호출
	console.log(jsonObject);
}

function joinArray() {
	var array_01 = ["apple", "banana", "lime", 10];
	var array_02 = [1, 2];
	var array_03 = [1, 2];

	var sumArray = array_02 + array_03;
	console.log(typeof sumArray); //string
	console.log(sumArray); //1,21,2 -> 1,2/1,2가 붙어서 나온 것

	var joinArray = array_01.join("/");
	console.log(joinArray);

	var arraySum = array_01.concat(array_02, array_03);
	//concat(): 붙이는 것이기 때문에 괄호 안에 몇개가 오든 상관 없음
	console.log(arraySum);

	var array_ex = [[10, 20], [30, 40]];
	console.log(array_ex); //0,1/ 2x2 배열
	var array_ex_sum = array_ex.concat(array_02);
	console.log(array_ex_sum); //0,1,2,3
}

//문자 정렬 sort, lexicographical=letters
function stringSort() {
	var arr = ["a", "d", "b", "c", null, 1, "A"];
	var arrNum = ["1", "50", "100"];

	//pass by reference: 값을 수정하면 원본의 데이터가 수정되도록 하는 방식
	arr.sort();
	arrNum.sort();

	console.log(arr); // 숫자>대문자>소문자>null 순
	console.log(arrNum);// 1시리즈부터 
}

function numberSort() {
	//값은 문자, sort는 문자열로 처리
	var arr = [1, 20, 10, 2, 3, 8];
	arr.sort();
	console.log(arr); //1시리즈>2시리즈>.. 순
	//sort 하려면 이렇게 사용하면 안됨

	// 1) 숫자를 판단할 수 있는 정렬함수를 만들어 사용
	arr.sort(compare); //내부에서 알아서 판단해서 바꿔줌, 괄호엔 무조건 함수 넣어야 함(함수 리터럴)
	console.log(arr);

	// 2) 화살표 함수를 사용하여 함수(sort)에 직접 전달
	arr.sort((a, b) => b - a); //역순
	console.log(arr);


	// 3) 만약 숫자와 문자열이 함께 있다면?
	var arrCompose = [100, "a", "b", 2, 5];
	arrCompose.sort((a, b) => {
		if (a < b) return -1;
		if (a > b) return 1;
		if (a === b) return 0; //그 자리 그대로
		else return -1;
	});
	console.log(arrCompose);

}

//버블정렬
function compare(a, b) {
	return a - b;
}

//자바스크립트에서의 reverse 함수는 array를 역 인덱스로 단순 출력
//따라서 내림차순, 오름차순으로 출력하고 싶다면 
//먼저 reverse 반대로 정렬 필요 
function reverseSort() {
	var arr = ["b", "a", "f", "d"];
	arr.sort();
	arr.reverse();
	console.log(arr);
}

function fn() {
	var queue = new Array();

	//index에 상관없이 값을 입력 push
	queue.push(10);
	queue.push("first");
	queue.push("second");
	queue.push("third");

	console.log(queue);

	//shift: Array의 앞부터 잘라냄
	var array0 = queue.shift();
	console.log(typeof array0, array0);
	console.log(queue);

	//pop: Array의 뒤부터 잘라냄
	var array1 = queue.pop();
	console.log(typeof array1, array1);
	console.log(queue);
}

function sliceFn() {
	var array = [1, 2, 3, 4, 5, 6, 7];

	var arrayS1 = array.slice(3);
	console.log(arrayS1); //4 5 6 7

	//array에 해당하는 index 영역을 잘라서 새로운 array로 반환
	console.log(array);//1 2 3 4 5 6 7

	//slice는 end index 포함 안함
	var arrayS2 = array.slice(2, 5);
	console.log(arrayS2); //3 4 5


//***중요 */
	var multiArray = new Array(3);
	multiArray[0] = new Array(1, 2);//0에 2개
	multiArray[1] = new Array(3, 4);//1에 2개
	multiArray[2] = new Array(5, 6);//2에 2개
	
	var arrayS3=multiArray.slice(2,3);
	console.log(arrayS3);//[5, 6]
}

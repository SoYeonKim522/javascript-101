'use strict'
//Array : 대표적인 자료구조의 종류
 //되도록 한 배열 안에는 동일한 타입의 데이터를 넣는게 좋음

//1. Declaration
const arr1 = [1,2,3];      //대표적인 방법
const arr2 = new Array();  //다른 방법

//2.Index position
const fruits = ['apple', 'kiwi', 'mango' ]
console.log(fruits[fruits.length-1]);  // 배열의 마지막  요소 접근

//3.Looping over an array  (print all array elements)
//a. for
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
//b. for of
for(let allfruit of fruits){    // let 뒤에 변수는 내가 지정
    console.log(allfruit);
}

//c. forEach  라는 API사용
//api 정의 : 배열의 각 요소마다 콜백함수를 수행한다. 
//array이름.forEach(콜백함수)
fruits.forEach(function(fruit, index){    //함수 인자에 index를 넣으면
    console.log(fruit, index);            //index 까지 같이 출력할 수도 있음
})
fruits.forEach((fruit) => console.log(fruit));  //simpler ver.: anonymous 함수니까 arrow 함수 이용해서 한줄로!



//4. Addition, deletion, copy
//push : add an item to the end
fruits.push('peach');
console.log(fruits);

//pop : remove an item from the end
fruits.pop();            //어차피 맨 뒤에서 빠지니 ()안에 아무것도 쓸 필요 없음
fruits.pop();            //하나 더 빼기 가능
console.log(fruits);
const popped = fruits.pop(); //하나 더 빼고 이걸 popped 에 담기
console.log(popped);         //빠진 것이 리턴됨 (pop은 삭제가 아니고, 빠진 element들을 리턴하는 함수이기 때문)   

//unshift : add an item to the beginning
fruits.unshift('lemon','fig', 'orange', 'cherry');
console.log(fruits);
console.clear();
//shift : remove an item from the beginning
fruits.shift();
console.log(fruits);
//note! shift, unshift 는 push, pop 보다 훨씬 느림. 배열 전체를 움직여야 하기 때문

//splice : remove an item by index position, 또는 특정한 지점에 데이터 추가   (원래 배열을 변경함)
//배열이름.splice(인덱스 몇 번부터 지울껀지, 거기서부터 몇 개 지울껀지)
//삭제된 요소들이 리턴이 됨
fruits.splice(2);    //두번째 인자 설정안하면 세번째꺼(index2)부터 끝까지 다 지워버림
console.log(fruits);
fruits.splice(1, 0, 'pear', 'plum');  // 안지우고 추가만 하는 것도 가능!
console.log(fruits);

//concat : combine two or more arrays
//앞에 나올 배열.concat(뒤에 나올 배열)
const fruits2 = ['coco'];
const twoFruits = fruits2.concat(fruits);
console.log(twoFruits);



//5.Searching
//indexOf : find the index number 

console.log(fruits);
console.log(fruits.indexOf('fig'));   //만약 없는걸 찾으면 -1로 나옴

//includes : check if it is included in the array
console.log(fruits.includes('papaya'));  //false

//lastIndexOf : (같은 요소가 여러개일 경우) 마지막 인덱스 값을 리턴. 
fruits.push('fig');    //만약 이미 있는 element와 동일한걸 뒤에 추가
console.log(fruits.indexOf('fig'));  //indexOf는 첫번째 인덱스 값을 리턴
console.log(fruits.lastIndexOf('fig'));  //마지막 index



//추가_from. 생활코딩
//sort : 정렬하여 배열로 리턴 (배열 자체를 변경함)
//배열이름.sort() 이 기본이지만, 인자 안에 함수를 넣어서 배열 원소들 간 무엇이 우선인지를 설정할 수 있음 (숫자도 문자열 기준으로 변환하기 때문에 1 10 2 3 이런식으로 나열됨)
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
let sortFunc = function(a,b) {
  return a-b;                       //이부분 정확히 이해는 안가는데 그냥 외워도될듯ㅋ 숫자 큰것부터 나열 : b-a
    }
console.log(numbers.sort(sortFunc));

//여기서 sortfunc 라는 함수가 콜백함수  
//sort라는 상위함수의 동작방법을 세밀하게 변경/조절 가능


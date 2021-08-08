//1. String concatenation
console.log(`string literals
: 1 + 2 = '${1+2}'`); //안에 줄바꿈, ''도 자유롭게
console.log("without string literals \n: 1 + 2 ='3'") // backtick``사용 안하는 경우 줄바꿈 = \n

//2.  Numeric operators
console.log(5%2);  //remainder 나머지값
console.log(2**3); //exponentiation 2의 3승

//3. Increment(++/--) and decrement operators
let counter = 2;
const preIncrement = ++counter;  //preIncrement=3, counter=3
//counter = counter +1; 
//preIncrement = counter;

const postIncrement = counter++;  //postIncrement=3, counter=4
//postIncrement = counter;  변수에 할당 먼저
//counter = counter +1;



//4. Assignment operators 할당
let x = 3;  //할당 가능
let y = 6;
x += y ;  //x = x+y;
x *= y;

//5. Comparison operators 
console.log(10 >= 6); //true


//6. Logical operators : ||(or), &&(and), !(not)
//can be used to compressed long if-statement
// ||(or) finds the first truty value and stops right away
const value1 = true;
const value2 = 4<2;
function check(){
    for (let i=0; i<10; i++){
        console.log("ahg")
    }
    return true;
}
console.log(`${value1 || value2 || check()}`);  //true (from value1)

//or 은 처음으로 true가 나오면 거기서 멈추고 뒤에껀 실행안함(뒤에 check 함수 실행안됨)
//하나라도 true면 true 이기 때문
//그래서 heavy한 함수일수록 뒤에 배치해야 함 

//&& finds the first falsy value and stops right away. 다 true여야 true를  리턴하기 때문
console.log(`${value1 && value2 && check()}`);  //false(from value2)

//7. Equality 
const stringFive = '5';
const numberFive = 5;
//== : loose equality. with type conversion  (<->  !=)
console.log(stringFive==numberFive); //true

//=== : strict equlity. no type conversion  (<->  !==)  이걸쓰는게 더 바람직
console.log(stringFive==numberFive); //false

//object equality by reference
const lia1 = {name : 'lia'};
const lia2 = {name : 'lia'};
const lia3 = lia1;
console.log(lia1 == lia2); //false - 1,2는 내용이 같다고 하더라도 각각 다른 object임(다른 reference에 저장되어 있음)
console.log(lia1 === lia2); //false
console.log(lia1 === lia3); //true 1과 3은 같은 reference 에 저장되어 있음

//equality - puzzle
0 == false;  //true. 0, empty string, null, undefined 는 false로 간주됨
0 === false;  //false. 0은 불리언 타입이 아님
'' == false;  //true
''=== false;  //false. 서로 다른 타입
null == undefined; //TRUE 
null === undefined;  //false. 서로 다른 타입

console.clear();

//8. If operator
// if (- else if) - else 순서로 적음
// 근데 &&을 이용해서도 간단히 나타낼 수 있음 : a && b : a가 true이면 b를 실행해라
  //이 방법의 필요성 : 만약 없는 것을 불러온다면 프로그램이 죽어버림. 이럴 경우를 대비해 a가 있는 경우에만 b를 실행하라고 할 수 있음
let num  ;  //아무것도 넣지 않음. undefined
num && console.log(num.name);  // 없는 값을 불러오라고 했으니 그냥 넘어가게 됨
num && console.log(num); //  num이 어차피 undefined 라서 실행이 안됨. 값을 넣으면 실행이 됨


//9. Tenary operator : 간단한 버전의 if
const you = 'lia';
console.log(you === 'lia' ? 'Hi lia' : 'Who are you?');
// condition ? value1 : value2
// condition이 true 이면 value 1, 아니면 value2

//10. Switch operator
//if 에서 else if조건들이 많을 경우 (use for multiple if checks)
const browser = 'Chrome';
switch (browser) {
    case 'Chrome':  
    case 'Firefox':             //조건 여러개 지정 가능
        console.log('love ya');
        break;                  //이 조건 만족하면 멈추도록 break
    case 'IE':
        console.log('go away');
        break;
}

//11. Loops
//while loop  : while the condition is truthy, body code is executed
let i = 3;  
while (i>0){
    console.log(i);
    i--;
}

//do while loop   : body code is executed first, then check the condition
do {
    console.log(i);
    i--;
} while(i>-3);

//for loop
//for(begin; condition; step)
for (i=3; i>0; i=i-2){
    console.log(i);
}

//연습문제
for (i=0; i<11; ++i){
    if (i%2==0){            //if 나왔다고 해서 꼭 else 가 나올 필요는 없음
        console.log(i);
    }
}


for (i=0; i<11; ++i){
    if (i>8){
        break;
    }
    console.log(i);
}
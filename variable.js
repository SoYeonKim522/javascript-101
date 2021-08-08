'use strict';  //use this for vanilla js

//1. declare variable : let (added in ES6)
//variable은 데이터의 rw(read/write)가 가능
let name = 'lia';        //global scope<-> block scope
console.log(name);
name = 'hello'; // 변수값 변경 가능
console.log(name);

{ //block scope : 괄호 안에서 이루어질 경우 괄호 밖에서는 괄호 안에 있는 내용의 모든 접근.호출 등이 불가능
    let season = 'winter';
    console.log(season);
    season = 'spring'; 
    console.log(season);
}
//console.log(season); //이거 괄호 밖에 있어서 오류뜨게 됨


//2. Do not use 'var' - hoisting 기능 때문에
 

//3. declare constant : const
//Constant는 r(read only) 이기  때문에 다시 다른 값으로 write 불가

//4. Variable types
//number
const inf = 1/0;
const neginf = -1/0;
const nan = 'blah'/2;
console.log(inf);   //Infinity }(0으로 나누면 무한대임)
console.log(neginf);  //-Infinity
console.log(nan);  //Not a number

//string
const brendan = 'brendan'; //상수로 선언했다면
const usingplus = 'Hello '+ brendan;  //상수는 이렇게 간단히 + 를 통해 추가 가능
console.log(usingplus);

const usingbacktick = 'Hi ' + brendan;
console.log(`The value is : ${usingbacktick}. The type is ${typeof usingbacktick}`);  
// 추가할 것이 많다면 위처럼 backtick 이용해 string literals 만드는 게 더 간단!
//''이용할 경우 번거로움
console.log('The value is ' +usingbacktick+ '. The type is ' +typeof usingbacktick);

//symbol : create unique 고유한 identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2); //심볼 값이 id로 같더라도 symbol1 과 2는 다른 것임
console.log(`이 심볼 값은 ${symbol1.description} 입니다.`);  //심볼 출력할 때는 .description추가해야함 

//심볼 값이 같다면 동일한 심볼로 만들어라
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3===symbol4); //true

//object : real-life object
const lia = {name: 'lia', age: 24}; //lia object는 다른 object로 변경 불가
lia.age = 25; //object 안의 변수값들은 변경가능


//5. Dynamic typing : dynamically typed language  (<-> statically typed)
let text = 'hello';
text = '7'+ 5;  //string으로 인식
text = '8' * '2';  //number 로 인식ㅋ

//그래서 js 위에 type 가 얹어진 Typescript 배워야
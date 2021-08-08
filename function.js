//1. Function declaration
//구조 : function name (param1, param2) {body... return;}
//함수이름 : verb 형태로 지정
//하나의 함수는 하나의 일만 하게 정하기
//function is object in JS  

function write(message){
    console.log(message);
}
write('hello');

//2. Parameters
function changeName(obj){
    obj.name = 'coder';
}
const  info = {name:'lia'};
changeName(info);  
console.log(info);


//3. Default parameters (added in ES6)
//parameter 값이 없을(undefined) 경우 어떻게 할지 간단히 추가 가능
function showMessage(message = 'unknown', from='unknown'){
    console.log(`${message} from ${from}`);
}
showMessage('Hi there');  //두번째 인자가 전달되지 않았으므로 //Hi there from unknown


//4.Rest parameters (added in ES6)
//함수 인자 앞에 '...' 추가 -> 배열로 담아 출력해줌

function printAll(...args){
    console.log(args)
}  
    //args.forEach((arg) => console.log(arg));}  // 참고)for문 대신 forEach 사용 가능
printAll('dream', 'coding', 'lia', 'yes');  // 이 인자들이 배열 형태로 args 안으로 전달됨  ->  ["dream", "coding", "lia", "yes"]


//5. Local scope
//"밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다"
let globalMessage = 'global';  //global variable
function printMessage(){
    let message = 'hello';   //local variable. 이 함수 안에서만 유효함
    console.log(message);    //ok
    console.log(globalMessage)  //global이기 때문에 어디에서든 ok
}
//console.log(message);  // local variable을 함수 영역 밖에서 불러내면 오류! 
printMessage();

//만약 함수 밖에 같은 이름의 변수가 있어도 함수 안에 있는 변수가 우선적으로 실행됨.



//First-class function (일급함수)
//functions are treated like any other variables
//can be assigned as a value to variable
//can be passed as an argument to other functions
//can be returned by another function

//1. Function expression 함수표현식
//함수 할당을 한 후에만 호출이 가능
const printIt = function(){   //printIt 에 아무 이름이 없는 함수(anonymous function)를 할당가능
    console.log('printed');
};
printIt();                     //()를 통해 변수의 함수를 호출

const printAgain = printIt;    //다른 변수에 printIt를 또 넣을 수 있다
printAgain();                  //다른 변수의 함수(=printIt함수)를 호출

//cf. function declaration 함수 선언식(일반방식)은 hoisted 되기 때문에 함수선언 전에 호출도 가능
sum(2,3);
function sum(a,b){
    console.log(a+b);
}

//2. Callback function _using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer==='correct answer') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function(){   //anonymous funtion
    console.log("Yes!");
};
const printNo = function(){
    console.log("No")
};
randomQuiz('wrongggg answer', printYes, printNo); //No
randomQuiz('correct answer', printYes, printNo); //Yes!


//Arrrow function
//always anonymous
const simplePrint = function(){   //원래 버전
    console.log('simplePrint');
};
simplePrint();

const simpleAf = () => console.log('simpleAf');  //arrow 쓴 버전!!
simpleAf();

//한줄짜리 함수
const multiply = (a,b) => a*b;
console.log(multiply(3,5));

//여러줄짜리 함수_마지막 부분에 return 필요
const add = (a,b) => {
    //you can do something more
    return a+b;
};
console.log(add(3,5));




//quiz time
//function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder
/*
function calculator(command, a, b){
    if(command==='add'){
        console.log(a+b);             
    }else if(command==='substract'){
        console.log(a-b);
    }else {
        console.log("unknown");
    }
}
calculator('add', 2, 3);
calculator('substract', 2, 3);
calculator('dd', 2, 3);

//switch 이용
function calculator(command, a, b){
    switch (command) {
        case 'add':          
            console.log(a+b);  
            break; 
        case 'substract':
            console.log(a-b);
            break;
        default:
            console.log ('unknown command');
    }
}
calculator('add', 10, 3);
calculator('substract', 10, 3);
calculator('dd', 2, 3);
*/

function calculator(command, a, b){
    switch (command) {
        case 'add':          
            return a+b;   //return으로 하면 break 필요 없는듯?
        case 'substract':
            return a-b;
        default:      //정해진 커맨드가 아닌 경우 설정
            throw Error('unknown command!');   //throw Error : 콘솔 에러창에 이 문구가 뜨게 함
    }
}
console.log(calculator('add', 10, 30));
console.log(calculator('substract', 10, 30));
console.log(calculator('add', 2, 3));

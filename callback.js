'use strict';

//JS is synchronous 동기적 : execute the code block by order 순차적으로(after hoisting)

//CALLBACK is asynchronous :  병렬적으로 실행됨
//"I'll call you(function) back when in need!"   나중에 호출할 함수
//콜백 함수는 코드를 통해 명시적으로 호출하는 함수가 아니라, 개발자는 단지 함수를 등록하기만 하고, 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출되는 함수
//여러 함수들을 선언하고, 어느 한 함수가 실행될 때, 상황에 따라 필요한 다른 함수를 실행하고 싶을 때 활용할 수 있다.



console.log('1');
setTimeout(() => console.log('2'), 1000);  //1초 뒤에 불러달라는 함수
console.log('3');

//1.Synchronous callback  :  즉각적으로 실행됨
function printImmediately(printit){     //printImmediately 함수는  printit 라는 콜백함수를 받아서
    printit();                          //그 콜백함수을 바로 실행(괄호 붙였기 때문에 실행)하는 함수
}
printImmediately(()=> console.log('hello'));


//2.Asynchronous callback  :  언제 실행될지 예측할 수 없음 (아래 예시는 데이터를 받아와야 할 경우를 simulate)
function printWithDelay(printt, timeout){
    setTimeout(printt, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);  //2초 뒤에 나옴 



//Callback Hell 체험해보기 _ 다음 강의들에 걸쳐 이걸 발전시켜 개선
class UserStorage {     //사용자의 데이터를 백엔드(서버)에서 받아오는 클래스라고 설정
    loginUser(id, password, onSuccess, onError){  //loginUser : userStorage에 있는 api 1번  //onsuccess, onerror = 콜백함수. 일단 만들어 놓고 각 경우에 따라 실행됨
        setTimeout(() => {                      //로그인 시간 걸리는척하려고 그냥 추가한 것(사실없어도됨). settimeout 도 api
            if (
                (id ==='ellie' && password === 'dream')||
                (id ==='coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));    //Error 는 js에서 제공하는 object 중 하나
            }
        },2000); 
    }
    getRoles(user, onSuccess, onError){      //getRoles : userStorage에 있는 api 
        setTimeout(() => {
            if (user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        },1000);
    }
}

//코딩과정
//1. 사용자에게 id, pw 받아오기
//2. login하기
//3. 로그인 성공하면 그 id를 다시 받아와서 getRoles요청
//4. 역할을 성공적으로 받아오면 그에 맞는 문구 출력

const userStorage = new UserStorage();      //새로운 object 생성_ new + 클래스 이름
const id = prompt('Enter your id');     //prompt:창띄워주는 api
const password = prompt('Enter your password');
userStorage.loginUser(
    id, password,           //위에 설정한 함수를 실행
    user=>{             //뭘 user 이라고 설정한거임?
        userStorage.getRoles(
            user, 
            userWithRole => {alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
        }, error => { console.log(error); })
    }, error => { console.log(error); })

//콜백 체인의 문제점
//가독성 떨어짐
//디버깅 어려움(체인이 길게 연결되어있으니까)
//유지보수도 어려움



//클래스&콜백함수 보충강의

//클래스를 완전한 완성품으로 만들 경우, 재활용 가능성이 떨어짐(일반함수를 클래스 안에 넣으면 다른 사람이 함수 변경 불가능) -> 콜백함수를 이용해 활용 가능성을 높이는 것!

//특정 클래스 자체에는 어떤 때 어떤 동작을 하는지 결정되어 있지는 않음. 사용자가 원할 때 콜백함수가 수행되는 것

//new counter () 괄호 안에 원하는 콜백함수 전달
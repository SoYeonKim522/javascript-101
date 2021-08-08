'use strict';
//Promise
//비동기를 간편하게 처리할 수 있도록 도와주는 object(콜백을 쓰지 않고 비동기 처리 가능)
//어떤 기능을 실행하고 나서 정상적으로 동작하면, 성공의 메세지와 함께 처리된 결과값을 전달, 문제가 발생하면 error를 전달
//resolve, reject 함수를 반드시 호출해야함
//"니가 then 콜백함수만 등록해 놓으면 데이터가 준비되는 대로 니가 등록한 콜백함수 불러줄게 약속해!"
//시간이 걸리는 heavy work 를 처리할 때 promise를 만들어 비동기적으로 사용하면 좋음
//State : pending -> fulfuilled or rejected
//Producer (promise object)  와  Consumer를 따로 작성해야함



//1.Producer
//여기에서 비동기적으로 수행하고 싶은 기능들의 코드 작성, 성공/실패했을 때 호출할 함수 작성
 //promise는 클래스이기 때문에 new 통해 object생성 가능
 //when new Promise is created, the executor runs automatically right away.  //executor 라는 콜백함수 = (아랫줄 resolve, reject)

const promise = new Promise((resolve, reject) => {     // 두 개의 인자로 이루어진 콜백함수 사용해야. resolve 는 정상적으로 처리했을 때, reject는 그렇지 못했을 때 사용됨
    //do sth heavy (네트워크 통신, 파일 읽어오는 일 등등)
    console.log('doing sth...');
    setTimeout(() => {
        //resolve('elly');   //정상적으로 일이 처리되면 resolve 라는 콜백함수를 호출, elly 라는 값 전달해주는 promise
        reject(new Error('no network!'));    //실패했을 경우 띄우는 콘솔메세지
    },1000);
});
    //promise 안에 만약 resolve, reject모두 호출하지 않으면 promise는 계속 pending 상태가 됨


//2. Consumers 
//여기에서는 성공한 값 or 실패한 에러를 받아와서 어떤 방식으로 처리할 건지 작성
//Consumers는 then, catch, finally 이용해서 값을 받아올 수 있음 
//then : promise가 잘 작동하여 resolve라는 콜백함수를 통해 전달된 값을 인자(value)로 받는다
promise
.then(value=> {                //then = 값이 정상적으로 잘 수행된다면,  value값을 받아와서 (이 경우 elly라는 값)
    console.log(value);        //그 value 값으로 이렇게 수행할거야
})
.catch(errorshit => {          //catch : 처리실패했을 때
    console.log(errorshit);
})
.finally(() => {         //성공,실패에 상관없이 무조건 마지막에 호출되어짐
    console.log('final msg');
});


//3. Promise chaining   
//여러 비동기적인 애들을 then, then.. 으로 묶어서 처리. 앞에 있는걸 만족해야 다음 then으로 넘어감
//서버에서 숫자를 받아오는 새로운 promise 만드는 예제
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});
fetchNumber
.then(num => num * 2)   //2
.then(num => num * 3)   //6
.then(num => {
    return new Promise((resolve, reject)=> {     //then은 리턴으로 다른 promise를 전달해도 된다!
        setTimeout(()=> resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));


//4. Error Handling  :  catch 이용
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>           //'=hen' 을 여기에 쓰는 이유?, 그리고 hen='🐓'이 되는 이유?
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
.then(hen => getEgg(hen))    // getHen이 잘 작동해서 지정한 값(=hen = '🐓')이 잘 받아와지면, getEgg함수 호출해라
.then(egg => cook(egg))      // getEgg가 잘 작동해서 지정한 값(=egg = '🐓 => 🥚')이 잘 받아와지면, cook함수 호출해라
.then(meal => console.log(meal)); // cook함수가 잘 작동해서 지정한 값을 meal이라고 하자. meal을 출력해라
 
/*simpler ver.   
: then에서 받아오는 밸류를 그대로 다음 함수에 전달하는 경우(인자가 똑같을 경우) 이렇게 생략 가능
getHen() 
    .then(getEgg)
    .then(cook)
    .then(console.log);
*/

//에러 있는 경우 연습 + 빵꾸 메꾸기
const getHen_ = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg_ = hen =>           
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`You can't make ${hen} -> 🥚!`)), 1000);
  });
const cook_ = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} -> 🍳`), 1000);
  });

getHen_()
.then(hen => getEgg_(hen))
//.catch(error => {return '🌳 -> 🥑'})    //getEgg에서 에러가 났을 경우 이걸로 대체해라(getEgg바로밑에 작성). 이걸 써주면 에러메시지도 안뜸
.then(egg => cook_(egg))     
.then(meal => console.log(meal))
.catch(egg => console.log(egg));
    //ㄴ이걸 맨 아래 추가해주면 콜솔창에 에러 안뜨고, 지정한 메세지만 뜸 (error handling)
      //만약 이걸 getEgg바로 밑에 추가해주면, 에러메세지 뜨고 끝남. 나머지 실행 안됨


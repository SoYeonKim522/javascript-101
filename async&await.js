//async & await
//:clearer style of using promise (not always tho)
//syntactic sugar of promise      (cf.  class도 syntactic sugar 중 하나)


//1.async

/*비효율적인 방법
function fetchUser(){
    //do network request for 10secs...  -> 10초 후에 나머지가 로드됨
    return ('ellie');
}
const user = fetchNumber();  //리턴된 코드가 user에 할당
console.log(user);
*/

//promise 사용
function fetchUser(){
    return new Promise((resolve, reject) => {
        //do network request for 10secs...  -> 오래 걸리니까 비동기적으로 처리해야함
        resolve ('ellie');            //return(X)  -> pending 됨
    }); 
}
const user = fetchUser();  //리턴된 코드가 user에 할당
user.then(console.log);
console.log(user);


//async 사용     :함수 앞에 async 붙여주고, promise 라인 없애고, return으로 바꾸기
//: 함수 앞에 async 쓰면 코드 블록이 자동으로 promise로 변환됨(-> resolve, reject 필요x)
async function fetchUser(){
    //do network request for 10secs...  
    return ('ellie');            
}
const user2 = fetchUser();  //리턴된 코드가 user에 할당
user2.then(console.log);
console.log(user2);



//2. await
//async 가 붙은 함수 안에서만 사용 가능
function fruitDelay(ms) {                                   //delayFruit 함수는
    return new Promise(resolve => setTimeout(resolve, ms));   //지정한 millisec이 지나면 resolve를 호출하는 promise를  리턴한다
  }
  
async function getApple() {  //getApple은 프로미스를 만드는 함수(async가 있으니까)
    await fruitDelay(2000);    //2초가 끝날 때까지 기다렸다가
    return '🍎';               //사과를 리턴하는 프로미스가 만들어짐
}

async function getBanana() {
    await fruitDelay(1000);
    return '🍌';
}

async function pickFruits(){     //모든 과일 가져오는 함수
    const apple  = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

/*
async를 병렬적으로 수행하도록 할 때 - getapple, getbanana는 선후관계에 있는게 아니기 때문에
기다리는 과정을 동시에 진행하면 속도를 증가시킬 수 있음

async function pickFruits() {
    const applePromise = getApple();    //사과의 promise를 만드는 순간 getapple()이 바로 실행됨(promise의 특성)
    const bananaPromise = getBanana();  //그래서 이렇게 만들면 프로미스가 바로 실행됨
    const apple = await applePromise;       //getapple -> applepromise
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
//근데 이건 코드가 더러움
*/


//3. useful Promise APIs
//all : 프로미스 배열을 인자로 전달하면, 모든 프로미스들이 병렬적으로 다 받을때까지 모아줌
function pickAllFruits(){
    return Promise.all([getApple(),  getBanana()])
    .then(fruits => fruits.join(' + '))      //join:배열을 스트링으로 출력
}
pickAllFruits().then(console.log);

//race
function pickOnlyOne(){         //먼저 출력되는 과일 하나만 가져오는 함수
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
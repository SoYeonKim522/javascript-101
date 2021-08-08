//'use strict';
// Objects
// one of the JavaScript's data types
// a collection of related data and/or functionality. 데이터를 모두 변수로 정의하기도 힘들고, 큰 프로젝트일수록 전역변수는 너무 많이 남발해서 만들지 않는게 좋음. 
//이를 위한 방법 중 하나가 객체를 만드는 것. let a= 100, let b = 100...보다는 let= {a:100, b=200...} 이게 전역변수 갯수도 1개

// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

//1. Literals and properties
//object 만드는 법1 : 변수에 직접 {key:value}/메소드 등 입력해넣기
const obj1 = {
    //blah: blah
};                             //'object literal' syntax. 

//object 만드는 법2 : 클래스를 통해. 이때는 new 필요
/*class Person {
    constructor(name, age){ 
       this.name = name;  
       this.age = age;
    }
}
const forLia = new Person('Lia', '24');
console.log(forLia.name, forLia.age);       //'object constructor' syntax 
//console.log(forLia.age);
ㄴclass.js에서 복사해옴*/

//object 만드는 법3 : 클래스가 없이 {key:value} 통해 바로 생성가능
function intro(person){
    console.log(person.name);
    console.log(person.age);
}
const liaInfo = {name: 'Lia', age: 24};
intro(liaInfo);

//object 에 요소 추가도 가능(권장은 ㄴㄴ)
liaInfo.gender = 'female'         //없는 프로퍼티를 그냥 쓰면 추가가 됨
console.log(liaInfo.gender);      //intro(liaInfo); (X)

//object 요소 삭제 가능
delete liaInfo.gender;
console.log(liaInfo.gender);  


console.clear();
//2. computed properties 계산된 프로퍼티
//object 안에 캡슐화되어있는 데이터 접근방법2 중 하나 (괄호표기법)
console.log(liaInfo['name']);  //[] 안에는 항상 string이어야. key should be always string
//더 자주 쓰는 다른 방법 : 점 찍는 방법
//console.log(liaInfo.name); 

//computed properties 는 해당 키의 value 값이 아직 뭔지 모를 때 사용함
//예를 들어 사용자에게서 나중에 받아오는 정보일 경우

function printValue(obj, key) {
    console.log(obj[key]);    //console.log(object.key)(X) - 이건 'object'에 'key'라는 이름의 프로퍼티를 불러오라는 뜻. 근데 'key'라는 프로퍼티 없음
}
printValue(liaInfo, 'name');  //key는 string으로 쓰는 것 잊지말기
printValue(liaInfo, 'age');   //여기서 입력한 키값에 따라서 그 밸류값이 불러와짐


/*
먼저 이거 순서대로 한번 읽어보기
https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects
*/
//모질라 예제
let person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    }
  };
  //[]를 사용해서 person객체에 key:value 추가하기 (점표기법으로는 불가)
  person['eyes'] = 'hazel';
  console.log(person.eyes);
  //사용자가 key:value 를 자유롭게 추가하게 하기
  let myDataName = 'height';
  let myDataValue = '1.75m';
  person[myDataName] = myDataValue;
  console.log(person.height);

 
//3. Constructor function
//객체들을 여러개 만들어야 할 때. (class가 생기기 전에 이런식으로 많이 했음)
function Example(name) {        // 이 함수 이름 생성자함수. 반복되는 작업할 때 틀과 같음
    this.name = name;
    this.greeting = function() {
      console.log('Hi! I\'m ' + this.name + '.');
    };
  }
let person1 = new Example('Jess');    // 생성자 함수 호출하여 객체person1만들기
console.log(person1.greeting);

console.log(person1.valueOf());


//4. in operator : property existence check (key in obj?)
console.log('name' in person1);  //person1 안에 name이라는 키가 있는가? true
console.log('job' in person);   //false



//5. for..in   vs   for..of
//for (key in obj) : 그 객체에 있는 모든 키 불러옴
for (key in person){   
    console.log(key);
}

//for (value of iterable) : array 등에 있는 모든 데이터를 불러옴
const array = [1,2,3,4];
for(value of array){
    console.log(value);
}


//6. Cloning  (복사)
//Object.assign(Target복사하고자 하는 객체, Source복사되어지는 객체) : T&S 리턴
//여러개 복사도 가능
const user = {name: 'ellie', age:'19'};
const user2 = user;
console.log(user);

const user3 ={};
Object.assign(user3, user);  //user을 user3에 복사
console.log(user3);

//to make it in one line
const user4 = Object.assign({}, user);  //user을 user3에 복사
console.log(user4);



console.log(Object.prototype);
console.log(String.prototype);

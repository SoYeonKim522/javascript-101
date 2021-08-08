'use strict';
//CLASS
//붕어빵을 만들 수 있는 틀. template. 이상에 존재하는 틀
//관련있는 변수/함수(method)들을 묶어 놓은 것(재사용하기 위해). no data inside(실제로 메모리에 반영x). declare once
//introduced in ES6 -> 클래스를 통해 객체 생성 가능

//OBJECT
//붕어빵. instance of a class(클래스를 찍어내 실존하는 세계에 만들어진 것)
//created many times, data inside(=object는 메모리에 올라감)

var person = {
    foo : "name",
    name: "victolee"
}

console.log(person["name"])

var nameVar = person.foo
console.log(person[nameVar])


 //1. Class declaration

 class Person {
     constructor(name, age){ //constructor 함수를 통해 나중에 객체 만들 때, 객체가 가져야할 데이터 전달 
        this.name = name;  //전달된 데이터 클래스에 할당 (이 Person 클래스를 이용해 객체를 만드는 순간, 변수 name, age에, 전달된 인자값(Lia, 24) 담겨진다(?))
        this.age = age;
     }
     speak(){               //method. 클래스 안에서 함수를 선언할 때는 function이라고 안 써줘도 됨
         console.log(`How are you, ${this.name}?`)
     }
 }
 //새로운 object 생성_ new + 클래스 이름
 //새로운 object 만들어도 class에 있는 property, method는 그대로 상속됨
const forLia = new Person('Lia', '24');
console.log(forLia.name);
console.log(forLia.age);
forLia.speak();                    //speak(forLia) (X). object 가 주체이기 때문에 맨 앞으로!



//2. Getter and setter

//class - coffee vending machine
//property - number of coffee, put coins(메소드), make coffee(메소드)
//number of coffee : int(정수)
//만약 사용자가 실수로 커피 갯수를 마이너스로 설정해도, 우리는 setter에서 0으로 만들어준다
//외부인이 커피 갯수를 설정하는 것을 방지하기 위해 이 property를 private으로 만든다
//Getter와 setter는 쌍으로 동작한다. Getter가 현재 값을 반환한다면 그에 대응하는 setter는 해당하는 값을 변경
class User {                       //User 에 속해있는 property : firstName, lastName, age_
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){   //값을 리턴
        return this._age;  //getter, setter의 변수 이름을 조금 다르게 만들어야 함. 안그럼 무한루프 오류뜸
    }

    set age(value){     //값을 설정. 그렇기 때문에 value를 받아와야
        //if(value<0){
        //    throw Error('Age cannot be negative');  //console에 저렇게 경고문구 띄우거나
        //}
        this._age = value <0? 0 : value;  //(Tenary operator 사용)
    }   
}   
const user1 = new User('Steve', 'Jobs', -1);  //사용자가 실수로 나이를 마이너스로 입력한 경우
console.log(user1.age);
    //but still 마지막 줄 console에서 age로 호출 가능, class에서 age에 값을 할당가능 
    //ㄴ getter, setter를 내부적으로 설치했기 때문




//3.Inheritance   (하위sub클래스 생성을 통한 상속 : 객체 상속스타일 중 하나)
//a way for one class to extend another class
class Shape {
    constructor(width, height, color){         //constructor() 메소드는 Shape클래스의 생성자를 의미
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`Pick ${this.color} from the palette!`)
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}  //extends 키워드 : Shape의 property, method 가 rectangle 에 포함됨
class Triangle extends Shape{
    draw(){
        super.draw();   //부모의 메소드 호출
        console.log('🔺');  // 얘만의 새로운 것 추가
    }
    getArea() {
        return (this.width * this.height) /2;  //overwriting을 통해 함수 바꾸기
    }
}
const rectangle = new Rectangle(20, 20, 'navy');
rectangle.draw();
console.log(rectangle.getArea());           //rectangle.getArea();  (X) - 이건 getArea가 'console.log(this.width*this.height);'일 경우 쓸 수 있음

const triangle = new Triangle(20, 20, 'orange');
triangle.draw();
console.log(triangle.getArea());


//4. instanceOf : class checking
// (objectname) instanceOf (classname)
//object가 해당 클래스를 이용해서 만들어진 것인지(해당 클래스의 instance인지) 아닌지
console.log(rectangle instanceof Rectangle);  
console.log(triangle instanceof Shape);  
console.log(rectangle instanceof Object); //우리가 만든 모든 object들은 js의 Object를 상속한것

//console.log(triangle.valueOf());  //신기한 기능ㅋ





//클래스&콜백함수 보충강의
class Counter {
    constructor(){
        this.counter=0;   //=클래스 Counter 안의 변수 counter는, 이 클래스를 이용해 객체를 만드는 순간 값이 0으로 초기화된다
    }
    increase(){
        this.counter++
        console.log(this.counter);
    }
}
const coolCounter = new Counter();
coolCounter.increase();


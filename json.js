//JSON   _ Javascript Object Notation

//1. Object to JSON   : stringify
let json = JSON.stringify(['fig', 'coco']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: function () {
      console.log(`${this.name} can jump!`);
    },
  };
  
  json = JSON.stringify(rabbit);
  console.log(json);

  json = JSON.stringify(rabbit, ['name', 'size']);  //원하는 프로퍼티 출력
  console.log(json);

  //콜백함수 이용해서 특정한 데이터 출력
  json = JSON.stringify(rabbit, (key, value) => {
      console.log(`key: ${key}, value : ${value}`);
      return key ==='name' ? 'ellie' : value;   // 이름을 ellie로 바꾸기
  });
  console.log(json);




//2. JSON to Object    : parse

json = JSON.stringify(rabbit);
const obje = JSON.parse(json);   // 파싱 방법. 아주 간단
console.log(obje);

//stingify 할 때 메소드는 포함이 안됨. 따라서 이걸 다시 parse한다고 해도 메소드는 여전히 없음
/* 
//콜백함수를 이용해서 세밀하게 통제 가능

console.log(rabbit.birthDate.getDate());  //날짜 나옴 ok
console.log(obj.birthDate.getDate());  //파싱한 것으로부터는 getDate 작동안함
//birthDate 값이 string이기 때문. 근데 솔직히 이해안됨;;
*/
//해결방법 : reviver이용하기
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value : ${value}`);
    return key === 'birthDate'? new Date(value) : value;
});
console.log(obj.birthDate.getDate());  //이제 이렇게 해도 날짜 나옴

// Q1. make a string out of an array  : join
  //join : 배열의 모든 요소들을 string으로 리턴. 각 요소 사이에 separator 추가도 가능(콤마는 자동)
  //배열이름.join(separator);
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join());
}
  

// Q2. make an array out of a string   : split
//함수이름.split('어떤 문자열 기준으로 배열element를 생성할껀지(splitter)', 옵션-맨앞부터 몇개를 배열로 만들껀지)
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]   :  reverse
  //reverse는 원래 배열 자체를 변화시켜주는것임
  { 
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);     //원래 배열도 순서 바뀜
  }
  /*다른 방법 : sort 이용
  const array = [1, 2, 3, 4, 5];
  array.sort((a,b)=> b-a);
  console.log(array);*/
  

  // Q4. make new array without the first two elements   :   splice
  //splice는 배열 자체의 element를 삭제함. 근데 Q4는 새로운 배열을 만들라고 했음
  //slice : 배열의 특정한 부분만 리턴  (원래 배열은 변경X)
  //배열이름.slice(start index, end index)  - 근데 end index는 미포함임!!
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2,5);
    console.log(array);       // [1,2,3,4,5] : 원래 배열은 변화X!!!
    console.log(result);      // [3,4,5]

    /* splice 사용할 경우 
    const result = array.splice(0,2);
    console.log(array);       // [3,4,5]  - 원래 배열도 바뀜
    console.log(result);      // [1,2]    - 이 둘의 차이 알기!
    */
  }
  

   
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90  : find
  //객체.find(콜백함수 만들어 넣기)
  //find 를 쓰면 콜백함수가 모든 element마다 호출이 되는데, 그 함수값이 true인 첫번째 element를 찾아 리턴해줌
  {
    const result = students.find(function(value, index){   //여기서 value는 다른걸로 대체 가능. 아랫줄이랑만 같게 맞춰주면 됨
       return value.score === 90;
    });
    console.log(result);

    //simpler version
    const result2 = students.find((student) => student.score === 90);  //그래도 콜백함수 인자는 value, item 이런것 보다는 최대한 이해하기 쉽게 student로 쓰는게 좋음
    console.log(result2);
  }
  
  // Q6. make an array of enrolled students   :  filter
  //filter(콜백함수 만들어 넣기)
  {
    const result = students.filter((student) => student.enrolled==true);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores  :  map
  // result should be: [45, 80, 90, 66, 88]
  // map : 콜백함수 돌린 후 그 결과를 배열로 리턴. 배열의 요소들을 원하는 함수를 이용해서 다른 데이터 생성
  {
    const result = students.map((student) => student.score);
    console.log(result);

    const result2 = students.map((student) => student.score*2);  // 연습
    console.log(result2);
  }
  

  // Q8. check if there is a student with the score lower than 50  : some
  //some : if any of the elements 가 콜백함수를 만족하는지
  //every : if all of the elements 가 콜백함수를 만족하는지
  {
    const result = students.some((student) => student.score<50);
    console.log(result);  //true
  }
  
  // Q9. compute students' average score  : reduce
  //reduce : 배열의 모든 요소들을 돌면서 값을 누적하는 기능
  //reduceRight : 누적이 배열의 뒤에서부터 시작함
  { 
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result);
    const avgscore = result / students.length;
    console.log(avgscore);
    //curr - 배열의 요소들을 순차적으로 전달받음
    //prev - 이전 단계에서 콜백함수에서 리턴된 값이 전달되는 것
    //0 - 0으로 시작하겠다
  }
   /*
   //reduce 이해하기
    const result2 = students.reduce((prev, curr) => {
      console.log('~~');  
      console.log(prev);
      console.log(curr);
      return prev + curr.score + '~~' ;
    },0);
    console.log(result2);
    */
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students.map((student) => student.score).join();
    console.log(result);

    //move further : 50점 이상만 이렇게 출력
    const result2 = students
      .map((student) => student.score)
      .filter((score) => score >= 50)
      .join();
    console.log(result2);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students
    .map((student) => student.score)
    .sort()
    .join();
    console.log(result);

    //점수 높은 순으로 
    const result2 = students
    .map((student) => student.score)
    .sort((a,b) => b-a)
    .join();
    console.log(result2);
  }
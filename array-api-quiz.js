
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
  }
  //const fruits = 'apple, banana, orange';   //'apple, 'banana', 'orange' (X)
  
  // Q2. make an array out of a string
  {
    const fruits2 = '🍎, 🥝, 🍌, 🍒';
  }
  //const fruits2 = ['🍎', '🥝', '🍌', '🍒'];
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
  }
  //console.log(array.reverse());  //아님 sort?

  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    array.splice(0,2);
    console.log(array);
  }
 
 //console.log(array.splice()=>(0,2)) ===[1,2]  지워진 게 나옴;;;;
  
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

  // Q5. find a student with the score 90
  {
  }
    const score90 = function(){
        if(students.score===90){
            console.log(students.name);
        }
    }  
    console.log(score90);

 
  
  // Q6. make an array of enrolled students
  const enrolled = Student.enrolled===true;
  console.log(enrolled.toString());
  { 
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  /*
  for (let scorelist of students.score){
      console.log(scorelist);
  }
*/
  
  // Q8. check if there is a student with the score lower than 50
  //console.log(students.score.includes(50));
  {
  }
  
  // Q9. compute students' average score

    for(i=0; i<students.length; i++){
        console.log(students[i].score++);
    }



  {
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  
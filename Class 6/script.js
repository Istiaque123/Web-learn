// function myFunction(){

//   console.log("This is really Pain");
//   console.log("I really want to be free");
//   console.log("I am so weak");
// }

// // myFunction();

// function funcTwo(msg) {
//   console.log(msg);
// }

// // funcTwo("When i will be free");
// // myFunction();
// function sum(a, b) {
  
//   return a+b; 
// }
// // console.log(sum(73, 8));

// const val = (a, b) => {

//   console.log(a*b);
// }

// val(45, 6);

let array = [1, 2, 3 ,4, 5, 6 ,7];

array.forEach((i, ind) => {
  console.log(ind, i*i);
});

let evenArray = array.filter((i) => {

  return i%2=== 0;
});

console.log(evenArray);

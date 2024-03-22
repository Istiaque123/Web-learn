// for(let i of str){
//     console.log("i = ",i);
// }

// for (const key in student) {
//     console.log("key -> ", key, "value -> ", student[key]);
// }
// console.log(student["studentName"]);

let student = {
  studentName: "Istiaque",
  age: 24,
  isFree: false,
};

let str = "This is hell...";
console.log(str.length);
console.log(`Name is ${student["studentName"]} \nage is ${student["age"]}`);
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.toLocaleLowerCase())

console.log(str.slice(3, 10));
console.log(str.slice(3));
console.log(str.charAt(5));
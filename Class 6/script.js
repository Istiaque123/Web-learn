let marks = [88, 66, 23, 86, 36, 90];

console.log(marks.length);
console.log(marks);

marks[4] = 53;
console.log(marks);

for (const i of marks) {
  console.log(i);
}
marks.push(45);
marks.push(75);
console.log(marks);
console.log(marks.slice(1, 4));


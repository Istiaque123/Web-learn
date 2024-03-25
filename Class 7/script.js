// let h2 = document.querySelector("h2");
// // console.dir(h2);
// console.dir(h2.innerText);

// h2.innerText = h2.innerText +" from apna collage";

let divs = document.querySelectorAll(".box");
// console.log(divs[0 ]);
let i = 1;
for (const div of divs) {
    div.innerText = `new value ${i++}`;
}


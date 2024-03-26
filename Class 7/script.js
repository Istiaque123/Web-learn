// let h2 = document.querySelector("h2");
// // console.dir(h2);
// console.dir(h2.innerText);

// h2.innerText = h2.innerText +" from apna collage";

let divs = document.querySelectorAll(".box");
// console.log(divs[0 ]);
console.log(divs[0].getAttribute("class"));
console.log(divs[0].getAttribute("id"));

divs[1].setAttribute("class", "newBox");
divs[1].style.backgroundColor = "yellow"

divs[0].style.fontSize = "28px";
divs[0].innerText = "Yo!!"
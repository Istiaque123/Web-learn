let btn1 = document.querySelector("#btn1");

// btn1.onclick = (EventTarget) =>{


//     console.log(EventTarget);
//     console.log(EventTarget.type);
//     console.log(EventTarget.clientX, EventTarget.clientY);
//     // console.log(EventTarget.type);
// };

// btn1.addEventListener("click", (EventTarget) =>{
//     // console.log(EventTarget);
//     // console.log(EventTarget.type);
//     console.log("Button 1 was cliced - handler 1");
// });

// btn1.addEventListener("click", () =>{
//     console.log("Button 1 was cliced - handler 2");
// });

// const handler3 = () => {
//     console.log("Button 1 was cliced - handler 3");

// };

// btn1.addEventListener("click", handler3);


// // remove handler
// btn1.addEventListener("click", () =>{
//     console.log("Button 1 was cliced - handler 4");
// });

// btn1.removeEventListener("click", handler3);




// box.onmouseover = () =>{
//     console.log("you are inside the div");
// };


let mode = true;
btn1.addEventListener("click", () =>{
    console.log("you are tyring to change mode");

    console.log(mode);
    if (mode) {
        mode = false;
        document.querySelector("body").style.backgroundColor = "grey";
    }
    else{
        mode = true;
        document.querySelector("body").style.backgroundColor = "white";
    }
})
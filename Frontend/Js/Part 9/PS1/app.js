// let body =document.querySelector(body);
// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText("Click me");


let button = document.createElement('button');
let input = document.createElement('input');
button.innerText ="click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);


input.setAttribute('placeholder',"username");
button.setAttribute('id',"btn");

let btn = document.querySelector("#btn");
btn.classList.add("style");

let heading = document.createElement('h1');
document.body.appendChild(heading);
heading.innerText="DOM Practice";
heading.classList.add("styleH1");

let para = document.createElement("p");
document.body.appendChild(para);
para.innerHTML="<b>Apna College Delta Practice <b>";







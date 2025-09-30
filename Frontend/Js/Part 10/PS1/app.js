let button = document.querySelector("button");
let div = document.querySelector('div')
button.addEventListener('click',function(){
    let h1 =document.querySelector('h1');
    let randomColor= getRandom();
    h1.innerText=randomColor;
    div.style.backgroundColor=randomColor; 
   
})


let getRandom = function(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    let color=` rgb(${red},${green},${blue})`;
    return color;
}
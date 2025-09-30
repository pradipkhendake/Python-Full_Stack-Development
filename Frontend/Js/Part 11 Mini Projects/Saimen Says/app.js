let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function () {
    if (started == false) {
        console.log("Game Started");
        started = true;

        levelUp();

    }

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
} 
function btnFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
} 
  
function levelUp (){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIndex=Math.floor(Math.random()*3);
    let randColor = btns[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);

};

function checkAns(idx){
//   console.log ("curr level:",level);
// let idx = level-1;

if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
     setTimeout(levelUp,1000);  
    }
} else{
   h2.innerHTML= `Game Over! Your Score Was <b>${level}<b>`; 
reset();
}
}

function btnPress(){
    
    let btn = this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns( userSeq.length-1); 
    
}
let allBtns =document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnPress);

}

function reset(){
    started = false;
    gameSeq =[];
    userSeq =[];
    level=0;
}
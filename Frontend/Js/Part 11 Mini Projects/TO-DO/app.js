let btn = document.querySelector('button');
let list = document.querySelector('ul');
let input = document.querySelector('input');
let ul = document.querySelector("ul");


btn.addEventListener('click',function(){
    let item = document.createElement('li');
    item.innerText=input.value;
    list.appendChild (item);
    input.value="";

    let delbtn=document.createElement('button');
    delbtn.innerText='delete'
    item.appendChild(delbtn);

});

ul.addEventListener("click",function(event){
if (event.target.nodeName == "BUTTON"){
    let listitem = event.target.parentElement;
    listitem.remove();
}
})






// let delbtns = document.querySelectorAll(".deleteButton");
// for(btns of delbtns){
// btns.addEventListener('click',function(){
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
// });
// }

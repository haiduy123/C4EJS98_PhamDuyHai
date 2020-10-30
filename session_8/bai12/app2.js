var a=['Backpack','MiBand watch','Ring']
console.log(a);
let x=document.getElementById("main-form");
x.onsubmit=function(event){
event.preventDefault();
let a=todo.value;
let li=document.createElement("li");
li.innerText=a;
let btn=document.createElement("button");
btn.innerText="Remove";
li.appendChild(btn);
btn.onclick=function(){
    li.parentNode.removeChild(li);
}
let ul=document.getElementById("list-1");
ul.appendChild(li);
}
let a=['Backpack','MiBand watch','Ring'];
console.log(a);
let btn=document.getElementById("btn");
let input=document.getElementById("todo")
let ul=document.getElementById("list");
for(let i=0;i<3;i++){
  let li=document.createElement("li");
  li.innerText=a[i];
  let del=document.createElement("button");
  li.appendChild(del);
  ul.appendChild(li);
  del.onclick=function(){
    del.parentElement.remove();
    a.splice(i,1);
    console.log(a);
}
}
for(let i=0;i<3;i++){
  btn.onclick=function(){
  let x=input.value;
  a.push(x);
  let li=document.createElement("li");
  li.innerText=x;
  x.innerText=a[i];
  ul.appendChild(li);
  console.log(a);
  let del=document.createElement("button");
  li.appendChild(del);
  del.onclick=function(){
    del.parentElement.remove();
    a.splice(i+1,1);
    console.log(a);
  }
}
  }

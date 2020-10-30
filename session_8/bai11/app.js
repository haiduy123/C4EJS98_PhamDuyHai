// alert("Hải Duy");
// alert("Bay Lắc");
// let a= prompt("Bạn tên gì");
// let b= prompt("Bạn mong ước gì trong năm nay ");
// alert(`${a}`);
// alert(`${b}`
const mainForm=document.getElementById("main-form");
mainForm.onsubmit=function(event){
    event.preventDefault();
    //console.log(mainForm.todo.value);
    let a=todo.value;
    let li=document.createElement("li");
    let b= a.toUpperCase();
    li.innerText=b;
    let ul=document.getElementById("hihi");
    ul.appendChild(li);
}

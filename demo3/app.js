// Đọc truyện
async function getData(){
    let data = await fetch("https://sheetdb.io/api/v1/3i1h4xdicrcqf")
    let dataJson = await data.json();

    let button = document.getElementById("button");

    let dropDown = document.getElementById ("dropdown-menu");
    for (let i=0; i<dataJson.length;i++){
        let a = document.createElement("a");
        a.className = "dropdown-item"
        a.setAttribute('id',i);
        a.innerText = dataJson[i].chapter;
        dropDown.appendChild(a);
    }

    let noiDung = document.getElementById("noi-dung");
    let text = document.createElement("div");
    text.innerText = dataJson[0].in4;
    button.innerText = dataJson[0].chapter;
    noiDung.appendChild(text);

    let title = document.getElementById("title");
    title.innerText = dataJson[0].name;

    dropDown.onclick = function(e){
        text.innerText = dataJson[e.target.id].in4;
        title.innerText = dataJson[e.target.id].name;
        button.innerText = dataJson[e.target.id].chapter;
    }
}
getData();
// Đọc truyện
let home = document.getElementById("home");
let read = document.getElementById("read");

let anh1= document.getElementById("anh1");
let back = document.getElementById("back")
anh1.onclick = function(){
    home.style.display = "none";
    read.style.display = "block";
}

back.onclick= function(){
    home.style.display = "block";
    read.style.display = "none";
}
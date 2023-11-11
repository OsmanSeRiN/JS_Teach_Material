//Liste içerisinde elemanlara ulaşmak ve değiştirmek için aşşağıdaki dizin kullanılır
var list = document.getElementById("list").innerText; //ID ile liste çekme
console.log(list + "  bulundu ve ID kullanılarak çekildi"); 

var itemFirst = document.querySelector("lu#list>li:first-child").innerText; //İlk elemanı çekme
console.log(itemFirst + "   Listenin bulundu ve ilk eleman çekildi");

document.querySelector("lu#list>li:first-child").innerHTML = "xxxx";//Listenin ilk öğesini değiştirme
console.log("Bulunan İtem Değiştirildi");

//Yeni bir eleman ekleme
let ulObject = document.querySelector("lu#list");
let  liObject = document.createElement("li");
liObject.innerHTML = "new item";

// Bir HTML Elementine Css Ekleme 
let  htmlItem = document.querySelector("#helloWorld");
htmlItem.classList.add("textRed");

let int = 0;
let header = document.querySelector("#int");
let btnUpper = document.querySelector("#upper");
let btnlower = document.querySelector("#lower");

header.innerHTML = int
btnUpper.addEventListener("click",Upper)
btnlower.addEventListener("click",Lower);

function Upper() {
       console.log(int)
    int = int +5
    header.innerHTML = int
}

function Lower()  {
    int = int - 5
    header.innerHTML = int
    console.log(int)
}
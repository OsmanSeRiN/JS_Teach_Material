# JavaScript Temel

### Değişken (Variables) Atama

```javascript
var sayi = 5;
let isim = "Ahmet";
const sabitSayi = 10;
```
#### Var :
var anahtar kelimesi, eski JavaScript sürümlerinde kullanılan değişken tanımlama yöntemidir.

#### let :
var anahtar kelimesi, eski JavaScript sürümlerinde kullanılan değişken tanımlama yöntemidir.

#### const :
var anahtar kelimesi, eski JavaScript sürümlerinde kullanılan değişken tanımlama yöntemidir.

### İf Kullanımı

```javascript
if (sayi > 0) {
    console.log("Sayı pozitif.");
} else if (sayi < 0) {
    console.log("Sayı negatif.");
} else {
    console.log("Sayı sıfır.");
}
```

### For Kullanımı

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Döngü " + i);
}
```
### Kullanıcıya Uyarı Verme

##### 1-Consol aracılığı ile:

```javascript
Console.Log("HelloWorld");
```
##### Alert aracılığı ile:

```javascript
Alert("HelloWorld");
```

### Fonksiyon Oluşturma

```javascript
function selamVer(isim) {
    console.log("Merhaba, " + isim + "!");
}
```

### Kullanıcıdan Veri Alma 

#### Promt

```javascript
let ad = Promt("Adınızı Giriniz")
```
Not: Promt ile veri alma işlemi yukarıdaki bildirim kutucuğunda bir textbox oluşturarak gerçekleştirilir.

### Liste (HTML) İçeriğine Ulaşma Ve Listenin (HTML) İçine Öğe Ekleme

```javascript
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
ulObject.appendChild(liObject);
Console.log(i);
```

### Bir HTNL Elementine Class Ekleme ve Değiştirme 

```javascript
// Bir HTML Elementine Css Ekleme 
let  htmlItem = document.querySelector("#helloWorld")
htmlItem.classList.add("textRed")//Tekli şekilde
htmlItem.classList.add("textRed","textBlue")//Çoklu şekilde
```
### Swich Case Yapısı
Genellikle çok sayıda if-else ifadesinin kullanılmasını engellemek ve kodu daha okunabilir hale getirmek için tercih edilir.
```javascript
var gün = "Pazartesi";

switch (gün) {
  case "Pazartesi":
    console.log("Yeni bir haftaya başladık!");
    break;
  case "Çarşamba":
    console.log("Haftanın ortası geldi!");
    break;
  case "Cuma":
    console.log("Hafta sonuna yaklaşıyoruz!");
    break;
  default:
    console.log("Diğer günler");
}
```
### Ternary Operatör
```javascript
var money = 40;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy) // "Satın alabilirsin.."
```

```javascript
var sayı = 1
info.innerHTML = `${sayı < 10 ? userName:"Başarılı oram"}`
```

### Fonksiyonlar

```javascript
function toplama (a , b) // a ve b toplanacak iki sayıyı temsil eden fonksiyon parametreleri(girdileri) {  
    var sonuc = a+b; // Fonksiyonda aldığımız parametrelerle yaptığımız işlem
	return sonuc;  	// Herhangi iki sayının toplamından elde edeceğimiz işlem sonucunu, return ifadesinden hemen sonra belirtiyoruz.
 }      

 toplama(1,2)
```
### Arrow Function

```javascript
var feedTheCat = (cat) => {
    if (cat === 'hungry') {
      return 'Feed the cat';
    } else {
      return 'Do not feed the cat';
    }
  }
```
### JavaScript İle Bir HTML öğesini Butona Bağlama

```javascript
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
```
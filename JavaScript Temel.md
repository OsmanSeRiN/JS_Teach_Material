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

for(let i = 0 ; i<10; i++)
{
    ulObject.appendChild(liObject);
    console.log(i);
}
```

### Bir HTNL Elementine Class Ekleme ve Değiştirme 

```javascript

```


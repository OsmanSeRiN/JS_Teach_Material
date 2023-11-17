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

### JavaScriptte Get ve Set Metodu (Lokale Veri Ekleme)
Set => Veriyi yazdırma
Get => Veriyi getirme

`localStorage` ve `sessionStorage` ikisi de web tarayıcıları tarafından sağlanan web depolama API'larıdır ve benzer amaçlara hizmet ederler. Ancak aralarında önemli farklar bulunmaktadır:

1. **Yaşam Süresi (Lifetime):**
   - `localStorage`: Bu veri depolama türü, tarayıcı penceresi veya sekmesi kapatılsa bile verilerin kalıcı olmasını sağlar. Yani, tarayıcıyı kapatıp sonra tekrar açtığınızda bile veriler hala mevcut olacaktır.
   - `sessionStorage`: Bu veri depolama türü, tarayıcı penceresi veya sekmesi kapandığında verilerin silinmesini sağlar. Yani, bir oturum boyunca (tarayıcı penceresi açık olduğu süre) veriler saklanır ve pencere kapatıldığında silinir.

2. **Kapsam (Scope):**
   - Her ikisi de aynı tarayıcıda aynı kök etki alanında çalışır, ancak farklı pencere veya sekme arasında paylaşım yapma yetenekleri değişir.
   - `localStorage`: Bu veri depolama türü, aynı tarayıcıda aynı kök etki alanına sahip farklı sekmeler ve pencereler arasında veri paylaşımına izin verir. Yani, bir sekmede `localStorage`'ya yazılan bir veri, diğer bir sekmede okunabilir.
   - `sessionStorage`: Bu veri depolama türü, sadece aynı pencere veya sekme içindeki sayfalar arasında veri paylaşımına izin verir. Diğer sekmelerde veya pencerelerdeki sayfalar `sessionStorage`'ya erişemez.

3. **Saklanan Veri Türleri:**
   - Her ikisi de temel olarak benzer veri türlerini saklar: metin tabanlı veriler, nesneler, diziler vb.

İhtiyacınıza bağlı olarak, verinin kalıcı olup olmaması veya tarayıcı penceresi veya sekmesi arasında paylaşılıp paylaşılmaması gibi faktörlere göre `localStorage` veya `sessionStorage` kullanabilirsiniz.

#### Set,Get,Remove
```javascript
window.localStorage.setItem("key","value"); //Lokale veri ekleme
window.localStorage.getItem("key"); //Veriyi localde okuma
window.localStorage.removeItem("key"); //Veriyi localden kaldırma
```

#### LocalStorage

```javascript
// Veri saklama
localStorage.setItem('kullaniciAdi', 'Ahmet');
localStorage.setItem('sehir', 'Istanbul');

// Veri okuma
var ad = localStorage.getItem('kullaniciAdi');
var sehir = localStorage.getItem('sehir');

console.log(ad);    // "Ahmet"
console.log(sehir); // "Istanbul"

// Veri silme
localStorage.removeItem('sehir');

// Tüm veriyi temizleme
localStorage.clear();

```

#### SessionStorage

```javascript
// Veri saklama
sessionStorage.setItem('urun', 'Laptop');
sessionStorage.setItem('fiyat', '5000');

// Veri okuma
var urunAdi = sessionStorage.getItem('urun');
var urunFiyati = sessionStorage.getItem('fiyat');

console.log(urunAdi);    // "Laptop"
console.log(urunFiyati); // "5000"

// Veri silme
sessionStorage.removeItem('fiyat');

// Tüm veriyi temizleme (unutmayın, sessionStorage pencere veya sekme kapanana kadar saklanır)
sessionStorage.clear();

```

### Veriyi JSON Olarak Atama
```JavaScript
let userStatus = {userName: 'kodluyoruz', isActive: true}
localStorage.setItem('user', JSON.stringify(userStatus))
```

### Formda veri gönderme yöntemleri 
1-GET Yöntemi:

Form verileri, URL'nin bir parçası olarak sunucuya gönderilir. Bu nedenle, gönderilen veriler URL üzerinden görülebilir.
GET yöntemi genellikle sınırlı miktarda veri göndermek için kullanılır ve tarayıcı tarafından yer işareti (?) ile ayrılmış bir dizi anahtar-değer çifti olarak sunulur.
Veriler URL üzerinde göründüğü için, kullanıcılar tarafından görülebilir ve yer imlerine eklenebilir. Bu nedenle, özel veya hassas verilerin gönderilmesi önerilmez.

2-POST Yöntemi:

HTTP isteği gövdesinde saklanır. Bu nedenle, POST ile gönderilen veriler URL'de görünmez.
POST yöntemi, genellikle daha büyük veri setlerini ve özel veya hassas bilgileri göndermek için kullanılır.
Form verileri, isteğin gövdesine yerleştirilir, bu da URL üzerinde görünmez ve kullanıcı tarafından daha güvenli bir şekilde saklanabilir.
method="dialog" ifadesi ise standart bir HTTP metodunu temsil etmez. Bu ifade, formun sunucuya gönderilmesi için özel bir JavaScript dialog kutusunu kullanma niyetini belirtir. Yani, bu durumda GET veya POST gibi standart HTTP metodları kullanılmaz. Bu metod, tarayıcı tarafından otomatik olarak işlenmez ve özel bir JavaScript işlemine ihtiyaç duyar. Bu nedenle, method="dialog" ifadesi, standart bir GET veya POST yöntemi yerine özel bir işlemi işaret eder.

#### JavaScript
```javascript
let userForm = document.querySelector("#userForm");
userForm.addEventListener('submit',formSubmit);

function formSubmit(event) {
    console.log("tamam");
    event.preventDefault();//formun kendisini yenilemesini engeller
}
```

#### HTML
```html
 <form   id="userForm" method="post">
            <center>
            <!---->
            <div class="col-12 m-5 mx-auto">
                <input class="col-9" type="number" name="txtNumber" id="txtNumber"> 
            </div>
             <!---->
            <div class="row">
                <div class="col-3">
                    <button type="submit" class="btn btn-succes">Gönder</button>
                </div>    
             <!---->
            </div> 
          </center>
        </form>
```

### Event İle Form Yenilemeyi Durdurma

#### JavaScript
```javascript
let userForm = document.querySelector("#userForm");
userForm.addEventListener('submit',formSubmit);

function formSubmit(event) {
    console.log("tamam");
    event.preventDefault();//formun kendisini yenilemesini engeller
    let submitCode = document.querySelector("#varCode");
    console.log(submitCode.value)
}
localStorage.setItem('kullaniciAdi', submitCode );
```

#### HTML

```html
 <form  id="userForm" method="get">
            <center>
            <!---->
            <div class="col-12 m-5 mx-auto">
                <input class="col-9" type="number" id="varCode" name="txtNumber"> 
            </div>
             <!---->
            <div class="row">
                
                <div class="col-3">
                    <button type="submit" class="btn btn-close"></button>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-outline-primary">Adam
                </div>
                <div class="col-3">
                    <button type="submit" class="btn btn-outline-dark">Yürüyen Uçak</button>
                </div>
               
             <!---->
            </div> 
          </center>
        </form>
```

### JavaScript Array'ler

#### Oluşturma:
```javascript
let fruits = ['Elma', 'Muz', 'Üzüm', 'Portakal'];
```

#### Eleman Ekleme:

```javascript
fruits.push('Çilek');// Sona ekleme
console.log(fruits); // ['Elma', 'Muz', 'Üzüm', 'Portakal', 'Çilek']

fruits.UnShift('Çilek');
console.log(fruits); // ['Elma', 'Muz', 'Üzüm', 'Portakal', 'Çilek']

```
#### Eleman kaldırma

```javascript
let lastFruit = fruits.pop(); // Sondan çıkartma
console.log(lastFruit); // Çilek
console.log(fruits); // ['Elma', 'Muz', 'Üzüm', 'Portakal']

let lastFruit = fruits.shift();// Baştan çıkartma
console.log(lastFruit); // Çilek
console.log(fruits); // ['Elma', 'Muz', 'Üzüm', 'Portakal']

```

#### Dizi Elemanlarını Filtreleme

```javascript
let filteredFruits = fruits.filter(function(fruit) {
  return fruit.length > 4;
});

console.log(filteredFruits); // ['Üzüm', 'Portakal']

```

#### Dizi Elemanlarını Düzenleme

```javascript
let uppercasedFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});

console.log(uppercasedFruits); // ['ELMA', 'MUZ', 'ÜZÜM', 'PORTAKAL']

```


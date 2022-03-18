let benimYasim = 31, onunYasi = 25;

if(benimYasim<onunYasi){
    
    console.log("ben senden küçük");

}else{
    console.log("benn senden büyüğüm")
}

// if'in kısa kullanımı // "Ternary if operator"

let a = 10, b=5, c=0;

c = (a>b) ? (a + b) : (a-b);

// switch case
let haftaninKacinciGunu = 3;

switch(haftaninKacinciGunu){

    case 1:
        console.log("pazartesi")
        break;
    case 2:
        console.log("sali")
        break;
    default:
        console.log("sheetday")
        break;

}

// ** truty ve falsy ifadeleri
// falsy= 0, false, "", null, undefined, NaN
// truty= falsy olmayan tüm ifadeler truty

let yas = null;
if(yas){} // false döner


// Döngüler
//for
// ilk atama;koşul;
for(let i = 0; i < 10; i++){ 
    console.log("manu");
}

for(let i = 0, j=0; (i+j)<20; i = i+5, j= j+6){
    console.log("döngü çalıştır");
}
// let olmasydı i for döngüsünün de dışında tanımlı olurdu

// sonsuz döngü
// for(;;){

// }

let sayi = 5;
while(sayi<15){
    console.log("***");
    sayi++;
}

yas = 11;
do{
    console.log("do while");
    yas++;
} while(yas>30);

// break, continue, return
for(let i = 0; i< 50; i++){
    if(i==12){
        break;
    }
    console.log("break");
}

for(let i = 0; i < 20; i++){
    if(i==10){
        continue;
    }
    console.log(i);

}

//bu return ün ilinci kullanımı
// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         return;
//     }
//     console.log("return" + i);
// }

// iki basamaklı sayı üretme
let uretilensayi = Math.floor(Math.random()*90)+10;
let kullanicisayisi = parseInt(prompt());

let uretilen_birler = uretilensayi % 10; // birler basamağı
let uretilen_onlar = Math.floor(uretilensayi / 10);

let kullanici_birler = kullanicisayisi % 10;
let kullanici_onlar = Math.floor(kullanicisayisi / 10);

console.log("ss " + uretilensayi);

if(uretilensayi === kullanicisayisi){
    console.log("kazandınız");
}else if(uretilen_birler === kullanici_onlar && uretilen_onlar === kullanici_birler){
    console.log("tersten bildin");

}else if(kullanici_birler === uretilen_birler || kullanici_onlar === uretilen_onlar ){
    console.log("birtane bildin");
}else{
    console.log("boş");
}
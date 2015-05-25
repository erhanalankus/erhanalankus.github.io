var sayi = 0;
var sayilar = new Array();

function Eksilt() {
    var sayi = parseInt(document.getElementById("value").innerText);
    var yenisayi = sayi - 1;
    document.getElementById("value").innerText = yenisayi;
}

function Arttir() {
    var sayi = parseInt(document.getElementById("value").innerText);
    var yenisayi = sayi + 1;
    document.getElementById("value").innerText = yenisayi;
}

function UstSinirUygunsaGetir() {
    var ustSinir = parseInt(document.getElementById("value").innerText);
    if (ustSinir < 7) {
        document.getElementById("info").innerText = "Sayı 6'dan büyük olmalı";
    }
    else {
        document.getElementById("info").innerText = "Üst sınırı ayarla ve \"Getir\" tuşuna bas";
        SayilariGetir(ustSinir);
    }

}


function SayilariGetir(max) {
    
    do { sayi = Math.ceil(Math.random() * max); }
    while (sayi == 0);
    sayilar[0] = sayi;

    for (i = 1; i < 6 ; i++) {
        do { sayi = Math.ceil(Math.random() * max); }
        while (!SayiEssizMi(i, sayi) || sayi == 0);
        sayilar[i] = sayi;
    }
    sayilar.sort(function (a, b) { return a - b });
    SayilariYazdir(sayilar);

}

function SayiEssizMi(i, sayi) {
    for (j = i; j >= 0; j--) {
        if (sayilar[j] == sayi) {
            return false;
        }
    }
    return true;
}

function SayilariYazdir(sayilar) {
    document.getElementById("sayi1").innerText = sayilar[0];
    document.getElementById("sayi2").innerText = sayilar[1];
    document.getElementById("sayi3").innerText = sayilar[2];
    document.getElementById("sayi4").innerText = sayilar[3];
    document.getElementById("sayi5").innerText = sayilar[4];
    document.getElementById("sayi6").innerText = sayilar[5];
}
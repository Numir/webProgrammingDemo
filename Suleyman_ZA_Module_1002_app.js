//istediğiniz sayı aralığını giriniz.. ve kaç adet sayı üretsin..
let max = 121;
let min = 11;
let adet = 13;

// Kullanıcı girişinden sonra random veri işlemleri
let sayidizisi = [];
for (i = 0; i < adet; i++) {
    sayidizisi[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(
    "------------------------------------------\nRasgele Sayı Aralığı =",
    min,
    " <> ",
    max,
    "\nKüme Adeti =",
    adet,
    "\n",
    sayidizisi,
    "\n------------------------------------------:"
);

function islem(neDir) {
    let sonuc = 0;
    let sonucST = "";
    if (neDir == "ortala") {
        for (i = 0; i < adet; i++) {
            sonuc = sonuc + sayidizisi[i];
        }
        return sonuc / sayidizisi.length;
    } else if (neDir == "kucuk") {
        sayidizisi.sort(function(a, b) {
            return a - b;
        }); // sayıları string gibi değilde sayı değeri olarak sırala..

        return sayidizisi[0];
    } else if (neDir == "buyuk") {
        sayidizisi.sort(function(a, b) {
            return b - a;
        });
        return sayidizisi[0];
    } else if (neDir == "tek") {
        for (i = 0; i < sayidizisi.length; i++) {
            if (sayidizisi[i] % 2 != 0) {
                sonucST = sonucST.concat(sayidizisi[i], "; ");
            }
        }
        return sonucST;
    }
    return "Ne dediğini anlamadım..!";
}
//1) Verilen sayilarin ortalamasi bulan kodu yaziniz.
console.log("Sayıların Ortalaması = ", islem("ortala"));
//2) Yukaridaki array 'de minimum sayiyi bulan kodu yaziniz.
console.log("Sayıların en küçüğü = ", islem("kucuk"));
//3) Yukaridaki array 'de maximum sayiyi bulan kodu yaziniz.
console.log("Sayıların en büyüğü = ", islem("buyuk"));
//4) Verilen array 'deki tek sayilari bulan kodu yaziniz.
console.log("Sayıların tek olanları = ", islem("tek"));

/*
Arkadaslar merhabalar
Bu hafta diziler konusunu gördük.Asagida konu ile alakali sorular var.

let sayilar = [21, 2, 13, 19, 4, 25];

1) Verilen sayilarin ortalamasi bulan kodu yaziniz.Yukaridaki array sadece bir örnektir, programinizi degerlendirirken farkli büyüklükteki arrayler kullanilacaktir.
2) Yukaridaki array 'de minimum sayiyi bulan kodu yaziniz.
3) Yukaridaki array 'de maximum sayiyi bulan kodu yaziniz.
4) Verilen array 'deki tek sayilari bulan kodu yaziniz.

Teslim:
ISIM_SOYISIM_Module_1002_app.js
Happy Coding
*/
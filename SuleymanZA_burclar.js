console.log("Süleyman ZA");

let month = 3; // mart ayi
let day = 12; //ayin 12. günp

// Üstteki bilgiyi sonradan gördüm. Aşağıdakini değiştirmek yerine verileri atadım..!!
//===========================================================
/* 
Veriler rakam olarak alınacaktır...! 
Bazı açıkları var. şimdilik idare eder :)
 */
let gun = day; // 1--31
let ay = month; // 1--12
let burc = "Hatadır olur gider..";
if ((ay == 1 && gun >= 22) || (ay == 2 && gun <= 19)) {
    console.log("Burç = Kova");
} else if ((ay == 2 && gun >= 20) || (ay == 3 && gun <= 20)) {
    console.log("Burç = Balık");
} else if ((ay == 3 && gun >= 21) || (ay == 4 && gun <= 20)) {
    console.log("Burç = Koç");
} else if ((ay == 4 && gun >= 21) || (ay == 5 && gun <= 21)) {
    console.log("Burç = Boğa");
} else if ((ay == 5 && gun >= 22) || (ay == 6 && gun <= 22)) {
    console.log("Burç = İkizler");
} else if ((ay == 6 && gun >= 23) || (ay == 7 && gun <= 22)) {
    console.log("Burç = Yengeç");
} else if ((ay == 7 && gun >= 23) || (ay == 8 && gun <= 22)) {
    console.log("Burç = Aslan");
} else if ((ay == 8 && gun >= 23) || (ay == 9 && gun <= 22)) {
    console.log("Burç = Başak");
} else if ((ay == 9 && gun >= 23) || (ay == 10 && gun <= 22)) {
    console.log("Burç = Terazi");
} else if ((ay == 10 && gun >= 23) || (ay == 11 && gun <= 21)) {
    console.log("Burç = Akrep");
} else if ((ay == 11 && gun >= 22) || (ay == 12 && gun <= 21)) {
    console.log("Burç = Yay");
} else if ((ay == 12 && gun >= 22) || (ay == 1 && gun <= 21)) {
    console.log("Burç = Oğlak");
} else {
    console.log(
        "Birşeyler yanlış gitti.. Bilgileri kontrol ediniz..\n",
        "Girdiğiniz Gün =",
        gun,
        "Girdiğiniz Ay =",
        ay
    );
}

/* 
        Burçların tarihleri
        Kova Burçların tarihleri :     22 Ocak – 19 Şubat
        Balık Burçlar tarihleri :        20 Şubat – 20 Mart
        Koç Burçlarının tarihleri :    21 Mart –  20 Nisan
        Boğa Burçlarının tarihleri :  21 Nisan – 21 Mayıs
        İkizler Burçlarının tarihleri :   22 Mayıs – 22 Haziran
        Yengeç Burçlarının tarihleri  : 23 Haziran – 22 Temmuz
        Aslan Burçlarının tarihleri  :    23 Temmuz – 22 Ağustos
        Başak Burçlarının tarihleri  :   23 Ağustos – 22 Eylül
        Terazi Burçlarının tarihleri  :  23 Eylül – 22 Ekim
        Akrep Burçlarının tarihleri  :  23 Ekim – 21 Kasım
        Yay Burçlarının tarihleri  :       22 Kasım – 21 Aralık
        Oğlak Burçlarının tarihleri  :  22 Aralık – 21 Ocak
        */
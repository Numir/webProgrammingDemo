console.log("Süleyman ZA", Date(Date.now()).toString());

//------------------------------------------------------------
let bolen1 = 5;
let bolen2 = 25;
let minLimit = 5; // Alt limit
let maxLimit = 74; //Üst limit
let toplam = 0;
//===========================================================
for (; minLimit <= maxLimit; minLimit++) {
    if (minLimit % bolen1 == 0 && minLimit % bolen2 == 0) {
        toplam = toplam + minLimit;
    }
}
console.log(
    "Girdiğiniz sayılar ve verilen limitler arası aynı anda bölünebilen sayılar..\n",
    "Toplamı =",
    toplam
);
/* 
Arkadaslar
Ödevimiz, asagidaki gibidir. Bu ödevde degisken, döngü, kosul ve diger ögrendigimiz kavramlari uygulayacagiz.
Alt ve üst limiti verilen bir sayi araliginda a ve b sayilarina ayni zamanda bölünebilen sayilarin toplamini bulan programi yaziniz.
Happy coding
 */
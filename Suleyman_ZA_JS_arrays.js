let kacarliOlsun = 11;

//-----------------------------------
let isimler = ["ali", "ayşe", "fatma", "jack", "nedim", "osman", "murat", "nazan", "mehmet", "nesrin", "ümit"];
let randomisim1 = [];
let randomisim2 = [];
let benzer = [];

while (kacarliOlsun > randomisim1.length) {
    randomisim1 = randomisim1.concat(isimler[Math.floor(Math.random() * isimler.length)]);
    randomisim2 = randomisim2.concat(isimler[Math.floor(Math.random() * isimler.length)]);
}
for (let i = 0; i < randomisim1.length; i++) {
    for (let a = 0; a < randomisim2.length; a++) {
        if (randomisim1[i] === (randomisim2[a]))
            benzer = benzer.concat(randomisim2[a]);
    }
}
benzer = [...new Set(benzer)]; // aynı değerleri sil..
console.log("İsim Çeşitleri : " + isimler + "\n\nİsim Çorbası1 : " + randomisim1 + "\n\nİsim Çorbası2 :" + randomisim2 + "\n\nAynı Olan İsimler :" + benzer);
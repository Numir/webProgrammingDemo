let tekSeferKesim = 9;

//-----------------------------------
let hayvan = ["inek", "koyun", "dana", "domuz", "tavuk"];
let mezbehane = [];
let kesilenBacak = 0;
while (tekSeferKesim > mezbehane.length) {
    mezbehane = mezbehane.concat(hayvan[Math.floor(Math.random() * hayvan.length)]);
}
for (let i = 0; i < mezbehane.length; i++) {
    if (mezbehane[i] == "tavuk")
        kesilenBacak = kesilenBacak + 2;
    else if (mezbehane[i] == "domuz"); //birşey yapma işimize yaramıyor.
    else kesilenBacak = kesilenBacak + 4;
}

console.log("Hayvan Çeşitleri : " + hayvan + "\n\nKesilen Hayvanlar : " + mezbehane + "\n\nHelal Bacak Sayısı :" + kesilenBacak);


/*
Merhabalar

Bu ikinci programlama ödevimizde bir ciftciye yardim edecegiz. Ciftcimiz anlasmali oldugu kelle pacaciya gercek zamanli istatistik vermek istiyor. Müslüman olan kelle-pacaci ise sordugu anda kac tane hayvan bacagi oldugu bilgisini almak istiyor.

Ciftlikteki hayvanlar bir array icerisinde karisik sekilde tutulacak ve bu ciftlikte sadece su hayvanlar var:
- inek
- tavuk
- domuz
- koyun

Array örnegi: [”inek“, ”inek“, ”tavuk“, ”domuz“, ”inek“]

Yapacaginiz program verilen array üzerinden kullanilabilir hayvan bacagi sayisini bulacak ve ekrana bastiracak.

Teslimat: Isim_Soyisim_JS_array_farmer.js

Kolay gelsin
*/
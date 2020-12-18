console.log('Süleyman ZA', Date(Date.now()).toString());

let stDeger =
     'concat, endsWith, startsWith, includes, indexOf, lastIndexOf, padEnd, padStart, slice, split, subString, subStr, trim, trimEnd, trimStart, repeat, replace';
let stDeger2 = 'Süleyman ders çalışıyor; Bazen. Misal Jetz';
let stDeger3 = '26 12 2020';

console.log('JS string  // concat : ' + stDeger.concat(' ++ BİRLEŞTİRİYOR ++ ', stDeger2 + ' ++ ', stDeger3));
console.log('JS string  // endsWith : ' + stDeger3.endsWith('01', 5).toString());
console.log('JS string  // startsWith : ' + stDeger3.startsWith('2', 6).toString());
console.log('JS string  // includes : ' + stDeger2.includes('Ders').toString()); //ders = true
console.log('JS string  // indexOf : ' + stDeger.indexOf('indexOf'));
console.log('JS string  // lastIndexOf : ' + stDeger.lastIndexOf('lastIndexOf'));
console.log('JS string  // padEnd : ' + stDeger3.padEnd(16, '*'));
console.log('JS string  // padStart : ' + stDeger3.padStart(16, '='));
console.log('JS string  // slice : ' + stDeger2.slice(5, 8).toUpperCase());
console.log('JS string  // split : ' + stDeger3.split(' ', 2)); // baştan boşluklara bak 2 karektere kadar al
console.log('JS string  // substring : ' + stDeger2.substring(14, 19));
console.log('JS string  // substr : ' + stDeger2.substr(14, 19));
console.log('JS string  // .trim : ' + '|' + '   Süleyman   ' + '|>>|' + '   Süleyman   '.trim() + '|');
console.log('JS string  // .trimStart() : ' + '|' + '   Süleyman   ' + '|>>|' + '   Süleyman   '.trimStart() + '|');
console.log('JS string  // .trimEnd() : ' + '|' + '   Süleyman   ' + '|>>|' + '   Süleyman   '.trimEnd() + '|');
console.log('JS string  // repeat : ' + stDeger3.repeat(3));
console.log('JS string  // replace : ' + stDeger2.replace('man', 'MEN'));

/*
Merhaba arkadaslar;

Bu hafta sizlerden string ve string methodlari ile ilgili bir arastirma dosyasi istiyoruz. Bu dosya PDF formatinda olup asagidaki methodlari anlatmali ve bu methodlara birer örnek vermeli.
--> concat, endsWith, startsWith, includes, indexOf, lastIndexOf, padEnd, padStart, slice, split, subString, subStr, trim, trimEnd, trimStart, repeat, replace

Teslimat: Isim_Soyisim_JS_string_research.pdf

Kolay gelsin
*/

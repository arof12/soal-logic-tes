let nama = "Muhamad Rifqi"; // string -> array
// console.log(nama.length); // panjang array/string

let namabaru = "";
for (let i = 0; i < nama.length; i++) {
    // console.log(nama[i]);
    // b === B ? ---> B->b
    if (nama[i] === nama[i].toUpperCase()) {
        namabaru += nama[i].toLowerCase();
    }
    // b === b ? --> b->B
    if (nama[i] === nama[i].toLowerCase()) {
        namabaru += nama[i].toUpperCase();
    }
}

console.log(namabaru);

let a = 8;
let b = 2;

let c = b + a;
console.log(c);

c += b;
console.log(c);

let namaAwal = "agus";
let namaAkhir = " supriyanto";
namaAwal += namaAkhir;
console.log(namaAwal);
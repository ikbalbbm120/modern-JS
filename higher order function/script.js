const angka = [-1,9,3,6,1,8,5,2,7,4];

//mencari angka >= 7
//mengunakan for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++) {
//     if( angka[i] >= 7) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

//mengunakan filter
// const newAngka = angka.filter(function (a) {
//     return a >= 7;
// });
// console.log(newAngka);
//mengunakan map
//kalikan semua angka dengan 3
// const newAngka = angka.map(a => a * 7);
// console.log(newAngka);

//menggunakan reduce
//jumlahkan seluruh element pada array
// const newAngka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue);
// console.log(newAngka);

//menggunakan method chaining 
//cari angka > 7
//kalikan 3
//jumlahkan 
const hasil = angka.filter(a => a > 7).map(a => a * 3).reduce((acc,cur) => acc * cur);
console.log(hasil);
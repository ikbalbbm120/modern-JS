//destructuring

// function kalkulasi(a, b) {
//     return [a + b, a-b, a * b, a/b];
// }

// const jumlah = penjumlahanperkalian(2,3)[0];
// const kali = penjumlahanperkalian(2,3)[1];

// const [jumlah, kali] = penjumlahanperkalian(2,3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi] = kalkulasi(2,3);
// console.log(bagi);

// function kalkulasi(a,b) {
//     return {
//         tambah: a + b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2,3);
// console.log(kurang);

//destructuring function arguments
const mhs1 = {
    nama: 'ikbal',
    umur: 20,
    email: 'ngewe@jmbd.com',
    nilai: {
        tugas: 90,
        uts: 85,
        uas: 80
    }
}

// function cetakMhs(nama, umur) {
//     return `halo, nama saya ${nama}, saya berumur ${umur} tahun`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));

function cetakMhs({nama, umur, nilai: { tugas, uts, uas} }) {
    return `halo, nama saya ${nama}, saya berumur ${umur} tahun dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));
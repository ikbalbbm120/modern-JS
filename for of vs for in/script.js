//mengunakan for of
//array
// const mhs = ['ikbal', 'adam', 'amel'];

// for( let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for( const m of mhs ) {
//     console.log(m);
// }

//string
// const nama = 'ikbal';
// for( const n of nama ) {
//     console.log(n);
// }

// const mhs = ['ikbal', 'adam', 'amel'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// const mhs = ['ikbal', 'adam', 'amel'];

// for(const [i, m] of mhs.entries() ) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

//nodelist
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.innerHTML));
// for( n of liNama ) {
//     console.log(n.innerHtml);
// }

//arguments
// function jumlahAngka() {
    // return arguments.reduce((a, i) => a+i); //tidak bisa pakai reduce arguments nya
    // arguments.forEach(a => jumlah += a);
//     let jumlah = 0;
//     for( a of arguments ) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1,2,3,4,5));

//mengunakan for in
const mhs = {
nama: 'ikbal',
umur: 20,
email: 'jmbdkuda@gmail.com'
}


for(m in mhs ) {
    console.log(mhs[m]);
}
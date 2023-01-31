//function expression
// const tampilnama = function (nama) {
//     return `halo,${nama}`;
// }
// console.log(tampilnama('ikbal'));

//menggunakan arrow function
// const tampilnama = (nama) => {
//     return `halo, ${nama}`;
// }
// console.log('ikbal');

// const tampilnama = (nama,waktu) => { 
//     return `selamat ${waktu},${nama}`;
// }
// console.log(tampilnama('ikbal','malam'));

//implisit return
// const tampilnama = nama => 
//     `halo,${nama}`; 
// console.log('ikbal');

// const tampilnama = () => 'hello world';
// console.log(tampilnama());

// let mahasiswa = ['ikbal','adam','erik'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

//mennggunakan arrow function
// let jumlahHuruf = mahasiswa.map( nama => nama.length);
// console.log(jumlahHuruf);

//objek
// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlhHuruf: nama.length }));
// console.table(jumlahHuruf);

//konsep this pada arrow function
//construktor function
// const mahasiswa = function() {
//     this.nama = 'ikbal';
//     this.umur = 20;
//     this.sayhello = function() {
//         console.log(`helo, nama saya ${this.nama}, dan saya ${this.umur}tahun. `)
//     }
// }

// const ikbal = new mahasiswa();

//arrow function
// const mahasiswa = function() {
//     this.nama = 'ikbal';
//     this.umur = 20;
//     this.sayhello = () => {
//         console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const ikbal = new mahasiswa();

//object literall
const mhs1 = {
    nama: 'ikbal',
    umur: 20,
    sayhello:  () => {
        console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    }
}
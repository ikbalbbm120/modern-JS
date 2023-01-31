//destruction variable / asigments

//destruction array
// const perkenalan = ['halo', 'nama', 'saya', 'ikbal'];

// const [salam, satu, dua, nama] = perkenalan;

//skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

//swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//return value pada function

// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

//rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(values);

//destructoring object
// const mhs = {
//     nama: 'ikbal',
//     umur: 20
// }

// const {nama, umur} = mhs;
// console.log(nama);

//assigments tanpa declarasi object
// ({nama, umur} = {
//     nama: 'ikbal',
//     umur: 20
// });
// console.log(nama);

//assign ke variable baru
// const mhs = {
//     nama: 'ikbal',
//     umur: 20
// }

// const {nama: n, umur: u} = mhs;
// console.log(n);

//memberikan default value
// const mhs = {
//     nama: 'ikbal',
//     umur: 20,
//     email: 'ikbalganss20@gmail.com'
// }

// const {nama, umur, email = 'email@default.com' } = mhs;
// console.log(email);

//memberi nilai default dan assign ke variable baru
// const mhs = {
//     nama: 'ikbal',
//     umur: 20,
//     email: 'ikbalganss20@gmail.com'
// }

// const {nama: n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(e);

//rest parameter
// const mhs = {
//     nama: 'ikbal',
//     umur: 20,
//     email: 'ikbalganss20@gmail.com'
// }

// const {nama, ...value } = mhs;
// console.log(value);

//mengambil field pada object,setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 352,
    nama: 'ikbal',
    umur: 20,
    email: 'ikbalganss20@gmail.com'
}

function getIdMhs({ id }) {
    return id;
}

console.log(getIdMhs(mhs));
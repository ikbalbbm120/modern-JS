//rest parameter
// function myFunc() {
    // return `a = ${a}, b = ${b}, myargs = ${myargs}`;
    // return myargs;
    // return Array.from(arguments);
//     return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5));

// function jumlahkan(...angka) {
    // let total = 0;
    // for(const a of angka) {
    //     total += a;
    // }
    // return total;
    //mengunakan redius
//     return angka.reduce((a,b)=> a + b);
// }

// console.log(jumlahkan(1,2,3,4,5));

//array destructuring
// const kelompok1 = ['ikbal','brisik','asu','sue'];
// const [ketua,wakil,...anggota] = kelompok1;
// console.log(anggota);

//object destructoring
// const team = {
//     pm: 'ikbal',
//     frontend1: 'sue',
//     frontend2: 'brisik',
//     backend: 'asu',
//     ux: 'benar',
//     devops: 'kepo'
// };

// const {pm, ...myteam} = team;
// console.log(myteam);

//filtering
function filterby(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterby('number',1,2, 'ikbal',false,10,true,'brisik'));
//2.1 execution context hoisting dan scope
// console.log(nama);
// var nama = 'ikbal';
//creation phase pada global context
//nama var = undefined
//nama function = fn()
//hoisting
//window = global object
//this = window

//execution phase


// var nama = 'ikbal';
// var umur = 20;

// console.log(sayhello());

// function sayhello() {
//     return `halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

//function membuat local execution context
//yang di dalam nya terdapat creation dan execution phase
//window
//arguments 
//hoisting
//arguments
//hoisting



    // var nama = 'ikbal';
    // var username = '@seh_bukan_main';

    // function cetakURL() {
    //     console.log(arguments);
    //     var instagramURL = 'http:instagram.com/';
    //     return instagramURL + username;
    // }

    // console.log(cetakURL('@adam','@dini'));










// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();



//closure
// function init() {
     // let nama = 'ikbal';
//     return function (nama) {
//         console.log(nama);
//     }
    
// }
// let panggilnama = init();
// panggilnama('ikbal');
// panggilnama('adam');

//closure
function ucapkansalam(waktu) {
    return function (nama) {
        console.log(`halo ${nama},selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatpagi = ucapkansalam('pagi');
let selamatsiang = ucapkansalam('siang');
let selamatmalem = ucapkansalam('malem');

selamatpagi('ikbal');
selamatmalem('adam');
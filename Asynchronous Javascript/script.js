//callback
//synchronous callback
// function halo(nama) {
//     alert(`halo, ${nama}`)
// }

// function tampilkanpesan(callback) {
//     const nama = prompt('masukan nama : ');
//     callback(nama);
// }

// tampilkanpesan(halo);

//asynchronous callback
// function getdatamahasiswa(url,success,error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if( xhr.readyState === 4) {
//             if(xhr.status === 200 ) {
//                 success(xhr.response);
//             } else if( xhr.status === 404 ) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }


// console.log('mulai');
// getdatamahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m,nama)); 
//     console.log('selesai');
// });

//jquery
// console.log('mulai');
// $.ajax({
//     url: 'data/mahasiswa.json',
//     success: () => {

//     },
//     error: (mhs) => {
//         mhs.forEach(m => console.log(m.nama));
//     },
//     error: (e) => {
//         console.log(e.responsetext);
//     }
// });
// console.log('selesai');

//promise
//object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
//janji (terpenuhi/ingkar)
//states (fullfilled / rejected / pending)
//callback (resolve/ reject / finally)
//aksi (then / catch)

//contoh promise 1
// let ikbal = false;
// const nama = new Promise((resolve,reject) => {
//     if( ikbal ) {
//         resolve('nama saya paling bagus');
//     } else {
//         reject('saya jelek');
//     }
// });

// nama
//     .then(Response => console.log('dah lah : '+ Response))
//     .catch(Response => console.log('asu : ' + Response));

//contoh promise 2
// let adam = true;
// const nama2 = new Promise((resolve, reject) => {
//     if(adam) {
//         setTimeout(() => {
//             resolve('ngentot boong njir');
//         }, 1000);
//     } else {
//         setTimeout(() => {
//             resolve('babi emang anak dajjal pembohong');
//         }, 2000);
//     }
// });

// console.log('mulai');
// console.log(nama2.then(() => console.log(nama2)));
// console.log('selesai');

//promise.all

const game = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'roblox',
            pembuat: 'ikbal'
        }])
    }, 2000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'jakarta',
            temp: 20,
            kondisi: 'dingin banget kaya dia'
        }]);
    }, 500);
});

// game
// .then(Response => console.log(Response));
// cuaca
// .then(Response => console.log(Response));

Promise.all([game,cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [game,cuaca] = response;
        console.log(game);
        console.log(cuaca);
    })
// $.ajax({
//     url: 'https://www.roblox.com/home',
//     success: game => console.log(games),

// });

// fetch('https://www.roblox.com')
// .then(Response => Response.json())
// .then(Response => console.log(Response));

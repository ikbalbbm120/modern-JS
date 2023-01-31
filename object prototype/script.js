//membuat object literal
//problem nya tidak efektif untuk objek yang banyak
// let mahasiswa1 = {
//     nama: 'ikbal',
//     energy: 20,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log('selamat makan $(this.nama), selamat makan!');
//     }
// }
// let mahasiswa2 = {
//     nama: 'ikbal',
//     energy: 20,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log('selamat makan $(this.nama), selamat makan!');
//     }
// }

//function declaration

    // const methodMahasiswa = {
    //         makan: function(porsi) {
    //         this.energi += porsi;
    //         console.log(`halo ${this.nama}, selamat makan!`);
    //     },

    //     main: function(jam) {
    //         this.energi -= jam;
    //         console.log(`halo ${this.nama}, selamat bermain!`);
    //     },

    //     tidur: function(jam) {
    //         this.energi += jam * 2;
    //         console.log(`halo $(this.nama), selamat tidur!`);
    //     }
    // };
    // function mahasiswa(nama, energi) {
    //     let mahasiswa = Object.create(methodMahasiswa);
    //     mahasiswa.nama = nama;
    //     mahasiswa.energi = energi;



    //     return mahasiswa;
    // }

    // let ikbal = mahasiswa('ikbal', 20);
    // let adam = mahasiswa('adam', 30);


    //belajar protorype
        // let mahasiswa = Object.create(methodMahasiswa);
        // let mahasiswa = {};
        // let this = object.create(mahasiswa.prototype);
                // return mahasiswa;
        // return this;

        // function mahasiswa(nama, energi) {
        // this.nama = nama;
        // this.energi = energi;
        // }

        // mahasiswa.prototype.makan = function(porsi) {
        //     this.energi += porsi;
        //     return `halo ${this.nama},selamat makan!`;
        // }

        // mahasiswa.prototype.main = function(jam) {
        //     this.energi -= jam;
        //     return `hala ${this.nama}, selamat bermain`;
        // }

        // mahasiswa.prototype.tidur = function(jam) {
        //     this.energi += jam * 2;
        //     return `halo ${this.nama}, halo selamat tidur!`;
        // }



        // let ikbal = new mahasiswa('ikbal', 20);

// versi class
// class mahasiswa {
//     constructor(nama,energi) {
//         this.nama = nama;
//         this.energi = energi;

//     }


//                 makan(porsi) {
//             this.energi += porsi;
//             return `halo ${this.nama},selamat makan!`;
//         }

//         main(jam) {
//             this.energi -= jam;
//             return `hala ${this.nama}, selamat bermain`;
//         }

//         tidur(jam) {
//              this.energi += jam * 2;
//             return `halo ${this.nama}, halo selamat tidur!`;
//         }
//     }

// let ikbal = new mahasiswa('ikbal', 20);









//construcktor function
//keyword new
// function mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain!`);
//     }
// }

// let ikbal = new mahasiswa('ikbal', 20);

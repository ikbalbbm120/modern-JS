// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 1000);
// });
// coba.then(() => console.log(coba));

function cobaPromise() { 
    return new Promise(resolve => {
        const waktu = 2000;
        if( waktu < 3000) {
            setTimeout(() => {
                resolve('selesai')
            }, waktu);
        } else {
            reject('kelamaan');
        }
    });
}

// const coba = cobaPromise();
// coba
// .then(coba => console.log(coba))
// .catch(coba => console.log(coba));

    async function cobaAsync() {
        try {
            const coba = await cobaPromise();
            console.log(coba);
        } catch(err) {
            console.log(err);
        }
    }

    cobaAsync();
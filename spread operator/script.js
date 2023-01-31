//spread operator
//memecah iterables single element

// console.log(...mhs[0]);

//menggabungkan 2 array

// const mhs = ['ikbal','jmbd','memek'];
// const dosen = ['ngopi','brisik','ngewe'];
//     const orang = [...mhs, ...dosen];

// console.log(orang);

//mengcopy array
    // const mhs = ['ikbal','jmbd','memek'];
    // const mhs1 = [...mhs];
    // mhs1[0] = 'spong';
    // console.log(mhs);


    //const liMhs = document.querySelectorAll('li');
    // console.log(liMhs[0].textContent);
    // const mhs = [];
    // for(let i = 0; i < liMhs.length; i++) {
    //     mhs.push(liMhs[i].textContent);
    // }
    // console.log(mhs);
    // const mhs = [...liMhs].map(m => m.textcontent);
    // console.log(mhs);

    const nama = document.querySelector('.nama');
    const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
    nama.innerHTML = huruf;
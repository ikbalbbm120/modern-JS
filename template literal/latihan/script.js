//html fragments
// const mhs = {
//     nama: 'ikbal',
//     umur: 20,
//     nrp: '81273891',
//     email: 'ikbalganss20@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;


//looping

// const mhs = [
//     {
//         nama: 'ikbal',
//         email: 'ikbalganss20@gmail.com'
//     },
//     {
//         nama: 'adam',
//         email: 'adamkontol@gmail.com'
//     },
//     {
//         nama: 'amel',
//         email: 'amelngeweamagw@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;

//conditionals
//ternary
// const lagu = {
//     judul: 'ngewe bersama',
//     penyayi: 'ikbalsangean',
//     feat: 'ngewe bersama'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyayi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;

//nested
//html fragmenst bersarang
// const mhs = {
//     nama: 'ikbal',
//     semester: 2,
//     matakuliah: ['belajar', 'ngopi', 'brisik']
// };

// function cetakmatakuliah(matakuliah) {
//     return `
//         <ol>
//             ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
//         </ol>
//     `;
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester">semester : ${mhs.semester}</span>
//     <h4>mata kuliah :</h4>
//     ${cetakmatakuliah(mhs.matakuliah)}
// </div>`;


// document.body.innerHTML = el;

//tagged templates
// const nama = 'ikbal';
// const umur = 20;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.foreach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     //menggunakan redius

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);

//higlight
const nama = 'ikbal';
const umur = 20;

function higlight(strings, ...values) {

    //menggunakan redius

    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = higlight`halo, nama saya ${nama}, saya ${umur} tahun`;

document.body.innerHTML = str;

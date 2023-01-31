//IKBAL ANJENG IKBAL PANTEK IKBAL IKBAL. BELAJAR YANG BENAR BANG
// smangat ikbal. road to fullstack developer
// $('.search-button').on('click', function() {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=4f1cf1a6&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movie = results.Search;
//             let cards = '';
//             movie.forEach(m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);
    
//             // ketika tombol detail di klik
//             $('.modal-detail-button').on('click', function() {
//                 console.log($(this).data('imdbid'))
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=4f1cf1a6&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);
//                     $('.modal-body').html(movieDetail);
//                     },  
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//                 });
//             });
    
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });

// });




// fetch 


// const searchButton = document.querySelector(`.search-button`);
// const Clicker = document.getElementById('clicker')
// Clicker.addEventListener('click', function(e) {
//     e.preventDefault()
//     const inputKeyword = document.querySelector('.input-keyword');
//     // + inputKeyword.value
//     fetch('http://www.omdbapi.com/?apikey=4f1cf1a6&s=' + inputKeyword.value )
//     .then(response => response.json())
//     .then(response => {
//         const movies = response.Search;
//         let cards = '';
//         movies.forEach(m => cards += showCards(m));
//         const movieContainer = document.querySelector('.movie-container');
//         movieContainer.innerHTML = cards;

//         // ketika tombol detail di klik
//         const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//         modalDetailButton.forEach(btn => {
//             btn.addEventListener('click', function() {
//                 const imdbid = this.dataset.imdbid;
//                 fetch('http://www.omdbapi.com/?apikey=4f1cf1a6&i=' + imdbid)
//                 .then(response => response.json() )
//                 .then(m => {
//                     const movieDetail = showMovieDetail(m);
//                     const modalBody = document.querySelector('.modal-body');
//                     modalBody.innerHTML = movieDetail;
//                 });
//             });
//         });
//     });
// });


const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function() {
    const inputKeyword = document.querySelector('.input-keyword');
    try { 
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
    } catch(err) {
        alert(err);
    }
});

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=4f1cf1a6&s=' + keyword )
    .then(response => {
        if( !response.ok ) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(response => {
        if( response.Response === "false" ) {
            throw new Error(response.Error);
        }
        return response.Search;
    });
};

function updateUI(movies) {
    let cards = '';
        movies.forEach(m => cards += showCards(m));
        const movieContainer = document.querySelector('.movie-container');
        movieContainer.innerHTML = cards;
};



//event binding
document.addEventListener('click', async function(e) {
    if( e.target.claslist.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    };
});


function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=4f1cf1a6&i=' + imdbid)
                .then(response => response.json() )
                .then(m => m);
};

function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
};



function showCards(m) {
    return `<div class="col-md-3 my-2">
            <div class="card">
            <img src="${m.Poster}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
            data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
            </div>
            </div>
            </div>`;
}

function showMovieDetail(m) {
    console.log(m);
    return `<div class="container-fluid">
    <div class="row">
        <div class="col-md-2">
            <img src="${m.Poster}" class="img-fluid">
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
                <li class="list-group-item"><strong>director : </strong> ${m.Director}</li>
                <li class="list-group-item"><strong>actor : </strong> ${m.Actors}</li>
                <li class="list-group-item"><strong>writer : </strong> ${m.Writer}</li>
                <li class="list-group-item"><strong>plot : </strong> <br> ${m.Plot}</li>
            </ul>
        </div>
    </div>
</div>`;
}

fetch('https://moviestack.onrender.com/api/movies', {
    method: 'GET',
    headers: {
        'x-api-key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
})

    .then(response => {
        if (!response.ok) {
            throw new Error(`Error : ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const movies= data.movies;
        imprimirMovies(movies, main);
        setupSearchAndFilter(movies);
    })
    .catch(error => {
        console.error('Error:', error);
    });


const main = document.getElementById("movies-section");

function moviesCards(movies) {
    const urljpg = `https://moviestack.onrender.com/static/${movies.image}`;
    const favoriteIcon = movies.isFavorite ? ' <div><i class="fa-solid fa-heart h-"></i></div>' : '<div><i class="fa-regular fa-heart"></i></div>';

    return `
    <div>
    <div class="favorite-button" data-movie-id="${movies.id}" onclick="toggleFavorite('${movies.id}')">${favoriteIcon}</div>

           <a href="./movieDetail.html?id=${movies.id}" class="linkMovie">
            <div class="bg-gray-200 p-4 rounded-lg shadow-md w-64">
                <img src=${urljpg} class="w-full h-48 object-cover mb-4" alt="Movie Poster">
                <h5 class="text-xl font-semibold mb-2">${movies.title}</h5>
                <p class="text-gray-600 text-sm mb-2">${movies.genres}</p>
                <p class="text-gray-600">${movies.overview}</p>

            </div>
        </a>
    </div>
    `;
}

function imprimirMovies(listaMovies, elemento) {
    let template = "";
    for (const movie of listaMovies) {
        template += moviesCards(movie);
    }
    elemento.innerHTML = template;
}

// Configurar la búsqueda y el filtro de género después de obtener la lista de películas APLICA INVERSA 
let estadoActual = {
    filtroNombre: '',
    filtroGenero: 'genre',
};

function setupSearchAndFilter(movies) {
    const $input = document.getElementById('inputBusqueda');
    const $contenedorGenres = document.getElementById('genreSelect');

    $input.addEventListener('input', () => {
        estadoActual.filtroNombre = $input.value;
        aplicarFiltros(movies);
    });

    $contenedorGenres.addEventListener('input', () => {
        estadoActual.filtroGenero = $contenedorGenres.value;
        aplicarFiltros(movies);
    });
}

function aplicarFiltros(movies) {
    const filtroNombre = estadoActual.filtroNombre.toLowerCase();
    const filtroGenero = estadoActual.filtroGenero.toLowerCase();

    const resultadoFiltroNombre = movies.filter(movie => movie.title.toLowerCase().startsWith(filtroNombre));
    const resultadoFinal = (filtroGenero === 'genre' || filtroGenero === '')
        ? resultadoFiltroNombre
        : resultadoFiltroNombre.filter(movie => movie.genres.some(genre => genre.toLowerCase() === filtroGenero));

    imprimirMovies(resultadoFinal, main);
}


//////////////////////////FAVSS
const containerFavourite = document.getElementById("containerFavourite");
const favoriteButtons = document.querySelectorAll('.favorite-button');

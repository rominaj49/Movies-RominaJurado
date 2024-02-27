console.log(movies)

const main= document.getElementById("movies-section")
function moviesCards(movies){
    return`
    <div>
    <a href="./movieDetail.html?id=${movies.id}" class="linkMovie">
        <div class="bg-gray-200 p-4 rounded-lg shadow-md w-64 ">
            <img src=${movies.image} class="w-full h-48 object-cover mb-4" alt="The Nun II">
            <h5 class="text-xl font-semibold mb-2">${movies.title}</h5>
            <p class="text-gray-600 text-sm mb-2">${movies.genres}</p>
            <p class="text-gray-600">${movies.overview}</p>
        </div>
    </a>
    </div>
    `;
}

function imprimirMovies(listaMovies, elemento){
    let template= ""
    for( const movie of listaMovies){
       template+= moviesCards(movie)
    }
    elemento.innerHTML = template
}
imprimirMovies(movies,main)


    /////////////////////BUSQUEDA INPUT*///////////////////////////

    const $input = document.getElementById('inputBusqueda')

    $input.addEventListener('input', () => {
        console.log('input Busqueda', $input.value)
        const filtroMovies = filtrarNombrePelicula(movies, $input.value)
     //mostrar movies a la vista!!!!
        //ya hicimos una funcion para imprimir las cards.
        imprimirMovies(filtroMovies, main) // imprimirMovies(lista de movies, donde va a imprimir)
        console.log(filtroMovies, main)
    })

    function filtrarNombrePelicula(listaMovies, nombre){
    return listaMovies.filter(movies => movies.title.toLowerCase().startsWith(nombre.toLowerCase()))
    }
   // console.log(filtrarNombrePelicula(movies, "The"))
  
    
////////////////////////////////////////////////////GENEROS DEL SELECT
const $contenedorGenres = document.getElementById('genreSelect')
const genres = movies.map(movies => movies.genres).flat()
const setValue = new Set(genres)
//console.log(genres)


$contenedorGenres.addEventListener('input', () => {
 //console.log('Select genre:', $contenedorGenres.value)
 const value = $contenedorGenres.value
  if (value === "genre") {
    imprimirMovies(movies, main);
  }else {
    const filtroSelectMovies = filtrarGeneroPeliculaSelect(movies, value);
    imprimirMovies(filtroSelectMovies, main);
  }
 
})

function filtrarGeneroPeliculaSelect(listaMovies, value){
    const lowercasedValue = value.toLowerCase();
    return movies.filter(movies => movies.genres.some(value => value.toLowerCase() === lowercasedValue));
}

//////////////////////////////////DETAIL MOVIES


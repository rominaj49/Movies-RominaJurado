console.log(movies)
const main= document.getElementById("movies-section")

function moviesCards(movies){
    return`
    <div>
        <div class="bg-gray-200 p-4 rounded-lg shadow-md w-64 ">
            <img src=${movies.image} class="w-full h-48 object-cover mb-4" alt="The Nun II">
            <h5 class="text-xl font-semibold mb-2">${movies.title}</h5>
            <p class="text-gray-600 text-sm mb-2">${movies.genres}</p>
            <p class="text-gray-600">${movies.overview}</p>
        </div>
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


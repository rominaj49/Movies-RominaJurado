const containerDetail = document.getElementById("containerDetail");

function fetchMovieDetails(movieId) {
    const apiUrl = `https://moviestack.onrender.com/api/movies/${movieId}`;

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'x-api-key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(movie => {
        const detailsHTML = movieDetail(movie);
        containerDetail.innerHTML = detailsHTML;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
function movieDetail(movies) {
    const urljpg = `https://moviestack.onrender.com/static/${movies.image}.jpg`;

    return `
    <div class="flex">
    <div class="flex-1 p-4 border-r border-gray-300 items-center justify-center"  >
        <img src="${urljpg}" alt="Imagen" class=" max-w-full h-auto ml-10 mb-5 ">
        <table class="w-full border border-collapse">
            <tr>
                <td class="p-4 border">Original Language</td>
                <td class="p-4 border">${movies.original_language}</td>
            </tr>
            <tr>
                <td class="p-4 border">Release Date</td>
                <td class="p-4 border">${movies.release_date}</td>
            </tr>
            <tr>
                <td class="p-4 border">Runtime</td>
                <td class="p-4 border">${movies.runtime}</td>
            </tr>
            <tr>
                <td class="p-4 border">Status</td>
                <td class="p-4 border">${movies.status}</td>
            </tr>
        </table>
    </div>
    
    <div class="flex-1 p-10">
      <div class=" flex flex-col mb-20">

      <h1 class="font-bold mb-1 text-3xl	 ">${movies.title}</h1>
        <h2 class=" mb-3 font-bold opacity-75">${movies.tagline}</h2>
        <h3 class=" font-bold opacity-75 mb-3">${movies.genres}</h3>
        <p class=" mb-3 font-serif" >${movies.overview}</p>
      </div>

      <div> 
      <table class="w-full border border-collapse">
            <tr>
                <td class="p-4 border">Vote Average</td>
                <td class="p-4 border">${movies.vote_average}</td>
            </tr>
            <tr>
                <td class="p-4 border">Budget</td>
                <td class="p-4 border">${movies.budget}</td>
            </tr>
            <tr>
                <td class="p-4 border">Revenue</td>
                <td class="p-4 border">${movies.revenue}</td>
            </tr>
        </table>
      </div>
        
    </div>
</div>
    `; 
}

// Obtener el ID de la película de los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

// Verificar si el ID de la película está presente y llamar a fetchMovieDetails
if (movieId) {
    fetchMovieDetails(movieId);
} else {
    console.error('ID de película no encontrado en los parámetros de la URL.');
}


const containerDetail = document.getElementById("containerDetail");

function movieDetail(movies) {
    return `
    <div class="flex">
    <div class="flex-1 p-4 border-r border-gray-300 items-center justify-center"  >
        <img src="${movies.image}" alt="Imagen" class=" max-w-full h-auto ml-10 mb-5 ">
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

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
const selectedMovie = movies.find(movie => movie.id === movieId);
const detailsHTML = movieDetail(selectedMovie);
containerDetail.innerHTML = detailsHTML;

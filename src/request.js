export async function retrieveMovieData(movieCategory) {
  try {
    const apiKey = "3eef915629e5dbe6ce18adf52703a7f4";
    const movieListContainer = document.getElementById("movie-list");
    let apiUrl = "";

    switch (movieCategory) {
      case "Filmes em Destaque":
        apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
        break;
      case "Ação":
        apiUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=${apiKey}`;
        break;
      case "Comédia":
        apiUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${apiKey}`;
        break;
      case "Animação":
        apiUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=${apiKey}`;
        break;
      default:
        console.log("Categoria não reconhecida.");
        return;
    }

    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();

      if (data.results) {
        const movies = data.results;
        movieListContainer.innerHTML = "";

        movies.forEach((movie) => {
          const movieTitle = movie.title;
          const moviePosterPath = movie.poster_path;
          const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : "";

          const movieCard = document.createElement("div");
          movieCard.classList.add("movie-item");
          movieCard.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${moviePosterPath}" alt="${movieTitle}">
            <h2>${movieTitle}</h2>
            <p>Lançamento: ${releaseYear}</p>
          `;

          movieListContainer.appendChild(movieCard);
        });
      } else {
        console.log("Nenhum filme encontrado.");
      }
    } else {
      console.log(response.status);
    }
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
  }
}
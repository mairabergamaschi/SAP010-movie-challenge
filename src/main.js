import { retrieveMovieData } from './request.js';

function handleRouteChange() {
  const route = window.location.hash;

  if (!route || route === "#movies") {
    retrieveMovieData("Filmes em Destaque");
  } else {
    switch (route) {
      case "#acao":
        retrieveMovieData("Ação");
        break;
      case "#comedia":
        retrieveMovieData("Comédia");
        break;
      case "#animacao":
        retrieveMovieData("Animação");
        break;
      default:
        // Trate outras rotas, se necessário
        break;
    }
  }
}

window.addEventListener("hashchange", handleRouteChange);
document.addEventListener("DOMContentLoaded", handleRouteChange);
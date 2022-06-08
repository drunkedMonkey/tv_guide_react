import { createContext, useState } from "react";

const ShowContext = () => {
  const showMovies = (nameMovie) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${nameMovie}`)
      .then((response) => {
        return response.json();
      })
      .then((moviesInfo) => {
        const movieList = moviesInfo.map((movieInfo) => {
          return {
            title: movieInfo?.show?.name,
            image: movieInfo.show?.image?.medium,
            genres: movieInfo.show?.genres,
            id: movieInfo.show?.id,
            languaje: movieInfo.show?.languaje,
            summary: movieInfo.show?.summary,
          };
        });
        return movieList;
      });
  };

  const findMovie = (movieId) => {
    fetch(` https://api.tvmaze.com/lookup/shows?thetvdb=${movieId}`)
      .then((response) => {
        return response.json();
      })
      .then((movieInfo) => {
        return movieInfo;
      });
  };

  createContext({ showMovies, findMovie });
};
export default ShowContext;

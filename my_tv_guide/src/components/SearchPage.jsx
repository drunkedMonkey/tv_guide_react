import React, { useEffect, useState } from "react";
import { Movies } from "./Movies";
import { Search } from "./Search";

import "../styles/SearchPage.css";

export const SearchPage = () => {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${movie}`)
      .then((response) => {
        return response.json();
      })
      .then((movieInfo) => {
        const movieData = movieInfo.map((info) => {
          return {
            title: info.show.name,
            image: info?.show?.image?.medium,
            genres: info.show.genres,
            id: info.show.id,
            languaje: info.show.languaje,
            summary: info.show.summary,
          };
        });
        setMovies(movieData);
      });
  }, [movie]);

  return (
    <div className="search-page">
      <Search setMovie={setMovie} />
      <Movies movies={movies} />
    </div>
  );
};

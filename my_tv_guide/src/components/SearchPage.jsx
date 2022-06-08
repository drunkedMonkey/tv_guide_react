import React, { useEffect, useState } from "react";
import { Movies } from "./Movies";
import { Search } from "./Search";

import "../styles/SearchPage.css";
import useMovies from "../hooks/useMovies";
import ShowContext from "../context/ShowContext";

export const SearchPage = () => {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const { showMovies, findMovie } = useMovies();

  useEffect(() => {
    setMovies(showMovies(movie));
  }, [movie]);

  return (
    <div className="search-page">
      <Search setMovie={setMovie} />
      <ShowContext.Provider value={{showMovies,findMovie}}>
        <Movies movies={movies} />
      </ShowContext.Provider>
      
    </div>
  );
};

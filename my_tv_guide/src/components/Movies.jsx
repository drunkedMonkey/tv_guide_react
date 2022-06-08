import React from "react";
import { MovieCard } from "./MovieCard";

import '../styles/Movies.css'

export const Movies = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

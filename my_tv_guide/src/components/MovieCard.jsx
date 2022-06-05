import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LabelItem } from "./LabelItem";
import logo from '../assets/logo.png'

import "../styles/MovieCard.css";

export const MovieCard = ({ movie }) => {
  const data = movie;
  return (
    <div className="movie-card">
      <img src={movie.image === undefined ? logo :  movie.image} alt="" />
      <div className="title">{data.title}</div>
      <div className="genres">
        {movie.genres.map((genre) => (
          <LabelItem key={genre} text={genre} />
        ))}
      </div>
      <Link className="link-details" to="details">Go to details</Link>

      <Outlet />
    </div>
  );
};

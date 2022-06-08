import { Routes, Route, NavLink } from "react-router-dom";
import { About } from "./About";

import React from "react";
import { SearchPage } from "./SearchPage";
import { Movies } from "./Movies";
import { MovieDetails } from "./MovieDetails";
import { NotFound } from "./NotFound";

import logo from "../assets/logo.png";
import ShowContext from "../context/ShowContext";

const AppRouter = () => {
  const edad = 23;
  return (
    <>
      <header>
        <img src={logo} alt="" />
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "is-active" : undefined;
                }}
                to="/"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "is-active" : undefined;
                }}
                to="/search-page"
              >
                Search page
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/movies/:id" element={<Movies />}>
          <Route path="details" element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default AppRouter;

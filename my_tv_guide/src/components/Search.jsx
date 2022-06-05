import React from "react";

export const Search = ({ setMovie }) => {
  const setSearchInfo = (event) => {
    setMovie(event.target.value);
  };
  return (

    <>
      <input
        type="text"
        placeholder="Search Movie"
        onChange={(event) => setSearchInfo(event)}
      />
    </>
  );
};

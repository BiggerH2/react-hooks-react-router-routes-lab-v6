// src/pages/Directors.js

import React from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const directors = [
    // Example director data. Update with your own data.
    {
      name: "Director 1",
      movies: ["Movie 1", "Movie 2"],
    },
    {
      name: "Director 2",
      movies: ["Movie 3", "Movie 4"],
    },
  ];

  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Directors;

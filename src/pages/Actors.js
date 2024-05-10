// src/pages/Actors.js

import React from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const actors = [
    // Example actor data. Update with your own data.
    {
      name: "Actor 1",
      movies: ["Movie 1", "Movie 2"],
    },
    {
      name: "Actor 2",
      movies: ["Movie 3", "Movie 4"],
    },
  ];

  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <article key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Actors;

import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster  == "N/A" ? movie.Title :movie.Poster
          }
          alt={movie.Title}
        />
      </div>
      <div>
      <span>{movie.Type}</span>  <span>{movie.imdbID}</span> 
        <h3>{movie.Title}</h3>
        

      </div>
    </div>
  );
};

export default MovieCard;

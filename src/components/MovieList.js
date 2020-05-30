import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

function MovieList() {
  const [movieData, setMovieData] = useState([]);
  const [updatedMovieList, setUpdatedMovieList] = useState([]);
  const [tvShowsData, setTVShowData] = useState([]);
  const [updatedTVShowsList, setUpdatedTVShowsList] = useState([]);

  useEffect(() => {
    fetchMovies();
    fetchTVShows();
  }, []);

  useEffect(() => {
    setUpdatedTVShowsList(
      tvShowsData.map(tvShow => (
        <ListItem type="tvShow" tvShow={tvShow} key={tvShow.id} />
      ))
    );
  }, [tvShowsData]);

  useEffect(() => {
    setUpdatedMovieList(
      movieData.map(movie => (
        <ListItem type="movie" movie={movie} key={movie.id} />
      ))
    );
  }, [movieData]);

  function fetchMovies() {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=c4ef9ff6d467776ab1a3bc60173f0606&language=en-US"
    )
      .then(response => response.json())
      .then(response => {
        const movieArray = response.results;
        setMovieData(movieArray);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function fetchTVShows() {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=c4ef9ff6d467776ab1a3bc60173f0606&language=en-US&page=1"
    )
      .then(response => response.json())
      .then(response => {
        const showsArray = response.results;
        setTVShowData(showsArray);
      });
  }

  return (
    <div>
      <div className="container-fluid">
        <div
          style={{ marginTop: "10px", marginLeft: "5px" }}
          className="row justify-content-start"
        >
          <h4>Top Rated Movies</h4>
        </div>
        <div
          className="row flex-row flex-nowrap"
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap"
          }}
        >
          {updatedMovieList}
        </div>
        <div
          style={{ marginTop: "10px", marginLeft: "5px" }}
          className="row justify-content-start"
        >
          <h4>Top TV Shows</h4>
        </div>
        <div
          className="row flex-row flex-nowrap"
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          {updatedTVShowsList}
        </div>
      </div>
    </div>
  );
}

export default MovieList;

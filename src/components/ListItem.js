import React from "react";

function ListItem(props) {
  if (props.type === "movie")
    return (
      <div className="col-2" style={{ whiteSpace: "normal" }}>
        <img
          src={"https://image.tmdb.org/t/p/original" + props.movie.poster_path}
          alt="poster"
          width="230px"
        />
        <h5 style={{ textAlign: "left", marginTop: "10px" }}>
          {props.movie.title +
            " (" +
            props.movie.release_date.split("-")[0] +
            ")"}
        </h5>
        <p style={{ marginTop: "10px", textAlign: "left" }}>
          IMdB Rating : {props.movie.vote_average}/10
        </p>
      </div>
    );
  else {
    return (
      <div className="col-2" style={{ whiteSpace: "normal" }}>
        <img
          src={"https://image.tmdb.org/t/p/original" + props.tvShow.poster_path}
          alt="poster"
          width="230px"
        />
        <h5 style={{ textAlign: "left", marginTop: "10px" }}>
          {props.tvShow.name}
        </h5>
        <p style={{ marginTop: "10px", textAlign: "left" }}>
          IMdB Rating : {props.tvShow.vote_average}/10
        </p>
      </div>
    );
  }
}

export default ListItem;

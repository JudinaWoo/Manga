import { CircularProgress, Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
//import { v4 as uuid } from "uuid";

import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";

import MovieCard from "../../ds/MovieCard";
import { fetchMovies } from "../../dataProvider";

export default function MoviesList() {
  const { data: movies, error, isLoading } = useQuery("movies", fetchMovies);
  if (isLoading) return <CircularProgress />;

  console.log({ error });
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Grid container spacing={3}>
      {movies.map(({ Title, imdbID, Poster }) => (
        <Grid item key={imdbID}>
          <MovieCard title={Title} id={imdbID} image={Poster} />
        </Grid>
      ))}
    </Grid>
  );
}

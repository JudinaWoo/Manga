import { Alert } from "@material-ui/lab";
import { v4 as uuid } from "uuid";
import { Grid, Typography } from "@material-ui/core";
import React from "react";
// import { useSelector, useDispatch } from "react-redux";

import BaseLayout from "../../ds/BaseLayout";
import MovieCard from "../../ds/MovieCard";

// import { fillMovies } from "../../features/movies/moviesSlice";
import { useMovies } from "../../hooks";

export default function HomePage() {
  // const [movies] = React.useState(defaultMovies);
  const { movies, hasMovies } = useMovies();

  return (
    <BaseLayout>
      <Grid container spacing={3}>
        {hasMovies ? (
          movies.map((movie) => (
            <Grid item key={movie.id}>
              <MovieCard {...movie} />
            </Grid>
          ))
        ) : (
          <Alert severity="info">This is an info alert — check it out!</Alert>
        )}
      </Grid>
    </BaseLayout>
  );
}

import { Alert } from "@material-ui/lab";
import { v4 as uuid } from "uuid";
import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import BaseLayout from "../../ds/BaseLayout";
import MovieCard from "../../ds/MovieCard";

import { emptyMovies, fillMovies } from "../../features/movies/moviesSlice";

const defaultMovies = new Array(5).fill(null).map(() => ({
  id: uuid(),
  title: "Naruto",
  image: `http://api.lorem.space/image/movie?w=320&h=160&uuid=${uuid()}`,
}));

export default function HomePage() {
  // const [movies] = React.useState(defaultMovies);
  const movies = useSelector((state) => state.movies);
  const hasMovies = movies.length > 0;
  const dispatch = useDispatch();

  const fill = () => dispatch(fillMovies(defaultMovies));
  const empty = () => dispatch(emptyMovies());

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
        <button onClick={fill}>FILL</button>
        <button onClick={empty}>EMPTY</button>
      </Grid>
    </BaseLayout>
  );
}

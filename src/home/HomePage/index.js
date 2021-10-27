import { v4 as uuid } from "uuid";
import { Grid } from "@material-ui/core";
import React from "react";

import BaseLayout from "../../ds/BaseLayout";
import MovieCard from "../../ds/MovieCard";

const defaultMovies = new Array(5).fill(null).map(() => ({
  id: uuid(),
  title: "Naruto",
  image: `http://api.lorem.space/image/movie?w=320&h=160&uuid=${uuid()}`,
}));

export default function HomePage() {
  const [movies] = React.useState(defaultMovies);

  return (
    <BaseLayout>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item key={movie.id}>
            <MovieCard {...movie} />
          </Grid>
        ))}
      </Grid>
    </BaseLayout>
  );
}

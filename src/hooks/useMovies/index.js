import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { fillMovies } from "../../features/movies/moviesSlice";

const fetchMovies = async () =>
  new Array(20).fill(null).map(() => ({
    id: uuid(),
    title: "Titanic",
    image: "https://api.lorem.space/image/movie?w=350&h=210",
  }));

export default function useMovies() {
  const movies = useSelector((state) => state.movies);
  const hasMovies = movies.length > 0;
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchMovies();
      dispatch(fillMovies(movies));
    };
    fetchData();
  }, [dispatch]);

  //   const fill = () => dispatch(fillMovies(await fetchMovies()));
  //   const empty = () => dispatch(emptyMovies());

  return { movies, hasMovies };
}

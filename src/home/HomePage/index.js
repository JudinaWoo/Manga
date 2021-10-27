import { v4 as uuid } from "uuid";
import BaseLayout from "../../ds/BaseLayout";
import { MovieCard } from "../../ds/MovieCard";

export default function HomePage() {
  const movies = new Array(5).fill(null).map(() => ({
    id: uuid,
    title: "Titanic",
    image: "https://api.lorem.space/image/movie?w=350&h=210",
  }));

  return (
    <BaseLayout>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </BaseLayout>
  );
}

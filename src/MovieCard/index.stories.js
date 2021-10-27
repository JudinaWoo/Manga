import MovieCard from ".";

export default {
  component: MovieCard,
  title: "Design System/Molecule/MovieCard",
};

export const Default = () => <MovieCard title="Titanic" />;

export const WithImage = () => {
  <MovieCard
    title="Titanic"
    id={12}
    image="https://api.lorem.space/image/movie?w=350&h=210"
  />;
};

export const WithRoute = () => <MovieCard title="Titanic" id={12} />;

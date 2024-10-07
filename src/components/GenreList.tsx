import { useGenres } from "../hooks/useGenres";

export const GenreList = () => {
  const { data } = useGenres();
  return <div>GenreList</div>;
};

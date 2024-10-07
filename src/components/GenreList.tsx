import { useGeres } from "../hooks/useGenres";

export const GenreList = () => {
  const { genres } = useGeres();
  return <div>GenreList</div>;
};

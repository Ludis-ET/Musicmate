import { useGames } from "../hooks/useGames";

export const GameGrid = () => {
  const { games, erros } = useGames();
  return <div>GameGrid</div>;
};

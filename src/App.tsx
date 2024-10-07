import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import { SortSelector } from "./components/SortSelector";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedSort, setSelectedSort] = useState<string>("");
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={8}>
            <GenreList
              onSelectGenre={setSelectedGenre}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={setSelectedPlatform}
            />
            <SortSelector onSelectsortOrder={setSelectedSort} />
          </HStack>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
            selectedSort={selectedSort}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;

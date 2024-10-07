import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { Genre, useGenres } from "../hooks/useGenres";
import { getCroppedImage } from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

export const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  return (
    <List>
      {isLoading
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((tmp) => (
            <ListItem paddingY="5px" key={tmp}>
              <HStack>
                <SkeletonCircle size="10" />
                <Skeleton height="20px" width="200px" />
              </HStack>
            </ListItem>
          ))
        : data.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImage(genre.image_background)}
                />
                <Button
                  fontSize="lg"
                  variant="link"
                  onClick={() => onSelectGenre(genre)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
    </List>
  );
};

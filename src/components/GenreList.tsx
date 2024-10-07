import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  Text,
} from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import { getCroppedImage } from "../services/image-url";

export const GenreList = () => {
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
                <Text>{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
    </List>
  );
};

import {
  Button,
  Flex,
  Icon,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import { FaItunesNote, FaSpotify } from "react-icons/fa";
import { SongListEntry } from "src/types";

interface SongListProps {
  songs: SongListEntry[];
}

const Card: FC = ({ children }) => {
  return (
    <Flex shadow="sm" justifyContent="space-between" padding="1">
      {children}
    </Flex>
  );
};

const SongList: FC<SongListProps> = ({ songs }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack spacing={6}>
      {songs.map((song) => (
        <Card>
          <Stack maxWidth="95%">
            <Link href={`song/${song.slug.current}`} key={song.title}>
              <Button
                variant="link"
                mb={0}
                size="lg"
                fontSize="lg"
                fontWeight="normal"
                justifyContent="flex-start"
                colorScheme="black"
              >
                <Text isTruncated>
                  {song.order + 1}. {song.title}
                </Text>
              </Button>
            </Link>
            <Flex
              alignItems="center"
              color={colorMode === "light" ? "green.700" : "green.200"}
            >
              {song.melody && (
                <>
                  <Icon as={FaItunesNote} marginRight="2" />
                  {song.melody}
                </>
              )}
            </Flex>
          </Stack>
          {/* TODO: Fiks størrelse på spotify ikonet og finn ut når den ikke vises*/}
          {song.spotifyuri && (
            <FaSpotify
              size="21px"
              color={colorMode === "light" ? "#191414" : "white"}
            />
          )}
        </Card>
      ))}
    </Stack>
  );
};

export default SongList;

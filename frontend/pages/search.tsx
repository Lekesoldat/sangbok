import { Box, Center } from "@chakra-ui/react";
import SearchInput from "@components/atoms/SearchInput";
import Header from "@components/molecules/Header";
import SongList from "@components/organisms/SongList";
import Layout from "@components/templates/Layout";
import { NextPage } from "next";
import React, { useState } from "react";
import { ChangeEvent } from "react";
import { fetchSongListQuery } from "src/api/song_list_api";
import { SongListEntry, SongDetailType } from "src/types";

interface SearchProps {
  songs: SongListEntry[];
}

const Search: NextPage<SearchProps> = ({ songs }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue((event.target as HTMLInputElement).value);

  const filteredSongs = songs.filter((song: SongDetailType) =>
    song.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <Layout>
      <Header color="#FFD687">
        <Center pt="2rem">
          <SearchInput value={searchValue} handleChange={handleSearchChange} />
        </Center>
      </Header>
      <Box padding="5">
        <SongList songs={filteredSongs} />
      </Box>
    </Layout>
  );
};

Search.getInitialProps = async (_ctx) => {
  const data = await fetchSongListQuery();
  return {
    songs: data,
  };
};

export default Search;

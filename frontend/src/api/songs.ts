import { gql } from "@apollo/client";

export const SONG_TITLE_QUERY = gql`
  query GetSongTitleQuery {
    songs: allSong(
      where: { _: { is_draft: false } }
      sort: { numbering: ASC }
    ) {
      _id
      title
      slug {
        current
      }
    }
  }
`;

export const SONG_DETAIL_QUERY = gql`
  query SongDetailQuery($songNumber: Float) {
    details: allSong(where: { numbering: { eq: $songNumber } }) {
      title
      melody
      author
      category {
        name
      }
      verses
    }
  }
`;

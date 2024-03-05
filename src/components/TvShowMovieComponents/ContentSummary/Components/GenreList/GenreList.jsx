import React from "react";
import * as styled from "./GenreListStyles";

const GenreList = ({ genres }) => {
  return (
    <styled.genreContainer>
      {genres ? (
        genres.map((genre) => (
          <styled.genre key={genre.id}>
            <styled.genreText>{genre.name}</styled.genreText>
          </styled.genre>
        ))
      ) : (
        <styled.genreText>no genre data</styled.genreText>
      )}
    </styled.genreContainer>
  );
};

export default GenreList;

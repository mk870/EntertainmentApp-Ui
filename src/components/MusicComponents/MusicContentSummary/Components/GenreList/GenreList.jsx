import React from "react";
import * as styled from "./GenreListStyles";

const GenreList = ({ content }) => {
  return (
    <styled.genreContainer>
      {content.genres.length > 1 ? (
        content.genres.map((genre) => (
          <styled.genre key={genre}>
            <styled.genreText>{genre}</styled.genreText>
          </styled.genre>
        ))
      ) : (
        <styled.genreText>{`${content.name}'s genre data is not available`}</styled.genreText>
      )}
    </styled.genreContainer>
  );
};

export default GenreList;

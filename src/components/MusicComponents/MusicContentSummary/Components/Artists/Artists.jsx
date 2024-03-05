import React from "react";
import * as styled from "./ArtistsStyles";

import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Artists = ({ artists, iconSize }) => {
  const navigate = useNavigate();
  return (
    <styled.trackLinksContainer>
      <styled.artistHeader>
        {artists.length > 1 ? "Artists:" : "Artist:"}
      </styled.artistHeader>
      {artists.map((artist) => (
        <styled.artistContainer
          key={artist.id}
          artist={true}
          onClick={() => navigate(`/music/artist/${artist.id}`)}
        >
          <BsFillPersonFill size={iconSize} />
          <styled.artistText>{artist.name}</styled.artistText>
        </styled.artistContainer>
      ))}
    </styled.trackLinksContainer>
  );
};

export default Artists;

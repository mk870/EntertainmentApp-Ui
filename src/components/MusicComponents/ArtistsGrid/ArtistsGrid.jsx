import React from "react";
import { useNavigate } from "react-router-dom";

import * as styled from "./ArtistsGridStyles";
import ToggleableHeader from "../ToggleableHeader/ToggleableHeader";
import PersonnelCard from "../../PersonnelCard/PersonnelCard";
import ArtistCard from "../Cards/Artist/ArtistCard";

const ArtistsGrid = ({
  artistsList,
  showAll,
  size,
  header,
  isFromLocalServer,
}) => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/music/artists", {
      state: {
        artistsList,
      },
    });
  };
  const handleArtist = (id) => {
    navigate(`/music/artist/${id}`);
  };
  const artistTrimmedList = (showAll) => {
    if (!showAll) return artistsList.slice(0, 6);
    else return artistsList;
  };
  return (
    <styled.Container size={size}>
      <ToggleableHeader
        type={"navigate"}
        contentList={artistsList}
        onNavigate={onNavigate}
        header={header}
        showAll={showAll}
        size={size}
      />
      <styled.grid>
        {!showAll &&
          artistTrimmedList(showAll).map((artist) => (
            <PersonnelCard
              key={artist.id}
              image={artist.images[0].url}
              name={artist.name}
              handlePersonnelFunc={() => handleArtist(artist.id)}
              type={"artist"}
              size={size}
            />
          ))}
        {showAll &&
          artistTrimmedList(showAll).map((artist) => (
            <ArtistCard
              content={artist}
              isFromLocalServer={isFromLocalServer ? true : false}
            />
          ))}
      </styled.grid>
    </styled.Container>
  );
};

export default ArtistsGrid;

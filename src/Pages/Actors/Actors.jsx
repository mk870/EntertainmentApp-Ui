import React from "react";
import * as styled from "./ActorsStyles";
import { useLocation } from "react-router-dom";
import CardGrid from "../../components/CardGrid/CardGrid";

const Actors = () => {
  const location = useLocation();
  return (
    <styled.container>
      <CardGrid
        contentList={location.state.actors}
        header={"Actors"}
        type={location.state.type}
      />
    </styled.container>
  );
};

export default Actors;

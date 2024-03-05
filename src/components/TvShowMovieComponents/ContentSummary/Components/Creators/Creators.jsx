import React from "react";
import * as styled from "./CreatorsStyles";

const Creators = ({ creators,type }) => {
  return (
    <styled.creatorsContainer>
      <div className="heading">
        {type === "episode" ? "Crew:" : "Created by:"}
      </div>
      {creators ? (
        creators.map((creator, index) => (
          <span className="creatorText" key={creator.id}>
            {creators.length - 1 === index
              ? ` ${creator.name}`
              : `${creator.name}, `}
          </span>
        ))
      ) : (
        <span className="creatorText">no data</span>
      )}
    </styled.creatorsContainer>
  );
};

export default Creators;

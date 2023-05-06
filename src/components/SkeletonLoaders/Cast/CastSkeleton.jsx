import React from "react";
import * as styled from "./CastSkeletonStyles";
import PersonnelCardSkeleton from "../Personnelcard/PersonnelCardSkeleton";

const CastSkeleton = ({ type }) => {
  const dummyCast = [1, 2, 3, 4, 5, 6];
  return (
    <styled.container>
      <styled.castGrid>
        {dummyCast.map((cast) => (
          <PersonnelCardSkeleton key={cast} />
        ))}
      </styled.castGrid>
      {type === "tv-show" && (
        <styled.castGrid>
          {dummyCast.map((cast) => (
            <PersonnelCardSkeleton key={cast} />
          ))}
        </styled.castGrid>
      )}
    </styled.container>
  );
};

export default CastSkeleton;

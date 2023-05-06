import React from 'react'
import * as styled from "./ArtistListSkeletonStyles";
import PersonnelCardSkeleton from '../Personnelcard/PersonnelCardSkeleton';

const ArtistListSkeleton = ({size}) => {
 const dummyArtists = [1, 2, 3, 4, 5, 6,7,8,9,10];
 return (
   <styled.Container size={size}>
     <styled.grid>
        {dummyArtists.map((artist) => (
          <PersonnelCardSkeleton key={artist}
          />
        ))}
      </styled.grid>
   </styled.Container>
 )
}

export default ArtistListSkeleton
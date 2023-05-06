import React from "react";
import * as styled from "./PersonnelCardStyles";
import profile from "../../Assets/empty-profile.jpg";
import { shortenString } from "../../Utils/utils";

const PersonnelCard = ({ image, handlePersonnelFunc, name, type, size }) => {
  const getName =()=>{
    if(name)return name
    else return 'no name available'
  }
  const getProfile = (image) => {
    if (!image) return profile;
    else {
      if (type === "actor") {
        return `https://image.tmdb.org/t/p/w500/${image}`;
      } else {
        return image;
      }
    }
  };
  return (
    <styled.CardWrapper onClick={handlePersonnelFunc}>
      <styled.poster src={getProfile(image)} size={size} />
        <styled.nameText>{shortenString(getName(), 15)}</styled.nameText>
    </styled.CardWrapper>
  );
};

export default PersonnelCard;

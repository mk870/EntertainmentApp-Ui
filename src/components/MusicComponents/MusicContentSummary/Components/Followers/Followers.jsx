import React from "react";
import millify from "millify";
import { HiOutlineUserGroup } from "react-icons/hi";

import * as styled from "../Styles";

const Followers = ({ content, iconSize }) => {
  const getFollowers = () => {
    if (content.followers?.total) return millify(content.followers.total);
    else return "---";
  };
  return (
    <styled.subContainer>
      <HiOutlineUserGroup size={iconSize} />
      <styled.subHeaderText>
        {`${getFollowers()} followers`}
      </styled.subHeaderText>
    </styled.subContainer>
  );
};

export default Followers;

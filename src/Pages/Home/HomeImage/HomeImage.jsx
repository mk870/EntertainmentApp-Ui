import React from "react";

import homeImage from "../../../Assets/main.png";
import {
  HomeImageContainer,
  HomeImageParagraph,
  HomeImageText,
} from "./HomeImageStyles";

const HomeImage = () => {
  return (
      <HomeImageContainer>
        <img src={homeImage} alt="homeImage" />
        <HomeImageText>
          <HomeImageParagraph>
            Ensimini seeks to provide digital resources, consultancy services,
            mentorship and community to improve the productivity and financial
            outcomes of all our stakeholders. We will work to increase the
            number of successful and profitable farmers, agriprenuers and
            professionals in the agricultural industry.
          </HomeImageParagraph>
        </HomeImageText>
      </HomeImageContainer>
  );
};

export default HomeImage;

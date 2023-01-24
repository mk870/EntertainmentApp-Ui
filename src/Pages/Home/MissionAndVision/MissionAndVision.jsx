import React from "react";

import {
  InnerWrapper,
  MissionAndVisionContainer,
  MissionAndVisionHeader,
  MissionAndVisionImg,
  MissionAndVisionText,
  MissionOrVisionWrapper,
} from "./MissionAndVisionStyles";
import visionImg from "../../../Assets/vision.jpg";
import missionImg from "../../../Assets/mission.jpg";

const MissionAndVision = () => {
  return (
    <MissionAndVisionContainer>
      <div className="container">
        <MissionOrVisionWrapper>
          <MissionAndVisionHeader>Our Mission</MissionAndVisionHeader>
          <InnerWrapper>
            <MissionAndVisionImg src={missionImg} alt="mission" />
            <MissionAndVisionText>
              To be an excellent digital media house, which mainly supports the
              technology, the business and the science of agriculture. Providing
              news, agri-businesses features and information about the world of
              Agriculture and it's value chain with reports on technical
              developments in the industry. We believe that there are many
              stories to tell therefore we want to build a platform where
              African farmers and aspiring farmers can have conversations, a
              sense of belonging and a community.
            </MissionAndVisionText>
          </InnerWrapper>
        </MissionOrVisionWrapper>
        <MissionOrVisionWrapper>
          <MissionAndVisionHeader>Our Vision</MissionAndVisionHeader>
          <InnerWrapper>
            <MissionAndVisionImg src={visionImg} alt="vision" />
            <MissionAndVisionText>
              Ensimini seeks to provide digital resources, consultancy services,
              mentorship and community to improve the productivity and financial
              outcomes of all our stakeholders. We will work to increase the
              number of successful and profitable farmers, agriprenuers and
              professionals in the agricultural industry.
            </MissionAndVisionText>
          </InnerWrapper>
        </MissionOrVisionWrapper>
      </div>
    </MissionAndVisionContainer>
  );
};

export default MissionAndVision;

import styled from "styled-components";
import { mainColor } from "../../../components/CssVariables/Index";

export const MissionAndVisionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: linear-gradient(50deg, ${mainColor}, white);
  min-height: 740px;

  .container {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    height: 100%;
    width: 100%;
    @media (max-width: 1700px) {
      justify-content: space-between;
    }
    @media (max-width: 1000px) {
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    @media (max-width: 390px) {
      height: auto;
    }
  }
  @media (max-width: 1000px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 390px) {
    height: auto;
  }
`;

export const MissionAndVisionHeader = styled.span`
  font-size: 35px;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  color: ${mainColor};
  @media (max-width: 900px) {
    font-size: 25px;
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
  @media (max-width: 350px) {
    font-size: 17px;
  }
`;

export const MissionOrVisionWrapper = styled.div`
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  border-radius: 10px;
  padding: 20px;
  width: 38%;
  height: 480px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: white;
  @media (max-width: 1750px) {
    width: 48%;
    height: 480px;
  }
  @media (max-width: 1350px) {
    height: 500px;
  }
  @media (max-width: 1150px) {
    height: 520px;
  }
  @media (max-width: 1000px) {
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const MissionAndVisionText = styled.p`
  font-size: 15px;
  margin-top: 40px;
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 700px) {
    font-size: 15px;
    margin-top: 20px;
  }
  @media (max-width: 350px) {
    font-size: 13px;
  }
`;
export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
export const MissionAndVisionImg = styled.img`
  height: 220px;
  width: 290px;
  @media (max-width: 350px) {
    height: 200px;
    width: 250px;
  }
`;

import styled from "styled-components";
import {
  backgroundColor,
  mainThemeColor,
  skeletonAnimation,
} from "../../Css/Variables";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  padding-bottom: 20px;
  gap: 15px;
`;

export const loader = styled.div`
  display: flex;
  width: 60%;
  height: 120px;
  border-radius: 5px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  @media (max-width: 600px) {
    width: 80%;
  }
`;
export const messageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 60%;
  height: 120px;
  border-radius: 5px;
  background-color: ${backgroundColor};
  .success{
   color: ${mainThemeColor};
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;
export const Text = styled.p`
  margin: 0 0 0 5px;
  font-size: 15px;
  color: aliceblue;
`;

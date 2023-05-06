import styled from "styled-components";
import { skeletonAnimation } from "../../../Css/Variables";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5px;
`;
export const review = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 98%;
  margin-left: 10px;
  margin-bottom: 15px;
  padding-bottom: 7px;
  @media (max-width: 500px) {
    width: 95%;
  }
  @media (max-width: 410px) {
    width: 90%;
  }
`;

export const reviewerDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  gap: 15px;
  flex: 1;
  margin-bottom: 10px;
`;

export const reviewerImage = styled.div`
  width: 180px;
  height: 160px;
  border-radius: 10px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  @media (max-width: 500px) {
    width: 120px;
    height: 100px;
  }
`;
export const reviewerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  flex: 1;
`;

export const reviewerInfoText = styled.div`
  height:15px;
  margin: 0 0 7px 0;
  border-radius:5px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width:100px;
  @media (max-width: 500px) {
    height: 10px;
  }
`;
export const text = styled.div`
  height:15px;
  margin: 0 0 7px 0;
  border-radius:5px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width:100%;
  @media (max-width: 500px) {
    height: 10px;
  }
`;

export const lastText = styled.div`
  height:15px;
  margin: 0 0 7px 0;
  border-radius:5px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width:70%;
  @media (max-width: 500px) {
    height: 10px;
  }
`;
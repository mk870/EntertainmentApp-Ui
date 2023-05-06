import styled from "styled-components";
import { skeletonAnimation } from "../../../Css/Variables";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 98%;
  position: relative;
  border-radius: 15px;
  padding-top:10px;
  margin-bottom:10px;
`;

export const contentWrapper = styled.div`
  z-index: 3;
  display: grid;
  align-items: start;
  gap: 30px;
  grid-template-columns: 0.3fr 1fr;
  width: 90%;
  @media (max-width: 760px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }
`;

export const poster = styled.div`
  height: 350px;
  width: 300px;
  border-radius: 15px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  @media (max-width: 760px) {
    height: 150px;
    width: 150px;
  }
`;

export const detailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  flex: 1;
  height: 100%;
  &:last-child {
    width: 80%;
  }
  @media (max-width: 410px) {
    width: 100%;
  }
`;

export const text = styled.div`
  height: 15px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width:100%;
  margin:0 0 10px 0;
  border-radius:5px;
  @media (max-width: 760px) {
    height: 10px;
  }
`;
export const lastText = styled.div`
  height: 20px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width:80%;
  margin:0 0 10px 0;
  border-radius:5px;
  @media (max-width: 760px) {
    height: 10px;
  }
`;

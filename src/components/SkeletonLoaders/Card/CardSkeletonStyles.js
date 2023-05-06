import styled from "styled-components";
import { skeletonAnimation } from "../../../Css/Variables";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  width: ${(props) => (props.size === "large" ? "225px" : "180px")};
  height: ${(props) => (props.size === "large" ? "250px" : "175px")};
  margin: 0 3px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  @media (max-width: 400px) {
    width: 140px;
    height: 130px;
  }
`;
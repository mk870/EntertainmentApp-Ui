import styled from "styled-components";
import { skeletonAnimation } from "../../../Css/Variables";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

export const poster = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  @media(max-width: 600px){
    width:100px;
    height:100px;
  }
`;
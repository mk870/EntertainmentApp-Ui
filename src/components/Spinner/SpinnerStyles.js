import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

export const container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .card-loader {
    animation: ${rotate} 1.5s linear infinite;
  }
`;

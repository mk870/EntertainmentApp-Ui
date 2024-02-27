import styled, { keyframes } from "styled-components";

const appear = keyframes`
0%{opacity:0;}
100%{opacity:1}
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  width: 100%;
  animation: ${appear} 1.5s ease;
`;

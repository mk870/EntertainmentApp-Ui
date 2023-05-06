import styled from "styled-components";

export const CardGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10px;
`;

export const Grid = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  flex-wrap:wrap;
  gap: 5px;
  @media (max-width: 1620px) {
    justify-content: center;
  }
`;
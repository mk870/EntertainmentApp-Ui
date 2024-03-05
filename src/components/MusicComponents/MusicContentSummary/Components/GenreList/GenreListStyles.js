import styled from "styled-components";

export const genreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 7px;
`;
export const genre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid aliceblue;
  border-radius: 10px;
  min-width: 110px;
  height: 20px;
  padding: 3px 5px;
`;
export const genreText = styled.p`
  font-size: 12px;
  color: aliceblue;
  text-align: center;
`;

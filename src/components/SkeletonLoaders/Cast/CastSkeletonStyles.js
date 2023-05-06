import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width:100%;
  margin-bottom:5px;
`;

export const castGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 5px;
  margin-bottom:15px;
  @media(max-width:500px){
    justify-content: center;
    margin-left: 0px;
  }
`;
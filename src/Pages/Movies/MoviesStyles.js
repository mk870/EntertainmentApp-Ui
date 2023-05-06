import styled from "styled-components";

export const MoviesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 5px 10px 5px;
  min-height: 80vh;
`;

export const popularMoviesWrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const latestMoviesWrapper = styled.div`
  width: 100%;
  min-height: 150px;
  margin-top: 10px;
`;
export const topRatedMoviesWrapper = styled.div`
  width: 100%;
  min-height: 150px;
  margin-top: 10px;
`;
export const Text = styled.p`
  font-size: 15px;
  color: aliceblue;
`;
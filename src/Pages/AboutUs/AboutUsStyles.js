import styled from "styled-components";
import { mainColor } from "../../components/CssVariables/Index";

export const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const IntroWrapper = styled.div`
  display: grid;
  align-items: center;
  place-items: center;
  justify-content: center;
  grid-gap: 30px;
  width: 80%;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  margin-bottom: 40px;
  @media (max-width: 1600px) {
    width: 100%;
  }
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;
export const Svg = styled.img`
  height: 500px;
  width: 630px;
  @media (max-width: 1600px) {
    height: 400px;
    width: 600px;
  }
  @media (max-width: 1200px) {
    height: 400px;
    width: 500px;
  }
  @media (max-width: 980px) {
    height: 350px;
    width: 500px;
  }
  @media (max-width: 600px) {
    height: 300px;
    width: 400px;
  }
  @media (max-width: 420px) {
    height: 220px;
    width: 300px;
  }
`;
export const AboutUsText = styled.p`
  font-size: 15px;
  width: 95%;
  @media (max-width: 1600px) {
    width: 500px;
  }
  @media (max-width: 1100px) {
    width: 400px;
  }
  @media (max-width: 980px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    text-align: center;
  }
`;
export const AboutUsHeaderText = styled.p`
  font-size: 35px;
  color: ${mainColor};
`;
export const AboutUsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
export const AboutUsGridContainer = styled.div`
  display: grid;
  align-items: center;
  place-items: center;
  justify-content: center;
  grid-gap: 30px;
  width: 70%;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 50px;
  @media (max-width: 1600px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
export const AboutUsGridWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  border-radius: 10px;
  width: 500px;
  @media (max-width: 1100px) {
    width: 400px;
    height: 250px;
  }
  @media (max-width: 880px) {
    height: 400px;
    width: 350px;
  }
  @media (max-width: 780px) {
    height: 400px;
    width: 300px;
  }
  @media (max-width: 700px) {
    height: auto;
    width: 90%;
  }
`;
export const AboutUsGridHeaderText = styled.p`
  font-weight: bold;
  color: ${mainColor};
`;
export const AboutUsGridItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  @media (max-width: 880px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
export const AboutUsGridSvg = styled.img`
  height: 200px;
  width: 250px;
  @media (max-width: 1100px) {
    height: 150px;
    width: 180px;
  }
  @media (max-width: 700px) {
    height: 200px;
    width: 250px;
  }
`;
export const AboutUsGridInfo = styled.p`
  font-size: 13px;
  text-align: center;
`;
export const AboutUsGridDateText = styled.p`
  font-size: 13px;
  font-style: italic;
  text-align: center;
`;
export const AboutUsGridText = styled.p`
  font-size: 13px;
  text-align: center;
`;

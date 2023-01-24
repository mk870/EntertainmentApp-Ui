import styled from "styled-components";

export const HomeImageContainer = styled.div`
  img {
    width: 100%;
    height: 1400px;
    margin-bottom: -10px;
    @media (max-width: 1600px) {
    height: 900px;
    width: 100%;
  }
    @media (max-width: 770px) {
    height: 600px;
    width: 100vw;
  }
  @media (max-width: 330px) {
    height: 500px;
    width: 100vw;
  }
  }
`;
export const HomeImageText = styled.div`
  position: absolute;
  top: 45%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  left: 10%;
  right: 10%;
  @media (max-width: 2200px) {
    top: 40%;
  }
  @media (max-width: 1600px) {
    top: 300px;
  }
  @media (max-width: 880px) {
    top: 27%;
  }
`;
export const HomeImageParagraph = styled.p`
  text-align: center;
  font-size: 4em;
  color: white;
  font-weight: bold;
  font-family: "Quicksand", sans-serif;
  @media (max-width: 1600px) {
    font-size: 35px;
  }
  @media (max-width: 900px) {
    font-size: 25px;
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
  @media (max-width: 350px) {
    font-size: 17px;
  }
`;

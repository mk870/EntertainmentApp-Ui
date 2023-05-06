import styled from "styled-components";
import { mainThemeColor } from "../../Css/Variables";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 98%;
  min-height: 400px;
  position: relative;
  border-radius: 15px;
  padding: 10px 0;
`;
export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  background-image: url(${(props) => props.pic});
  background-color: rgba(26, 24, 29, 0.9);
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-position: 50% 10%;
  background-size: cover;
  z-index: 1;
  filter: blur(8px);
  -webkit-filter: blur(8px);
`;

export const contentWrapper = styled.div`
  z-index: 3;
  display: grid;
  align-items: start;
  gap: 30px;
  grid-template-columns: 0.3fr 1fr;
  width: 90%;
  @media (max-width: 760px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }
`;
export const poster = styled.img`
  height: 350px;
  width: 300px;
  border-radius: 15px;
  @media (max-width: 760px) {
    height: 150px;
    width: 150px;
  }
`;
export const detailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  flex: 1;
  height: 100%;
  @media (max-width: 410px) {
    width: 100%;
  }
`;
export const header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const headerText = styled.p`
  font-size: 18px;
  font-weight: 800;
  color: aliceblue;
  margin: 0;
`;
export const row = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
  margin: 10px 0;
`;
export const subHeaderText = styled.p`
  font-size: 14px;
  font-weight: 200;
  color: aliceblue;
  margin: 0px 0px 0px 5px;
`;
export const subContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 10px;
`;
export const creatorsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-wrap:wrap;
  gap: 4px;
  .heading {
    color: ${mainThemeColor};
    font-size: 15px;
    font-weight:800;
  }
  .creatorText {
    color: aliceblue;
    font-size: 14px;
  }
`;

export const genreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
`;
export const genre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid aliceblue;
  border-radius: 10px;
  width: 110px;
  height: 20px;
`;
export const genreText = styled.p`
  font-size: 12px;
  color: aliceblue;
  text-align: center;
`;

export const detailsText = styled.p`
  font-size: 14px;
  color: aliceblue;
  flex: 1;
`;

export const AddLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  min-width: 30px;
  background-color: ${mainThemeColor};
  height: 30px;
  border-radius: 5px;
  padding: 0 5px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 920px) {
    min-width: 125px;
  }
`;
export const addLinkText = styled.p`
  font-size: 14px;
  color: aliceblue;
  @media (max-width: 410px) {
    font-size: 13px;
  }
`;

export const videoLinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 100%;
  padding-top:10px;
  gap:15px;
`;

export const videoLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  background-color: ${mainThemeColor};
  min-width: 90px;
  height: 30px;
  border-radius: 5px;
  .video-icon {
    margin:0 7px;
  }
  &:hover {
    cursor:pointer;
  }
`;

import styled from "styled-components";
import { backgroundColor, mainThemeColor, secondaryThemeColor } from "../../Css/Variables";


export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
  min-height: 100px;
`;
export const textContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 28px;
`;
export const header = styled.p`
  font-size: ${(props)=>props.size==="large"?"18px":"15px"};
  font-weight:bolder;
  color: ${secondaryThemeColor};
  margin-left: 5px;
  @media(max-width:500px){
    font-size:15px;
  }
`;
export const linkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${mainThemeColor};
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
`;
export const linkText = styled.p`
  font-size: 13px;
  font-weight: 300;
  margin-right: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
export const slidercontent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: ${(props) => (props.size === "large" ? "250px" : "175px")};
  width: ${(props) => (props.size === "large" ? "100%" : "180px")};
  .rightArrow {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    right: 10px;
    top: 45%;
    bottom: 50%;
    z-index: 10;
    padding: 4px;
    border-radius: 100%;
    background-color: ${backgroundColor};
    &:hover {
    cursor: pointer;
  }
  }
  .leftArrow {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    left: 10px;
    top: 45%;
    bottom: 50%;
    z-index: 10;
    padding: 4px;
    border-radius: 100%;
    background-color: ${backgroundColor};
    &:hover {
    cursor: pointer;
  }
  }
  .slide {
    display: none;
  }
  .current {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 400px) {
    width: 100%;
    .current {
      justify-content: center;
    }
  }
  @media (max-width: 800px) {
    min-height: 175px;
  }
  @media (max-width: 400px) {
    min-height: 130px;
  }
`;
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    width:fit-content;
    /* border:1px solid red; */
    @media (max-width: 400px) {
    width: 100%;
    height: 390px;
  }
`

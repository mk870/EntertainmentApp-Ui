import { mainThemeColor, secondaryThemeColor } from "Css/Variables";
import styled, { css, keyframes } from "styled-components";

const dropDown = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`;
const dropDownAnimation = css`
  animation: ${dropDown} 1s ease;
`;

export const GenresWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 25px;
`;
export const HeaderText = styled.p`
  font-size: 15px;
  font-weight: bolder;
  color: ${secondaryThemeColor};
`;
export const HeaderText2 = styled.p`
  font-size: 13px;
  font-weight: 300;
  margin-right:5px;
`;
export const Grid = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: ${(props) => (props.showMore ? "1fr 1fr" : "1fr")};
  ${({showMore})=>showMore && dropDownAnimation}
  align-items: center;
  width: 100%;
`;
export const Genre = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 1px 8px;
  height: ${(props) => (props.showMore ? "38px" : "30px")};
  border-radius: 15px;
  background-color: ${(props) =>
    props.isGenreSelected ? `${mainThemeColor}` : `black`};
  color: ${(props) =>
    props.isGenreSelected ? `aliceblue` : `${secondaryThemeColor}`};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1100px) {
    padding: 0px 7px;
  }
`;
export const GenreText = styled.p`
  font-size: 14px;
  @media (max-width: 1100px) {
    font-size: 13px;
  }
`;
export const toggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: ${mainThemeColor};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
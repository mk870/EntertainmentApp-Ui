import styled from "styled-components";
import { mainColor} from "../CssVariables/Index";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top:5px;
  border-bottom: 0.4px solid #cecece;
`;
export const LogoContainer = styled.div`
  flex-grow: ${props => props.mobileMenuStyle};
  .navbar-logo {
    width: 70px;
    height: 60px;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const MobileMenuWrapper = styled.div`
  flex-grow:1;
  margin-left: 20px;
`

export const PageLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 55px;
  @media (max-width:800px){
    margin-right: 15px;
  }
`;
export const PageLink = styled.div`
  padding: 6px;
  margin: 0px 8px 0px 8px;
  border-radius: 7px;
  width:72px;
  color:${mainColor};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow:inset 0 0 0 0 white;
  transition: ease-out 0.3s;
  &:hover {
    cursor: pointer;
    box-shadow:inset 136px 0 0 0 ${mainColor};
    color: white;
  }
  
`;


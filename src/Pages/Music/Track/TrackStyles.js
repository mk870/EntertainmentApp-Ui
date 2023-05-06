import styled from "styled-components";
import { secondaryThemeColor } from "../../../Css/Variables";


export const albumContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding-left: 7px;
`;
export const header = styled.p`
  font-size: 18px;
  font-weight: 800;
  color: ${secondaryThemeColor};
  margin-left: 10px;
`;

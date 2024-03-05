import { mainThemeColor } from "Css/Variables";
import styled from "styled-components";

export const creatorsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 4px;
  .heading {
    color: ${mainThemeColor};
    font-size: 15px;
    font-weight: 800;
  }
  .creatorText {
    color: aliceblue;
    font-size: 14px;
  }
`;

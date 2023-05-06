import styled from "styled-components";
import { backgroundColor} from "../../Css/Variables";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

export const poster = styled.img`
  width: ${(props) => (props.size === "small" ? "60px" : "120px")};
  height: ${(props) => (props.size === "small" ? "60px" : "120px")};
  border-radius: 100%;
  background-color: ${backgroundColor};
  transition: 0.2s ease-in-out all;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media(max-width: 600px){
    width:95px;
    height:95px;
  }
`;

export const nameText = styled.p`
  margin: 5px 0 0 0;
  color: aliceblue;
  font-size: 12px;
`;

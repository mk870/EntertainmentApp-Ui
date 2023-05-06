import styled from "styled-components";
import { backgroundColor } from "../../Css/Variables";

export const errorContainer = styled.div`
  background: ${backgroundColor};
  display: flex;
  justify-content: start;
  align-items: center;
  padding: ${(props) => (props.size === "small" ? "0px" : "20px")};
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const text = styled.p`
  color: aliceblue;
  text-align: start;
  font-size: ${(props) => (props.size === "small" ? "13px" : "15px")};
  margin-left: 10px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

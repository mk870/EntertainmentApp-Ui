import styled from "styled-components";
import { mainColor, secondaryColor } from "../../components/CssVariables/Index";

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  margin-top: 40px;
  margin-bottom: 40px;
  @media (max-width: 1600px) {
    min-height: 70vh;
  }
`;
export const SignUpFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 800px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  border-radius: 10px;
  @media (max-width: 1600px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 430px) {
    width: 300px;
  }
  @media (max-width: 350px) {
    width: 280px;
  }
`;
export const SignUpForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 15px;
`;
export const SignUpFormHeaderText = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${mainColor};
`;
export const SignUpFormText = styled.p`
  font-size: 15px;
  font-weight: 700;
  text-align: center;
`;
export const SignUpFormSpan = styled.span`
  color: ${secondaryColor};
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

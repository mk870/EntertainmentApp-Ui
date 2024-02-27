import styled from "styled-components";
import { backgroundColor, mainThemeColor, redColor } from "../../Css/Variables";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:start;
  flex-direction: column;
  width: 100%;
  min-height: 85vh;
`;

export const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  background-color: ${backgroundColor};
  width: 400px;
  margin-top:50px;
  margin-bottom:50px;
  padding: 40px 20px;
  border-radius: 7px;
  @media (max-width: 600px) {
    width: 80%;
    text-align: center;
  }
  @media (max-width: 500px) {
    padding: 15px;
  }
`;
export const LoginHeaderText = styled.p`
  color: aliceblue;
  font-size: 22px;
  font-weight: 800;
  margin: 0;
`;
export const LoginText = styled.p`
  font-size: 13px;
`;
export const validationErrorWrapper = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  color: ${redColor};
  font-size: 13px;
  margin-bottom: 7px;
`;
export const validationErrorText = styled.span`
  text-align: center;
  color: ${redColor};
  font-size: 13px;
  margin-bottom: 7px;
`;
export const validationErrorGuidelines = styled.span`
  text-align: center;
  color: ${redColor};
  font-size: 14px;
`;
export const LoginTextSpan = styled.span`
  font-size: 13px;
  color: ${mainThemeColor};
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
export const LoginBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

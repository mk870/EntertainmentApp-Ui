import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

import InputField from "../../components/InputField/InputField";
import * as styled from "./LoginStyles";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
    setLoginData({ ...loginData, email: "", password: "" });
  };
  const navigate = useNavigate();
  return (
    <styled.LoginContainer>
      <styled.LoginFormWrapper>
        <styled.LoginForm spellCheck="false">
          <styled.LoginFormHeaderText>Login</styled.LoginFormHeaderText>
          <InputField
            label={"email"}
            onChangeFunc={(value) =>
              setLoginData({ ...loginData, email: value })
            }
            inputValue={loginData.email}
          />
          <InputField
            label={"password"}
            onChangeFunc={(value) =>
              setLoginData({ ...loginData, password: value })
            }
            inputValue={loginData.password}
          />
          <Button buttonText={"Login"} onClickFunc={(e) => handleLogin(e)} />
          <styled.LoginFormText>
            Do you have an account?{" "}
            <styled.LoginFormSpan onClick={() => navigate("/signup")}>
              Create an Account
            </styled.LoginFormSpan>
          </styled.LoginFormText>
        </styled.LoginForm>
      </styled.LoginFormWrapper>
    </styled.LoginContainer>
  );
};

export default Login;

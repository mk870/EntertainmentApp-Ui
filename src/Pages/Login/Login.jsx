/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import { backgroundColor } from "../../Css/Variables";
import {
  emailValidator,
  passwordGuideLines,
  passwordValidator,
} from "../../Utils/utils";
import * as styled from "./LoginStyles";
import Snackbar from "../../components/Snackbar/Snackbar";
import Spinner from "../../components/Spinner/Spinner";
import { postResource } from "../../HttpServices/Post/postData";

const Login = () => {
  const [postResponse, setPostResponse] = useState({
    message: "",
    type: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const snackBarRef = useRef(null);
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });
  const [isPasswordValidationError, setIsPasswordValidationError] =
    useState(false);
  const [isEmailValidationError, setIsEmailValidationError] = useState(false);
  const navigate = useNavigate();
  const handleOnChangePassword = (value) => {
    setLoginUserData({
      ...loginUserData,
      password: value,
    });
  };
  const handleOnChangeEmail = (value) => {
    setLoginUserData({
      ...loginUserData,
      email: value,
    });
  };
  const handlePost = (e) => {
    e.preventDefault();
    if (!isEmailValidationError && !isPasswordValidationError) {
      setIsLoading(true);
      if (loginUserData.email !== "" && loginUserData.password !== "") {
        const userData = {
          Email: loginUserData.email,
          Password: loginUserData.password,
        };
        postResource(
          "login",
          userData,
          null,
          setIsLoading,
          setPostResponse,
          postResponse
        );
        setLoginUserData({ ...loginUserData, email: "", password: "" });
      } else if (loginUserData.email === "" && loginUserData.password !== "") {
        setIsEmailValidationError(true);
        setIsLoading(false);
      } else if (loginUserData.email !== "" && loginUserData.password === "") {
        setIsPasswordValidationError(true);
        setIsLoading(false);
      } else if (loginUserData.email === "" && loginUserData.password === "") {
        setIsEmailValidationError(true);
        setIsPasswordValidationError(true);
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    if (loginUserData.password !== "") {
      passwordValidator(setIsPasswordValidationError, loginUserData.password);
    }
  }, [loginUserData.password]);
  useEffect(() => {
    if (loginUserData.email !== "") {
      emailValidator(setIsEmailValidationError, loginUserData.email);
    }
  }, [loginUserData.email]);
  useEffect(() => {
    if (postResponse && snackBarRef.current) {
      snackBarRef.current.showPopup();
    }
  }, [postResponse, snackBarRef]);
  return (
    <styled.LoginWrapper>
      <styled.LoginFormWrapper>
        <styled.LoginForm onSubmit={(e) => handlePost(e)}>
          <styled.LoginHeaderText>Login</styled.LoginHeaderText>
          <InputField
            label={"Email"}
            onChangeFunc={handleOnChangeEmail}
            inputValue={loginUserData.email}
            isSearch={false}
            backgroundColor={backgroundColor}
            handleOnKeyEnter={null}
            hasFloatingLabel={true}
          />
          {isEmailValidationError && (
            <styled.validationErrorText>
              {"please enter valid email address"}
            </styled.validationErrorText>
          )}
          <InputField
            label={"Password"}
            onChangeFunc={handleOnChangePassword}
            inputValue={loginUserData.password}
            isSearch={false}
            backgroundColor={backgroundColor}
            handleOnKeyEnter={null}
            hasFloatingLabel={true}
          />
          {isPasswordValidationError && (
            <styled.validationErrorWrapper>
              <styled.validationErrorGuidelines>
                {"password guidelines:"}
              </styled.validationErrorGuidelines>
              {passwordGuideLines.map((guideline) => (
                <li key={guideline}>
                  <span>{guideline}</span>
                </li>
              ))}
            </styled.validationErrorWrapper>
          )}
          <styled.LoginText>
            you don't have an account?{" "}
            <styled.LoginTextSpan onClick={() => navigate("/signup")}>
              please signup here
            </styled.LoginTextSpan>
          </styled.LoginText>
          <styled.LoginBtnContainer>
            <Button
              onClickFunc={undefined}
              buttonText={isLoading ? <Spinner/> : "login"}
              type={"submit"}
            />
          </styled.LoginBtnContainer>
        </styled.LoginForm>
      </styled.LoginFormWrapper>
      {postResponse.message && (
        <Snackbar
          message={postResponse.message}
          type={postResponse.type}
          ref={snackBarRef}
        />
      )}
    </styled.LoginWrapper>
  );
};

export default Login;

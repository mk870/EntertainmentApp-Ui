import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import InputField from "components/InputField/InputField";
import { backgroundColor } from "Css/Variables";
import {
  emailValidator,
  passwordGuideLines,
  passwordValidator,
} from "Utils/utils";
import * as styled from "./SignUpStyles";
import Snackbar from "components/Snackbar/Snackbar";
import Spinner from "components/Spinner/Spinner";
import { signupRequest } from "HttpServices/Post/postData";
import PageHOC from "components/HOCs/Page/PageHOC";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [postResponse, setPostResponse] = useState({
    message: "",
    type: "",
  });
  const snackBarRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordValidationError, setIsPasswordValidationError] =
    useState(false);
  const [isEmailValidationError, setIsEmailValidationError] = useState(false);
  const [isFirstNameValidationError, setIsFirstNameValidationError] =
    useState(false);
  const [isLastNameValidationError, setIsLastNameValidationError] =
    useState(false);
  const navigate = useNavigate();
  const handleOnChangeFirstName = (value) => {
    setSignUpData({
      ...signUpData,
      firstName: value,
    });
  };
  const handleOnChangeLastName = (value) => {
    setSignUpData({
      ...signUpData,
      lastName: value,
    });
  };
  const handleOnChangePassword = (value) => {
    setSignUpData({
      ...signUpData,
      password: value,
    });
  };
  const handleOnChangeEmail = (value) => {
    setSignUpData({
      ...signUpData,
      email: value,
    });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    if (
      !isEmailValidationError &&
      !isPasswordValidationError &&
      !isFirstNameValidationError &&
      !isLastNameValidationError
    ) {
      setIsLoading(true);
      if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.firstName !== "" &&
        signUpData.lastName !== ""
      ) {
        const userData = {
          FirstName: signUpData.firstName,
          LastName: signUpData.lastName,
          Email: signUpData.email,
          Password: signUpData.password,
        };
        signupRequest(userData, setIsLoading, setPostResponse, postResponse);
        setSignUpData({
          ...signUpData,
          email: "",
          password: "",
          firstName: "",
          lastName: "",
        });
      } else if (
        signUpData.email === "" &&
        signUpData.password !== "" &&
        signUpData.firstName !== "" &&
        signUpData.lastName !== ""
      ) {
        setIsEmailValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password === "" &&
        signUpData.firstName !== "" &&
        signUpData.lastName !== ""
      ) {
        setIsPasswordValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.firstName === "" &&
        signUpData.lastName !== ""
      ) {
        setIsFirstNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.firstName !== "" &&
        signUpData.lastName === ""
      ) {
        setIsLastNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email === "" &&
        signUpData.password === "" &&
        signUpData.firstName === "" &&
        signUpData.lastName === ""
      ) {
        setIsEmailValidationError(true);
        setIsPasswordValidationError(true);
        setIsLastNameValidationError(true);
        setIsFirstNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email === "" ||
        signUpData.password === "" ||
        signUpData.firstName === "" ||
        signUpData.lastName === ""
      ) {
        if (signUpData.email === "") setIsEmailValidationError(true);
        if (signUpData.password === "") setIsPasswordValidationError(true);
        if (signUpData.firstName === "") setIsFirstNameValidationError(true);
        if (signUpData.lastName === "") setIsLastNameValidationError(true);
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    if (signUpData.password !== "") {
      passwordValidator(setIsPasswordValidationError, signUpData.password);
    } else {
      setIsPasswordValidationError(false);
    }
  }, [signUpData.password]);
  useEffect(() => {
    if (signUpData.email !== "") {
      emailValidator(setIsEmailValidationError, signUpData.email);
    } else {
      setIsEmailValidationError(false);
    }
  }, [signUpData.email]);
  useEffect(() => {
    if (signUpData.firstName !== "") {
      if (signUpData.firstName.length < 4) {
        setIsFirstNameValidationError(true);
      } else {
        setIsFirstNameValidationError(false);
      }
    } else {
      setIsFirstNameValidationError(false);
    }
  }, [signUpData.firstName]);
  useEffect(() => {
    if (signUpData.lastName !== "") {
      if (signUpData.lastName.length < 4) {
        setIsLastNameValidationError(true);
      } else {
        setIsLastNameValidationError(false);
      }
    } else {
      setIsLastNameValidationError(false);
    }
  }, [signUpData.lastName]);
  useEffect(() => {
    if (postResponse && snackBarRef.current) {
      snackBarRef.current.showPopup();
    }
  }, [postResponse, snackBarRef]);
  return (
    <styled.SignupWrapper>
      <styled.SignupFormWrapper>
        <styled.SignupForm onSubmit={(e) => handleSignUp(e)}>
          <styled.SignupHeaderText>Signup</styled.SignupHeaderText>
          <InputField
            label={"Given Name"}
            onChangeFunc={handleOnChangeFirstName}
            inputValue={signUpData.firstName}
            isSearch={false}
            backgroundColor={backgroundColor}
            handleOnKeyEnter={null}
            hasFloatingLabel={true}
          />
          {isFirstNameValidationError && (
            <styled.validationErrorText>
              {"please enter atleast 4 characters"}
            </styled.validationErrorText>
          )}
          <InputField
            label={"Family Name"}
            onChangeFunc={handleOnChangeLastName}
            inputValue={signUpData.lastName}
            isSearch={false}
            backgroundColor={backgroundColor}
            handleOnKeyEnter={null}
            hasFloatingLabel={true}
          />
          {isLastNameValidationError && (
            <styled.validationErrorText>
              {"please enter atleast 4 characters"}
            </styled.validationErrorText>
          )}
          <InputField
            label={"Email"}
            onChangeFunc={handleOnChangeEmail}
            inputValue={signUpData.email}
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
            inputValue={signUpData.password}
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
          <styled.SignupText>
            you already have an account?{" "}
            <styled.SignupTextSpan onClick={() => navigate("/login")}>
              please login here
            </styled.SignupTextSpan>
          </styled.SignupText>
          <styled.SignupBtnContainer>
            <Button
              onClickFunc={undefined}
              buttonText={isLoading ? <Spinner /> : "signup"}
              type={"submit"}
            />
          </styled.SignupBtnContainer>
        </styled.SignupForm>
      </styled.SignupFormWrapper>
      {postResponse.message && (
        <Snackbar
          message={postResponse.message}
          type={postResponse.type}
          ref={snackBarRef}
        />
      )}
    </styled.SignupWrapper>
  );
};

export default PageHOC(SignUp);

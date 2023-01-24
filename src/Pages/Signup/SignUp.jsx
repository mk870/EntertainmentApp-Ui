import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';

import * as styled from "./SignUpStyles";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(signUpData);
    setSignUpData({ ...signUpData, email: "", password: "" });
  };
  const navigate = useNavigate();
  return (
    <styled.SignUpContainer>
      <styled.SignUpFormWrapper>
        <styled.SignUpForm spellCheck="false">
          <styled.SignUpFormHeaderText>Sign Up</styled.SignUpFormHeaderText>
          <InputField
            label={"firstName"}
            onChangeFunc={(value) =>
              setSignUpData({ ...signUpData, firstName: value })
            }
            inputValue={signUpData.firstName}
          />
          <InputField
            label={"lastName"}
            onChangeFunc={(value) =>
              setSignUpData({ ...signUpData, lastName: value })
            }
            inputValue={signUpData.lastName}
          />
          <InputField
            label={"email"}
            onChangeFunc={(value) =>
              setSignUpData({ ...signUpData, email: value })
            }
            inputValue={signUpData.email}
          />
          <InputField
            label={"password"}
            onChangeFunc={(value) =>
              setSignUpData({ ...signUpData, password: value })
            }
            inputValue={signUpData.password}
          />
          <Button buttonText={"Signup"} onClickFunc={(e) => handleSignUp(e)} />
          <styled.SignUpFormText>
            Do you have an account?{" "}
            <styled.SignUpFormSpan onClick={() => navigate("/login")}>
              Login to you account
            </styled.SignUpFormSpan>
          </styled.SignUpFormText>
        </styled.SignUpForm>
      </styled.SignUpFormWrapper>
    </styled.SignUpContainer>
  )
}

export default SignUp
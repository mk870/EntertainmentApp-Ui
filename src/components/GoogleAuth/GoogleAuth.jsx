import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import * as styled from "./GoogleAuthStyles";
import { AppContext } from "Context/AppContext";
import HttpError from "HttpServices/Error/HttpError";
import { backendUrl } from "Utils/utils";

const GoogleAuth = ({ type, setIsLoading }) => {
  const [authError, setAuthError] = useState(null);
  const { setAccessToken, accessToken } = useContext(AppContext);
  const navigate = useNavigate()
  const url =
    type === "login"
      ? `${backendUrl}google-login`
      : `${backendUrl}google-signup`;
  const handleAuth = (res) => {
    if (accessToken) {
      setAuthError("you are already logged in");
      setIsLoading(false);
    } else {
      axios
        .post(url, {
          credential: res.credential,
          clientId: res.clientId,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setIsLoading(false);
          navigate("/")
        })
        .catch((e) => {
          setIsLoading(false);
          if (JSON.stringify(e).message === "Network Error") {
            setAuthError("your internet connection is poor");
          } else setAuthError(e.message);
        });
    }
  };
  useEffect(() => {
    if (authError) {
      setTimeout(() => setAuthError(null), 3000);
    }
  }, [authError]);
  return (
    <>
      {authError ? (
        <HttpError message={authError} size={"large"} />
      ) : (
        <styled.Container>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              setIsLoading(true);
              handleAuth(credentialResponse);
            }}
            onError={(e) => {
              setAuthError(e.message);
            }}
            text={type === "login" ? "signin_with" : "signup_with"}
            shape="pill"
            theme="filled_black"
          />
        </styled.Container>
      )}
    </>
  );
};

export default GoogleAuth;

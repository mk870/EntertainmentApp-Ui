import { backendUrl } from "Utils/utils";
import axios from "axios";

export const postResource = (
  url,
  data,
  accessToken,
  setIsLoading,
  setPostResponse,
  postResponse
) => {
  axios
    .post(backendUrl + url, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      setIsLoading(false)
      setPostResponse({
        ...postResponse,
        message: res.data,
        type: "success",
      });
    })
    .catch((e) => {
      if (e.response?.data?.error !== "") {
        setPostResponse({
          ...postResponse,
          message: e.response?.data?.error,
          type: "failed",
        });
      }
      if (JSON.stringify(e).message === "Network Error") {
        setPostResponse({
          ...postResponse,
          message: "your internet connection is poor",
          type: "failed",
        });
      }
      setIsLoading(false);
    });
};

export const loginRequest = (
  data,
  setIsLoading,
  setPostResponse,
  setAccessToken,
  postResponse
) => {
  console.log("posted", data);
  axios
    .post(backendUrl + "login", data)
    .then((res) => {
      console.log(res.data);
      setAccessToken(res.data.accessToken);
      setIsLoading(false);
      setPostResponse({
        ...postResponse,
        message: "login successful",
        type: "success",
      });
    })
    .catch((e) => {
      if (e.response?.data?.error !== "") {
        setPostResponse({
          ...postResponse,
          message: e.response?.data?.error,
          type: "failed",
        });
      }
      if (JSON.stringify(e).message === "Network Error") {
        setPostResponse({
          ...postResponse,
          message: "your internet connection is poor",
          type: "failed",
        });
      }
      setIsLoading(false);
    });
};
export const signupRequest = (
  data,
  setIsLoading,
  setPostResponse,
  postResponse
) => {
  console.log("posted", data);
  axios
    .post(backendUrl + "user", data)
    .then((res) => {
      console.log(res.data);
      setIsLoading(false);
      setPostResponse({
        ...postResponse,
        message: res.data,
        type: "success",
      });
    })
    .catch((e) => {
      if (e.response?.data?.error !== "") {
        setPostResponse({
          ...postResponse,
          message: e.response?.data?.error,
          type: "failed",
        });
      }
      if (JSON.stringify(e).message === "Network Error") {
        setPostResponse({
          ...postResponse,
          message: "your internet connection is poor",
          type: "failed",
        });
      }
      setIsLoading(false);
    });
};

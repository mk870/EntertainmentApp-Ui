export const postResource = (
  url,
  data,
  accessToken,
  setIsLoading,
  setPostResponse,
  postResponse
) => {
  console.log("posted", data, accessToken,url);
  setTimeout(() => {
    setIsLoading(false);
    setPostResponse({
      ...postResponse,
      message: "data successufully created",
      type: "success",
    });
  }, 1000);
};

export const loginRequest = (
  data,
  setIsLoading,
  setPostResponse,
  setAccessToken,
  postResponse
) => {
  console.log("posted", data);
  setTimeout(() => {
    setIsLoading(false);
    setAccessToken("123")
    setPostResponse({
      ...postResponse,
      message: "data successufully created",
      type: "success",
    });
  }, 1000);
};
export const signupRequest = (
  data,
  setIsLoading,
  setPostResponse,
  setAccessToken,
  postResponse
) => {
  console.log("posted", data);
  setTimeout(() => {
    setIsLoading(false);
    setAccessToken("123")
    setPostResponse({
      ...postResponse,
      message: "data successufully created",
      type: "success",
    });
  }, 1000);
};
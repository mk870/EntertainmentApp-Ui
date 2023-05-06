export const deleteResource = (
  url,
  id,
  accessToken,
  setIsLoading,
  setDeleteResponse,
  deleteResponse
) => {
  console.log("posted", id, accessToken, url);
  setTimeout(() => {
    setIsLoading(false);
    setDeleteResponse({
      ...deleteResponse,
      message: "resource successfully deleted",
      type: "success",
    });
  }, 1000);
};

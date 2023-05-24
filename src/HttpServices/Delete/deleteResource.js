import { backendUrl } from "Utils/utils";
import axios from "axios";

export const deleteResource = (
  url,
  id,
  accessToken,
  setIsLoading,
  setDeleteResponse,
  deleteResponse,
  setDeletedItemId
) => {
  axios
    .delete(`${backendUrl + url}/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      setIsLoading(false)
      setDeleteResponse({
        ...deleteResponse,
        message: res.data,
        type: "success",
      });
      setDeletedItemId(id)
    })
    .catch((e) => {
      if (e.response?.data?.error !== "") {
        setDeleteResponse({
          ...deleteResponse,
          message: e.response?.data?.error,
          type: "failed",
        });
      }
      if (JSON.stringify(e).message === "Network Error") {
        setDeleteResponse({
          ...deleteResponse,
          message: "your internet connection is poor",
          type: "failed",
        });
      }
      setIsLoading(false);
    });
};

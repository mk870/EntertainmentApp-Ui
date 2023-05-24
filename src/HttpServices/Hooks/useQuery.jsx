import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { AppContext } from "../../Context/AppContext";
import { backendUrl } from "Utils/utils";
import { useNavigate } from "react-router-dom";

const useQuery = ({ url, deletedItemId }) => {
  const {accessToken} = useContext(AppContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    setData(null)
    setError(null)
    setIsLoading(true)
    axios
      .get(backendUrl+url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((data) => {
        setIsLoading(false);
        setData(data.data);
      })
      .catch((e) => {
        setIsLoading(false);
        if(e.message === "Request failed with status code 403") {
          navigate("/login")
        }
        if(e.message === "token has expired") navigate("/login")
        else setError(e.message)
      });
  }, [accessToken, url,navigate, deletedItemId]);
  return { data, isLoading, error };
};

export default useQuery;

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";

const useBackendQuery = ({ url }) => {
  const context = useContext(AppContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${context?.accessToken}`,
        },
      })
      .then((data) => {
        setIsLoading(false);
        setData(data.data);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
      });
  }, [context?.accessToken, url]);
  return { data, isLoading, error };
};

export default useBackendQuery;

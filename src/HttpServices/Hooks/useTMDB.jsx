/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { tmdbKey } from "../../Utils/utils";

const useTMDB = ({ url }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setData(null)
    setError(null)
    axios
      .get(`https://api.themoviedb.org/3/${url}?api_key=${tmdbKey}&language=en-US`)
      .then((data) => {
        setData(data.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }, [url]);
  return { data, isLoading, error };
};

export default useTMDB;

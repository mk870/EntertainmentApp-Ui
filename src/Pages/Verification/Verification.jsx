/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

import * as styled from "./VerificationStyles";
import HttpError from "HttpServices/Error/HttpError";
import { AppContext } from "Context/AppContext";
import { backendUrl } from "Utils/utils";
import PageHOC from "components/HOCs/Page/PageHOC";

const Verification = () => {
  const { token } = useParams();
  const { setAccessToken } = useContext(AppContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(backendUrl + `verification/${token}`)
      .then((data) => {
        setIsLoading(false);
        setData(data.data);
        setAccessToken(data.data.accessToken);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
      });
  }, []);
  return (
    <styled.container>
      {isLoading && <styled.loader></styled.loader>}
      {error && <HttpError message={error} size={"large"} />}
      {data && (
        <styled.messageContainer>
          <FaRegCheckCircle size={18} className="success" />
          <styled.Text>{"Verification successful"}</styled.Text>
        </styled.messageContainer>
      )}
    </styled.container>
  );
};

export default PageHOC(Verification);

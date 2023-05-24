/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";

import * as styled from "./VerificationStyles";
import HttpError from "../../HttpServices/Error/HttpError";
import useQuery from "HttpServices/Hooks/useQuery";
import { AppContext } from "Context/AppContext";

const Verification = () => {
  const { token } = useParams();
  const { setAccessToken } = useContext(AppContext);
  const { data, isLoading, error } = useQuery({ url: `verification/${token}` });
  useEffect(() => {
    if (data) setAccessToken(data.accessToken);
  }, [data]);
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

export default Verification;

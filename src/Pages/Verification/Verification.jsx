/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";

import * as styled from "./VerificationStyles";
import { postResource } from "../../HttpServices/Post/postData";
import HttpError from "../../HttpServices/Error/HttpError";

const Verification = () => {
  const [response, setResponse] = useState({
    message: null,
    type: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useParams();
  useEffect(() => {
    postResource("backend", token, null, setIsLoading, setResponse, response);
  }, [token]);
  return (
    <styled.container>
      {isLoading && <styled.loader></styled.loader>}
      {response.type === "failed" && (
        <HttpError message={response.message} size={"large"} />
      )}
      {response.type === "success" && (
        <styled.messageContainer>
          <FaRegCheckCircle size={18} className="success" />
          <styled.Text>{response.message}</styled.Text>
        </styled.messageContainer>
      )}
    </styled.container>
  );
};

export default Verification;

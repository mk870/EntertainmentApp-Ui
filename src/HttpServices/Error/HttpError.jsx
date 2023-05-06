import React from "react";
import {IoAlertCircleOutline} from 'react-icons/io5'

import * as styled from "./HttpErrorStyles";

const HttpError = ({ message, size }) => {
  return (
    <styled.errorContainer size={size}>
      <IoAlertCircleOutline size={28} color="red"/>
      <styled.text size={size}>{message}</styled.text>
    </styled.errorContainer>
  );
};

export default HttpError;

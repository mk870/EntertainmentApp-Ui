import React from "react";
import { BiLoader } from "react-icons/bi";
import * as styled from "./SpinnerStyles";

const Spinner = () => {
  return (
    <styled.container>
      <BiLoader size={14} className="card-loader" />
    </styled.container>
  );
};

export default Spinner;

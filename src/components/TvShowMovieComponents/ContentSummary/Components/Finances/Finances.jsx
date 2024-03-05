import React from "react";
import * as styled from "../Styles";

const Finances = ({ budget, revenue }) => {
  return (
    <styled.row>
      <styled.subContainer>
        <styled.subHeaderText>{"Budget:"}</styled.subHeaderText>
        <styled.subHeaderText>{budget}</styled.subHeaderText>
      </styled.subContainer>
      <styled.subContainer>
        <styled.subHeaderText>{"Revenue:"}</styled.subHeaderText>
        <styled.subHeaderText>{revenue}</styled.subHeaderText>
      </styled.subContainer>
    </styled.row>
  );
};

export default Finances;

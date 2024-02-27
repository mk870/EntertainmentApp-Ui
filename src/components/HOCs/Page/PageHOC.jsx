import React from "react";
import * as styled from "./PageHOCStyles";

const PageHOC = (Page) => {
  const usePageWrapper = (props) => {
    return (
      <styled.Container>
        <Page {...props} />
      </styled.Container>
    );
  };
  return usePageWrapper;
};

export default PageHOC;

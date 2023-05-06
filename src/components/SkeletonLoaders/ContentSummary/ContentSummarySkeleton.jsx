import React from "react";
import * as styled from "./ContentSummarySkeletonStyles";

const ContentSummarySkeleton = () => {
  return (
    <styled.container>
      <styled.contentWrapper>
        <styled.poster></styled.poster>
        <styled.detailsContainer>
          <styled.text></styled.text>
          <styled.text></styled.text>
          <styled.text></styled.text>
          <styled.text></styled.text>
          <styled.text></styled.text>
          <styled.text></styled.text>
          <styled.text></styled.text>
          <styled.lastText></styled.lastText>
        </styled.detailsContainer>
      </styled.contentWrapper>
    </styled.container>
  );
};

export default ContentSummarySkeleton;

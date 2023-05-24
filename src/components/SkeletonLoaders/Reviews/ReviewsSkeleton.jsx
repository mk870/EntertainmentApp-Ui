import React from "react";
import * as styled from "./ReviewsSkeletonStyles";

const ReviewsSkeleton = () => {
  const dummyReviews = [0, 1, 2];
  return (
    <styled.container>
      {dummyReviews.map((review) => (
        <styled.review key={review}>
          <styled.reviewerDetails>
            <styled.reviewerImage></styled.reviewerImage>
            <styled.reviewerInfo>
              <styled.reviewerInfoText></styled.reviewerInfoText>
              <styled.reviewerInfoText></styled.reviewerInfoText>
              <styled.reviewerInfoText></styled.reviewerInfoText>
            </styled.reviewerInfo>
          </styled.reviewerDetails>
          <styled.text></styled.text>
          <styled.text></styled.text>
          <styled.text></styled.text>
          <styled.text></styled.text>
          <styled.text></styled.text>
          <styled.text></styled.text>
          <styled.lastText></styled.lastText>
        </styled.review>
      ))}
    </styled.container>
  );
};

export default ReviewsSkeleton;

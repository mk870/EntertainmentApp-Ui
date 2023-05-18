import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

import * as styled from "./ReviewsStyles";
import reviewsImage from "Assets/review.jpg";

const Reviews = ({ reviews }) => {
  const [showMoreReviews, setShowMoreReviews] = useState(false);
  const getRatingsIcon = (rating) => {
    return Array.from({ length: rating }, () => <AiFillStar color="gold" />);
  };
  const getDate = (dateData) => {
    return dateData.split("T")[0];
  };
  const reviewerAvatar = (avatar) => {
    if (!avatar) return reviewsImage;
    else {
      if (avatar.includes("https://www.")) return reviewsImage;
      else return `https://image.tmdb.org/t/p/w500/${avatar}`;
    }
  };
  const togglesReviews = () => {
    setShowMoreReviews((value) => !value);
  };
  const toggledReviewList = () => {
    if (!showMoreReviews) {
      if (reviews.length > 3) {
        return reviews.slice(0, 3);
      } else return reviews;
    } else return reviews;
  };
  const iconSize = 18;
  const cleanTextSnippets = (snippet) => {
    return snippet.replace(/(https?|ftp):\/\/[.[a-zA-Z0-9/-]+/, " ");
  };
  return (
    <styled.ReviewsWrapper>
      <styled.header>
        <styled.headerText>
          {reviews.length > 0 ? "Reviews" : "No Reviews Found"}
        </styled.headerText>
        {reviews.length > 3 && (
          <styled.linkContainer>
            <styled.linkText onClick={togglesReviews}>
              {showMoreReviews ? "show less" : "show more"}
            </styled.linkText>
            {showMoreReviews ? (
              <IoIosArrowUp size={iconSize} onClick={togglesReviews} />
            ) : (
              <IoIosArrowDown size={iconSize} onClick={togglesReviews} />
            )}
          </styled.linkContainer>
        )}
      </styled.header>
      {toggledReviewList().map((review) => (
        <styled.review key={review.id}>
          <styled.reviewerDetails>
            <styled.reviewerImage
              src={reviewerAvatar(review.author_details.avatar_path)}
              alt="avatar"
            />
            <styled.reviewerInfo>
              <styled.name>{review.author}</styled.name>
              <styled.date>{getDate(review.created_at)}</styled.date>
              <styled.ratingContainer>
                <styled.iconContainer>
                  {getRatingsIcon(review.author_details.rating).map((icon,index) => (
                    <div className="reviews-icon" key={index}>{icon}</div>
                  ))}
                </styled.iconContainer>
                <styled.rating>{review.author_details.rating}</styled.rating>
              </styled.ratingContainer>
            </styled.reviewerInfo>
          </styled.reviewerDetails>
          <styled.reviewText>{cleanTextSnippets(review.content)}</styled.reviewText>
        </styled.review>
      ))}
    </styled.ReviewsWrapper>
  );
};

export default Reviews;

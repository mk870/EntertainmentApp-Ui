import styled from "styled-components";
import { secondaryThemeColor } from "../../../Css/Variables";

export const ReviewsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5px;
`;

export const header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom:20px;
`;
export const headerText = styled.p`
  font-size: 18px;
  font-weight: 800;
  color: ${secondaryThemeColor};
  margin: 0 0 0 10px;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
export const linkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${secondaryThemeColor};
  margin-right: 1%;
  &:hover {
    cursor: pointer;
    text-decoration:underline;
  }
  @media (max-width: 500px) {
    margin-right: 2.5%;
  }
  @media (max-width: 410px) {
    margin-right: 5%;
  }
`;
export const linkText = styled.p`
  font-size: 13px;
  font-weight: 300;
  margin-right: 5px;
`;

export const review = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 98%;
  margin-left: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${secondaryThemeColor};
  padding-bottom: 7px;
  @media (max-width: 500px) {
    width: 95%;
  }
  @media (max-width: 410px) {
    width: 90%;
  }
`;

export const reviewerDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  gap: 15px;
  flex: 1;
  margin-bottom: 10px;
`;

export const reviewerImage = styled.img`
  width: 180px;
  height: 160px;
  border-radius: 10px;
  @media (max-width: 500px) {
    width: 120px;
    height: 100px;
  }
`;
export const reviewerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  flex: 1;
`;
export const name = styled.p`
  font-size: 15px;
  font-weight: 800;
  color: ${secondaryThemeColor};
  margin: 0 0 7px 0;
`;
export const date = styled.p`
  font-size: 14px;
  color: ${secondaryThemeColor};
  margin: 0 0 7px 0;
`;
export const ratingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
`;
export const iconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 3px;
  .reviews-icon {
    font-size: 17px;
    @media (max-width: 380px) {
      font-size: 12px;
    }
  }
  @media (max-width: 330px) {
    gap: 2px;
  }
`;
export const rating = styled.p`
  font-size: 14px;
  color: ${secondaryThemeColor};
  margin: 0 0 0 7px;
`;
export const reviewText = styled.p`
  font-size: 14px;
  color: ${secondaryThemeColor};
  margin: 0;
`;

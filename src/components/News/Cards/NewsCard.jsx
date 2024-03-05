import React from "react";
import HTMLReactParser from "html-react-parser";
import moment from "moment/moment";

import * as styled from "./NewsCardStyles";
import backupImage from "Assets/news.jpg";

const NewsCard = ({ newsItem }) => {
  const source = (data) => {
    if (!data) {
      return "Null";
    } else {
      return HTMLReactParser(data);
    }
  };
  const author = (data) => {
    if (!data) {
      return "Unknown Author";
    } else {
      const newdata = HTMLReactParser(data.split("\n")[0]);
      if (newdata.includes("https:")) {
        return new URL(newdata).hostname.replace("www.", "");
      } else {
        return newdata;
      }
    }
  };
  const getImage = (image) => {
    if (image) return image;
    else return backupImage;
  };
  return (
    <styled.Container>
      <styled.LinkUrl href={newsItem.url} target="_blank" rel="noreferrer">
      <styled.Image src={getImage(newsItem.urlToImage)} alt="news" />
        <styled.TitleWrapper>
        <styled.TitleText>
          {newsItem.title.length > 100
            ? `${newsItem.title.substring(0, 100)}...`
            : newsItem.title}
        </styled.TitleText>
        </styled.TitleWrapper>
        <styled.SourceWrapper>
          <styled.Text>{author(newsItem.author)}</styled.Text>
          <styled.Text>{source(newsItem.source.name)}</styled.Text>
          <styled.PublishmentTime>
            {moment(newsItem.publishedAt).startOf("ss").fromNow()}
          </styled.PublishmentTime>
        </styled.SourceWrapper>
      </styled.LinkUrl>
    </styled.Container>
  );
};

export default NewsCard;

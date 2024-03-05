import React, { useState } from "react";

import * as styled from "./PaginatorStyles"
import NewsCard from "components/News/Cards/NewsCard";

const Paginator = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit] = useState(5);
  const [maxPageLimit, setMaxPageLimit] = useState(4);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageLinkClick = (number) => {
    setCurrentPage(number);
  };
  const pageLinks = pages.map((page) => {
    if (page < maxPageLimit + 1 && page > minPageLimit) {
      return (
        <styled.pageLink
          key={page}
          onClick={() => handlePageLinkClick(page)}
          isActive={page === currentPage ? true : false}
        >
          {page}
        </styled.pageLink>
      );
    } else return null;
  });
  const handleNext = () => {
    setCurrentPage((value) => value + 1);
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit((value) => value + pageNumberLimit);
      setMinPageLimit((value) => value + pageNumberLimit);
    }
  };
  const handlePrev = () => {
    setCurrentPage((value) => value - 1);
    if (currentPage - 1 === minPageLimit) {
      setMaxPageLimit((value) => value - pageNumberLimit);
      setMinPageLimit((value) => value - pageNumberLimit);
    }
  };
  return (
    <styled.container>
      <styled.grid>
        {currentItems.map((content, index) => (
          <NewsCard key={index} newsItem={content} />
        ))}
      </styled.grid>
      {data.length > itemsPerPage && (
        <styled.paginationLinksContainer>
          {currentPage > 1 && (
            <styled.nextPrevLink onClick={handlePrev}>prev</styled.nextPrevLink>
          )}
          {minPageLimit > pages[0] && (
            <styled.incrementDecrementLink onClick={handlePrev}>
              &hellip;
            </styled.incrementDecrementLink>
          )}
          {pageLinks}
          {maxPageLimit < pages[pages.length - 1] && (
            <styled.incrementDecrementLink onClick={handleNext}>
              &hellip;
            </styled.incrementDecrementLink>
          )}
          {currentPage < pages.length && (
            <styled.nextPrevLink onClick={handleNext}>next</styled.nextPrevLink>
          )}
        </styled.paginationLinksContainer>
      )}
    </styled.container>
  );
};

export default Paginator;

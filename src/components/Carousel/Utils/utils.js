export const carouselList = (numberOfItemsShown, dataList) => {
  const updatedDataList = [];
  let itemsPerCarouselPage = [];
  for (let i = 0; i < dataList.length; i++) {
    if (itemsPerCarouselPage.length < numberOfItemsShown) {
      itemsPerCarouselPage.push(dataList[i]);
    }
    if (itemsPerCarouselPage.length === numberOfItemsShown) {
      updatedDataList.push(itemsPerCarouselPage);
      itemsPerCarouselPage = [];
    }
  }
  return updatedDataList;
};

export const itemsShownPerScreenSize = (screenSize) => {
  if (screenSize > 1940) {
    return 6;
  } else if (screenSize > 1585) {
    return 5;
  } else if (screenSize > 1350) {
    return 4;
  } else if (screenSize > 1150) {
    return 3;
  } else if (screenSize > 980) {
    return 2;
  } else if (screenSize > 760) {
    return 4;
  } else if (screenSize > 570) {
    return 3;
  } else if (screenSize > 400) {
    return 2;
  } else return 1;
};

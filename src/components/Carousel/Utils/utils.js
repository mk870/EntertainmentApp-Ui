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
  } if (screenSize <= 1940 && screenSize > 1585) {
    return 5;
  } if (screenSize <= 1585 && screenSize > 1350) {
    return 4;
  } if (screenSize <= 1350 && screenSize > 1150) {
    return 3;
  } if (screenSize <= 1150 && screenSize > 980) {
    return 2;
  } if (screenSize <= 980 && screenSize > 935) {
    return 4;
  } if (screenSize <= 935 && screenSize > 760) {
    return 4;
  }if (screenSize <= 760 && screenSize > 570) {
    return 3;
  }
if (screenSize <= 570 && screenSize > 400) {
  return 2;
}
  if (screenSize <= 400) {
    return 1;
  }
};

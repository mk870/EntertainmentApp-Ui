export const getReleaseDate = (date) => {
  if (date) {
    return `${date}`
  } else {
    return "no date";
  }
};
export const getImage = (image) => {
  if (image) return `https://image.tmdb.org/t/p/w500/${image}`;
  else return null;
};
export const getHeader = (text) => {
  if (text) return text;
  else return "no data";
};
export const getRating = (rate) => {
  if (rate) return `${rate}`;
  else return "no rating";
};
export const getGenres = (list) => {
  if (list) {
    if (list.length > 0) return list;
    else return null;
  } else return null;
};
export const getOverview = (paragraph) => {
  if (paragraph) return paragraph;
  else return "no summary data";
};
export const getRuntime = (list) => {
  if (list.length > 0) return `${list[0]} mins`;
  else return "no runtime data";
};
export const getCreators = (list)=>{
  if(list.length > 0){
    return list
  }else{
    return null
  }
}

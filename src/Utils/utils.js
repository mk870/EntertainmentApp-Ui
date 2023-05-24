export const backendUrl = "http://localhost:8080/";

export const passwordValidator = (
  setIsPasswordValidationError,
  passwordValue
) => {
  const regexPasswordValidator = new RegExp(
    "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (regexPasswordValidator.test(passwordValue)) {
    setIsPasswordValidationError(false);
  } else {
    setIsPasswordValidationError(true);
  }
};

export const emailValidator = (setIsEmailValidationError, emailValue) => {
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      emailValue
    )
  ) {
    setIsEmailValidationError(true);
  } else {
    setIsEmailValidationError(false);
  }
};

export const passwordGuideLines = [
  "longer than 8 characters",
  "have atleast 1 special character",
  "have atleast 1 number",
  "have atleast 1 capital letter",
];

export const shortenString = (text, maxNumberOfWords) => {
  const maxWords = maxNumberOfWords + 1;
  if(text.length > maxNumberOfWords) return `${text.substring(0, maxWords)}...`;
  else return text
};

export const cleanTextSnippets = (snippet) => {
  if(snippet) return snippet.replace(/(https?|ftp):\/\/[.[a-zA-Z0-9/-]+/, " ");
  else return ""
};

export const convertArtistListToString = (artists)=>{
  let artistsNames = ""
  if(artists.length>0){
    for (let i = 0; i < artists.length; i++) {
      if(i < artists.length - 1) {
        artistsNames += `${artists[i].name},`
      }else artistsNames += `${artists[i].name}`
    }
  }
  return artistsNames
}

export const tmdbKey = process.env.REACT_APP_TMD_API_KEY;
export const youtubeKey = process.env.REACT_APP_YOUTUBE_API_KEY;

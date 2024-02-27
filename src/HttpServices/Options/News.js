import { newsApiKey } from "Utils/utils";

export const newsoptions =(category,count)=> {
 return(
   {
     method: 'GET',
     url: 'https://bing-news-search1.p.rapidapi.com/news/search',
     params: {q: `${category}`, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off',count:`${count}`},
     headers: {
       'x-bingapis-sdk': 'true',
       'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
       'x-rapidapi-key': newsApiKey
     }
   }
 )

};
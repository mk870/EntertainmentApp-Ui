# TubeMax (React Frontend) <img src="https://i.ibb.co/cv4GRqX/logo.png"  alt="logo5" border="0" align="center" width="100" border-radius="15">
<img src="https://i.ibb.co/XCg7GTR/home.png" alt="moviehome" border="0">

## Project Summary 
* This app allows you to search and access your favourite movies, tv shows, music, artists, albums and actors.
* The app also allows you to add and delete your favourite movies, tvshows, songs, albums, artists and actors in your own account via its [***Golang Gin server***](https://github.com/mk870/EntertainmentApp-Server). 
* Another feature is that it allows you to watch movie trailers and reviews and also song videos through the youtube api.
### Project Steps :
* The app has 15 pages created using react-router (homepage, myMovies, myActors, myAlbums,myArtists, videos, , login, actor, movie, artists, artist,verification, music,tvshows and signup page)
* This app consumes 1 custom made api, a golang gin app with a postgreSQL database.
* Finally, styled-components was used to style the entire application.

### **Resources Used**
***
**React Version :** 17.0.2  

**Language Used :** Javascript

**Dependencies**:  React-router, React-icons, styled-components, react-context, redux, react-loader-spinner and axios.  

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)	![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white) ![Spotify](https://img.shields.io/badge/Spotify-1ED760?style=flat&logo=spotify&logoColor=white)

**For Web Framework Requirements**: npm install

**APIs**: tmdb, youtube ,context Api, spotify and [***Golang Gin server***](https://github.com/mk870/EntertainmentApp-Server)  



<img src="https://i.ibb.co/jDtWp87/info.png" alt="Movie-Plus-1" border="0">

### **Movie and TvShow Info**  
* The app displays  more movie and tvshow information, these include the cast and the reviews thanks to the TMDB api.


<img src="https://i.ibb.co/1qXLgtL/track.png" alt="cast" border="0">

### **Album and Song Info**  
* The app displays  more movie and tvshow information, these include the cast and the reviews thanks to the TMDB api.


<img src="https://i.ibb.co/vjsNY8x/actor.png" alt="cast" border="0">

### **Actor and Artist Info**  
* Actors's bio, age, featured movie-list etc are also diplayed by the app on the clicked actor's page.
* Used react-router (dynamic routing) feature to achieve this.  

<img src="https://i.ibb.co/ydpk2kg/videos.png" alt="Movie-Plus-3" border="0">

### **Movie trailer, tvshow episode snippets, music videos and videos reviews**  
* This is rendered in the videos page, the youtube api is consumed to return the appropriate video data and an html iframe displays the video to the client.

### **MyMovies, MyTvShows and MyActors**  
* The client's movies, tvshows and actors are created, deleted and saved via a restful [***Golang Gin server***](https://github.com/mk870/EntertainmentApp-Server) to a postgreSQL database.
* The client can access, delete his/her movies, tvshows and actors on  his/her account.

### **MySongs, MyAlbums and MyArtists**  
* The client's songs, albums and artists are created, deleted and saved via a restful [***Golang Gin server***](https://github.com/mk870/EntertainmentApp-Server) to a postgreSQL database.
* The client can access, delete his/her songs, albums and artists on  his/her account.

### **Productionization**
Deployed the app to Vercel.

**Live Implemantation:** [TubeMax](https://tube-max.vercel.app/)



import Snackbar from "components/Snackbar/Snackbar";
import React, { useEffect, useRef, useState } from "react";

const withSpotifyNotification = (Component) => {
  return (props) => {
    const [getSpotifyAccessToken, setGetSpotifyAccessToken] = useState(false);
    const snackBarRef = useRef(null);
    useEffect(() => {
      if (getSpotifyAccessToken && snackBarRef.current) {
        snackBarRef.current.showPopup();
      }
    }, [getSpotifyAccessToken, snackBarRef]);
    return (
      <>
        <Component
          setGetSpotifyAccessToken={setGetSpotifyAccessToken}
          {...props}
        />
        {getSpotifyAccessToken && (
          <Snackbar
            message={"your spotify session has expired"}
            type={"getSpotifyAccessToken"}
            ref={snackBarRef}
          />
        )}
      </>
    );
  };
};

export default withSpotifyNotification;

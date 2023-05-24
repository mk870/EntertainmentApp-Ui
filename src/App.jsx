/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Layout from "./components/Layout/Layout";
import { AppContext } from "./Context/AppContext";
import { Globalstyles } from "./GlobalStyles/GlobalStyles";
import RoutesList from "./Routes/RoutesList";
import { useLocaleStorage } from "./HttpServices/Hooks/useLocalStorage";
import useFetchSpotifyAccessToken from "./HttpServices/Hooks/music/useFetchSpotifyAccessToken";
import Snackbar from "./components/Snackbar/Snackbar";
import { addEmailAddress, addFirstName } from "Redux/Slices/UserSlice";

function App() {
  const [accessToken, setAccessToken] = useLocaleStorage(null, "tubeMaxToken");
  const [deletedItemId, setDeletedItemId] = useState(null);
  const notificationsBarRef = useRef(null);
  const appRoutes = RoutesList(accessToken);
  const dispatch = useDispatch();
  const { spotifyAccessTokenError } = useFetchSpotifyAccessToken();
  useEffect(() => {
    if (accessToken) {
      const userProfile = jwt_decode(accessToken);
      dispatch(addFirstName(userProfile.FirstName));
      dispatch(addEmailAddress(userProfile.Email));
    }
  }, [accessToken]);
  useEffect(() => {
    if (spotifyAccessTokenError && notificationsBarRef.current) {
      notificationsBarRef.current.showPopup();
    }
  }, [spotifyAccessTokenError, notificationsBarRef]);
  return (
    <AppContext.Provider
      value={{
        accessToken,
        setAccessToken,
        deletedItemId,
        setDeletedItemId
      }}
    >
      <BrowserRouter>
        <Globalstyles />
        <Layout>
          <Routes>
            {appRoutes.routes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
      {spotifyAccessTokenError && (
        <Snackbar
          message={spotifyAccessTokenError}
          type={"failed"}
          ref={notificationsBarRef}
        />
      )}
    </AppContext.Provider>
  );
}

export default App;

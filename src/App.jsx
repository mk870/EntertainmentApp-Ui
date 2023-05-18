/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import { AppContext } from "./Context/AppContext";
import { Globalstyles } from "./GlobalStyles/GlobalStyles";
import RoutesList from "./Routes/RoutesList";
import { useLocaleStorage } from "./HttpServices/Hooks/useLocalStorage";
import useFetchSpotifyAccessToken from "./HttpServices/Hooks/useFetchSpotifyAccessToken";
import Snackbar from "./components/Snackbar/Snackbar";

function App() {
  const [accessToken, setAccessToken] = useLocaleStorage(
    null,
    "moviePlusToken"
  );
  const notificationsBarRef = useRef(null);
  const appRoutes = RoutesList(accessToken);
  const { spotifyAccessTokenError } = useFetchSpotifyAccessToken();
  useEffect(() => {
    if (spotifyAccessTokenError && notificationsBarRef.current) {
      notificationsBarRef.current.showPopup();
    }
  }, [spotifyAccessTokenError, notificationsBarRef]);
  return (
    <AppContext.Provider value={{ accessToken, setAccessToken }}>
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

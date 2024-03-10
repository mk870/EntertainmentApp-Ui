import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import { reduxStore } from "./Redux/ConfigStore";
import { googleClientId } from "Utils/utils";

ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// "start": "react-scripts --openssl-legacy-provider start",
//     "build": "react-scripts --openssl-legacy-provider build",

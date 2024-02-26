import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { reduxStore } from './Redux/ConfigStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,document.getElementById('root')
);

// "start": "react-scripts --openssl-legacy-provider start",
//     "build": "react-scripts --openssl-legacy-provider build",
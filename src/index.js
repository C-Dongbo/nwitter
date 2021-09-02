import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
//import firebase from "./fbase" // firebase 9.0.0 아래 버전 사용해야 함 (npm install firebase@8.9.1)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

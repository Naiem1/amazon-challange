import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/style.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './contextAPI/reducer';
import { StateProvider } from './contextAPI/StateProvider';
console.log('StateProvider>>', StateProvider);
console.log('initialState>>', initialState);

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App demoProps={'demoProps'} key={1} />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

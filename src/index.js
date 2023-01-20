import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducers.js';
import App from './containers/App.js'

const store = createStore(searchRobots);

// import CardList from './CardList.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Provider store={store}>
        <App />  
      </Provider>
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

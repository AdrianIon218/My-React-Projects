import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {UserContextProvider} from './components/Context/UserContext';
import NavContexProvider from './components/Context/NavContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <NavContexProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </NavContexProvider>
  </UserContextProvider>);
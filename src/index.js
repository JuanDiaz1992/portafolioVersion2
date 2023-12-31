import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Providers} from "./providers";
// src/App.js
import "./stylesheets/normalize.css"
import 'atropos/css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);



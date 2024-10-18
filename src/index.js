import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: root
  },
  {
    path: "/features",
    element: root
  },
]);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



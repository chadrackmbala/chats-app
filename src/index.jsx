// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles/index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ReactDOM from 'react-dom/client';
import React from 'react';
import './styles/index.css';
import Friend from "./components/friend";
import Layout from "./components/layout";
import Home from "./components/home";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      // {
      //   path: "/firend",
      //   element: <Friend />
      // },
      {
        path: ":id",
        element: <Friend />
      }
    ]
  },
]);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
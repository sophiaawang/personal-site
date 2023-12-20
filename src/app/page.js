'use client'
import React from 'react';
import { App } from './app';
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

// console.log(document.getElementById('root'))
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

const container = document.getElementById('app');
console.log(container)
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <App tab="home" />
  </BrowserRouter>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
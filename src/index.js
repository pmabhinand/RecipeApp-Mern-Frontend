import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import ShareData from './contextAPI/ShareData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShareData>
     <BrowserRouter>
       <App />
     </BrowserRouter>
    </ShareData>
  </React.StrictMode>
);


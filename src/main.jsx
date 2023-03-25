import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDmMAaO08wRRL2OIqsePkyHK1q_6K8blOU",
    authDomain: "portfolio-fa79f.firebaseapp.com",
    projectId: "portfolio-fa79f",
    storageBucket: "portfolio-fa79f.appspot.com",
    messagingSenderId: "216049014952",
    appId: "1:216049014952:web:700fbe0ef7789f3e844a9d",
    measurementId: "G-71GJDJTGE6"
};
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

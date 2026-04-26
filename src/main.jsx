import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/**
 * This is the entry point for your React application.
 * It takes your App component and injects it into the 
 * HTML element with the ID 'root' found in index.html.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

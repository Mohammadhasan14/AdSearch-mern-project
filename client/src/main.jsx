import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-kujafwehrmhlg0mf.us.auth0.com"
    clientId="xEk7MsVLNhUyRLCfAY38dQH4rAlXDeNF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)

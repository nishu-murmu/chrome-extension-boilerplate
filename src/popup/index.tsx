import React from 'react'
import ReactDOM from 'react-dom/client'
import { Popup } from './Popup'
import '../styles/output.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
)

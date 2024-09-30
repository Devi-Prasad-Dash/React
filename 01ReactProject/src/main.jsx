import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function Greet() {
  return (
    <div>
      <h3>Hello World</h3>
    </div>
  )
}

const element = React.createElement(
  'a',
  { href: 'https://google.com', taget: '_blank' },
  'Click this to visit Google'
)

createRoot(document.getElementById('root')).render(
    <App />
)
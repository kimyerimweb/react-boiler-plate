import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

import App from './pages/App'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://sleact.nodebird.com' : 'http://localhost:3005'
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
)

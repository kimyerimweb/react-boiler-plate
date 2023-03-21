import loadable from '@loadable/component'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Page = loadable(() => import('@pages/Page'))

const App = () => (
  <Routes>
    <Route path="/" element={<Page replace to="/page" />} />
    <Route path="/page" element={<Page />} />
  </Routes>
)

export default App

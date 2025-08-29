import React from 'react'
import { Routes, Route } from 'react-router-dom' // Import necessary router components
import { Home } from './pages/Home'
import { Layout } from './pages/Layout'
import { About } from './pages/About'
import './styles/index.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        {/* Use the Layout component to wrap all pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}


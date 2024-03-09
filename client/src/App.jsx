import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Header from './components/Header';
import VolvoUniformPortal from './pages/VolvoUniformPortal';
import SignUp from './pages/SignUp';
import FooterCom from './components/Footer';
import Uniforms from './pages/Uniforms';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Users from './pages/Users';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/uniform-portal" element={<VolvoUniformPortal />} />
        <Route path="/uniforms" element={<Uniforms />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  )
}


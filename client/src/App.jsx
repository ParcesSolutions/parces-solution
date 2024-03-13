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
import Services from './pages/Services';
import PrivateRoute from './components/PrivateRoute';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/projects" element={<Projects/>} />

        {/* Private Routes for signed in users only */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        
        <Route path="/uniform-portal" element={<VolvoUniformPortal />} />
        <Route path="/uniforms" element={<Uniforms />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  )
}


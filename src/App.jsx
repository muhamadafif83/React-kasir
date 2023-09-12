import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// import MainLayout from './components/layout/main.layout'
// import MainNavbar from './components/layout/navbar'
import Home from './components/layout/pages/home'
import Login from './components/layout/pages/login'
import Keranjang from './components/layout/pages/keranjang'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/keranjang" element={<Keranjang/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar'

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Dia23 from './pages/Dia23';
import Dia29 from './pages/Dia29';


function App() {

  return (
    <>
    <BrowserRouter>

      <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dia23" element={<Dia23 />} />
            <Route path='dia29' element={<Dia29 />} />

          </Routes>
        </div>
    </BrowserRouter>
    </>
  )
}

export default App

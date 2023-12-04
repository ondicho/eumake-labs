import { useState } from 'react'
import './App.css'
import Container from './components/layouts/Container';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Staff from './components/pages/Staff';
import Services from './components/pages/Services';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Container Page={Home} />}/>
          <Route exact path="/about-us" element={<Container Page={AboutUs} />}/>
          <Route exact path="/staff" element={<Container Page={Staff} />}/>
          <Route exact path="/services" element={<Container Page={Services} />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App

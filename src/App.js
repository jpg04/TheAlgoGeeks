import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import { Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
            <NavBar/>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contactus" element={<ContactUs/>} />

        </Routes>
    </Router>
    </>
  )
}

export default App

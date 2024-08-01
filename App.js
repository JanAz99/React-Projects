import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AddtocCart from "./Sample/AddtocCart";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './Components/Checkout';




function App() {
  return (
    <div className="App">
      {/* <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer /> */}
      {/* <AddtocCart /> */}
      

      

     
      <Router>
      
      <Routes>
        
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Work" element={<Work />} />
      <Route path="/Testimonial" element={<Testimonial />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Footer" element={<Footer />} />
      
      
        {/* <Route path="/" element={<Work />} /> */}
        <Route path="/AddtocCart" element={<AddtocCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
      
   
      
    </div>

    
    
  );
}

export default App;
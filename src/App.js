
// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from './Components/Navbar'
// import Footer from './Components/footer'
// import Home from './pages/Home/home'
// import Contact from './pages/Contact Page/contact'

// export const App = () => {
  
//   return (
//     <BrowserRouter>
//     <Navbar />
//       <Routes>
//       <Route to="/" element={<Home/>}/>
//       {/* <Route path="/services" element={<Services />}/> */}
//       {/* <Route path="/product" element={<Product />}/> */}
//       <Route path="/contact" element={<Contact />}/>
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   )
// }

// export default App;



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/footer';
import Home from './pages/Home/home';
import Product from './pages/Products/product';
import Contact from './pages/Contact Page/contact';
import Service from './pages/About Page/about';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

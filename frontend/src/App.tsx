import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/navbar";
import { ROUTES } from "./Utils/constants";
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Services from "./Components/Services/services";
import Blog from "./Components/Blog/blog";
import Pricing from "./Components/Pricing/pricing";
import Contact from "./Components/Contact/contact";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.PRICING} element={<Pricing />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

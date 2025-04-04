import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./Utils/constants";
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Services from "./Components/Services/services";
import Blog from "./Components/Blog/blog";
import Pricing from "./Components/Pricing/pricing";
import Contact from "./Components/Contact/contact";
import Layout from "./Components/Layout/layout";
import PropertyPage from "./Components/Propertpage/Propertpage";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path={ROUTES.PRICING} element={<Pricing />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.PROPERTY} element={<PropertyPage />} /> {/* Add PropertyPage route */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

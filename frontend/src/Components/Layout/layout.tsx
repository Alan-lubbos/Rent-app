import React from "react";
import Footer from "../Footer/footer"; // Global footer
import Navbar from "../Navbar/navbar";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar/>
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

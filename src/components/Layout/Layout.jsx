import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { PageContainer } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <PageContainer>{children}</PageContainer>
      <Footer/>
    </div>
  );
};

export default Layout;

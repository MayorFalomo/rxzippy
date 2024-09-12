import About from "@/components/layout/company/About";
import CompanyHero from "@/components/layout/company/CompanyHero";
import Footer from "@/components/layout/homepage/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import React from "react";

const Company = () => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <CompanyHero />
      <About />
      <Footer />
    </div>
  );
};

export default Company;

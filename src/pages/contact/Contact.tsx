import useScrollToTop from "@/components/ScrollToTop";
import ContactHero from "@/components/layout/contact/ContactHero";
import ContactUs from "@/components/layout/contact/ContactUs";
import Footer from "@/components/layout/homepage/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import React from "react";

const Contact: React.FC = () => {
  useScrollToTop();
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactUs />
      <Footer givePadding={true} showForm={true} />
    </div>
  );
};

export default Contact;

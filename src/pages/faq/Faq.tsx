import useScrollToTop from "@/components/ScrollToTop";
import AllFaqContainer from "@/components/layout/faq/AllFaqContainer";
import FaqHero from "@/components/layout/faq/FaqHero";
import Footer from "@/components/layout/homepage/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import React from "react";

const Faq: React.FC = () => {
  useScrollToTop();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <FaqHero />
      <AllFaqContainer />
      <Footer />
    </div>
  );
};

export default Faq;

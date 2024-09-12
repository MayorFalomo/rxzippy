import AllFaqContainer from "@/components/layout/faq/AllFaqContainer";
import Footer from "@/components/layout/homepage/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import React from "react";

const Faq: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <AllFaqContainer />
      <Footer />
    </div>
  );
};

export default Faq;

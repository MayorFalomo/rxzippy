import React from "react";
import Footer from "@/components/layout/homepage/footer/Footer";
import AfforableService from "@/components/layout/services/AfforableService";
import ServiceAreas from "@/components/layout/services/ServiceAreas";
import ServiceDelivery from "@/components/layout/services/ServiceDelivery";
import ServiceHero from "@/components/layout/services/ServiceHero";
import Technology from "@/components/layout/services/Technology";
import { Navbar } from "@/components/navbar/Navbar";
import SmoothScroll from "@/Animation/SmoothScroll";

const Services: React.FC = () => {
  return (
    <SmoothScroll>
      <div className=" overflow-x-hidden">
        <Navbar />
        <ServiceHero />
        <ServiceAreas />
        <Technology />
        <ServiceDelivery />
        <AfforableService />
        <Footer showForm={false} />
      </div>
    </SmoothScroll>
  );
};

export default Services;

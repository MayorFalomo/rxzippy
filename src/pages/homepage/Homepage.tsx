import SubHero from "@/components/layout/homepage/subHero";
import HeroSection from "../../components/layout/homepage/heroSection/HeroSection";
import { Navbar } from "../../components/navbar/Navbar";
import Benefits from "@/components/layout/homepage/benefits/Benefits";
import Testimony from "@/components/layout/homepage/testimonials/Testimony";
import { Courier } from "@/components/layout/homepage/Courier";
import Medicals from "@/components/layout/homepage/Medicals";
import Subscribe from "@/components/layout/homepage/Subcribe";
import Footer from "@/components/layout/homepage/footer/Footer";
import SmoothScroll from "@/Animation/SmoothScroll";
import useScrollToTop from "@/components/ScrollToTop";

const Homepage = () => {
  useScrollToTop();
  return (
    <SmoothScroll>
      <div className=" overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <SubHero />
        <Benefits />
        <Testimony />
        <Courier />
        <Medicals />
        <Subscribe />
        <Footer showForm={true} />
      </div>
    </SmoothScroll>
  );
};

export default Homepage;

import Footer from "@/components/layout/homepage/footer/Footer";
import BestFor from "@/components/layout/medicalCourier/BestFor";
import MedicalHero from "@/components/layout/medicalCourier/MedicalHero";
import MedicalTechnology from "@/components/layout/medicalCourier/lmedicalTech/MedicalTechnology";
import { Navbar } from "@/components/navbar/Navbar";

const MedicalCourier = () => {
  return (
    <div>
      <Navbar />
      <MedicalHero />
      <BestFor />
      <MedicalTechnology />
      <Footer givePadding={true} />
    </div>
  );
};

export default MedicalCourier;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Services from "./pages/services/Services";
import Faq from "./pages/faq/Faq";
import Contact from "./pages/contact/Contact";
import Company from "./pages/company/Company";
import MedicalCourier from "./pages/medicalCourier/MedicalCourier";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import Terms from "./pages/terms&Conditions/Terms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={"/company"} element={<Company />} />
        <Route path={"/medical"} element={<MedicalCourier />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
        <Route path={"/terms-and-conditions"} element={<Terms/>} />
      </Routes>
    </Router>
  );
}

export default App;

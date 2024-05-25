import "./App.css";
import AboutUs from "./components/AboutUs";
import Category from "./components/Category";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import OurService from "./components/OurService";
import Role from "./components/Role";
import Steps from "./components/Steps";

function App() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Category />
      <OurService />
      <Steps />
      <Role />
      <Footer />
    </div>
  );
}

export default App;

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MapSection from "./components/MapSection";
import RandomTipPopup from "./components/RandomTipPopup";
import Review from "./components/Review";
import Services from "./components/Services";
import TipsPage from "./components/TipsPage";



const App = () => {
  return (
    <div>
      <Hero />
      <Services/>
      <MapSection/>
      <TipsPage/>
      <RandomTipPopup/>
      <Review />
      <Footer />
    
    </div>
  );
};

export default App;

import Hero from "./components/Hero";
import Services from "./components/Services";
import MapSection from "./components/MapSection";
import TipsPage from "./components/TipsPage";
import RandomTipPopup from "./components/RandomTipPopup";

const App = () => {
  return (
    <>
      <Hero />
      <Services/>
      <MapSection/>
      <TipsPage/>
      <RandomTipPopup/>
    </>
  );
};

export default App;

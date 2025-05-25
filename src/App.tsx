import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Service } from "./Pages/Service";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Service/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

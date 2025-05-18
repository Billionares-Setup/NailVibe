import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import Services from "./components/Services";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div className="relative bg-gradient-to-tr from-gray-100 via-slate-100 to-white  min-h-screen  overflow-hidden">
        {/* Pinkish Spots Start */}
        <div
          className="fixed left-0 top-[2em] w-[30rem] h-[30rem] rounded-full 
bg-gradient-to-tr from-rose-300 via-pink-300 to-blue-300 
opacity-30 blur-3xl overscroll-none "
        ></div>
        <div
          className="fixed left-1/2 top-[20em] w-[30rem] h-[30rem] rounded-full 
bg-gradient-to-tr from-red-300 via-pink-300 to-blue-300 
opacity-30 blur-3xl  overscroll-none "
        ></div>

        <div
          className="fixed right-0 top-0 w-[20rem] h-[20rem] rounded-full 
bg-gradient-to-tr from-purple-300 via-pink-300 to-blue-300 
opacity-30 blur-3xl  overscroll-none "
        ></div>
        {/* Pinkish Spots End */}
        <Hero />
        <Services />
        <Gallery />
        <Review />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;

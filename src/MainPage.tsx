import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Review from "./components/Review";
import TipsPage from "./components/TipsPage";
import ClosingNotice from "./components/ClosingNotice";
import RandomTipPopup from "./components/RandomTipPopup";

const MainPage = () => {
  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-tr from-gray-100 via-slate-100 to-white">
        {/* Pinkish Spots Start */}
        {/* <div
          className="fixed left-0 top-[2em] w-[30rem] h-[30rem] rounded-full 
bg-gradient-to-tr from-rose-400 via-pink-400 to-blue-400 
opacity-50 blur-3xl overscroll-none "
        ></div>
        <div
          className="fixed left-1/2 top-[20em] w-[30rem] h-[30rem] rounded-full 
bg-gradient-to-tr from-red-400 via-pink-400 to-blue-400 
opacity-50 blur-3xl  overscroll-none "
        ></div>

        <div
          className="fixed right-0 top-0 w-[20rem] h-[20rem] rounded-full 
bg-gradient-to-tr from-purple-400 via-pink-400 to-blue-400 
opacity-40 blur-3xl  overscroll-none "
        ></div> */}
        {/* Pinkish Spots End */}
        <ClosingNotice/>
        <RandomTipPopup/>
        <Hero />
        <Gallery />
        <TipsPage />
        <Review />
      </div>
    </Layout>
  );
};

export default MainPage;

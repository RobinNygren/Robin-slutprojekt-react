import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";

const Root = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <main className="flex-grow bg-bookFlix-colors-background">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Root;

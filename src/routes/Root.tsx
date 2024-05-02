import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";

const Root = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <h1>root</h1>
        <main className="flex-grow"></main>
        <Footer />
      </div>
    </>
  );
};

export default Root;

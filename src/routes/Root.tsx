import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const Root = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <h1>root</h1>
        <main className="flex-grow"></main>
        <Footer />
      </div>
    </>
  );
};

export default Root;

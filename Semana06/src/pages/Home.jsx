import Main from "../components/Main";
import Article from "../components/Article";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <div className="bg-black">
        <Header />
      </div>
      <div className="bg-[#111111]">
        <Main />
      </div>
      <Article />
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}

export default Home;

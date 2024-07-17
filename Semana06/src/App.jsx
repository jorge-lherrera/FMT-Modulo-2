import Article from "./components/Article";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="my my-auto max-w-[120rem] py-[2rem]">
      <Header />
      <Main />
      <Article />
      <Footer />
    </div>
  );
}

export default App;

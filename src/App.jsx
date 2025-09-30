import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Books from "./components/Books";
import Category from "./components/Category";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <Books />
        <Category />
        <AboutUs />
      </div>
    </>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Filter from "./components/Filter/Filter";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Filter />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;

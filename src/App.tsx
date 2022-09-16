import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Filter from "./components/Filter/Filter";
import CardList from "./components/CardList/CardList";
import React from "react";
const Footer = React.lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Filter />
      <CardList />
      <React.Suspense fallback={""}>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;

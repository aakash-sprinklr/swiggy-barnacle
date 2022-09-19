import "./App.css";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import CardList from "./components/CardList/CardList";
import React from "react";
import CarouselWrapper from "./components/CarouselWrapper";
const Footer = React.lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselWrapper />
      <Filter />
      <CardList />
      <React.Suspense fallback={""}>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;

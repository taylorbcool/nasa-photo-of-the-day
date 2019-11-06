import React from "react";
import "./App.css";
import MainCard from "./Components/MainCard";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <MainCard />
      <Footer />
    </div>
  );
}

export default App;

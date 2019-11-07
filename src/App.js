import React from "react";
import "./App.css";
import MainCard from "./Components/MainCard";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
    <CssBaseline />
    <div className="App">
      <Paper className={classes.root}> 
        <h1>NASA Photo of the Day</h1>
        <MainCard />
        <Footer />
      </Paper>
    </div>
    </>
  );
}

export default App;

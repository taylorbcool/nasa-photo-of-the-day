import React from "react";
import "./App.css";
import {CssBaseline, Paper, AppBar, Toolbar, Typography} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import MainCard from "./Components/MainCard";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <CssBaseline />
    <div className="App">
      {/* <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="stretch"
    > */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h2">
              NASA Photo of the Day
            </Typography>
          </Toolbar>
        </AppBar>
        <MainCard />
        {/* <Footer /> */}
      {/* </Grid> */}
    </div>
    </>
  );
}

export default App;

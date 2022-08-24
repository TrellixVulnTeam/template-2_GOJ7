import React, { Component, useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollIndicator from "./components/ScrollIndicator";
import ScrollToTopRoute from "./components/ScrollTopRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import axios from "axios"
import { GlobalDataContext } from './context/context';

function App() {
 
  const id = "63068ef78dbe1018251ca256"
  const [rpdata, setrpdata] = useState({});


  //useEffect para peticion al servidor
  useEffect(() => {
    // console.log(“haciendo fetch”)
    async function fetchData() {
    
      try {
        const response = await axios({
          baseURL: "https://paginasserver.herokuapp.com/api",
          url: `/paginas/${id}`,
          method: "get"
        });
        console.log(response.data)
        //se convierte la data en el objeto
        setrpdata(JSON.parse(JSON.stringify(response.data)));
        // console.log(rpdata)
     
      } catch (error) {
        console.log(error);
     
      }
    };
    fetchData();
  }, [])

  return (
    <>
     <GlobalDataContext.Provider value={{ rpdata }}>
      <Router>
        <ScrollToTopRoute />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <ScrollIndicator />
      </GlobalDataContext.Provider>
    </>
  );
}

export default App;

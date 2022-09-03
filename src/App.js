import React, { Component, useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollIndicator from "./components/ScrollIndicator";
import ScrollToTopRoute from "./components/ScrollTopRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import axios from "axios"
import { GlobalDataContext } from './context/context';
import { ServicesDetail } from "./components/section-components/ServicesDetail";

function App() {
 
  const id = "630d26ec61d35223b4fb13aa"
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:id" element={<ServicesDetail />} />
        </Routes>
      </Router>
      </GlobalDataContext.Provider>
    </>
  );
}

export default App;

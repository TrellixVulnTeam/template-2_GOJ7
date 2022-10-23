import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import axios from "axios"
import { GlobalDataContext } from './context/context';
import Reviews from './pages/Reviews';
import { ServicesDetail } from './components/section-components/ServicesDetail';


function App() {
 
  const id = "63079c7d932b270ea79fcf6a"
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
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:id" element={<ServicesDetail />} />
        </Routes>
      </Router>
      </GlobalDataContext.Provider>
    </>
  );
}

export default App;

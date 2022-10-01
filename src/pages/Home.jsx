import React from "react";
import Appointment from "../components/Appointment";
import Blog3 from "../components/Blog3";
import Footer from "../components/Footer/index";
import Header1 from "../components/Header";
import Hero3 from "../components/Hero3";
import HomeBlock from "../components/BlockHome/index";
import Process2 from "../components/Process";
import AboutFeatured from "../components/AboutFeatured";
import Approch from "../components/Values";
import Directorios from "../components/Directorios/directories";
import Modal from "../components/Modal/ModalHome";

function Home3() {
  return (
    <>
      <Header1 />
      <Hero3 />
      <HomeBlock />
      <Process2 />
      <Directorios />
      <AboutFeatured />
      <Approch />
      <Blog3 />
      <Appointment />
      <Modal />
      <div class="elfsight-app-5ae5e735-1ae6-4cfc-98b7-4e0a8ad82dd9"></div>
      <Footer />
    </>
  );
}

export default Home3;

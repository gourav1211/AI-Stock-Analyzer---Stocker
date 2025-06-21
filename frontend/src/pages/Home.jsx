import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <div id="about">
        <About/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <Footer/>
    </>
  );
};

export default Home;

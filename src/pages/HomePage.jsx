// Import React and all the necessary section components.
import React from "react";
import Hero from "../components/Hero/Hero.jsx";

const HomePage = () => {
  return (
    // We use a Fragment (<>) to wrap all the sections without adding an extra div to the DOM.
    // Biz DOM'ga qo'shimcha div qo'shmasdan barcha section'larni o'rash uchun Fragment (<>) dan foydalanamiz.
    <main>
      <Hero />
    </main>
  );
};

export default HomePage;

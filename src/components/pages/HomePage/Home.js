import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Home;

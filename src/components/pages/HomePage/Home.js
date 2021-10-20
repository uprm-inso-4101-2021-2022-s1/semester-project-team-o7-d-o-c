import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

function Home() {
  return (
    <div className = '/home'>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      {/*<Pricing />*/}
      <HeroSection {...homeObjThree} />
    </div>
  );
}

export default Home;

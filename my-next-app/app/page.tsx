import React from "react";
import Link from "next/link";
import Header from "./components/Header/header";  // Ensure this is the correct path
import Hero from "./components/Hero/hero"

import Hero0 from "./components/Hero0/hero0"
import Hero1 from "./components/Hero1/hero1"
import Hero2 from "./components/Hero2/hero2"
import Hero3 from "./components/Hero3/hero3"
import Hero4 from "./components/Hero4/hero4"
import Hero4a from "./components/Hero4a/hero4a"

import Hero5 from "./components/Hero5/hero5"

import Footer from "./components/Footer/footer"

const Page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Hero0 />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero4a />

      <Hero5 />

      <Footer/>



    </div>
  );
};

export default Page;

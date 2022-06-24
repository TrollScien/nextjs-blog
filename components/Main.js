import Hero from "./Hero";
import Contact from "./Contact";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
// import { useEffect } from "react";

export default function Main() {
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //     console.log(position.coords.latitude + "," + position.coords.longitude);
  //   });
  // });
  return (
    <>
      <Hero />
      <Pricing />
      <Testimonials />
      <Features />
      <Contact />
    </>
  );
}

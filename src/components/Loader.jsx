import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Hero from "./Hero";
import "../styles/Loader.css";

const Loader = () => {
  const loaderRef = useRef(null); // Reference to the loader element
  const loaderTextRef = useRef(null); // Reference to the loading text
  const [showHero, setShowHero] = useState(false); // Track whether to show Hero

  useEffect(() => {
    // Split the LOADING text into individual letters
    const letters = loaderTextRef.current.textContent.split("");
    loaderTextRef.current.innerHTML = letters
      .map((letter) => `<span class="loading-letter">${letter}</span>`)
      .join("");

    // Animate each letter one by one
    const spans = loaderTextRef.current.querySelectorAll(".loading-letter");
    gsap.to(spans, {
      opacity: 1,
      stagger: 0.2, // Delay between each letter
      duration: 0.5, // Duration for each letter to appear
      ease: "power2.inOut",
    });

    // Animate loader out after 2 seconds
    const timer = setTimeout(() => {
      gsap.to(loaderRef.current, {
        y: "-100vh", // Slide up
        duration: 2, // Animation duration
        ease: "power3.inOut", // Smooth easing
        onComplete: () => setShowHero(true), // Show Hero after animation completes
      });
    }, 2000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Loader Section */}
      <div className="loading-container" ref={loaderRef}>
        <h1 className="loading-text" ref={loaderTextRef}>
          LOADING
        </h1>
      </div>

      {/* Render Hero after loader animation */}
      {showHero}
    </div>
  );
};

export default Loader;

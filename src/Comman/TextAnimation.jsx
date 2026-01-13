"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TextAnimation({
  text = "Interested in working together?"
}) {
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = containerRef.current;
    const letters = element.querySelectorAll(".char");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          gsap.fromTo(
            letters,
            {
              y: 80,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              ease: "power4.out",
              duration: 1.2,
              stagger: {
                each: 0.05,
                from: "start",
              },
            }
          );

          observer.disconnect(); // ek baar ke baad band
        }
      },
      {
        threshold: 0.4, // 40% visible hone par
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex justify-center py-40">
      <h2
        ref={containerRef}
        className="text-white text-center text-4xl md:text-6xl font-light tracking-wide leading-tight overflow-hidden"
      >
        {text.split("").map((char, index) => (
          <span key={index} className="char inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
    </div>
  );
}

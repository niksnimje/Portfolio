"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import myImg from "../../../public/assets/Home/MyImage.jpeg";


export default function HeroSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 }
    )
      .from(textRef.current.children, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
      })
      .fromTo(
        imageRef.current,
        { x: 120, clipPath: "inset(0 0 0 100%)" },
        {
          x: 0,
          clipPath: "inset(0 0 0 0)",
          duration: 1,
        },
        "-=0.6"
      );
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-[#f6f4ec] flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div ref={textRef} className="space-y-6">
          <p className="text-sm text-gray-600 flex items-center gap-2">
            👋 Hello there, I'm <span className="font-semibold">Niks</span>
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight text-[#1f2d2b]">
            Empowering brands with <br />
            custom, high-converting <br />
            websites
          </h1>

          <p className="text-gray-600 max-w-md">
            that are appealing, brand-accurate, & user-friendly.
          </p>

          <div className="flex gap-4 pt-2">
            <button className="bg-orange-400 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-500 transition">
              Book Free Discovery Call
            </button>

            <button className="border border-orange-400 text-orange-400 px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-50 transition">
              View Client Projects
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[420px] md:h-[520px] w-full">
          <div
            ref={imageRef}
            className="absolute inset-0 flex justify-center lg:justify-end"
          >
            <Image
              src={myImg} // apni image yaha rakho
              alt="Developer"
              fill
              className="object-cover object-top rounded-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

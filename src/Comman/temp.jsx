"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onFinish }) {
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const containerRef = useRef(null);
  const contentWrapperRef = useRef(null); // Naya Ref: Text aur Progress bar ko control karne ke liye

  const [activeFont, setActiveFont] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fonts = [
      { label: "Playfair Display", css: "var(--font-playfair)" },
      { label: "Orbitron", css: "var(--font-orbitron)" },
      { label: "Rampart One", css: "var(--font-rampart)" },
      { label: "Bebas Neue", css: "var(--font-bebas)" },
      { label: "Amatic SC", css: "var(--font-amatic)" },
      { label: "Italianno", css: "var(--font-italianno)" },
      { label: "Nothing You Could Do", css: "var(--font-nycd)" },
    ];

    /* FONT LOOP */
    const fontTL = gsap.timeline({ repeat: -1 });
    fonts.forEach((font) => {
      fontTL.to(textRef.current, {
        fontFamily: font.css,
        duration: 0.4,
        ease: "power2.out",
        onStart: () => setActiveFont(font.label),
      });
    });

    /* TEXT PULSE */
    gsap.fromTo(
      textRef.current,
      { scale: 0.95 },
      {
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      }
    );

    /* PROGRESS BAR */
    gsap.to(progressRef.current, {
      width: "100%",
      duration: 4,
      ease: "power2.out",
      onUpdate: function () {
        setProgress(Math.round(this.progress() * 100));
      },
    });
  }, []);

  useEffect(() => {
    const panels = gsap.utils.toArray(".shutter-panel");
    const isDesktop = window.innerWidth >= 1024;

    const shutterTL = gsap.timeline({
      delay: 4.2,
      onComplete: () => {
        onFinish?.();
      },
    });

    // --- ERASER EFFECT LOGIC ---
    // Hum contentWrapper ko clip-path ke zariye niche se mita rahe hain
    // inset(top right bottom left) -> bottom ko 100% karne par content gayab ho jayega
    shutterTL.to(contentWrapperRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: isDesktop ? 1.2 : 1.2, 
        ease: "power4.inOut",
    }, 0); // index 0 se start hoga taaki shutter ke saath chale

    if (isDesktop) {
      panels.forEach((panel, index) => {
        shutterTL.to(
          panel,
          {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut",
          },
          index === 0 ? 0 : "-=0.75"
        );
      });
    } else {
      shutterTL.to(panels[0], {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      }, 0);
    }
  }, []);

  return (
    <>
      {/* Humne Content ko ek Wrapper mein dala hai taaki Eraser effect chal sake */}
      <div 
        ref={contentWrapperRef} 
        className="fixed inset-0 z-[105] flex flex-col items-center justify-center "
        style={{ clipPath: "inset(0% 0% 0% 0%)" }} 
      >
        {/* TEXT */}
        <h1
          ref={textRef}
          className="text-[40px] md:text-[70px] lg:text-[90px] font-bold tracking-tight text-black"
        >
          Niks Nimje
        </h1>

        {/* PROGRESS BAR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[260px]">
          <div className="relative h-[4px] w-full overflow-hidden rounded-full bg-black/20">
            <div
              ref={progressRef}
              className="h-full w-0 rounded-full bg-black"
            />
          </div>
          <p className="mt-2 text-center text-[10px] tracking-widest text-black/60">
            {progress}%
          </p>
        </div>
      </div>

      {/* SHUTTER OVERLAY */}
      <div ref={containerRef} className="fixed inset-0 z-[101] flex pointer-events-none">
        <div className="shutter-panel flex-1 bg-gray-400 h-full"></div>
        <div className="shutter-panel flex-1 bg-gray-400 h-full"></div>
        <div className="shutter-panel flex-1 bg-gray-400 h-full"></div>
        <div className="shutter-panel flex-1 bg-gray-400 h-full"></div>
      </div>
    </>
  );
}
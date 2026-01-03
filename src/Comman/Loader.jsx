    "use client";

    import { useEffect, useRef, useState } from "react";
    import gsap from "gsap";

    export default function Loader({ onFinish }) {
    const textRef = useRef(null);
    const progressRef = useRef(null);
    const containerRef = useRef(null);

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
            // scale: 1.05,
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
      onFinish?.(); // 🔥 LOADER HIDE
    },
  });

  /* 🔹 FADE OUT TEXT + PROGRESS (SMOOTH) */
  shutterTL.to(
    [textRef.current, progressRef.current],
    {
      opacity: 0,
      duration: 0.35,
      ease: "power2.out",
    },
    0 // 👈 splits ke start ke sath hi
  );

  /* 🔹 SHUTTER SPLITS ANIMATION */
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
    });
  }
}, []);

    
    return (
        <>
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center z-10">
            
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
    <div
    ref={containerRef}
    className="absolute inset-0 z-10 flex "
    >
    <div className="shutter-panel bg-[#FAFAF8]"></div>
    <div className="shutter-panel bg-[#F6DADA]"></div>
    <div className="shutter-panel bg-[#FAFAF8]"></div>
    <div className="shutter-panel bg-[#F6DADA]"></div>
    </div>

        </>
    );
    }

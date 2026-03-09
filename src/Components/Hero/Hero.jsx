import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import profile from "../../assets/profile.png.jpg";
const Hero = () => {
  const rootRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageWrapRef = useRef(null);
  const statCardRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
      )
        .fromTo(
          subtitleRef.current,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.35",
        )
        .fromTo(
          ctaRef.current,
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55 },
          "-=0.3",
        )
        .fromTo(
          imageWrapRef.current,
          { y: 14, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8 },
          "-=0.55",
        )
        .fromTo(
          statCardRef.current,
          { y: 10, opacity: 0, rotate: -2 },
          { y: 0, opacity: 1, rotate: 0, duration: 0.55 },
          "-=0.55",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="w-full pt-24 sm:pt-28 md:pt-32 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-14">
          <div className="text-center md:text-left">
            <h1
              ref={headlineRef}
              className="text-[color:var(--app-fg)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.06] tracking-tight"
            >
              Hey, This is <br />
              Hasan Mohammed {" "}
              <span className="text-[color:var(--app-accent)]">SanaUllah</span>
            </h1>

            <p
              ref={subtitleRef}
              className="mt-5 sm:mt-6 text-[color:var(--app-muted)] text-lg sm:text-xl font-light italic"
            >
              an interactive Web Developer
            </p>

            <div ref={ctaRef} className="mt-7 sm:mt-9 flex justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full px-7 sm:px-9 py-3.5 sm:py-4
                bg-[color:var(--app-accent)] hover:bg-[color:var(--app-accent-hover)]
                text-white shadow-[0_0_40px_var(--app-glow-strong)] transition-colors"
              >
                Let's Talk <span className="text-xl">→</span>
              </a>
              <span>
                <a ></a>
              </span>
            </div>
          </div>

          {/* Floating Profile Image */}
          <div ref={imageWrapRef} className="relative flex justify-center md:justify-end">
            <div
              className="relative rounded-full flex items-center justify-center
              w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px]
              border-[12px] sm:border-[16px] lg:border-[20px]
              border-[color:var(--app-border)] bg-[color:var(--app-surface)] backdrop-blur-xl"
            >
              <img
                src={profile}
                alt="Profile"
                className="w-[240px] sm:w-[310px] lg:w-[390px] grayscale z-10 rounded-full object-cover"
              />

              {/* Floating stat card */}
              <motion.div
                ref={statCardRef}
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-3 sm:right-0 bottom-10 sm:bottom-16
                bg-[color:var(--app-accent)] text-white px-4 sm:px-5 py-3 sm:py-4
                rounded-2xl z-20 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              >
                <h4 className="text-lg sm:text-xl font-bold">100.36k</h4>
                <p className="text-[11px] sm:text-xs opacity-90">
                  Package project done
                </p>
              </motion.div>
            </div>

            <div className="absolute -z-10 w-72 h-72 sm:w-96 sm:h-96 bg-[color:var(--app-glow)] blur-[140px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
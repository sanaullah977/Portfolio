import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";
import ProjectSection from "../Components/ProjectsOverview/Projects";
import Hero from "../Components/Hero/Hero";
import Contract from "../Components/Contract/Contract";
import TechStack from "../Components/TechStach/TechStack";
import Services from "../Components/Service/Service";
import AboutSection from "../Components/AboutSection/AboutSection";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const scrollAnimScope = useRef(null);
  const topIcons = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JS", icon: FaJs, color: "#F7DF1E" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Node", icon: FaNodeJs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    { name: "Next", icon: SiNextdotjs, color: "#FFFFFF" },
  ];

  const featuredProject = {
    title: "Portfolio Website",
    description:
      "A modern, animated portfolio built with React, React Router, Tailwind CSS, DaisyUI and Framer Motion.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
  };

  const isReversed = false;

  useGSAP(
    () => {
      const icons = gsap.utils.toArray(".top-tech-icon");

      icons.forEach((icon, index) => {
        gsap.fromTo(
          icon,
          { y: 0, opacity: 0.7 },
          {
            y: -18,
            opacity: 1,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: scrollAnimScope.current,
              start: "top+=120 center",
              end: "bottom-=160 center",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: scrollAnimScope },
  );
  return (
    <section
      ref={scrollAnimScope}
      className="min-h-screen flex flex-col items-center justify-center bg-transparent"
    >
      <Hero />

      <AboutSection/>

      <div className="relative min-h-screen w-full bg-transparent flex flex-col items-center pt-20 pb-24 font-sans">
        {/* ১. হেডার টেক্সট */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center z-20 mb-12"
        >
          <h1 className="text-[color:var(--app-fg)] text-2xl md:text-3xl font-light">
            I'm currently looking to join a{" "}
            <span className="text-[color:var(--app-accent)] font-semibold">
              cross-functional
            </span>{" "}
            team
          </h1>
          <p className="text-[color:var(--app-muted)] mt-2 text-sm md:text-base">
            that values improving people's lives through accessible design
          </p>
        </motion.div>

        {/* ২. টপ টেক স্ট্যাক (আইকনস) */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 z-20 mb-16 sm:mb-20">
          {topIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                className="top-tech-icon w-11 h-11 rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                <Icon size={26} color={item.color} />
              </motion.div>
            );
          })}
        </div>

        {/* ৩. কানেক্টিং লাইনস (SVG) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 1000 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {/* প্রতিটি আইকনের জন্য আলাদা কার্ভড লাইন (অ্যানিমেটেড) */}
          {topIcons.map((_, index) => {
            const centerX = 500;
            const spacing = 110;
            const startX =
              centerX + (index - (topIcons.length - 1) / 2) * spacing;
            const controlY = 320 + (index - (topIcons.length - 1) / 2) * 15;

            return (
              <motion.path
                key={index}
                d={`M ${startX},190 Q 500,${controlY} 500,500`}
                stroke="url(#lineGrad)"
                fill="none"
                strokeWidth="1.2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            );
          })}
        </svg>

        {/* ৪. অর্বিটাল ফ্লোর এবং সেন্টার হাব */}
        <div className="relative flex justify-center items-center w-full h-[420px] sm:h-[480px] lg:h-[540px] mt-auto border-b border-transparent  [perspective:1200px]">
          {/* থ্রি-ডি রিং (Perspective Layout + Orbital Flow) */}
          <div
            className="absolute flex justify-center items-center [transform-style:preserve-3d]"
            style={{ transform: "rotateX(68deg) rotateZ(-12deg)" }}
          >
            {/* বড় রিং (শুধু গ্লো লাইন) */}
            <motion.div
              className="rounded-full absolute border border-[color:var(--app-border)]
                            w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] lg:w-[820px] lg:h-[820px]"
              animate={{ rotateZ: 360 }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            />

            {/* বড় রিংয়ের নরম ব্লার গ্লো */}
            <div
              className="rounded-full absolute border border-transparent blur-[6px]
                        w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] lg:w-[820px] lg:h-[820px]"
            /> 

            {/* ছোট রিং (শুধু গ্লো লাইন) */}
            <motion.div
              className="rounded-full absolute border border-[color:var(--app-border)]
                            w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px]"
              animate={{ rotateZ: -360 }}
              transition={{ duration: 26, ease: "linear", repeat: Infinity }}
            />

            {/* ছোট রিংয়ের নরম ব্লার গ্লো */}
            <div
              className="rounded-full absolute border border-transparent blur-[5px]
                        w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px]"
            />

            {/* বড় রিংয়ের ওপর অরবিটাল আইকনস (স্পষ্ট ৩ডি ডেপথ) */}
            <motion.div
              className="absolute w-[820px] h-[820px]"
              animate={{ rotateZ: 360 }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            >
              {topIcons.map((item, index) => {
                const Icon = item.icon;
                const angle = (index / topIcons.length) * 360;
                const radians = (angle * Math.PI) / 180;
                const depth = Math.sin(radians); // -1 থেকে 1
                const scale = 0.7 + (depth + 1) * 0.18; // সামনে এলে বড়
                const translateY = -360 - depth * 26; // ডেপথ অনুযায়ী উপরে/নিচে
                const opacity = 0.35 + (depth + 1) * 0.3; // পিছনে ফেইড

                return (
                  <div
                    key={`${item.name}-outer-orbit`}
                    className="absolute top-1/2 left-1/2 flex items-center justify-center rounded-full
                                        bg-[color:var(--app-surface-2)] border border-[color:var(--app-accent)]/35 shadow-[0_0_22px_var(--app-glow)]"
                    style={{
                      width: `${18 * scale}px`,
                      height: `${18 * scale}px`,
                      transform: `rotate(${angle}deg) translateY(${translateY}px) rotate(-${angle}deg)`,
                      transformOrigin: "center center",
                      opacity,
                      filter: depth > 0 ? "blur(0px)" : "blur(0.6px)",
                      zIndex: depth > 0 ? 30 : 5,
                    }}
                  >
                    <Icon size={15 * scale} color={item.color} />
                  </div>
                );
              })}
            </motion.div>

            {/* ছোট রিংয়ের ওপর অরবিটাল আইকনস (ইনার ৩ডি ডেপথ) */}
            <motion.div
              className="absolute w-[520px] h-[520px]"
              animate={{ rotateZ: 360 }}
              transition={{ duration: 32, ease: "linear", repeat: Infinity }}
            >
              {topIcons.slice(0, 6).map((item, index) => {
                const Icon = item.icon;
                const angle = (index / 6) * 360;
                const radians = (angle * Math.PI) / 180;
                const depth = Math.sin(radians); // -1 থেকে 1
                const scale = 0.9 + (depth + 1) * 0.2; // সামনের দিকে আসলে বড়
                const translateY = -260 - depth * 22; // ডেপথ অনুযায়ী সামান্য উপরে/নিচে
                const opacity = 0.45 + (depth + 1) * 0.3; // পিছনে ফেইড

                return (
                  <div
                    key={`${item.name}-inner-orbit`}
                    className="absolute top-1/2 left-1/2 flex items-center justify-center rounded-full
                                        bg-[color:var(--app-surface-2)] border border-[color:var(--app-accent)]/60 shadow-[0_0_28px_var(--app-glow-strong)]"
                    style={{
                      width: `${20 * scale}px`,
                      height: `${20 * scale}px`,
                      transform: `rotate(${angle}deg) translateY(${translateY}px) rotate(-${angle}deg)`,
                      transformOrigin: "center center",
                      opacity,
                      filter: depth > 0 ? "blur(0px)" : "blur(0.4px)",
                      zIndex: depth > 0 ? 40 : 8,
                    }}
                  >
                    <Icon size={17 * scale} color={item.color} />
                  </div>
                );
              })}

              {/* ছোট গ্লো ডট */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-300/80 rounded-full blur-[2px]" />
            </motion.div>
          </div>

          {/* সেন্ট্রাল গ্লোয়িং লোগো */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 10 }}
            animate={{
              scale: [1, 1.07, 1],
              opacity: [0.9, 1, 0.9],
              y: [0, -4, 0],
              boxShadow: [
                "0 0 60px rgba(129,140,248,0.55)",
                "0 0 95px rgba(129,140,248,0.9)",
                "0 0 60px rgba(129,140,248,0.55)",
              ],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="relative z-20 w-32 h-32 rounded-full flex items-center justify-center border border-purple-200/60 bg-gradient-to-tr from-purple-500/30 via-fuchsia-500/40 to-sky-400/30 backdrop-blur-xl shadow-[0_0_90px_rgba(129,140,248,0.7)]"
          >
            {/* মেইন আইকন (Σ এর মতো) */}
            <div className="text-white text-5xl font-bold tracking-tighter transform scale-y-110">
              Σ
            </div>

            {/* ইনার পালসিং গ্লো */}
            <div className="absolute inset-0 rounded-full bg-purple-500/20" />
          </motion.div>

          {/* ব্যাকগ্রাউন্ড রেডিয়াল গ্রেডিয়েন্ট */}
          <div className="absolute bottom-0 w-full h-[160%] bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.35)_0%,_rgba(76,29,149,0.2)_32%,_transparent_75%)] opacity-80 pointer-events-none" />
        </div>
      </div>

      <TechStack />

      <Services />

      <ProjectSection />
      <Contract />
    </section>
  );
};

export default Home;

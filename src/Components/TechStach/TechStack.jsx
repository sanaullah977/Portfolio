import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const container = useRef();

  const frontendSkills = [
    { name: "HTML5", level: "Expert" },
    { name: "Next.JS", level: "Intermediate" },
    { name: "Firbase", level: "Expert" },
    { name: "Tailwind Css", level: "Intermediate" },
    { name: "JavaScript", level: "Expert" },
    { name: "React.JS", level: "Expert" },
  ];

  const backendSkills = [
    { name: "Node.JS", level: "Expert" },
    // { name: "SQL", level: "Intermediate" },
    { name: "Express.JS", level: "Expert" },
    // { name: "Docker", level: "Intermediate" },
    { name: "MongoDB", level: "Expert" },
    // { name: "Kubernetes", level: "Intermediate" },
  ];

  // GSAP Animation Implementation
 useGSAP(() => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.current,
      start: "top 85%",
      end: "bottom 60%",
      // scrub: 1.2,
      toggleActions: "play none none reverse",
    }
  });

  tl.from(".skill-card", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "expo.out",
    force3D: true
  })
  .from(".skill-item", {
    scale: 0.9,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: "back.out(1.2)",
    force3D: true
  }, "-=0.5");

}, { scope: container });

  return (
    <section
      ref={container}
      className="bg-transparent text-[color:var(--app-fg)] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">Skills</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {/* Frontend Card */}
        <div
          className="skill-card relative rounded-[2rem] sm:rounded-[2.5rem] border border-[color:var(--app-border)]
          bg-[color:var(--app-card-bg)]/65 backdrop-blur-2xl shadow-[0_26px_75px_rgba(0,0,0,0.5)] p-8 sm:p-10 overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_0%_0%,_var(--app-glow)_0%,_transparent_55%),radial-gradient(circle_at_100%_100%,_var(--app-glow-strong)_0%,_transparent_60%)] opacity-60" />
          <div className="relative z-10">
            <h3 className="text-center text-xl font-medium mb-10">Frontend Developer</h3>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              {frontendSkills.map((skill, index) => (
                <SkillItem key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>

        {/* Backend Card */}
        <div
          className="skill-card relative rounded-[2rem] sm:rounded-[2.5rem] border border-[color:var(--app-border)]
          bg-[color:var(--app-card-bg)]/65 backdrop-blur-2xl shadow-[0_26px_75px_rgba(0,0,0,0.5)] p-8 sm:p-10 overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_0%_0%,_var(--app-glow)_0%,_transparent_55%),radial-gradient(circle_at_100%_100%,_var(--app-glow-strong)_0%,_transparent_60%)] opacity-60" />
          <div className="relative z-10">
            <h3 className="text-center text-xl font-medium mb-10">Backend Developer</h3>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              {backendSkills.map((skill, index) => (
                <SkillItem key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Sub-component for individual skill rows
const SkillItem = ({ name, level }) => (
  <div className="skill-item flex items-start gap-3">
    <div className="mt-1 text-[color:var(--app-muted)]">
      {/* Small checkmark icon from the design */}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <div>
      <h4 className="font-bold text-sm uppercase tracking-wide text-[color:var(--app-fg)]">
        {name}
      </h4>
      <p className="text-xs text-[color:var(--app-muted)] capitalize">{level}</p>
    </div>
  </div>
);

export default TechStack;
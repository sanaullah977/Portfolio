import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const container = useRef();

  const services = [
    { title: "Frontend Development", icon: "🔳" },
    { title: "Backend Development", icon: "‹›" },
    { title: "Full Stack Development", icon: "📝" },
  ];

  useGSAP(() => {
    // Initial entrance animation
    gsap.from(".service-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      
      scrollTrigger: {
  trigger: container.current,
  start: "top 60%",
   // scroll এর সাথে animation smooth হবে
}
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="bg-transparent text-[color:var(--app-fg)] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">Services</h2>
        <p className="text-[color:var(--app-muted)] text-sm">What I offer</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card group relative rounded-[2rem] border border-[color:var(--app-border)]
            bg-[color:var(--app-card-bg)]/65 backdrop-blur-2xl p-9 sm:p-10 flex flex-col items-center text-center
            hover:border-[color:var(--app-accent)]/70 transition-colors shadow-[0_26px_75px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_0%_0%,_var(--app-glow)_0%,_transparent_55%),radial-gradient(circle_at_100%_100%,_var(--app-glow-strong)_0%,_transparent_60%)] opacity-60" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="icon-container text-4xl mb-6 text-[color:var(--app-accent)]">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-6 sm:mb-8 max-w-[180px]">
                {service.title}
              </h3>
              <button className="text-[color:var(--app-muted)] text-xs flex items-center gap-2 hover:text-[color:var(--app-fg)] transition-colors">
                View More <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services 
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Contract = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Entry Animations
    tl.from(".avatar-glow", { opacity: 0, scale: 0.8, duration: 1.5 })
      .from(".contact-text > *", { y: 30, opacity: 0, stagger: 0.2 }, "-=1")
      .from(".contact-card", { x: 50, opacity: 0, duration: 1 }, "-=0.8")
      .from(".footer-col", { y: 20, opacity: 0, stagger: 0.1 }, "-=0.5");
  }, { scope: container });

  return (
    <div
      ref={container}
      className="bg-transparent text-[color:var(--app-fg)] min-h-screen"
    >
      {/* Contact Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-10 gap-12 md:gap-16 lg:gap-20 py-20 sm:py-24 lg:py-32">
        <div className="contact-text text-center md:text-left flex flex-col items-center md:items-start">
          <div className="avatar-glow relative mb-6">
            <div className="absolute inset-0 bg-[color:var(--app-glow)] blur-3xl rounded-full scale-150"></div>
            <img src="avatar.png" className="relative w-32 h-32 sm:w-40 sm:h-40 z-10 rounded-full object-cover" alt="Avatar" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Got a project?</h2>
          <p className="text-[color:var(--app-muted)] max-w-xs">
            Conscientious, team-oriented Support Engineer working tirelessly.
          </p>
        </div>

        <div
          className="contact-card relative w-full max-w-md
          rounded-2xl border border-[color:var(--app-border)]
          bg-[color:var(--app-card-bg)]/60
          backdrop-blur-2xl shadow-[0_28px_80px_rgba(0,0,0,0.55)]
          p-8 sm:p-10 overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_0%_0%,_var(--app-glow)_0%,_transparent_55%),radial-gradient(circle_at_100%_100%,_var(--app-glow-strong)_0%,_transparent_60%)] opacity-60" />
          <div className="relative z-10 text-[color:var(--app-fg)]">
          <h3 className="text-[color:var(--app-accent)] text-xl font-bold mb-6">
            Let&apos;s Talk
          </h3>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full border-b border-[color:var(--app-border)] py-2 bg-transparent outline-none focus:border-[color:var(--app-accent)] transition-colors" />
            <input type="email" placeholder="E-mail" className="w-full border-b border-[color:var(--app-border)] py-2 bg-transparent outline-none" />
            <textarea placeholder="Message" className="w-full border-b border-[color:var(--app-border)] py-2 bg-transparent outline-none h-24" />
            <div className="flex justify-between items-center pt-4">
              <button className="text-sm flex items-center gap-2 text-[color:var(--app-muted)]">
                ☁️ Upload file
              </button>
              <button className="bg-[color:var(--app-accent)] hover:bg-[color:var(--app-accent-hover)] text-white px-6 py-2 rounded-full text-sm transition-colors">
                Send Message
              </button>
            </div>
          </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-[color:var(--app-border)] px-4 sm:px-6 lg:px-10 py-10 mt-12 sm:mt-16 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          <div className="footer-col">
            <h4 className="font-bold mb-4">Morfolio</h4>
            <p className="text-xs text-[color:var(--app-muted)]">At dignissim morbi erat vestibulum...</p>
          </div>
          <div className="footer-col">
            <h4 className="text-[color:var(--app-muted)] mb-4">Address</h4>
            <p className="text-xs text-[color:var(--app-muted)]">123456 Newtown, New York</p>
          </div>
          <div className="footer-col">
            <h4 className="text-[color:var(--app-muted)] mb-4">Any Question</h4>
            <p className="text-xs text-[color:var(--app-muted)]">hey1@gmail.com</p>
          </div>
          <div className="footer-col flex gap-4">
             {/* Social Icons */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contract
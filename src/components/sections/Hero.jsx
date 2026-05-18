import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const Hero = () => {
  const container = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-[80vh] w-full flex items-center pt-32 pb-20 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start gap-6 mt-12 md:mt-0">
        <h1 className="flex flex-col text-primary leading-[1.05]">
          <span className="hero-elem font-sans font-semibold text-2xl md:text-3xl text-slate mb-6">
            Hi, I'm M Abhishek
          </span>
          <span className="hero-elem font-sans font-extrabold text-6xl md:text-8xl tracking-tight text-primary">
            Full Stack<br/>Web Developer
          </span>
        </h1>
        <p className="hero-elem text-slate font-sans text-lg md:text-xl max-w-2xl leading-relaxed mt-8">
          I build modern, scalable web applications and intuitive user interfaces. Welcome to my portfolio where you can explore my latest projects and technical work.
        </p>
        <div className="hero-elem mt-10">
          <MagneticButton className="bg-primary text-background border border-primary px-8 py-4 text-lg hover:bg-slate-800" onClick={() => window.location.href='#projects'}>
            View Projects <ArrowRight size={18} />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;

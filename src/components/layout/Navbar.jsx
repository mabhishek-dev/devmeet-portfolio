import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../ui/MagneticButton';

const Navbar = () => {
  const navRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Function to apply state based on scroll
      const updateNavbar = (isScrolled, animate = true) => {
        const duration = animate ? 0.6 : 0;
        
        if (isScrolled) {
          // SCROLLED STATE: Morph into Floating Pill
          gsap.to(containerRef.current, { 
            paddingTop: '24px',
            duration,
            ease: 'power3.inOut'
          });
          gsap.to(navRef.current, { 
            width: '95%',
            maxWidth: '1024px',
            borderRadius: '3rem',
            backgroundColor: 'rgba(255, 255, 255, 0.7)', 
            borderColor: 'rgba(255, 255, 255, 0.8)', 
            backdropFilter: 'blur(24px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
            paddingLeft: '24px',
            paddingRight: '24px',
            duration,
            ease: 'power3.inOut'
          });
        } else {
          // INITIAL STATE: Full Width Header
          gsap.to(containerRef.current, { 
            paddingTop: '0px',
            duration,
            ease: 'power3.inOut'
          });
          gsap.to(navRef.current, { 
            width: '100%',
            maxWidth: '100%',
            borderRadius: '0px',
            backgroundColor: 'rgba(255, 255, 255, 0.4)', 
            borderColor: 'rgba(0, 0, 0, 0.1)', 
            backdropFilter: 'blur(16px)',
            boxShadow: '0 0px 0px rgba(0, 0, 0, 0)',
            paddingLeft: '48px',
            paddingRight: '48px',
            duration,
            ease: 'power3.inOut'
          });
        }
      };

      // Set initial state immediately
      updateNavbar(window.scrollY > 50, false);

      // Create ScrollTrigger
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        onToggle: (self) => updateNavbar(self.isActive)
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none">
      <nav 
        ref={navRef} 
        className="w-full border-b border-black/10 bg-white/40 backdrop-blur-lg px-12 py-5 flex justify-between items-center nav-text text-primary pointer-events-auto"
      >
        <div 
          className="font-sans font-extrabold text-xl tracking-tight cursor-pointer hover:opacity-70 transition-opacity" 
          onClick={() => window.location.href = '/'}
        >
          DevMeet
        </div>

        <MagneticButton className="bg-primary text-background hover:bg-slate-800" onClick={() => window.location.href='#contact'}>
          Connect
        </MagneticButton>
      </nav>
    </div>
  );
};

export default Navbar;

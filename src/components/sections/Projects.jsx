import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        
        // 1. As the NEXT card scrolls up, scale this card down and keep the glass shell slightly visible
        gsap.to(card, {
          scale: 0.95,
          opacity: 0.8,
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true
          }
        });

        // 2. Fade out the inner text/content so it doesn't bleed through the glass!
        const content = card.querySelector('.card-content');
        if (content) {
          gsap.to(content, {
            opacity: 0,
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: cards[i + 1],
              start: 'top bottom',
              end: 'top center', // Fades out faster than the card scales
              scrub: true
            }
          });
        }

        // 3. As the card AFTER NEXT scrolls up, completely hide this card
        if (cards[i + 2]) {
          gsap.to(card, {
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: cards[i + 2],
              start: 'top bottom',
              end: 'top top',
              scrub: true
            }
          });
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={container} className="relative w-full pb-10 pt-10 scroll-mt-24">
      <div className="text-center py-20 px-6">
        <h2 className="font-sans font-extrabold tracking-tight text-5xl md:text-7xl text-primary mb-6">Selected Projects</h2>
        <p className="font-sans text-slate text-lg max-w-xl mx-auto">An interactive showcase of my latest engineering work.</p>
      </div>

      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;

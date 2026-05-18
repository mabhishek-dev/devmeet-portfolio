import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, desc, imageUrl, githubUrl, liveUrl, zIndex }) => {
  return (
    <div className="protocol-card sticky top-0 h-[100dvh] w-full flex items-center justify-center pt-20 pb-10 origin-top" style={{ zIndex }}>
      <div className="w-[95%] max-w-6xl h-[75vh] max-h-[650px] min-h-[500px] bg-white/60 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white overflow-hidden relative">
        <div className="card-content flex flex-col md:flex-row w-full h-full">
          <div className="flex-[1.2] md:flex-1 flex flex-col justify-start md:justify-center z-10 relative pr-0 md:pr-8 lg:pr-12 mb-4 md:mb-0">
            <h3 className="font-sans font-extrabold text-2xl md:text-4xl lg:text-6xl text-primary tracking-tight mb-3 md:mb-6 leading-tight">{title}</h3>
            <p className="font-sans text-sm md:text-base lg:text-lg text-slate leading-relaxed max-w-md mb-4 md:mb-10">{desc}</p>
            <div className="flex gap-6">
              {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-sans font-bold text-primary hover:opacity-70 hover:scale-115 transition-all duration-300"><Github size={20} /> Source Code</a>}
              {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-sans font-bold text-primary hover:opacity-70 hover:scale-115 transition-all duration-300"><ExternalLink size={20} /> Live Demo</a>}
            </div>
          </div>
          <div className="flex-1 h-32 md:h-48 lg:h-full w-full rounded-[2rem] overflow-hidden border border-white/50 bg-white/40 backdrop-blur-md relative flex items-center justify-center shadow-inner mt-2 md:mt-0">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={title} 
                className={`w-full h-full ${title.includes('Vidly') ? 'object-contain p-4' : 'object-cover object-top'}`} 
              />
            ) : (
              <div className="font-mono text-slate/30 text-sm">Image Pending</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

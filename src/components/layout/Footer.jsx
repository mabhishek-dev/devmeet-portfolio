import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-[60] bg-white/60 backdrop-blur-xl border-t border-white px-6 md:px-12 py-4 mt-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-4">
        {/* Logo - Left aligned */}
        <div className="flex justify-center md:justify-start">
          <div
            className="font-sans font-extrabold text-xl tracking-tight text-primary cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => (window.location.href = "/")}
          >
            DevMeet
          </div>
        </div>

        {/* Copyright - Center aligned */}
        <div className="font-sans font-medium text-sm text-slate text-center whitespace-nowrap">
          &copy; {new Date().getFullYear()} M Abhishek. All rights reserved.
        </div>

        {/* Socials - Right aligned */}
        <div className="flex justify-center md:justify-end">
          <ul className="flex gap-4 font-sans text-sm text-slate">
            <li>
              <a
                href="https://github.com/mabhishek-dev"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-primary/10 bg-white/50 flex items-center justify-center hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 hover:scale-115"
              >
                <Github size={18} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mabhishek-dev/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-primary/10 bg-white/50 flex items-center justify-center hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 hover:scale-115"
              >
                <Linkedin size={18} />
              </a>
            </li>
            <li>
              <a
                href="mailto:mabhishekdev444@gmail.com"
                className="w-10 h-10 rounded-full border border-primary/10 bg-white/50 flex items-center justify-center hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 hover:scale-115"
              >
                <Mail size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

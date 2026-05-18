import React, { useState } from "react";
import {
  Mail,
  Github,
  ExternalLink,
  FileText,
  Copy,
  Linkedin,
  Check,
} from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="pt-10 pb-12 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20"
    >
      <div className="bg-white/60 backdrop-blur-2xl border border-white rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
        <div className="relative z-10">
          <h2 className="font-sans font-extrabold text-4xl md:text-6xl text-primary mb-6 tracking-tight">
            Let's connect
          </h2>
          <p className="font-sans text-slate text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            I'm currently available for new opportunities. Let's discuss
            architecture, code, and your vision.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <MagneticButton
              className="bg-primary text-background border border-primary px-6 py-3 text-base hover:bg-slate-800"
              onClick={() =>
                (window.location.href = "mailto:mabhishekdev444@gmail.com")
              }
            >
              <Mail size={16} /> Email Me
            </MagneticButton>
            <MagneticButton
              className="bg-background text-primary border border-slate/20 px-6 py-3 text-base hover:bg-slate-100"
              onClick={() => window.open(import.meta.env.VITE_RESUME_DRIVE_LINK || "#", "_blank")}
            >
              <FileText size={16} /> Resume
            </MagneticButton>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-5xl mx-auto pt-10 border-t border-primary/5">
            {/* Email Column */}
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-white/50 group-hover:scale-115 transition-transform duration-300">
                <Mail size={18} className="text-primary" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">
                  Email
                </span>
                <div className="flex items-center gap-3 relative">
                  <span className="font-sans font-bold text-base md:text-lg text-primary group-hover:scale-110 transition-all duration-300 inline-block origin-center">
                    mabhishekdev444@gmail.com
                  </span>
                  <button
                    onClick={() => copyToClipboard("mabhishekdev444@gmail.com")}
                    className={`p-1.5 rounded-full transition-all duration-300 group-hover:scale-110 hover:scale-125 active:scale-95 origin-center flex items-center justify-center ${copied ? "bg-green-50" : "hover:bg-primary/5"}`}
                  >
                    {copied ? (
                      <Check size={14} className="text-green-500" />
                    ) : (
                      <Copy
                        size={14}
                        className="text-slate/60 hover:text-primary transition-colors"
                      />
                    )}
                  </button>
                </div>
                <div
                  className={`font-mono text-[11px] font-bold text-green-500 transition-all duration-300 ${copied ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                >
                  Copied to clipboard
                </div>
              </div>
            </div>

            {/* GitHub Column */}
            <a
              href="https://github.com/mabhishek-dev"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-white/50 group-hover:scale-115 transition-transform duration-300">
                <Github size={18} className="text-primary" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">
                  GitHub
                </span>
                <span className="font-sans font-bold text-base md:text-lg text-primary group-hover:scale-110 transition-all duration-300 flex items-center gap-2">
                  github.com/mabhishek-dev{" "}
                  <ExternalLink size={14} className="text-slate/40" />
                </span>
              </div>
            </a>

            {/* LinkedIn Column */}
            <a
              href="https://www.linkedin.com/in/mabhishek-dev/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-white/50 group-hover:scale-115 transition-transform duration-300">
                <Linkedin size={18} className="text-primary" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">
                  LinkedIn
                </span>
                <span className="font-sans font-bold text-base md:text-lg text-primary group-hover:scale-110 transition-all duration-300 flex items-center gap-2">
                  linkedin.com/in/mabhishek-dev{" "}
                  <ExternalLink size={14} className="text-slate/40" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

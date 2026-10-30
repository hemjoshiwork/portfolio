'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const { profile } = siteConfig;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[#E5E7EB] bg-white text-[#64748B] text-xs sm:text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E5E7EB]">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                HJ
              </div>
              <span className="font-bold text-[#171923] text-base">
                {profile.name}
              </span>
            </div>
            <p className="text-xs text-[#64748B] max-w-sm">
              Full-Stack Developer &amp; AI Engineer helping businesses solve real problems with custom web products and automation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a href="#projects" className="text-slate-600 hover:text-[#171923] transition-colors">
              Work
            </a>
            <a href="#services" className="text-slate-600 hover:text-[#171923] transition-colors">
              Services
            </a>
            <a href="#process" className="text-slate-600 hover:text-[#171923] transition-colors">
              Process
            </a>
            <a href="#skills" className="text-slate-600 hover:text-[#171923] transition-colors">
              Skills
            </a>
            <a href="#about" className="text-slate-600 hover:text-[#171923] transition-colors">
              About
            </a>
            <a href="#contact" className="text-slate-600 hover:text-[#171923] transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Hem Joshi"
              className="p-2 rounded-lg bg-slate-50 border border-[#E5E7EB] text-slate-600 hover:text-[#171923] hover:bg-slate-100 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-slate-50 border border-[#E5E7EB] text-slate-600 hover:text-[#171923] hover:bg-slate-100 transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-50 border border-[#E5E7EB] text-slate-600 hover:text-[#171923] hover:bg-slate-100 transition-colors shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-slate-50 border border-[#E5E7EB] text-slate-600 hover:text-[#171923] hover:bg-slate-100 transition-colors ml-2 shadow-sm"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] text-center sm:text-left">
          <div>
            &copy; {currentYear} {profile.name}. All rights reserved. Ahmedabad, Gujarat, India.
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px] text-[#64748B]">
            <span>Built with Next.js, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

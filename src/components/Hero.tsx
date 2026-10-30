'use client';

import React from 'react';
import {
  ArrowRight,
  Code2,
  Layers,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  const { headline, supportingCopy, capabilities, techStrip, badge } =
    siteConfig.hero;

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FAFAFC]"
    >
      {/* Ambient background glows - subtle & restrained in light theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] sm:w-[750px] sm:h-[400px] bg-gradient-to-tr from-blue-100/60 via-indigo-50/40 to-violet-100/50 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-12 right-12 w-64 h-64 bg-blue-50/80 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Top Status & Location Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-slate-700 text-xs font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{badge}</span>
            </span>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#64748B]">
              <span className="text-slate-300">•</span>
              <span>Ahmedabad, India</span>
            </div>
          </div>

          {/* Three Main Capability Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {capabilities.map((cap, idx) => (
              <span
                key={cap}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold ${
                  idx === 0
                    ? 'bg-blue-50 border border-blue-200 text-blue-700'
                    : idx === 1
                    ? 'bg-indigo-50 border border-indigo-200 text-indigo-700'
                    : 'bg-purple-50 border border-purple-200 text-purple-700'
                }`}
              >
                {idx === 0 && <Code2 className="w-3.5 h-3.5 text-blue-600" />}
                {idx === 1 && <Layers className="w-3.5 h-3.5 text-indigo-600" />}
                {idx === 2 && <Sparkles className="w-3.5 h-3.5 text-purple-600" />}
                <span>{cap}</span>
              </span>
            ))}
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171923] leading-[1.15]">
            Building Digital Products That Solve{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              Real Business Problems.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            {supportingCopy}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 active:scale-95"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#171923] hover:text-black font-semibold text-sm shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Explore My Work</span>
            </a>
          </div>

          {/* Compact Technology Strip */}
          <div className="pt-8 sm:pt-10">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B] mb-3">
              Core Technologies & Frameworks
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {techStrip.map((tech) => (
                <div
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-[#E5E7EB] text-slate-800 text-xs font-mono font-medium shadow-sm hover:border-slate-300 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

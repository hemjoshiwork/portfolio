'use client';

import React from 'react';
import {
  ArrowRight,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Database,
  ExternalLink,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  const { headline, supportingCopy, capabilities, techStrip, badge } =
    siteConfig.hero;

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] sm:w-[800px] sm:h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-violet-600/15 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Top Status & Capabilities Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-xs font-medium backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{badge}</span>
            </span>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
              <span className="text-slate-600">•</span>
              <span>Ahmedabad, India</span>
            </div>
          </div>

          {/* Three Main Capability Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {capabilities.map((cap, idx) => (
              <span
                key={cap}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/40 border border-blue-800/40 text-blue-300 text-xs font-medium"
              >
                {idx === 0 && <Code2 className="w-3.5 h-3.5 text-blue-400" />}
                {idx === 1 && <Layers className="w-3.5 h-3.5 text-indigo-400" />}
                {idx === 2 && <Sparkles className="w-3.5 h-3.5 text-violet-400" />}
                <span>{cap}</span>
              </span>
            ))}
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Building Digital Products That Solve{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              Real Business Problems.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            {supportingCopy}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-medium text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Explore My Work</span>
            </a>
          </div>

          {/* Compact Technology Strip */}
          <div className="pt-8 sm:pt-10">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Core Technologies & Frameworks
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {techStrip.map((tech) => (
                <div
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg bg-[#111827]/90 border border-slate-800/90 text-slate-300 text-xs font-mono font-medium shadow-sm hover:border-slate-700 hover:text-white transition-colors"
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

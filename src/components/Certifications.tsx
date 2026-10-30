'use client';

import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Certifications() {
  const certifications = siteConfig.certifications;

  return (
    <section id="certifications" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-blue-300 text-xs font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Industry Simulations & Cloud Analytics
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Targeted practical coursework and professional simulations in data modeling and cloud architecture.
          </p>
        </div>

        {/* 2 Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gradient-to-b from-[#111827] to-[#0D121F] border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-blue-400 font-semibold tracking-wide uppercase">
                      {cert.issuer}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed pt-1">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Curriculum Completion</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

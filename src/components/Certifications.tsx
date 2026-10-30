'use client';

import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Certifications() {
  const certifications = siteConfig.certifications;

  return (
    <section id="certifications" className="py-16 sm:py-24 relative bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171923] tracking-tight">
            Industry Simulations & Cloud Analytics
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            Targeted practical coursework and professional simulations in data modeling and cloud architecture.
          </p>
        </div>

        {/* 2 Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white border border-[#E5E7EB] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-blue-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-blue-600 font-semibold tracking-wide uppercase">
                      {cert.issuer}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#171923] mt-0.5">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Curriculum Completion</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

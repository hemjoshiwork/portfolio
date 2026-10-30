'use client';

import React from 'react';
import {
  Search,
  Compass,
  Code,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  Workflow,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Process() {
  const steps = siteConfig.process;

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Code className="w-5 h-5 text-indigo-400" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 4:
        return <Rocket className="w-5 h-5 text-violet-400" />;
      default:
        return <Workflow className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-blue-300 text-xs font-medium">
            <Workflow className="w-3.5 h-3.5" />
            <span>Structured Delivery</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            How We Work Together
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A transparent five-stage engineering process designed to eliminate guesswork, maintain momentum, and deliver high-impact results.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 -z-0 opacity-40" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="rounded-2xl bg-[#111827]/90 border border-slate-800/90 p-5 flex flex-col justify-between hover:border-slate-700 transition-all hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getStepIcon(idx)}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-blue-400 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      {step.title}
                    </h3>
                    <div className="text-[11px] font-medium text-slate-400 mt-0.5">
                      {step.tagline}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="pt-4 border-t border-slate-800/80 mt-4 space-y-1.5">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Deliverables
                  </div>
                  {step.keyDeliverables.map((item, i) => (
                    <div
                      key={i}
                      className="text-[11px] text-slate-300 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-8">
          {/* Vertical Track Line */}
          <div className="absolute top-2 bottom-2 left-2.5 sm:left-3.5 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-violet-600" />

          {steps.map((step, idx) => (
            <div key={step.number} className="relative group">
              {/* Node indicator */}
              <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-md">
                {idx + 1}
              </div>

              {/* Step Card */}
              <div className="rounded-2xl bg-[#111827] border border-slate-800 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/40 text-blue-400">
                      Step {step.number}
                    </span>
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                  </div>
                </div>

                <div className="text-xs font-medium text-slate-400">
                  {step.tagline}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Key Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {step.keyDeliverables.map((item, i) => (
                      <div
                        key={i}
                        className="text-xs text-slate-300 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

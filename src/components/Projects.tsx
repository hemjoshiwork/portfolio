'use client';

import React from 'react';
import {
  Github,
  ExternalLink,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  Info,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import NexusErpMockup from './NexusErpMockup';
import AiAssistantMockup from './AiAssistantMockup';

export default function Projects() {
  const [nexusErp, aiAssistant] = siteConfig.projects;

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-blue-300 text-xs font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Real-World Utility
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A closer look at production systems I have built, combining robust backend engineering, intuitive user experiences, and pragmatic AI capabilities.
          </p>
        </div>

        {/* Project 1: Nexus ERP */}
        <article className="rounded-3xl bg-gradient-to-b from-[#111827] to-[#0D121F] border border-slate-800 p-6 sm:p-10 space-y-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Metadata & Features */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                  {nexusErp.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {nexusErp.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {nexusErp.description}
              </p>

              {/* Technologies Badges */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {nexusErp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Capabilities
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {nexusErp.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                {nexusErp.githubUrl && (
                  <a
                    href={nexusErp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs sm:text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>
                )}

                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 text-xs">
                  <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Illustrative visual preview</span>
                </div>
              </div>
            </div>

            {/* Right Column: Custom Interactive CSS Mockup */}
            <div className="lg:col-span-7">
              <NexusErpMockup />
            </div>
          </div>
        </article>

        {/* Project 2: AI Document Assistant */}
        <article className="rounded-3xl bg-gradient-to-b from-[#111827] to-[#0D121F] border border-slate-800 p-6 sm:p-10 space-y-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Metadata & Features */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400">
                  {aiAssistant.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {aiAssistant.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {aiAssistant.description}
              </p>

              {/* Technologies Badges */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {aiAssistant.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Capabilities
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {aiAssistant.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons & Honest Link Notice */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs sm:text-sm">
                  <Lock className="w-3.5 h-3.5 text-violet-400" />
                  <span>Proprietary / Enterprise Prototype</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 text-xs">
                  <Info className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>Illustrative visual preview</span>
                </div>
              </div>
            </div>

            {/* Right Column: Custom Interactive CSS Mockup */}
            <div className="lg:col-span-7">
              <AiAssistantMockup />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

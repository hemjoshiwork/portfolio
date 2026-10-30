'use client';

import React from 'react';
import {
  Github,
  CheckCircle2,
  Lock,
  Layers,
  Info,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import NexusErpMockup from './NexusErpMockup';
import AiAssistantMockup from './AiAssistantMockup';

export default function Projects() {
  const [nexusErp, aiAssistant] = siteConfig.projects;

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171923] tracking-tight">
            Engineered for Real-World Utility
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            A closer look at production systems I have built, combining robust backend engineering, intuitive user experiences, and pragmatic AI capabilities.
          </p>
        </div>

        {/* Project 1: Nexus ERP */}
        <article className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-8 lg:p-9 space-y-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Metadata & Features */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
                  {nexusErp.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#171923] mt-1">
                  {nexusErp.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {nexusErp.description}
              </p>

              {/* Technologies Badges */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {nexusErp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  Key Capabilities
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {nexusErp.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                {nexusErp.githubUrl && (
                  <a
                    href={nexusErp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>
                )}

                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 border border-[#E5E7EB] text-[#64748B] text-xs">
                  <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
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
        <article className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-8 lg:p-9 space-y-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Metadata & Features */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-600">
                  {aiAssistant.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#171923] mt-1">
                  {aiAssistant.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {aiAssistant.description}
              </p>

              {/* Technologies Badges */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {aiAssistant.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  Key Capabilities
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {aiAssistant.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons & Honest Link Notice */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-[#E5E7EB] text-slate-700 text-xs sm:text-sm font-medium">
                  <Lock className="w-3.5 h-3.5 text-purple-600" />
                  <span>Proprietary / Enterprise Prototype</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 border border-[#E5E7EB] text-[#64748B] text-xs">
                  <Info className="w-3.5 h-3.5 text-purple-600 shrink-0" />
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

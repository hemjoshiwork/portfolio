'use client';

import React from 'react';
import {
  GraduationCap,
  MapPin,
  Mail,
  User,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function About() {
  const { profile } = siteConfig;

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <User className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171923] tracking-tight">
            Developer Mindset. Business-Focused Execution.
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            Connecting robust full-stack software architecture with genuine commercial utility.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-10 space-y-6 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-[#171923] tracking-tight">
              Engineering Practical Software for Real-World Workflows
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              {profile.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Core Values Strip */}
            <div className="pt-4 border-t border-slate-100">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
                Working Principles
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Clear, transparent communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Maintainable, documented code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Thoughtful, root-cause problem solving</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Focused on business utility, not fluff</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Cards & Education */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold">
                    Academic Background
                  </span>
                  <h4 className="text-lg font-bold text-[#171923]">
                    {profile.degree}
                  </h4>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 text-xs sm:text-sm">
                <div className="text-slate-800 font-semibold">{profile.university}</div>
                <div className="text-[#64748B] font-medium">Class of {profile.gradYear}</div>
                <p className="text-slate-600 text-xs pt-2 leading-relaxed">
                  Rigorous computer engineering fundamentals spanning data structures, algorithms, operating systems, relational database systems, and software design principles.
                </p>
              </div>
            </div>

            {/* Location & Remote Availability */}
            <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-semibold">
                    Location & Collaboration
                  </span>
                  <h4 className="text-lg font-bold text-[#171923]">
                    {profile.location}
                  </h4>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                <p className="leading-relaxed">
                  Available for remote freelance engagements with domestic and international clients, comfortably working across timezones with structured asynchronous updates.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-blue-600">
                  <Mail className="w-3.5 h-3.5" />
                  <a href={`mailto:${profile.email}`} className="hover:underline">
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import {
  Globe,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users2,
  Wrench,
} from 'lucide-react';
import { siteConfig, Service } from '@/config/site';

export default function Services() {
  const services = siteConfig.services;

  const handleSelectService = (serviceValue: string) => {
    // Dispatch custom event to select service in contact form
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('select-portfolio-service', { detail: { service: serviceValue } })
      );
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Globe className="w-6 h-6 text-blue-400" />;
      case 1:
        return <Layers className="w-6 h-6 text-indigo-400" />;
      case 2:
        return <Sparkles className="w-6 h-6 text-violet-400" />;
      default:
        return <Globe className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-blue-300 text-xs font-medium">
            <Wrench className="w-3.5 h-3.5" />
            <span>Freelance Services</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tailored Engineering for Growing Businesses
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Direct freelance collaboration designed to solve operational headaches, modernize product displays, and automate repetitive tasks.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="rounded-3xl bg-gradient-to-b from-[#111827] to-[#0D121F] border border-slate-800/90 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-blue-950/10 group"
            >
              <div className="space-y-6">
                {/* Header & Icon */}
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(index)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Target Audience Pill */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                  <div className="text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                    <Users2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Ideal For</span>
                  </div>
                  <p className="text-xs text-slate-300">{service.targetAudience}</p>
                </div>

                {/* What I Offer List */}
                <div className="space-y-2.5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    What&apos;s Included
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {service.offerings.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Used */}
                <div className="pt-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Action Button */}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => handleSelectService(service.serviceValue)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800/90 hover:bg-blue-600 hover:text-white border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:border-blue-500/50"
                >
                  <span>Enquire About {service.title.split('&')[0].trim()}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Note */}
        <div className="max-w-2xl mx-auto text-center text-xs text-slate-500 border-t border-slate-800/80 pt-6">
          <span>
            Every service is offered on a bespoke freelance basis. Scope, deliverables, and timelines are fully customized to match your specific business requirements.
          </span>
        </div>
      </div>
    </section>
  );
}

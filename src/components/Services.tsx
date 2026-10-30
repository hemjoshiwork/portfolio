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
import { siteConfig } from '@/config/site';

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
        return <Globe className="w-6 h-6 text-blue-600" />;
      case 1:
        return <Layers className="w-6 h-6 text-indigo-600" />;
      case 2:
        return <Sparkles className="w-6 h-6 text-purple-600" />;
      default:
        return <Globe className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Wrench className="w-3.5 h-3.5" />
            <span>Freelance Services</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171923] tracking-tight">
            Tailored Engineering for Growing Businesses
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            Direct freelance collaboration designed to solve operational headaches, modernize product displays, and automate repetitive tasks.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <div className="space-y-6">
                {/* Header & Icon */}
                <div className="space-y-3">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform ${
                      index === 0
                        ? 'bg-blue-50 border border-blue-200'
                        : index === 1
                        ? 'bg-indigo-50 border border-indigo-200'
                        : 'bg-purple-50 border border-purple-200'
                    }`}
                  >
                    {getServiceIcon(index)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#171923] group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Target Audience Pill */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-[#E5E7EB] space-y-1">
                  <div className="text-[11px] font-semibold text-[#64748B] flex items-center gap-1.5">
                    <Users2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Ideal For</span>
                  </div>
                  <p className="text-xs font-medium text-slate-700 leading-snug">{service.targetAudience}</p>
                </div>

                {/* What I Offer List */}
                <div className="space-y-2.5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    What&apos;s Included
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {service.offerings.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Used */}
                <div className="pt-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B] mb-1.5">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-medium"
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
                  className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 hover:text-white border border-[#E5E7EB] text-[#171923] text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:border-blue-500 shadow-sm"
                >
                  <span>Enquire About {service.title.split('&')[0].trim()}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Note */}
        <div className="max-w-2xl mx-auto text-center text-xs text-[#64748B] border-t border-[#E5E7EB] pt-6">
          <span>
            Every service is offered on a bespoke freelance basis. Scope, deliverables, and timelines are fully customized to match your specific business requirements.
          </span>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import {
  Code2,
  Layout,
  Server,
  Sparkles,
  Database,
  Terminal,
  Cpu,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Skills() {
  const categories = siteConfig.skillCategories;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Frontend Development':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Backend Engineering':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'AI & Machine Learning':
        return <Sparkles className="w-5 h-5 text-violet-400" />;
      case 'Databases & Storage':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Developer Tools & Platforms':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-blue-300 text-xs font-medium">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Competencies & Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Organized across languages, frameworks, AI retrieval pipelines, and database systems. Focused on practical production delivery without superficial metric bars.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl bg-[#111827]/90 border border-slate-800/90 p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-lg group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      {cat.category}
                    </h3>
                    <p className="text-[11px] text-slate-400">{cat.description}</p>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800/90 text-slate-200 text-xs font-mono hover:border-slate-700 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Pill */}
              <div className="pt-4 mt-4 border-t border-slate-800/70 text-[10px] text-slate-500 font-mono flex items-center justify-between">
                <span>{cat.skills.length} competencies</span>
                <span className="text-emerald-400/80">Production verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

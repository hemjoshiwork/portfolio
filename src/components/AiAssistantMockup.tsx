'use client';

import React, { useState } from 'react';
import {
  FileText,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
} from 'lucide-react';

export default function AiAssistantMockup() {
  const [selectedDoc, setSelectedDoc] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const sampleQuestions = [
    {
      q: 'What failover protocols and RTO targets are specified for regional cluster outages?',
      answer:
        'According to Section 4.2 of the Architecture Specification, the architecture guarantees a Recovery Time Objective (RTO) of under 15 minutes for regional cluster failovers. The protocol triggers automated health probes, isolates degraded nodes, and initiates stateful database replica promotion across secondary availability zones.',
      sources: [
        {
          doc: 'Architecture_Specification_v2.pdf',
          page: 24,
          section: 'Section 4.2: High Availability & Disaster Recovery',
          snippet:
            '...regional cluster redundancy triggers automated failover with an RTO < 15 minutes, ensuring minimal disruption to active client sessions and zero uncommitted transaction loss...',
        },
        {
          doc: 'Enterprise_Security_Whitepaper.pdf',
          page: 12,
          section: 'Section 2.3: Data Replication Guarantees',
          snippet:
            '...asynchronous cross-region replication ensures multi-zone state consistency with verifiable cryptographic checksums prior to promotion...',
        },
      ],
      tokens: 412,
      latency: '~310ms (Groq Llama 3.3 70B)',
    },
    {
      q: 'How does the ingestion pipeline handle chunking and embedding generation for large documents?',
      answer:
        'The ingestion pipeline uses PyPDFLoader to extract document hierarchies, followed by recursive text splitting with a 1,000-character chunk window and 150-character overlap. Each chunk retains metadata (source document ID, page number, header breadcrumb) and is indexed into ChromaDB for high-dimensional semantic search.',
      sources: [
        {
          doc: 'Architecture_Specification_v2.pdf',
          page: 8,
          section: 'Section 1.4: Document Chunking & Indexing Pipeline',
          snippet:
            '...recursive character splitting prevents semantic degradation at paragraph boundaries, preserving contextual coherence for 1,000+ indexed fragments...',
        },
      ],
      tokens: 365,
      latency: '~295ms (Groq Llama 3.3 70B)',
    },
  ];

  const docs = [
    { name: 'Architecture_Specification_v2.pdf', pages: 64, fragments: 520, size: '2.4 MB' },
    { name: 'Enterprise_Security_Whitepaper.pdf', pages: 38, fragments: 310, size: '1.8 MB' },
    { name: 'Compliance_Audit_Report.pdf', pages: 22, fragments: 172, size: '940 KB' },
  ];

  const currentQ = sampleQuestions[selectedQuestion];

  return (
    <div className="w-full rounded-2xl bg-[#0B0F17] border border-slate-800 shadow-2xl overflow-hidden font-sans text-xs sm:text-sm">
      {/* Top Application Bar */}
      <div className="bg-[#111726] border-b border-slate-800/80 px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="h-4 w-px bg-slate-700 mx-1 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-violet-600 flex items-center justify-center text-white text-[10px] font-bold">
              AI
            </div>
            <span className="font-semibold text-slate-200 text-xs sm:text-sm tracking-wide">
              Document Assistant <span className="text-violet-400 font-mono text-[10px] ml-1 px-1.5 py-0.5 rounded bg-violet-950/60 border border-violet-800/50">RAG Engine</span>
            </span>
          </div>
        </div>

        {/* Engine Specs */}
        <div className="flex items-center gap-2 text-[11px]">
          <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-violet-950/50 border border-violet-800/40 text-violet-300">
            <Cpu className="w-3 h-3 text-violet-400" />
            <span>Groq • Llama 3.3 70B</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
            <Layers className="w-3 h-3 text-blue-400" />
            <span>1,000+ Chunks Indexed</span>
          </span>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-12 min-h-[400px]">
        {/* Left Documents Panel */}
        <div className="col-span-12 md:col-span-4 bg-[#0E1422] border-r border-slate-800/80 p-3 sm:p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                <span>Indexed Corpus</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                Vector DB Ready
              </span>
            </div>

            {/* Document list */}
            <div className="mt-3 space-y-2">
              {docs.map((doc, idx) => (
                <button
                  key={doc.name}
                  onClick={() => setSelectedDoc(idx)}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all ${
                    selectedDoc === idx
                      ? 'bg-violet-950/20 border-violet-500/40 text-slate-200'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <FileText className={`w-4 h-4 mt-0.5 shrink-0 ${selectedDoc === idx ? 'text-violet-400' : 'text-slate-500'}`} />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-medium truncate text-slate-200">{doc.name}</div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-1">
                        <span>{doc.pages} pages</span>
                        <span>•</span>
                        <span>{doc.fragments} chunks</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Performance Metric Box */}
            <div className="mt-4 p-3 rounded-xl bg-gradient-to-br from-[#12192A] to-[#0A0F1B] border border-slate-800 text-slate-300">
              <div className="flex items-center gap-1.5 text-xs font-medium text-amber-300">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Observed Benchmark Note</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                Observed ~80% lower inference latency in developer testing after migrating to the Groq API (measured during internal testing; not a universal performance guarantee).
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Embeddings: ChromaDB</span>
            <span>Loader: PyPDFLoader</span>
          </div>
        </div>

        {/* Right Q&A and Evidence Panel */}
        <div className="col-span-12 md:col-span-8 bg-[#080C14] p-4 sm:p-5 flex flex-col justify-between space-y-4">
          {/* Question Selector Pills */}
          <div className="space-y-1.5">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
              Select Sample Query:
            </span>
            <div className="flex flex-wrap gap-2">
              {sampleQuestions.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedQuestion(idx)}
                  className={`text-left text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    selectedQuestion === idx
                      ? 'bg-blue-600/20 text-blue-300 border-blue-500/40 font-medium'
                      : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-300'
                  }`}
                >
                  Query #{idx + 1}: {item.q.slice(0, 38)}...
                </button>
              ))}
            </div>
          </div>

          {/* Active Question Box */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-300 text-xs font-bold">
              Q
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                User Query
              </div>
              <div className="text-xs sm:text-sm text-slate-100 font-medium mt-0.5">
                {currentQ.q}
              </div>
            </div>
          </div>

          {/* AI Response Box */}
          <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#101726] to-[#0A0F1D] border border-violet-900/30 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-300">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span>Grounded Assistant Synthesis</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
                {currentQ.latency}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {currentQ.answer}
            </p>
          </div>

          {/* Grounded Source References */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Source Page Citations</span>
              </span>
              <span className="text-[10px] text-slate-500">Exact page references</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentQ.sources.map((src, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-lg bg-[#0E1524] border border-slate-800 text-slate-300 space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-medium text-slate-200 truncate">{src.doc}</span>
                    <span className="font-mono text-violet-400 font-semibold px-1.5 py-0.5 rounded bg-violet-950/70 border border-violet-800/40 text-[10px]">
                      Page {src.page}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 italic">
                    {src.section}
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono bg-slate-950/60 p-2 rounded border border-slate-900 leading-snug">
                    {src.snippet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Illustrative Preview Notice Footer */}
      <div className="bg-[#0B0F17] border-t border-slate-800 px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
          <span>Interactive Preview — Illustrative mockup representing RAG architecture & citation output</span>
        </span>
        <span className="text-slate-500">Python • LangChain • ChromaDB • Groq</span>
      </div>
    </div>
  );
}


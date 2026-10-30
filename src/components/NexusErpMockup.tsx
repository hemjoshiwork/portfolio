'use client';

import React, { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  Receipt,
  Users,
  TrendingUp,
  Sparkles,
  Search,
  Bell,
  ArrowUpRight,
  AlertTriangle,
  CheckCircle2,
  Database,
  Code2,
} from 'lucide-react';

export default function NexusErpMockup() {
  const [activeTab, setActiveTab] = useState<'overview' | 'ai-query'>('overview');
  const [queryInput, setQueryInput] = useState(
    'Show top 3 suppliers with pending balance over $2,000'
  );

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
            <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
              N
            </div>
            <span className="font-semibold text-slate-200 text-xs sm:text-sm tracking-wide">
              Nexus ERP <span className="text-blue-400 font-mono text-[10px] ml-1 px-1.5 py-0.5 rounded bg-blue-950/60 border border-blue-800/50">v1.0</span>
            </span>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="flex-1 max-w-xs hidden md:flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-400 text-xs">
          <Search className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-slate-500">Search invoices, stock, suppliers...</span>
          <kbd className="ml-auto text-[10px] font-mono bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">⌘K</kbd>
        </div>

        {/* Status / Profile */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden sm:inline">FastAPI REST Ready</span>
          </div>
          <div className="w-6 h-6 rounded-full bg-slate-700/80 border border-slate-600 flex items-center justify-center text-[10px] font-medium text-slate-300">
            HJ
          </div>
        </div>
      </div>

      {/* Main ERP Layout */}
      <div className="grid grid-cols-12 min-h-[380px]">
        {/* Mock Sidebar */}
        <div className="hidden sm:flex col-span-3 lg:col-span-2 bg-[#0E1422] border-r border-slate-800/80 p-3 flex-col justify-between">
          <div className="space-y-1">
            <div className="px-2 py-1 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
              Navigation
            </div>
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-colors ${
                activeTab === 'overview'
                  ? 'bg-blue-600/15 text-blue-400 border border-blue-500/20 font-medium'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-300'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left text-slate-400 hover:bg-slate-800/50 hover:text-slate-300 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Package className="w-3.5 h-3.5" />
                <span>Inventory</span>
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-950/70 text-amber-400 border border-amber-800/50">
                3 Low
              </span>
            </button>
            <button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left text-slate-400 hover:bg-slate-800/50 transition-colors">
              <Receipt className="w-3.5 h-3.5" />
              <span>POS & Invoicing</span>
            </button>
            <button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left text-slate-400 hover:bg-slate-800/50 transition-colors">
              <Users className="w-3.5 h-3.5" />
              <span>Suppliers</span>
            </button>
            <button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left text-slate-400 hover:bg-slate-800/50 transition-colors">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Sales Trends</span>
            </button>
            <button
              onClick={() => setActiveTab('ai-query')}
              className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-colors ${
                activeTab === 'ai-query'
                  ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-medium'
                  : 'text-indigo-400/90 hover:bg-indigo-950/30'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>AI Query (NL2SQL)</span>
            </button>
          </div>

          {/* Database & Role Tag */}
          <div className="pt-3 border-t border-slate-800/80">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <Database className="w-3 h-3 text-blue-400" />
              <span>SQLite + SQLAlchemy</span>
            </div>
            <div className="text-[10px] text-slate-500 mt-1">Role: Admin (RBAC Active)</div>
          </div>
        </div>

        {/* Mock Content Body */}
        <div className="col-span-12 sm:col-span-9 lg:col-span-10 p-3 sm:p-5 space-y-4 bg-[#080C14]">
          {/* Quick tab toggle for mobile */}
          <div className="flex sm:hidden gap-2 pb-2 border-b border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1 rounded-md ${
                activeTab === 'overview' ? 'bg-blue-600 text-white' : 'text-slate-400'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('ai-query')}
              className={`px-3 py-1 rounded-md ${
                activeTab === 'ai-query' ? 'bg-indigo-600 text-white' : 'text-slate-400'
              }`}
            >
              AI NL2SQL
            </button>
          </div>

          {activeTab === 'overview' ? (
            <>
              {/* Metric KPI Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                <div className="bg-[#101726] border border-slate-800/80 p-3 rounded-xl">
                  <div className="text-[11px] text-slate-400">Monthly Gross Revenue</div>
                  <div className="text-base sm:text-lg font-bold text-slate-100 mt-0.5">
                    $48,250.00
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 mt-1 font-medium">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>+14.2% vs last mo.</span>
                  </div>
                </div>

                <div className="bg-[#101726] border border-slate-800/80 p-3 rounded-xl">
                  <div className="text-[11px] text-slate-400">Stock Reorder Alerts</div>
                  <div className="text-base sm:text-lg font-bold text-amber-300 mt-0.5">
                    3 SKUs
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-amber-400 mt-1">
                    <AlertTriangle className="w-3 h-3" />
                    <span>Below threshold</span>
                  </div>
                </div>

                <div className="bg-[#101726] border border-slate-800/80 p-3 rounded-xl">
                  <div className="text-[11px] text-slate-400">POS Invoices Today</div>
                  <div className="text-base sm:text-lg font-bold text-slate-100 mt-0.5">
                    28 Orders
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-blue-400 mt-1 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>GST Calculated</span>
                  </div>
                </div>

                <div className="bg-[#101726] border border-slate-800/80 p-3 rounded-xl">
                  <div className="text-[11px] text-slate-400">Forecasted Sales</div>
                  <div className="text-base sm:text-lg font-bold text-indigo-300 mt-0.5">
                    +18.5%
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1">
                    <span>pandas predictive model</span>
                  </div>
                </div>
              </div>

              {/* Chart & Live Status */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* SVG Revenue Chart */}
                <div className="md:col-span-2 bg-[#101726] border border-slate-800/80 p-3.5 rounded-xl flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-xs font-semibold text-slate-200">
                        Revenue Velocity & Forecast
                      </span>
                      <p className="text-[11px] text-slate-400">Daily billing aggregated over 30 days</p>
                    </div>
                    <span className="text-[10px] text-slate-400 bg-slate-800/70 px-2 py-0.5 rounded border border-slate-700/60">
                      Live Trend
                    </span>
                  </div>
                  <div className="w-full h-24 pt-2">
                    <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,65 Q30,55 60,60 T120,42 T180,35 T240,20 T300,12 L300,80 L0,80 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0,65 Q30,55 60,60 T120,42 T180,35 T240,20 T300,12"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      {/* Interactive indicator points */}
                      <circle cx="180" cy="35" r="3" fill="#60A5FA" />
                      <circle cx="300" cy="12" r="3.5" fill="#93C5FD" />
                    </svg>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 pt-1">
                    <span>Week 1</span>
                    <span>Week 2</span>
                    <span>Week 3</span>
                    <span>Week 4 (Peak)</span>
                  </div>
                </div>

                {/* AI Query Quick Trigger */}
                <div className="bg-gradient-to-br from-indigo-950/40 via-[#101726] to-[#0D1322] border border-indigo-900/40 p-3.5 rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-indigo-300 font-medium text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Natural Language SQL</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Query your real database using plain English instructions.
                    </p>
                    <div className="mt-2.5 p-2 rounded bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300">
                      &quot;What are my low stock items?&quot;
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('ai-query')}
                    className="mt-3 w-full py-1.5 px-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Test NL-to-SQL Demo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Sample Inventory Table */}
              <div className="bg-[#101726] border border-slate-800/80 rounded-xl overflow-hidden">
                <div className="px-3.5 py-2.5 border-b border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-200">
                    Live Inventory Sample (15+ REST Endpoints)
                  </span>
                  <span className="text-[10px] text-slate-400">Auto-synced</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#0B0F17] text-slate-400 text-[11px] border-b border-slate-800">
                      <tr>
                        <th className="py-2 px-3">SKU</th>
                        <th className="py-2 px-3">Item Name</th>
                        <th className="py-2 px-3">Category</th>
                        <th className="py-2 px-3">Stock</th>
                        <th className="py-2 px-3">Unit Price</th>
                        <th className="py-2 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      <tr>
                        <td className="py-2 px-3 font-mono text-slate-400 text-[11px]">NX-104</td>
                        <td className="py-2 px-3 font-medium text-slate-200">Industrial Servo Motor</td>
                        <td className="py-2 px-3 text-slate-400">Machinery</td>
                        <td className="py-2 px-3 font-mono">4 units</td>
                        <td className="py-2 px-3 font-mono">$285.00</td>
                        <td className="py-2 px-3">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-950/70 text-amber-300 border border-amber-800/50">
                            Low Stock
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono text-slate-400 text-[11px]">NX-208</td>
                        <td className="py-2 px-3 font-medium text-slate-200">Brass Pressure Valve</td>
                        <td className="py-2 px-3 text-slate-400">Hardware</td>
                        <td className="py-2 px-3 font-mono">42 units</td>
                        <td className="py-2 px-3 font-mono">$45.50</td>
                        <td className="py-2 px-3">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-950/70 text-emerald-300 border border-emerald-800/50">
                            In Stock
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono text-slate-400 text-[11px]">NX-312</td>
                        <td className="py-2 px-3 font-medium text-slate-200">Precision Control PCB</td>
                        <td className="py-2 px-3 text-slate-400">Electronics</td>
                        <td className="py-2 px-3 font-mono">0 units</td>
                        <td className="py-2 px-3 font-mono">$112.00</td>
                        <td className="py-2 px-3">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-rose-950/70 text-rose-300 border border-rose-800/50">
                            Out of Stock
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            /* AI Query Assistant View */
            <div className="bg-[#101726] border border-indigo-900/40 p-4 rounded-xl space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span className="font-semibold text-slate-100 text-sm">
                    AI Natural-Language-to-SQL Engine
                  </span>
                </div>
                <span className="text-[11px] text-indigo-300 bg-indigo-950/70 px-2 py-0.5 rounded border border-indigo-800/50 font-mono">
                  Schema-Aware LLM Agent
                </span>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-slate-400">Natural Language Prompt</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={queryInput}
                    onChange={(e) => setQueryInput(e.target.value)}
                    className="flex-1 bg-slate-900 border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                  <button className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-medium transition-colors">
                    Translate & Run
                  </button>
                </div>
              </div>

              {/* Generated SQL Output */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Generated SQLAlchemy / SQLite Query</span>
                  </span>
                  <span className="text-emerald-400 font-mono">Executed in 184ms</span>
                </div>
                <pre className="bg-[#080C14] border border-slate-800 rounded-lg p-3 text-[11px] font-mono text-indigo-300 overflow-x-auto">
{`SELECT s.id, s.name, s.contact, s.pending_balance
FROM suppliers s
WHERE s.pending_balance > 2000.00
ORDER BY s.pending_balance DESC
LIMIT 3;`}
                </pre>
              </div>

              {/* Simulated Result Preview */}
              <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                <span>Result: 3 rows returned with total pending liability of $9,430.00</span>
                <span className="text-slate-500 font-mono">Status: 200 OK</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Illustrative Preview Notice Footer */}
      <div className="bg-[#0B0F17] border-t border-slate-800 px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span>Interactive Preview — Illustrative mockup representing Nexus ERP architecture & UI</span>
        </span>
        <span className="text-slate-500">FastAPI • SQLite/SQLAlchemy • Next.js</span>
      </div>
    </div>
  );
}

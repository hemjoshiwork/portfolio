'use client';

import React, { useState, useEffect } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Contact() {
  const { profile, contact } = siteConfig;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: contact.serviceOptions[0],
    budget: contact.budgetOptions[1], // Default: $250–$500
    details: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'unconfigured' | 'error'
  >('idle');
  const [responseMsg, setResponseMsg] = useState('');
  const [mailtoFallback, setMailtoFallback] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Listen for custom service selection events from Services cards
  useEffect(() => {
    const handleCustomSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ service: string }>;
      if (customEvent.detail?.service) {
        setFormData((prev) => ({ ...prev, service: customEvent.detail.service }));
      }
    };

    window.addEventListener('select-portfolio-service', handleCustomSelect);
    return () =>
      window.removeEventListener('select-portfolio-service', handleCustomSelect);
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.details.trim() || formData.details.trim().length < 10) {
      newErrors.details = 'Please describe your project (at least 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setResponseMsg('');
    setMailtoFallback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setResponseMsg(data.message);
        // Clear form on confirmed success
        setFormData({
          name: '',
          email: '',
          company: '',
          service: contact.serviceOptions[0],
          budget: contact.budgetOptions[1],
          details: '',
        });
      } else if (data.code === 'PROVIDER_NOT_CONFIGURED') {
        setStatus('unconfigured');
        setResponseMsg(data.message || data.error);
        if (data.mailtoUrl) {
          setMailtoFallback(data.mailtoUrl);
        }
      } else {
        setStatus('error');
        setResponseMsg(
          data.error || 'Something went wrong while submitting. Please try emailing directly.'
        );
        if (data.mailtoUrl) {
          setMailtoFallback(data.mailtoUrl);
        }
      }
    } catch (err: any) {
      setStatus('error');
      setResponseMsg('Network connection error. Please send an email directly.');
      // Prepare manual mailto fallback
      const subject = encodeURIComponent(`Project Enquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget}\n\n${formData.details}`
      );
      setMailtoFallback(`mailto:${profile.email}?subject=${subject}&body=${body}`);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-blue-300 text-xs font-medium">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Start a Conversation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {contact.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {contact.supportingCopy}
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-[#111827] to-[#0D121F] border border-slate-800 p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Direct Communication Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                Whether you have an immediate freelance contract or are exploring technical feasibility, feel free to reach out directly.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-blue-300 transition-colors truncate">
                    {profile.email}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 ml-auto group-hover:text-blue-400 transition-colors" />
              </a>

              {/* LinkedIn Card */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors truncate">
                    hem-joshi-85a380398
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 ml-auto group-hover:text-indigo-400 transition-colors" />
              </a>

              {/* GitHub Card */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-600 hover:bg-slate-800/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400">GitHub Profile</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                    github.com/hemjoshiwork
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 ml-auto group-hover:text-slate-300 transition-colors" />
              </a>
            </div>

            {/* Response Time Guarantee Pill */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 leading-relaxed space-y-1">
              <span className="font-semibold text-slate-300 block">Response Expectation:</span>
              <span>
                I personally review every project specification and respond with initial feedback and scoping thoughts within 24–48 business hours.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#111827] to-[#0D121F] border border-slate-800 p-6 sm:p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-slate-300"
                  >
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. David Miller"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-400">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-slate-300"
                  >
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Company & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-company"
                    className="block text-xs font-semibold text-slate-300"
                  >
                    Company Name <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Company or Brand"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-semibold text-slate-300"
                  >
                    Service Required
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    {contact.serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-900">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Estimated Budget */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-budget"
                  className="block text-xs font-semibold text-slate-300"
                >
                  Estimated Budget Range <span className="text-slate-500 font-normal">(Optional)</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {contact.budgetOptions.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                        formData.budget === b
                          ? 'bg-blue-600/20 text-blue-300 border-blue-500/50'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-details"
                  className="block text-xs font-semibold text-slate-300"
                >
                  Project Details <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="contact-details"
                  required
                  rows={4}
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                  placeholder="Tell me about your business, the problem you want to solve, desired timeline, or any specific technical preferences..."
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                    errors.details
                      ? 'border-rose-500 focus:border-rose-400'
                      : 'border-slate-800 focus:border-blue-500'
                  }`}
                />
                {errors.details && (
                  <p className="text-[11px] text-rose-400">{errors.details}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying & Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Project Enquiry</span>
                  </>
                )}
              </button>

              {/* Feedback States */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                  <div className="space-y-1">
                    <div className="font-semibold text-emerald-200">Enquiry Successfully Dispatched!</div>
                    <p className="text-emerald-300/90">{responseMsg}</p>
                  </div>
                </div>
              )}

              {status === 'unconfigured' && (
                <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/50 text-amber-200 text-xs sm:text-sm space-y-3 animate-fade-in">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" />
                    <div>
                      <div className="font-semibold text-amber-100">
                        Inquiry Ready — Direct Mail Fallback
                      </div>
                      <p className="text-amber-200/90 text-xs mt-1">
                        Server-side email delivery is currently awaiting a configured <code>RESEND_API_KEY</code> environment variable on this instance.
                      </p>
                    </div>
                  </div>
                  {mailtoFallback && (
                    <div className="pt-1">
                      <a
                        href={mailtoFallback}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 font-semibold text-xs transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send Pre-Filled Email to Hem Now</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/50 text-rose-200 text-xs sm:text-sm space-y-3 animate-fade-in">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
                    <div>
                      <div className="font-semibold text-rose-100">Submission Notice</div>
                      <p className="text-rose-200/90 text-xs mt-1">{responseMsg}</p>
                    </div>
                  </div>
                  {mailtoFallback && (
                    <a
                      href={mailtoFallback}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-700 hover:bg-rose-600 text-white font-medium text-xs transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send directly via Email Client</span>
                    </a>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

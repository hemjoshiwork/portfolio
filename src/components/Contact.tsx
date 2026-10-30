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
    <section id="contact" className="py-20 sm:py-28 relative bg-[#FAFAFC]">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100/60 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Start a Conversation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171923] tracking-tight">
            {contact.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            {contact.supportingCopy}
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#171923]">
                Direct Communication Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Whether you have an immediate freelance contract or are exploring technical feasibility, feel free to reach out directly.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              {/* Email Card */}
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-[#E5E7EB] hover:border-blue-400 hover:bg-blue-50/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-[#64748B]">Direct Email</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#171923] group-hover:text-blue-600 transition-colors truncate">
                    {profile.email}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 ml-auto group-hover:text-blue-600 transition-colors" />
              </a>

              {/* LinkedIn Card */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-[#E5E7EB] hover:border-indigo-400 hover:bg-indigo-50/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-[#64748B]">LinkedIn Profile</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#171923] group-hover:text-indigo-600 transition-colors truncate">
                    hem-joshi-85a380398
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 ml-auto group-hover:text-indigo-600 transition-colors" />
              </a>

              {/* GitHub Card */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-[#E5E7EB] hover:border-slate-400 hover:bg-slate-100 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-800 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-[#64748B]">GitHub Profile</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#171923] group-hover:text-slate-900 transition-colors truncate">
                    github.com/hemjoshiwork
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 ml-auto group-hover:text-slate-700 transition-colors" />
              </a>
            </div>

            {/* Response Time Guarantee Pill */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 leading-relaxed space-y-1">
              <span className="font-semibold text-blue-900 block">Response Expectation:</span>
              <span>
                I personally review every project specification and respond with initial feedback and scoping thoughts within 24–48 business hours.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[#171923]"
                  >
                    Full Name <span className="text-rose-500">*</span>
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
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm text-[#171923] placeholder-slate-400 focus:bg-white focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-[#E5E7EB] focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-500 font-medium">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-[#171923]"
                  >
                    Email Address <span className="text-rose-500">*</span>
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
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm text-[#171923] placeholder-slate-400 focus:bg-white focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-[#E5E7EB] focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Company & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-company"
                    className="block text-xs font-semibold text-[#171923]"
                  >
                    Company Name <span className="text-[#64748B] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Company or Brand"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-[#E5E7EB] text-xs sm:text-sm text-[#171923] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-semibold text-[#171923]"
                  >
                    Service Required
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-[#E5E7EB] text-xs sm:text-sm text-[#171923] focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  >
                    {contact.serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-[#171923]">
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
                  className="block text-xs font-semibold text-[#171923]"
                >
                  Estimated Budget Range <span className="text-[#64748B] font-normal">(Optional)</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {contact.budgetOptions.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                        formData.budget === b
                          ? 'bg-blue-50 text-blue-700 border-blue-400 font-semibold shadow-sm'
                          : 'bg-slate-50 text-slate-600 border-[#E5E7EB] hover:text-[#171923] hover:bg-slate-100'
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
                  className="block text-xs font-semibold text-[#171923]"
                >
                  Project Details <span className="text-rose-500">*</span>
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
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm text-[#171923] placeholder-slate-400 focus:bg-white focus:outline-none transition-colors ${
                    errors.details
                      ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                      : 'border-[#E5E7EB] focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                    }`}
                />
                {errors.details && (
                  <p className="text-[11px] text-rose-500 font-medium">{errors.details}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.99]"
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
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
                  <div className="space-y-1">
                    <div className="font-semibold text-emerald-900">Enquiry Successfully Dispatched!</div>
                    <p className="text-emerald-800 leading-relaxed">{responseMsg}</p>
                  </div>
                </div>
              )}

              {status === 'unconfigured' && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-3 animate-fade-in">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
                    <div>
                      <div className="font-semibold text-amber-900">
                        Inquiry Ready — Direct Mail Fallback
                      </div>
                      <p className="text-amber-800 text-xs mt-1 leading-relaxed">
                        Server-side email delivery is currently awaiting a configured <code>RESEND_API_KEY</code> environment variable on this instance.
                      </p>
                    </div>
                  </div>
                  {mailtoFallback && (
                    <div className="pt-1">
                      <a
                        href={mailtoFallback}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition-colors shadow-sm"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send Pre-Filled Email to Hem Now</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm space-y-3 animate-fade-in">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600" />
                    <div>
                      <div className="font-semibold text-rose-900">Submission Notice</div>
                      <p className="text-rose-800 text-xs mt-1 leading-relaxed">{responseMsg}</p>
                    </div>
                  </div>
                  {mailtoFallback && (
                    <a
                      href={mailtoFallback}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs transition-colors shadow-sm"
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

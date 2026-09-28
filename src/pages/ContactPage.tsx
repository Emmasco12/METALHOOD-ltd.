import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Truck
} from 'lucide-react';
import { COMPANY_DETAILS, PRODUCTS } from '../data/metalhoodData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    subject: 'Technical Inquiry / Quotation Request',
    interest: 'MH-500 Electrical Lifting Winch',
    message: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email || !formData.message) {
      setErrorMsg('Please complete all required fields (Name, Company, Email, Message).');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setErrorMsg('');
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-8">
        <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-1">
          Direct Factory Communication
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-mono">
          CONTACT METALHOOD
        </h1>
        <p className="mt-2 text-sm text-neutral-400 max-w-2xl leading-relaxed">
          Reach our engineering and sales department directly. Whether you need a quotation for a complete stage lifting winch or custom CNC parts, our Riga team is at your service.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 p-6 sm:p-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white uppercase font-mono tracking-tight">
              SEND AN INQUIRY
            </h2>
            <p className="text-xs text-neutral-400 mt-1 font-mono">
              Typical response time: within 24 business hours.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Message Successfully Dispatched
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                Thank you for contacting METALHOOD. Your message regarding <span className="text-amber-400">{formData.interest}</span> has been assigned to our technical sales team at our Riga facility.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Kaspars Ozoliņš"
                    className="w-full bg-neutral-950 border border-neutral-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    Company / Theatre / Studio *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Baltic Stage Rigging"
                    className="w-full bg-neutral-950 border border-neutral-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sales@yourcompany.eu"
                    className="w-full bg-neutral-950 border border-neutral-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +371 20000000"
                    className="w-full bg-neutral-950 border border-neutral-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    Country / Location
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. Latvia, Estonia, Lithuania, Finland"
                    className="w-full bg-neutral-950 border border-neutral-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    Product / Service of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors font-mono text-xs"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.modelCode} – {p.name}
                      </option>
                    ))}
                    <option value="Custom Stage Winch Project">Custom Stage Winch Project</option>
                    <option value="CNC Machining Services">CNC Machining &amp; Live Tooling</option>
                    <option value="Laser Cutting & Bending">Laser Cutting &amp; Press Brake</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  Message &amp; Technical Requirements *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your installation, venue type, required working load limit (kg), wire lines, travel distances, or manufacturing batch sizes..."
                  className="w-full bg-neutral-950 border border-neutral-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors resize-none font-mono text-xs leading-relaxed"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="contact-consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 accent-amber-500"
                />
                <label htmlFor="contact-consent" className="text-xs text-neutral-400 leading-normal">
                  I agree that METALHOOD (SIA Metalhood) may process my contact details to reply to this inquiry.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{submitting ? 'Transmitting...' : 'Send Inquiry to METALHOOD'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Direct Contact Info & Workshop Coordinates */}
        <div className="lg:col-span-5 space-y-6">
          {/* Contact Card */}
          <div className="bg-neutral-950 border border-neutral-800 p-8 space-y-6">
            <h3 className="text-base font-bold text-white uppercase font-mono tracking-tight pb-3 border-b border-neutral-800">
              COMMUNICATION CHANNELS
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 block text-xs font-mono uppercase">
                    Direct Technical Email
                  </span>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="text-white hover:text-amber-400 transition-colors font-medium font-mono text-base"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 block text-xs font-mono uppercase">
                    Direct Phone Line
                  </span>
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="text-white hover:text-amber-400 transition-colors font-medium font-mono text-base"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 block text-xs font-mono uppercase">
                    Workshop &amp; Production Facility
                  </span>
                  <span className="text-neutral-200 block">
                    {COMPANY_DETAILS.workshopAddress}
                  </span>
                  <span className="text-neutral-500 text-xs block font-mono mt-0.5">
                    European Union
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 block text-xs font-mono uppercase">
                    Facility Hours
                  </span>
                  <span className="text-neutral-200 block text-xs font-mono">
                    Monday – Friday: 08:00 – 17:00 (EET)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Seat & Freight Info */}
          <div className="bg-neutral-900/50 border border-neutral-800 p-6 space-y-4 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2 text-white font-bold uppercase">
              <Building className="w-4 h-4 text-amber-500" />
              <span>Legal Entity &amp; Logistics</span>
            </div>
            <p>
              Company: <span className="text-neutral-200">{COMPANY_DETAILS.legalName}</span>
            </p>
            <p>
              Registration Number: <span className="text-neutral-200">{COMPANY_DETAILS.registrationNumber}</span>
            </p>
            <p>
              Legal Address: <span className="text-neutral-200">{COMPANY_DETAILS.legalAddress}</span>
            </p>

            <div className="pt-3 border-t border-neutral-800/80 flex items-start gap-2 text-neutral-400">
              <Truck className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                Heavy freight, pallet delivery and dispatch access via the industrial courtyard at Latgales street A449, Riga.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

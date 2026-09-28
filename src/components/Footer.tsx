import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Award } from 'lucide-react';
import { COMPANY_DETAILS, PRODUCT_CATEGORIES } from '../data/metalhoodData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openQuoteModal: (product?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openQuoteModal }) => {
  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400">
      {/* Top Trust & Engineering Standard Bar */}
      <div className="border-b border-neutral-900/80 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-400">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-semibold block text-sm">EN 17206 Compliance</span>
                Stage upper machinery engineered for permanent installations in theatres, concert halls, and civic venues.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-semibold block text-sm">LIAA Project Supported</span>
                Process digitalization and technology transfer for testing & certification of lifting winches and pulleys.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 border border-amber-500/60 text-amber-500 font-mono font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                EU
              </div>
              <div>
                <span className="text-white font-semibold block text-sm">100% In-House European Workshop</span>
                Fabrication, live-tooling CNC machining, assembly, and load testing in Riga, Latvia.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Corporate Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-neutral-900 border border-neutral-700 flex items-center justify-center font-mono font-black text-amber-500 text-base">
                M
              </div>
              <span className="text-xl font-black tracking-tight text-white font-mono uppercase">
                METALHOOD
              </span>
            </div>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              European manufacturer of stage lifting systems, electrical and manual theatrical winches, custom control systems, and precision metalworking services since 2015.
            </p>

            <div className="pt-2 text-xs text-neutral-500 space-y-1 font-mono">
              <p>Legal Entity: {COMPANY_DETAILS.legalName}</p>
              <p>Registration No: {COMPANY_DETAILS.registrationNumber}</p>
              <p>Founded: {COMPANY_DETAILS.foundedYear} by two brothers in Latvia</p>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigateTo('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Electrical Lifting Winches (MH Series)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Manual Lifting Winches (MHM Series)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Synchronous Stage Controls
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Certified Pulley Blocks & Diverts
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Structural Head Blocks
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Manufacturing
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Mechanical Engineering & CAD
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  CNC Laser Cutting (Sheet & Tube)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  CNC Bending & Press Brake
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  CNC Turning with Live Tooling
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  MIG/MAG & TIG Structural Welding
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Powder Coating & Load Testing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Contact & Facility
            </h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  {COMPANY_DETAILS.workshopAddress}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => openQuoteModal()}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-500 hover:text-amber-400 transition-colors"
                >
                  Request a Project Quote
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {COMPANY_DETAILS.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Rigging &amp; Lifting Upper Machinery</span>
            <span aria-hidden="true">·</span>
            <span>Riga, Latvia (EU)</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => navigateTo('about')}
              className="hover:text-neutral-300 transition-colors"
            >
              Company Profile
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

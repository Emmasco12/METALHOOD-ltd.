import React from 'react';
import {
  ShieldCheck,
  Award,
  Users,
  Compass,
  Building,
  CheckCircle,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/metalhoodData';

interface AboutPageProps {
  onQuote: () => void;
  onNavigate: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onQuote, onNavigate }) => {
  const milestones = [
    {
      year: '2015',
      title: 'Foundation by Two Brothers',
      desc: 'METALHOOD (SIA Metalhood) was established in Latvia by two brothers with a shared vision: producing superior quality precision spare parts for the international entertainment and stage engineering industry.',
    },
    {
      year: '2017',
      title: 'Workshop Expansion & In-House CNC',
      desc: 'Invested in multi-axis CNC machinery with live tooling and Y-axis capabilities, enabling in-house manufacturing of complex grooved cable drums, shafts, and bearing housings with uncompromising tolerances.',
    },
    {
      year: '2019',
      title: 'Launch of MH Stage Winch Series',
      desc: 'Expanded from components to complete stage upper machinery systems. Introduced the MH-150, MH-250, and MH-500 electrical lifting winches, alongside the MHM_W500 manual theatrical hoists.',
    },
    {
      year: '2021',
      title: '25-Year Electronics Partnership',
      desc: 'Deepened cooperation with our specialized European electronics partner with over 25 years in stage automation, delivering advanced multi-unit synchronous control cabinets and safety pendants.',
    },
    {
      year: '2023–Present',
      title: 'LIAA Digitalization & EU Certification',
      desc: 'Participated in technology transfer and digitalization programs supported by the Investment and Development Agency of Latvia (LIAA), testing and certifying electrical lifting winches and pulley blocks under European safety standards.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
      {/* Hero Header */}
      <div className="border-b border-neutral-800 pb-10 space-y-4">
        <div className="text-xs font-mono text-amber-500 uppercase tracking-widest">
          European Engineering Heritage · Est. 2015
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-mono max-w-3xl leading-tight">
          BUILT ON PRECISION, SAFETY &amp; INDUSTRIAL EXPERTISE
        </h1>
        <p className="text-base text-neutral-300 max-w-2xl leading-relaxed">
          Founded in Latvia by two brothers, METALHOOD combines specialized entertainment engineering with in-house CNC metalworking to deliver stage lifting solutions that perform reliably night after night.
        </p>
      </div>

      {/* Split Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="text-xs font-mono text-amber-500 uppercase tracking-widest">
            Company Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase font-mono tracking-tight">
            FROM ENTERTAINMENT SPARE PARTS TO COMPLETE UPPER MACHINERY
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            METALHOOD was founded in 2015 by two brothers who identified a pressing need in the entertainment sector: theatrical venues and staging companies were frequently constrained by generic lifting hardware that lacked the specific safety, acoustic discretion, and spatial compactness demanded by modern performances.
          </p>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Starting with high-precision spare parts and custom machined mechanisms, we steadily developed our own comprehensive lineup of theatrical winches—ranging from compact 150 kg units to 1,000 kg heavy-load hoists. Today, METALHOOD systems operate permanently in theatres, concert halls, museums, and educational institutions across Europe.
          </p>
          <div className="pt-2 flex items-center gap-6 text-xs font-mono text-neutral-400 border-t border-neutral-800">
            <div>
              <span className="text-white font-bold block text-base font-mono">2015</span>
              <span>Year Founded</span>
            </div>
            <div>
              <span className="text-white font-bold block text-base font-mono">100%</span>
              <span>EU Supply Chain</span>
            </div>
            <div>
              <span className="text-white font-bold block text-base font-mono">25+ Yrs</span>
              <span>Electronics Partner</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 border border-neutral-800 bg-neutral-900 p-2">
          <div className="aspect-[4/3] bg-neutral-950 overflow-hidden">
            <img
              src="/images/hero_stage_lifting_machinery_1790577867656.jpg"
              alt="METALHOOD Stage Winches in Venue"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-neutral-950 border-t border-neutral-800 text-xs font-mono text-neutral-400 flex items-center justify-between">
            <span>Rigging &amp; Fly Loft Engineering</span>
            <span className="text-amber-500">EN 17206 Compliance</span>
          </div>
        </div>
      </div>

      {/* Core Company Values / Principles */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-1">
            Manufacturing Philosophy
          </span>
          <h2 className="text-2xl font-bold text-white uppercase font-mono tracking-tight">
            HOW WE OPERATE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 space-y-3">
            <ShieldCheck className="w-6 h-6 text-amber-500" />
            <h3 className="text-base font-bold text-white">Full In-House Workshop Control</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We do not outsource critical manufacturing to unverified third parties. All turning, milling, laser cutting, bending, and assembly is carried out in our own workshop in Riga, Latvia.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 p-6 space-y-3">
            <Building className="w-6 h-6 text-amber-500" />
            <h3 className="text-base font-bold text-white">Strictly Verified EU Suppliers</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              To guarantee metallurgical integrity and continuous safety factors, every kilogram of steel plate, every geared motor, and every bearing is procured exclusively from verified European Union suppliers.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 p-6 space-y-3">
            <Award className="w-6 h-6 text-amber-500" />
            <h3 className="text-base font-bold text-white">LIAA Supported Technology Transfer</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Backed by the Investment and Development Agency of Latvia (LIAA), our process digitalization and testing programs ensure that every winch and pulley block complies with European directives and EN 17206 norms.
            </p>
          </div>
        </div>
      </div>

      {/* Milestones Timeline */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-1">
            Historical Milestones
          </span>
          <h2 className="text-2xl font-bold text-white uppercase font-mono tracking-tight">
            THE METALHOOD JOURNEY
          </h2>
        </div>

        <div className="border border-neutral-800 bg-neutral-950 p-6 sm:p-10 divide-y divide-neutral-800/80">
          {milestones.map((m, idx) => (
            <div key={idx} className="py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2 font-mono text-xl font-black text-amber-500">
                {m.year}
              </div>
              <div className="md:col-span-4 font-bold text-white text-base">
                {m.title}
              </div>
              <div className="md:col-span-6 text-xs text-neutral-400 leading-relaxed">
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Registration & Facility Notice */}
      <div className="border border-neutral-800 bg-neutral-900/40 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1 text-xs font-mono text-neutral-400">
          <div className="text-white font-bold text-sm uppercase">
            Corporate Entity &amp; Registered Facility
          </div>
          <div>Entity: {COMPANY_DETAILS.legalName} (Reg. Nr. {COMPANY_DETAILS.registrationNumber})</div>
          <div>Workshop Facility: {COMPANY_DETAILS.workshopAddress}</div>
          <div>Direct Contact: {COMPANY_DETAILS.email} · {COMPANY_DETAILS.phone}</div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors"
          >
            Contact Department
          </button>
          <button
            onClick={onQuote}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors flex items-center gap-1.5"
          >
            <span>Request Quotation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

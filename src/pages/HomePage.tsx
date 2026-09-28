import React from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Award,
  Sliders,
  Cpu,
  Layers,
  Wrench,
  CheckCircle,
  Building2,
  ChevronDown
} from 'lucide-react';
import {
  PRODUCTS,
  MANUFACTURING_PROCESS,
  APPLICATIONS,
  WHY_METALHOOD,
  COMPANY_DETAILS,
  Product
} from '../data/metalhoodData';
import { ProductCard } from '../components/ProductCard';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onSelectProduct: (product: Product) => void;
  onQuote: (productName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onQuote,
}) => {
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured);

  const productCategories = [
    {
      title: 'Electrical Lifting Winches',
      subtitle: 'MH Series · 150 kg to 1,000 kg',
      desc: 'Multi-line theatrical hoists engineered with precision helical grooved drums, redundant dual electromagnetic holding brakes, and calibrated limit switches.',
      image: '/src/assets/images/winch_electrical_mh500_1790577879976.jpg',
      categoryKey: 'electrical-winches',
      capacityBadge: '1 500 N – 10 000 N',
    },
    {
      title: 'Manual Lifting Winches',
      subtitle: 'MHM Series · Silent Automatic Brakes',
      desc: 'High-safety manual theatrical hoists equipped with automatic pressure friction brakes. Silent, ratchet-free operation for scenery bars and acoustic panels.',
      image: '/src/assets/images/winch_manual_theatrical_1790577892470.jpg',
      categoryKey: 'manual-winches',
      capacityBadge: 'Up to 5 000 N (500 kg)',
    },
    {
      title: 'Stage Automation & Controls',
      subtitle: 'Centralized Cabinets & Remote Pendants',
      desc: 'Custom-designed synchronous control systems engineered with our specialized European electronics partner with 25+ years stage automation experience.',
      image: '/src/assets/images/stage_control_system_1790577905027.jpg',
      categoryKey: 'control-systems',
      capacityBadge: 'Synchronous 2–16+ Drives',
    },
    {
      title: 'Rigging & Upper Machinery',
      subtitle: 'Certified Diverts, Head Blocks & Brackets',
      desc: 'LIAA technology transfer certified pulley blocks, divert sheaves with sealed ball bearings, and Eurocode-compliant structural I-beam clamp assemblies.',
      image: '/src/assets/images/hero_stage_lifting_machinery_1790577867656.jpg',
      categoryKey: 'rigging-accessories',
      capacityBadge: 'EN 17206 Certified',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-neutral-800">
        {/* Cinematic Background Image with Measured Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_stage_lifting_machinery_1790577867656.jpg"
            alt="METALHOOD Stage Lifting Machinery in Theatrical Fly Loft"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Clean Sub-header / Domain kicker (Zero-pill) */}
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
              <span>European Stage Upper Machinery</span>
              <span aria-hidden="true">·</span>
              <span>Riga, Latvia</span>
              <span aria-hidden="true">·</span>
              <span>Est. 2015</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-mono uppercase text-balance leading-none">
              ENGINEERED FOR <span className="text-amber-500">PERFORMANCE.</span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl">
              Specialized European manufacturer of high-precision stage lifting winches, upper machinery, automated control systems, and custom theatrical metalworking for theatres, concert halls, and cultural venues.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onQuote()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 transition-colors"
              >
                <span>CONTACT US</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Factual Highlights Row */}
            <div className="pt-10 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-neutral-400 font-mono">
              <div>
                <span className="text-white font-semibold block text-sm">EN 17206 Norm</span>
                Theatrical safety compliant
              </div>
              <div>
                <span className="text-white font-semibold block text-sm">100% In-House</span>
                Fabrication in Riga workshop
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-white font-semibold block text-sm">25+ Years Electronics</span>
                Specialized stage automation
              </div>
            </div>
          </div>
        </div>

        {/* Subtle scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-500 flex flex-col items-center gap-1 text-[11px] font-mono">
          <span>SCROLL</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </section>

      {/* 2. TRUST / INTRODUCTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Heading & Company Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
              <span>About METALHOOD</span>
              <span aria-hidden="true">·</span>
              <span>European Engineering Precision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-mono">
              PRECISION UPPER MACHINERY &amp; INDUSTRIAL FABRICATION
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed">
              Established in 2015 by two brothers with deep expertise in entertainment mechanics, METALHOOD began by producing high-precision spare parts for the entertainment industry.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed">
              Today, METALHOOD has grown into a specialized manufacturer of complete stage lifting systems for permanent installations in theatres, concert halls, museums, and educational institutions. Operating from our own modern workshop in Riga, Latvia, we control 100% of the manufacturing and quality assurance process, utilizing strictly certified European Union suppliers and an electronics engineering partner with over 25 years of specialized stage automation experience.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-500 hover:text-amber-400 transition-colors"
              >
                <span>Learn More About Our Company &amp; Facility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Modern Workshop Image */}
          <div className="lg:col-span-6">
            <div className="relative border border-neutral-800 bg-neutral-900 overflow-hidden">
              <img
                src="/src/assets/images/cnc_manufacturing_facility_1790577916831.jpg"
                alt="METALHOOD CNC Machining and Assembly Workshop in Latvia"
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Workshop: Latgales street A449, Riga, Latvia
                </span>
                <span className="text-neutral-500">ISO &amp; EU Norms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS CATEGORIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
          <div>
            <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-1">
              Core Product Categories
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase font-mono">
              STAGE LIFTING SYSTEMS &amp; EQUIPMENT
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-500 hover:text-amber-400 transition-colors self-start sm:self-auto"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCategories.map((cat, idx) => (
            <div
              key={idx}
              className="group bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] bg-neutral-950 overflow-hidden border-b border-neutral-800">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 px-2.5 py-1 text-[11px] font-mono text-amber-400">
                    {cat.capacityBadge}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <span className="text-xs font-mono text-neutral-400 block">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => onNavigate('products')}
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore {cat.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
          <div>
            <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-1">
              Engineered in Riga
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase font-mono">
              FEATURED LIFTING SYSTEMS
            </h2>
          </div>
          <div className="text-xs text-neutral-400 font-mono">
            Tested &amp; certified under European safety standards
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onQuote={onQuote}
            />
          ))}
        </div>
      </section>

      {/* 5. ENGINEERING / MANUFACTURING CAPABILITIES (Process-Oriented) */}
      <section className="bg-neutral-900/40 border-y border-neutral-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-1">
                In-House Workshop Capabilities
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase font-mono">
                PRECISION MANUFACTURING PROCESS
              </h2>
            </div>
            <p className="text-xs text-neutral-400 max-w-md font-mono">
              From parametric CAD modeling to multi-axis CNC turning with live tooling and certified welding, all operations are executed in-house.
            </p>
          </div>

          {/* 6 Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MANUFACTURING_PROCESS.map((step) => (
              <div
                key={step.id}
                className="bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="text-amber-500 font-bold text-sm">
                      {step.stepNumber}
                    </span>
                    <span className="text-neutral-500">STAGE {step.stepNumber}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {step.name}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {step.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-neutral-900">
                    {step.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-neutral-300">
                        <span className="w-1 h-1 bg-amber-500 rounded-full" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-900 text-[11px] font-mono text-neutral-500">
                  {step.equipment}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 transition-colors"
            >
              <span>Explore Detailed Metalworking Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. CUSTOM SOLUTIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border border-neutral-800 bg-neutral-950 overflow-hidden">
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0 opacity-25">
            <img
              src="/src/assets/images/hero_stage_lifting_machinery_1790577867656.jpg"
              alt="Custom stage lifting engineering"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/60 z-0" />

          <div className="relative z-10 p-8 sm:p-14 lg:p-16 max-w-2xl space-y-6">
            <div className="text-xs font-mono text-amber-500 uppercase tracking-widest">
              Tailored Engineering &amp; Custom Fabrication
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-mono">
              CUSTOM LIFTING SOLUTIONS FOR COMPLEX VENUES
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Every theatre, historic auditorium, and concert hall presents unique architectural constraints. When standard off-the-shelf winches cannot fit your fly loft or load profile, METALHOOD designs and manufactures bespoke lifting systems tailored to your specific travel heights, cable drops, beam geometry, and control interfaces.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => onQuote('Custom Stage Lifting Solution')}
                className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors flex items-center gap-2"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-xs font-mono text-neutral-400">
                Direct engineer-to-engineer consultation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. APPLICATIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-neutral-800 pb-6">
          <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-1">
            Industry Applications
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase font-mono">
            WHERE METALHOOD OPERATES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPLICATIONS.map((app) => (
            <div
              key={app.id}
              className="bg-neutral-900/50 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <Building2 className="w-6 h-6 text-amber-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{app.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {app.description}
                </p>

                <div className="space-y-1 pt-3 border-t border-neutral-800/80">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                    Key Installations
                  </span>
                  {app.useCases.slice(0, 3).map((uc, i) => (
                    <div key={i} className="text-xs text-neutral-300 flex items-center gap-2">
                      <span className="text-amber-500">·</span>
                      <span>{uc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-800 text-[11px] font-mono text-amber-400">
                {app.typicalEquipment[0]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. WHY METALHOOD SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-neutral-800 pb-6">
          <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-1">
            Engineered in Latvia
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase font-mono">
            WHY THEATRES &amp; RIGGERS CHOOSE METALHOOD
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {WHY_METALHOOD.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-950 border border-neutral-800 p-6 space-y-3"
            >
              <div className="w-8 h-8 bg-neutral-900 border border-neutral-700 flex items-center justify-center font-mono text-xs text-amber-400 font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-sm font-bold text-white">{item.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-neutral-900 border border-neutral-800 p-8 sm:p-14 text-center space-y-6">
          <div className="text-xs font-mono text-amber-500 uppercase tracking-widest">
            Ready to Upgrade Your Upper Machinery?
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-mono max-w-2xl mx-auto leading-tight">
            LET'S BUILD YOUR SOLUTION.
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Contact our engineering department to discuss your stage rigging specifications, custom winch parameters, or precision CNC metalworking requirements.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onQuote()}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors flex items-center gap-2"
            >
              <span>CONTACT METALHOOD</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 transition-colors"
            >
              <span>VIEW FACILITY &amp; CONTACT DETAILS</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Wrench,
  Cog,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { MANUFACTURING_PROCESS } from '../data/metalhoodData';

interface ServicesPageProps {
  onQuote: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onQuote }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-1">
            In-House Production Capabilities · Riga, Latvia
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-mono">
            MANUFACTURING &amp; ENGINEERING SERVICES
          </h1>
          <p className="mt-2 text-sm text-neutral-400 max-w-2xl leading-relaxed">
            From mechanical design and multi-axis CNC turning with live tooling to laser cutting and certified welding, METALHOOD offers precision manufacturing for theatrical machinery and specialized industrial components.
          </p>
        </div>

        <button
          onClick={() => onQuote('CNC Metalworking & Manufacturing Inquiry')}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors self-start md:self-auto"
        >
          <span>Request Manufacturing RFQ</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Facility & Process Flow Visual */}
      <div className="relative border border-neutral-800 bg-neutral-900 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 aspect-[16/10] bg-neutral-950">
            <img
              src="/images/cnc_manufacturing_facility_1790577916831.jpg"
              alt="METALHOOD CNC Lathe and Milling Workshop"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between bg-neutral-950/90 border-t lg:border-t-0 lg:border-l border-neutral-800 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block">
                Integrated Production Flow
              </span>
              <h3 className="text-xl font-bold text-white font-mono uppercase">
                COMPLETE FABRICATION UNDER ONE ROOF
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                By maintaining our own machining and fabrication shop in Riga, METALHOOD eliminates supply chain intermediaries, ensuring uncompromising tolerances, strict metallurgical traceability, and rapid turnaround for both custom stage winches and contract metalworking.
              </p>
            </div>

            <div className="space-y-2 border-t border-neutral-800 pt-4 text-xs font-mono text-neutral-300">
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Live Tooling:</span>
                <span className="text-white">CNC Turning with Y-Axis</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Forming:</span>
                <span className="text-white">CNC Press Brake Bending</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Laser Profiling:</span>
                <span className="text-white">Flat Sheet &amp; Structural Tube</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Welding Norms:</span>
                <span className="text-white">MIG/MAG &amp; TIG Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sequential Process Steps */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-1">
            Step-by-Step Workflow
          </span>
          <h2 className="text-2xl font-bold text-white uppercase font-mono tracking-tight">
            ENGINEERING &amp; PRODUCTION PROCESS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MANUFACTURING_PROCESS.map((service) => (
            <div
              key={service.id}
              className="bg-neutral-900/50 border border-neutral-800 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-6">
                  <span className="text-2xl font-black text-amber-500 font-mono">
                    {service.stepNumber}
                  </span>
                  <span className="text-neutral-500">PHASE {service.stepNumber}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {service.name}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {service.detailedDesc}
                </p>

                <div className="space-y-2 pt-4 border-t border-neutral-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                    Verified Capabilities
                  </span>
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                <span>Equipment:</span>
                <span className="text-amber-400/90 text-right">{service.equipment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contract Manufacturing & Technical RFQ */}
      <div className="bg-neutral-900 border border-neutral-800 p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-mono text-amber-500 uppercase tracking-widest">
            Subcontracting &amp; Custom Components
          </div>
          <h3 className="text-2xl font-bold text-white font-mono uppercase">
            HAVE TECHNICAL DRAWINGS OR CAD MODELS?
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed">
            In addition to complete stage lifting winches, METALHOOD manufactures custom turned shafts, grooved cable drums, laser-cut weldments, and precision parts for entertainment engineers across Europe. Send us your STEP, DXF, or PDF drawings for a fast engineering quotation.
          </p>
        </div>

        <button
          onClick={() => onQuote('CAD / Drawing Quote Request')}
          className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 self-start lg:self-auto"
        >
          <span>Submit Drawings for Quote</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

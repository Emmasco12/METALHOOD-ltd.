import React, { useState } from 'react';
import { X, ArrowUpRight, CheckCircle, ShieldCheck, Download, Sliders } from 'lucide-react';
import { Product } from '../data/metalhoodData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onQuote: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onQuote }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!product) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 text-white shadow-2xl my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-neutral-950">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 mb-1">
              <span>{product.modelCode}</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">{product.categoryLabel}</span>
            </div>
            <h2 id="modal-product-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {product.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors border border-neutral-800"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Main 2-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: Product Image */}
            <div className="md:col-span-5 bg-neutral-950 border border-neutral-800 overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 bg-neutral-950/80 border-t border-neutral-800 text-xs text-neutral-400 font-mono">
                <div className="flex items-center justify-between py-1">
                  <span>Manufacturing:</span>
                  <span className="text-white">Riga Workshop (EU)</span>
                </div>
                {product.capacity && (
                  <div className="flex items-center justify-between py-1">
                    <span>Lifting Capacity:</span>
                    <span className="text-amber-400 font-semibold">{product.capacity}</span>
                  </div>
                )}
                {product.lines && (
                  <div className="flex items-center justify-between py-1">
                    <span>Line Configuration:</span>
                    <span className="text-white">{product.lines}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Overview & Key Details */}
            <div className="md:col-span-7 space-y-4">
              <p className="text-base text-neutral-300 leading-relaxed">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-500 mb-3 font-semibold">
                  Key Technical Features
                </h4>
                <ul className="space-y-2">
                  {product.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Applications */}
              <div className="pt-4 border-t border-neutral-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Documented Applications
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-neutral-300 font-mono">
                  {product.applications.map((app, idx) => (
                    <span key={idx} className="bg-neutral-950 px-2.5 py-1 border border-neutral-800">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="pt-4 border-t border-neutral-800">
            <h3 className="text-sm font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Technical Specifications Data Sheet
            </h3>
            <div className="border border-neutral-800 overflow-hidden">
              <table className="w-full text-left text-xs">
                <tbody>
                  {product.specs.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-neutral-950' : 'bg-neutral-900/60'}
                    >
                      <td className="py-3 px-4 font-mono text-neutral-400 w-1/3 border-b border-neutral-800/60">
                        {row.label}
                      </td>
                      <td className="py-3 px-4 text-white font-medium border-b border-neutral-800/60 tabular-nums">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border-t border-neutral-800 bg-neutral-950">
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors"
          >
            <Download className="w-4 h-4 text-amber-500" />
            <span>{downloaded ? 'Technical Sheet Generated' : 'Download Spec Sheet (PDF)'}</span>
          </button>

          <div className="w-full sm:w-auto flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onQuote(product.name);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors"
            >
              <span>Request Quote for {product.modelCode}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

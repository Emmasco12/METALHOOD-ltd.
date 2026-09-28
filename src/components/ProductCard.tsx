import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sliders } from 'lucide-react';
import { Product } from '../data/metalhoodData';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuote: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onQuote }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Product Image Slot with Fallback */}
        <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden border-b border-neutral-800">
          {!imageFailed ? (
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              onError={() => setImageFailed(true)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-neutral-900 to-neutral-950">
              <Sliders className="w-10 h-10 text-amber-500 mb-2 opacity-60" />
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                {product.modelCode}
              </span>
              <span className="text-sm font-semibold text-neutral-200 mt-1">
                {product.name}
              </span>
            </div>
          )}

          {/* Model Code in top-left subtle corner */}
          <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 px-2.5 py-1 text-[11px] font-mono font-medium text-amber-400">
            {product.modelCode}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {/* Unboxed Metadata (Zero-pill discipline) */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
            <span>{product.categoryLabel}</span>
            {product.standard && (
              <>
                <span aria-hidden="true">·</span>
                <span>{product.standard}</span>
              </>
            )}
          </div>

          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
            {product.name}
          </h3>

          <p className="mt-2 text-sm text-neutral-400 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Key Specs Row */}
          <div className="mt-4 pt-4 border-t border-neutral-800/80 grid grid-cols-2 gap-3 text-xs font-mono">
            {product.capacity && (
              <div>
                <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">
                  Capacity (ELL)
                </span>
                <span className="text-neutral-200 font-semibold tabular-nums">
                  {product.capacity}
                </span>
              </div>
            )}
            {product.lines && (
              <div>
                <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">
                  Operation Lines
                </span>
                <span className="text-neutral-200 font-semibold">
                  {product.lines}
                </span>
              </div>
            )}
            {product.brakeSystem && (
              <div className="col-span-2">
                <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">
                  Safety System
                </span>
                <span className="text-neutral-300 text-xs line-clamp-1">
                  {product.brakeSystem}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0 flex items-center gap-3">
        <button
          onClick={() => onSelect(product)}
          className="flex-1 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition-colors text-center border border-neutral-700/80"
        >
          View Specs
        </button>
        <button
          onClick={() => onQuote(product.name)}
          className="py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors flex items-center justify-center gap-1 shrink-0"
          title={`Request quote for ${product.name}`}
        >
          <span>Inquire</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};

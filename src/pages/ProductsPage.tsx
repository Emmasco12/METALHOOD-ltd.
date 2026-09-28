import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal, Download, ArrowUpRight } from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES, Product } from '../data/metalhoodData';
import { ProductCard } from '../components/ProductCard';
import { SpecComparator } from '../components/SpecComparator';

interface ProductsPageProps {
  onSelectProduct: (product: Product) => void;
  onQuote: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  onQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showComparator, setShowComparator] = useState(false);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.modelCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.capacity && product.capacity.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-1">
            European Stage Machinery Catalog
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-mono">
            STAGE LIFTING PRODUCTS &amp; SYSTEMS
          </h1>
          <p className="mt-2 text-sm text-neutral-400 max-w-2xl leading-relaxed">
            High-precision electrical and manual winches, multi-unit synchronized control systems, and certified upper machinery manufactured in our European workshop.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowComparator(!showComparator)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-500" />
            <span>{showComparator ? 'Hide Spec Matrix' : 'Compare Specifications'}</span>
          </button>
          <button
            onClick={() => onQuote('General Product Inquiry')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors"
          >
            <span>Request Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Optional Spec Comparator */}
      {showComparator && (
        <div className="transition-all duration-300">
          <SpecComparator onQuote={onQuote} />
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-neutral-900/60 border border-neutral-800 p-4">
        {/* Category Tabs (Segmented Buttons) */}
        <div className="flex flex-wrap items-center gap-1.5">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-neutral-800 text-white font-semibold border-b-2 border-amber-500'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by model (e.g. MH-500)..."
            className="w-full bg-neutral-950 border border-neutral-800 pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 font-mono"
          />
        </div>
      </div>

      {/* Results Count & Active Filter Indicator */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
        <span>Showing {filteredProducts.length} certified products</span>
        <span>EN 17206 / 2006/42/EC Standards Compliant</span>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onQuote={onQuote}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center border border-neutral-800 bg-neutral-900/30 space-y-3">
          <p className="text-base text-neutral-300">
            No products match your search criteria "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-xs font-mono text-amber-500 hover:underline uppercase"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Custom Requirement Banner */}
      <div className="border border-neutral-800 bg-neutral-950 p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block">
            Specialized Engineering Inquiries
          </span>
          <h3 className="text-xl font-bold text-white font-mono uppercase">
            Need a Non-Standard Drum or Custom Mounting Envelope?
          </h3>
          <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
            Our Riga design office can modify drum pitch, stroke lengths, gear ratios, line spacing, and framework mounting to match historic or non-standard fly lofts.
          </p>
        </div>
        <button
          onClick={() => onQuote('Custom Winch Requirement')}
          className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <span>Contact Technical Team</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

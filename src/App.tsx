import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProductModal } from './components/ProductModal';
import { QuoteModal } from './components/QuoteModal';
import { Product } from './data/metalhoodData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>(undefined);

  const handleOpenQuote = (productName?: string) => {
    setQuoteProduct(productName);
    setQuoteModalOpen(true);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500 selection:text-neutral-950">
      {/* Sticky Top Bar Contract Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        openQuoteModal={handleOpenQuote}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onQuote={handleOpenQuote}
          />
        )}

        {activeTab === 'products' && (
          <ProductsPage
            onSelectProduct={handleSelectProduct}
            onQuote={handleOpenQuote}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage onQuote={handleOpenQuote} />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onQuote={() => handleOpenQuote()}
            onNavigate={handleNavigate}
          />
        )}

        {activeTab === 'contact' && <ContactPage />}
      </main>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onQuote={handleOpenQuote}
      />

      {/* Technical RFQ / Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedProduct={quoteProduct}
      />

      {/* Universal Footer */}
      <Footer
        setActiveTab={handleNavigate}
        openQuoteModal={handleOpenQuote}
      />
    </div>
  );
}

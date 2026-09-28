import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/metalhoodData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openQuoteModal: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, openQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Manufacturing & Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-md border-neutral-800/80 shadow-lg shadow-black/30'
            : 'bg-neutral-950 border-neutral-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Zone 1: Single text element wordmark */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none"
              aria-label="METALHOOD Home"
            >
              <div className="w-9 h-9 bg-neutral-900 border border-neutral-700 flex items-center justify-center font-mono font-black text-amber-500 text-lg tracking-tighter group-hover:border-amber-500/60 transition-colors">
                M
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-mono uppercase">
                METALHOOD
              </span>
            </button>

            {/* Zone 2: Clean text navigation links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap focus:outline-none ${
                    activeTab === item.id
                      ? 'text-white font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500" />
                  )}
                </button>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => openQuoteModal()}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors rounded-none whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
              >
                Request a Quote
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none border border-neutral-800"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-neutral-950/90 backdrop-blur-md">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-neutral-900 border-l border-neutral-800 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <div className="flex items-center gap-2 font-mono font-bold text-white text-lg">
                  <div className="w-7 h-7 bg-neutral-950 border border-amber-500 text-amber-500 flex items-center justify-center text-xs">
                    M
                  </div>
                  METALHOOD
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white border border-neutral-800"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-3 py-3 text-base font-medium transition-colors border-l-2 ${
                      activeTab === item.id
                        ? 'border-amber-500 text-white bg-neutral-950'
                        : 'border-transparent text-neutral-400 hover:text-white hover:bg-neutral-950/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-neutral-800 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3 px-4 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
              >
                Request a Quote
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="text-xs text-neutral-400 space-y-2 pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{COMPANY_DETAILS.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

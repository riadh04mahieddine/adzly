'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Bars3Icon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Solution', href: '/solution' },
  { name: 'Fonctionnalités', href: '/#features' },
  { name: 'Comment ça marche', href: '/#how-it-works' },
  { name: 'Tarifs', href: '/#pricing' },
  { name: 'FAQ', href: '/#faq' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Effet pour l'animation douce du CTA
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(prev => !prev);
    }, 2000); // Alterne toutes les 2 secondes
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed w-full z-50 px-4 py-3 flex justify-center">
      <div className={`max-w-6xl w-full rounded-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-md'
      } px-4 py-2 flex items-center justify-between`}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpeg"
            alt="Adzly Logo"
            width={140}
            height={40}
            className="mr-2"
          />
       
        </Link>

        {/* Navigation - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-black hover:text-[#1D9D73] transition-colors`}
              onClick={(e) => {
                if (item.href.startsWith('/#')) {
                  e.preventDefault();
                  const targetId = item.href.split('#')[1];
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* CTA Button avec animation douce */}
          <button
            onClick={() => router.push('/dashboard')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(to right, #1D9D73, #34D399)',
              color: 'white',
              fontWeight: 'bold',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              boxShadow: isPulsing ? '0 0 15px rgba(29, 157, 115, 0.5)' : '0 0 5px rgba(29, 157, 115, 0.3)',
              transition: 'all 0.8s ease',
              transform: isPulsing ? 'scale(1.02)' : 'scale(1)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
            className="group"
          >
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <SparklesIcon className="h-4 w-4 text-white" />
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
                <span style={{ fontSize: '0.875rem' }}>Essai gratuit</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.9, fontWeight: 'normal' }}>3 campagnes offertes</span>
              </span>
            </div>
            <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative p-2 text-black hover:text-[#1D9D73]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl p-4 mt-1 z-50">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-[#1D9D73] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={(e) => {
                  if (item.href.startsWith('/#')) {
                    e.preventDefault();
                    setIsOpen(false);
                    const targetId = item.href.split('#')[1];
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

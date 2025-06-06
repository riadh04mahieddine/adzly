'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Adzly Logo"
                width={140}
                height={40}
                className="mr-2"
              />
            
            </Link>
            <p className="text-black text-sm">
              Votre coach IA pour une publicité en ligne simplifiée.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="col-span-1">
            <h3 className="font-semibold text-black mb-4">Produit</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-black hover:text-adzly-blue">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-black hover:text-adzly-blue">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-black hover:text-adzly-blue">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-black hover:text-adzly-blue">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div className="col-span-1">
            <h3 className="font-semibold text-black mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-black hover:text-adzly-blue">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-black hover:text-adzly-blue">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-black hover:text-adzly-blue">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div className="col-span-1">
            <h3 className="font-semibold text-black mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-black hover:text-adzly-blue">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-black hover:text-adzly-blue">
                  Conditions d'utilisation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm">
            © {new Date().getFullYear()} Adzly. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-adzly-blue">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-adzly-blue">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

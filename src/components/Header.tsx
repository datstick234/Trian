'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Hệ Sinh Thái', href: '#ecosystem' },
  { label: 'Vua Cá Lăng', href: '/vua-ca-lang-landing' },
  { label: 'Green Travel', href: '/green-travel-landing' },
  { label: 'B2B', href: '#b2b' },
  { label: 'Cộng Đồng', href: '#community' },
];

interface HeaderProps {
  variant?: 'transparent' | 'solid';
  theme?: 'light' | 'dark';
}

export default function Header({ variant = 'transparent', theme = 'light' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isTransparentOnTop = variant === 'transparent' && !scrolled;
  const textColor = isTransparentOnTop && theme === 'dark' ? 'text-white' : 'text-primary';
  const logoFilter = isTransparentOnTop && theme === 'dark' ? 'brightness-0 invert' : '';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-beige/95 backdrop-blur-md shadow-sm border-b border-primary/10'
            : variant === 'transparent' ?'bg-transparent' :'bg-beige/95 backdrop-blur-md border-b border-primary/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link href="/homepage" className="flex items-center gap-2.5 group">
              <AppLogo
                size={36}
                className={`transition-all duration-300 ${logoFilter}`}
              />
              <div className="flex flex-col">
                <span
                  className={`font-serif text-base font-semibold leading-tight tracking-wide transition-colors duration-300 ${textColor}`}
                >
                  Tri An Heritage
                </span>
                <span
                  className={`text-[10px] font-sans tracking-widest uppercase transition-colors duration-300 ${
                    isTransparentOnTop && theme === 'dark' ? 'text-white/60' : 'text-muted'
                  }`}
                >
                  Di Sản · Giá Trị
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                      isTransparentOnTop && theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-foreground/70 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                      isTransparentOnTop && theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-foreground/70 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#crm"
                className={`text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
                  isTransparentOnTop && theme === 'dark' ?'border border-white/40 text-white hover:bg-white/10' :'border border-primary/30 text-primary hover:bg-primary/5'
                }`}
              >
                Liên Hệ
              </a>
              <Link
                href="/vua-ca-lang-landing"
                className="text-sm font-semibold px-5 py-2.5 rounded-full bg-primary text-white hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                Mua Ngay
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 transition-colors ${textColor}`}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 bg-current ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 bg-current ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 bg-current ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 mobile-nav-overlay bg-beige/98 transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-10">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-serif text-foreground py-3 border-b border-primary/10 hover:text-primary transition-colors"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-serif text-foreground py-3 border-b border-primary/10 hover:text-primary transition-colors"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <Link
              href="/vua-ca-lang-landing"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-4 bg-primary text-white font-semibold rounded-full text-base"
            >
              Mua Vua Cá Lăng
            </Link>
            <Link
              href="/green-travel-landing"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-4 border border-primary text-primary font-semibold rounded-full text-base"
            >
              Đặt Lịch Green Travel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
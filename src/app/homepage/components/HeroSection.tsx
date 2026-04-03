'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxBg = scrollY * 0.3;
  const parallaxMid = scrollY * 0.15;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ minHeight: '100svh' }}>
      
      {/* Background Layer — furthest, most blur, slowest parallax */}
      <div
        className="hero-bg-layer"
        style={{ transform: `translateY(${parallaxBg}px) scale(1.1)` }}>
        
        <AppImage
          src="https://images.unsplash.com/photo-1689428616261-49b8c276ba69"
          alt="Hồ Trị An nhìn từ trên cao, rừng xanh bao quanh mặt nước trong xanh"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary/40 to-primary-dark/80" />
      </div>

      {/* Atmospheric Blob Layer — mid depth */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px) translateY(${parallaxMid}px)` }}>
        
        <div
          className="blob-shape absolute top-1/4 left-1/4 w-96 h-96 opacity-20"
          style={{ background: 'radial-gradient(circle, #006b57 0%, transparent 70%)' }} />
        
        <div
          className="blob-shape-2 absolute bottom-1/3 right-1/4 w-80 h-80 opacity-15"
          style={{ background: 'radial-gradient(circle, #8B6914 0%, transparent 70%)' }} />
        
      </div>

      {/* Grain texture overlay */}
      <div className="grain-overlay z-[3]" />

      {/* Beams */}
      <div className="absolute inset-0 flex justify-between pointer-events-none z-[3] px-16 md:px-32">
        <div className="relative w-px h-full bg-white/[0.04] overflow-hidden">
          <div className="beam" />
        </div>
        <div className="relative w-px h-full bg-white/[0.04] overflow-hidden hidden md:block">
          <div className="beam beam-delay-1" />
        </div>
        <div className="relative w-px h-full bg-white/[0.04] overflow-hidden">
          <div className="beam beam-delay-2" />
        </div>
      </div>

      {/* Floating badge — foreground depth */}
      <div
        className="absolute top-1/3 right-8 md:right-16 z-[5] pointer-events-none hidden sm:block"
        style={{ transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)` }}>
        
        <div className="float-badge bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white">
          <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Hệ Sinh Thái</p>
          <p className="text-sm font-serif font-medium">Trị An · Đồng Nai</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-white/70">Đang Vận Hành</span>
          </div>
        </div>
      </div>

      {/* Content Layer — foreground, full scroll speed */}
      <div className="relative z-[6] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{ animation: 'animationIn 0.8s ease-out 0.2s both' }}>
            
            <span className="w-8 h-px bg-accent" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent">
              Tri An Holding · Heritage
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-serif text-white leading-[0.95] tracking-tight mb-6"
            style={{
              fontSize: 'clamp(3rem, 9vw, 7.5rem)',
              animation: 'animationIn 0.9s ease-out 0.3s both'
            }}>
            
            Tri An
            <br />
            <span className="italic font-light text-accent-light">Heritage</span>
          </h1>

          {/* Sub headline */}
          <p
            className="text-white/80 font-serif italic text-xl md:text-3xl leading-snug mb-4 max-w-2xl"
            style={{ animation: 'animationIn 0.9s ease-out 0.45s both' }}>
            
            Từ di sản sống đến giá trị sống
          </p>

          <p
            className="text-white/60 font-sans text-base md:text-lg leading-relaxed mb-10 max-w-xl"
            style={{ animation: 'animationIn 0.9s ease-out 0.55s both' }}>
            
            Hệ sinh thái bản địa Trị An — nơi nguồn nước sạch, rừng xanh, nông nghiệp và văn hoá địa phương được đóng gói thành sản phẩm, trải nghiệm và cộng đồng.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{ animation: 'animationIn 0.9s ease-out 0.65s both' }}>
            
            <a
              href="#ecosystem"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full text-sm hover:bg-primary-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary/30">
              
              Khám Phá Hệ Sinh Thái
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <Link
              href="/green-travel-landing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white font-semibold rounded-full text-sm hover:bg-white/10 hover:border-white transition-all duration-300 hover:-translate-y-1">
              
              Trải Nghiệm Ngay
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-white/10"
            style={{ animation: 'animationIn 0.9s ease-out 0.75s both' }}>
            
            {[
            { value: '1,000+', label: 'Ha Mặt Hồ' },
            { value: '15+', label: 'Loài Đặc Sản' },
            { value: '100%', label: 'Cold Chain' },
            { value: '4 Trụ Cột', label: 'Hệ Sinh Thái' }].
            map((stat) =>
            <div key={stat.label}>
                <p className="text-2xl font-serif font-semibold text-white">{stat.value}</p>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-0.5">{stat.label}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[6] flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] uppercase tracking-widest">Cuộn xuống</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>);

}
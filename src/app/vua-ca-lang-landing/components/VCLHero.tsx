'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function VCLHero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden" style={{ minHeight: '100svh' }}>
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.12)` }}>
        
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1e78d7233-1774974062873.png"
          alt="Cá lăng tươi ngon được đánh bắt từ hồ Trị An tự nhiên, đặc sản premium"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/50 to-primary-dark/90" />
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay z-[3]" />

      {/* Atmospheric blobs */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}>
        
        <div
          className="blob-shape absolute top-1/3 right-1/4 w-80 h-80 opacity-15"
          style={{ background: 'radial-gradient(circle, #8B6914 0%, transparent 70%)' }} />
        
        <div
          className="blob-shape-2 absolute bottom-1/3 left-1/4 w-64 h-64 opacity-10"
          style={{ background: 'radial-gradient(circle, #006b57 0%, transparent 70%)' }} />
        
      </div>

      {/* Beams */}
      <div className="absolute inset-0 flex justify-between pointer-events-none z-[3] px-20">
        <div className="relative w-px h-full bg-white/[0.04] overflow-hidden"><div className="beam" /></div>
        <div className="relative w-px h-full bg-white/[0.04] overflow-hidden hidden md:block"><div className="beam beam-delay-1" /></div>
        <div className="relative w-px h-full bg-white/[0.04] overflow-hidden"><div className="beam beam-delay-2" /></div>
      </div>

      {/* Floating quality badge */}
      <div
        className="absolute top-1/3 right-8 md:right-20 z-[5] hidden sm:block pointer-events-none"
        style={{ transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)` }}>
        
        <div className="float-badge bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
          <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Chứng Nhận</p>
          <p className="text-white font-serif text-lg font-semibold">Cold Chain</p>
          <p className="text-white/60 text-xs mt-1">4 Tầng Bảo Vệ</p>
          <div className="flex gap-1 mt-3">
            {['❄️', '💨', '📦', '🚚'].map((icon, i) =>
            <span key={i} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm">{icon}</span>
            )}
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-[6] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6" style={{ animation: 'animationIn 0.8s ease-out 0.2s both' }}>
            <Link href="/homepage" className="flex items-center gap-1 text-white/50 text-xs hover:text-white/80 transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tri An Heritage
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-accent-light text-xs font-semibold tracking-widest uppercase">Vua Cá Lăng</span>
          </div>

          <h1
            className="font-serif text-white leading-[0.95] tracking-tight mb-5"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', animation: 'animationIn 0.9s ease-out 0.3s both' }}>
            
            Vua Cá Lăng
            <br />
            <span className="italic font-light text-accent-light">Đặc Sản Hồ Trị An</span>
          </h1>

          <p
            className="text-white/75 font-sans text-lg md:text-xl leading-relaxed mb-4 max-w-xl"
            style={{ animation: 'animationIn 0.9s ease-out 0.45s both' }}>
            
            Cá lăng tươi từ hồ Trị An — được chuẩn hoá quy trình cold chain 4 tầng, giao tận nhà, giữ nguyên hương vị bản địa.
          </p>

          <p
            className="text-white/50 text-sm leading-relaxed mb-8 max-w-lg"
            style={{ animation: 'animationIn 0.9s ease-out 0.5s both' }}>
            
            Không kháng sinh · Truy xuất nguồn gốc · Bảo quản 6 tháng · Giao lạnh toàn quốc
          </p>

          <div className="flex flex-col sm:flex-row gap-4" style={{ animation: 'animationIn 0.9s ease-out 0.6s both' }}>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full text-sm hover:bg-accent-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-accent/30">
              
              Mua Ngay
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 9m2-9h10m0 0l2 9M17 13l2 9" />
              </svg>
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white font-semibold rounded-full text-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              
              Xem Câu Chuyện
            </a>
          </div>

          {/* Quick stats */}
          <div
            className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10"
            style={{ animation: 'animationIn 0.9s ease-out 0.7s both' }}>
            
            {[
            { value: '100%', label: 'Hồ Trị An' },
            { value: '-40°C', label: 'Cấp Đông Sâu' },
            { value: '6 Tháng', label: 'Bảo Quản' },
            { value: '500+', label: 'Khách Hài Lòng' }].
            map((s) =>
            <div key={s.label}>
                <p className="font-serif text-xl text-white font-semibold">{s.value}</p>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-0.5">{s.label}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function GTHero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 18,
        y: (e.clientY / window.innerHeight - 0.5) * 18
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
          src="https://images.unsplash.com/photo-1660937472479-f0d9608e8370"
          alt="Mặt hồ Trị An bình yên lúc bình minh, ánh sáng vàng phản chiếu trên mặt nước"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/75 via-primary/30 to-primary-dark/85" />
      </div>

      {/* Grain */}
      <div className="grain-overlay z-[3]" />

      {/* Atmospheric blobs */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}>
        
        <div
          className="blob-shape absolute top-1/4 left-1/3 w-96 h-96 opacity-15"
          style={{ background: 'radial-gradient(circle, #006b57 0%, transparent 70%)' }} />
        
        <div
          className="blob-shape-2 absolute bottom-1/4 right-1/3 w-72 h-72 opacity-12"
          style={{ background: 'radial-gradient(circle, #8B6914 0%, transparent 70%)' }} />
        
      </div>

      {/* Beams */}
      <div className="absolute inset-0 flex justify-between pointer-events-none z-[3] px-20">
        <div className="relative w-px h-full bg-white/[0.04] overflow-hidden"><div className="beam" /></div>
        <div className="relative w-px h-full bg-white/[0.04] overflow-hidden hidden md:block"><div className="beam beam-delay-1" /></div>
        <div className="relative w-px h-full bg-white/[0.04] overflow-hidden"><div className="beam beam-delay-2" /></div>
      </div>

      {/* Floating experience badge */}
      <div
        className="absolute top-1/3 right-8 md:right-20 z-[5] hidden sm:block pointer-events-none"
        style={{ transform: `translate(${mousePos.x * -0.7}px, ${mousePos.y * -0.7}px)` }}>
        
        <div className="float-badge bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
          <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Trải Nghiệm</p>
          <p className="text-white font-serif text-lg font-semibold">Chữa Lành</p>
          <p className="text-white/60 text-xs mt-1">Hồ Trị An · Đồng Nai</p>
          <div className="flex gap-1.5 mt-3">
            <span className="px-2.5 py-1 rounded-full bg-primary/40 text-white/80 text-[10px] font-medium">Glamping</span>
            <span className="px-2.5 py-1 rounded-full bg-accent/30 text-white/80 text-[10px] font-medium">Retreat</span>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-[6] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 mb-6" style={{ animation: 'animationIn 0.8s ease-out 0.2s both' }}>
            <Link href="/homepage" className="flex items-center gap-1 text-white/50 text-xs hover:text-white/80 transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tri An Heritage
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-primary-light text-xs font-semibold tracking-widest uppercase">Green Travel</span>
          </div>

          {/* Headline */}
          <h1
            className="font-serif text-white leading-[0.95] tracking-tight mb-5"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', animation: 'animationIn 0.9s ease-out 0.3s both' }}>
            
            Green Travel
            <br />
            <span className="italic font-light text-primary-light">Chữa Lành Giữa Thiên Nhiên</span>
          </h1>

          <p
            className="text-white/75 font-sans text-lg md:text-xl leading-relaxed mb-4 max-w-xl"
            style={{ animation: 'animationIn 0.9s ease-out 0.45s both' }}>
            
            Rời thành phố không chỉ để đi chơi — mà để trở về trạng thái tốt hơn. Hồ Trị An, rừng xanh và không gian healing độc quyền đang chờ bạn.
          </p>

          <p
            className="text-white/50 text-sm leading-relaxed mb-8 max-w-lg"
            style={{ animation: 'animationIn 0.9s ease-out 0.5s both' }}>
            
            Glamping · Retreat · Team Building · Đảo CEO · Yoga & Thiền · Ẩm thực bản địa
          </p>

          <div className="flex flex-col sm:flex-row gap-4" style={{ animation: 'animationIn 0.9s ease-out 0.6s both' }}>
            <a
              href="#experiences"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full text-sm hover:bg-primary-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary/30">
              
              Khám Phá Trải Nghiệm
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white font-semibold rounded-full text-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              
              Đặt Lịch Ngay
            </a>
          </div>

          {/* Quick stats */}
          <div
            className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10"
            style={{ animation: 'animationIn 0.9s ease-out 0.7s both' }}>
            
            {[
            { value: '323 km²', label: 'Diện Tích Hồ' },
            { value: '~80km', label: 'Từ TP.HCM' },
            { value: '3 Loại', label: 'Trải Nghiệm' },
            { value: 'Độc Quyền', label: 'Đảo CEO' }].
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
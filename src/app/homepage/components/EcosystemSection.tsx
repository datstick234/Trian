'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const pillars = [
{
  id: 'food',
  label: '01 · FOOD',
  title: 'Vua Cá Lăng',
  subtitle: 'Đặc sản hồ Trị An',
  description: 'Đặc sản hồ Trị An được chuẩn hoá thành sản phẩm premium — cold chain 4 lớp, truy xuất nguồn gốc, giao tận tay.',
  cta: 'Khám Phá Sản Phẩm',
  href: '/vua-ca-lang-landing',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_141e33c56-1774974062622.png",
  imageAlt: 'Cá lăng tươi ngon từ hồ Trị An, đặc sản bản địa premium',
  tag: 'Cash Flow',
  tagColor: 'bg-accent/20 text-accent-light',
  size: 'large'
},
{
  id: 'travel',
  label: '02 · TRAVEL',
  title: 'Green Travel',
  subtitle: 'Trải nghiệm chữa lành',
  description: 'Trải nghiệm chữa lành, retreat và sống chậm giữa rừng xanh và mặt hồ Trị An.',
  cta: 'Đặt Lịch Ngay',
  href: '/green-travel-landing',
  image: "https://images.unsplash.com/photo-1727466277073-48432b03d1ce",
  imageAlt: 'Cảnh rừng xanh và hồ nước yên tĩnh cho trải nghiệm chữa lành',
  tag: 'Experience',
  tagColor: 'bg-primary/20 text-primary-light',
  size: 'medium'
},
{
  id: 'community',
  label: '03 · COMMUNITY',
  title: 'Cộng Đồng',
  subtitle: 'Ăn sạch · Sống xanh',
  description: 'Cộng đồng ăn sạch – sống xanh – trải nghiệm. Nơi kết nối người tiêu dùng có ý thức.',
  cta: 'Tham Gia',
  href: '#community',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b097de27-1764661578648.png",
  imageAlt: 'Cộng đồng người Việt sống xanh, ăn sạch cùng nhau',
  tag: 'Retention',
  tagColor: 'bg-earth/20 text-earth-light',
  size: 'medium'
},
{
  id: 'elite',
  label: '04 · ELITE',
  title: 'Elite Network',
  subtitle: 'CEO · Nhà đầu tư',
  description: 'CEO, nhà đầu tư và đối tác chiến lược — đảo CEO độc quyền, networking chọn lọc.',
  cta: 'Kết Nối',
  href: '#b2b',
  image: "https://images.unsplash.com/photo-1634208609546-a9a07e4740c8",
  imageAlt: 'Cuộc họp doanh nhân tại không gian sang trọng trong thiên nhiên',
  tag: 'High Value',
  tagColor: 'bg-primary-dark/30 text-white',
  size: 'large'
}];


export default function EcosystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ecosystem" ref={sectionRef} className="py-24 md:py-32 bg-beige relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,77,63,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139,105,20,0.06) 0%, transparent 40%)'
      }} />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="mb-16 animate-on-scroll">
          <span className="section-label mb-4 block">Hệ Sinh Thái</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-serif text-display-md text-foreground max-w-xl">
              Bốn trụ cột của{' '}
              <span className="italic text-primary">di sản sống</span>
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-sm md:text-right">
              Mỗi trụ cột là một cửa vào hệ sinh thái — kết nối thực phẩm, trải nghiệm, cộng đồng và giá trị cao.
            </p>
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        {/* Row 1: Food (col-span-2) + Travel (col-span-2) = 4/4 ✓ */}
        {/* Row 2: Community (col-span-2) + Elite (col-span-2) = 4/4 ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">

          {/* FOOD — spans 2 cols, taller */}
          <div className="lg:col-span-2 animate-on-scroll delay-100">
            <EcosystemCard pillar={pillars[0]} tall />
          </div>

          {/* GREEN TRAVEL — spans 2 cols */}
          <div className="lg:col-span-2 animate-on-scroll delay-200">
            <EcosystemCard pillar={pillars[1]} />
          </div>

          {/* COMMUNITY — spans 2 cols */}
          <div className="lg:col-span-2 animate-on-scroll delay-300">
            <EcosystemCard pillar={pillars[2]} />
          </div>

          {/* ELITE — spans 2 cols, taller */}
          <div className="lg:col-span-2 animate-on-scroll delay-400">
            <EcosystemCard pillar={pillars[3]} tall />
          </div>

        </div>
      </div>
    </section>);

}

function EcosystemCard({ pillar, tall }: {pillar: typeof pillars[0];tall?: boolean;}) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden spotlight-card card-lift bg-foreground ${
      tall ? 'min-h-[420px] md:min-h-[480px]' : 'min-h-[320px] md:min-h-[360px]'}`
      }>
      
      {/* Image */}
      <div className="absolute inset-0 img-zoom">
        <AppImage
          src={pillar.image}
          alt={pillar.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
        {/* Top */}
        <div className="flex items-start justify-between">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60">
            {pillar.label}
          </span>
          <span className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-sm ${pillar.tagColor}`}>
            {pillar.tag}
          </span>
        </div>

        {/* Bottom */}
        <div>
          <p className="text-white/60 text-xs uppercase tracking-widest mb-2">{pillar.subtitle}</p>
          <h3 className="font-serif text-2xl md:text-3xl text-white font-semibold mb-3 leading-tight">
            {pillar.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-xs">
            {pillar.description}
          </p>
          {pillar.href.startsWith('/') ?
          <Link
            href={pillar.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors group-hover:gap-3 duration-300">
            
              {pillar.cta}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link> :

          <a
            href={pillar.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors group-hover:gap-3 duration-300">
            
              {pillar.cta}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          }
        </div>
      </div>
    </div>);

}
'use client';

import React, { useEffect, useRef } from 'react';

const journeySteps = [
  {
    step: '01',
    phase: 'Bước Vào',
    title: 'Food',
    subtitle: 'Vua Cá Lăng',
    description: 'Entry point — Mua đặc sản hồ Trị An lần đầu. Trải nghiệm chất lượng cold chain, tạo niềm tin với thương hiệu.',
    metric: '↑ Doanh thu',
    metricDetail: 'Cash flow & data khách hàng đầu tiên',
    color: 'bg-accent/10 border-accent/30',
    iconBg: 'bg-accent',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L5 3M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    step: '02',
    phase: 'Kết Nối',
    title: 'Community',
    subtitle: 'Cộng Đồng Xanh',
    description: 'Retention — Tham gia cộng đồng ăn sạch, nhận ưu đãi thành viên, giới thiệu affiliate, chia sẻ trải nghiệm.',
    metric: '↑ Giữ chân',
    metricDetail: 'LTV tăng, mạng lưới mở rộng tự nhiên',
    color: 'bg-earth/10 border-earth/30',
    iconBg: 'bg-earth',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    step: '03',
    phase: 'Trải Nghiệm',
    title: 'Travel',
    subtitle: 'Green Travel',
    description: 'Upsell — Từ khách mua thực phẩm → đặt lịch retreat, glamping, healing tại hồ Trị An. Nâng giá trị đơn hàng.',
    metric: '↑ AOV × 10',
    metricDetail: 'Từ 500K → 5M+ mỗi khách',
    color: 'bg-primary/10 border-primary/30',
    iconBg: 'bg-primary',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    step: '04',
    phase: 'Đỉnh Cao',
    title: 'Elite',
    subtitle: 'CEO · Đầu Tư',
    description: 'High-value monetization — CEO, nhà đầu tư, đối tác chiến lược. Corporate retreat, Horeca supply, đảo CEO độc quyền.',
    metric: '↑ Doanh thu cao',
    metricDetail: 'B2B deals, corporate partnership',
    color: 'bg-primary-dark/10 border-primary-dark/30',
    iconBg: 'bg-primary-dark',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function JourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef?.current?.querySelectorAll('.animate-on-scroll')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-foreground relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,77,63,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,77,63,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-label mb-4 justify-center" style={{ color: '#8B6914' }}>
            Hành Trình Khách Hàng
          </span>
          <h2 className="font-serif text-display-md text-white mt-2 max-w-2xl mx-auto">
            Từ bữa ăn đầu tiên{' '}
            <span className="italic text-accent-light">đến đối tác chiến lược</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto text-base leading-relaxed">
            Mỗi khách hàng bắt đầu bằng một sản phẩm đặc sản — và được dẫn dắt qua một hành trình giá trị ngày càng sâu hơn.
          </p>
        </div>

        {/* Journey Flow — Desktop horizontal, Mobile vertical */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-px bg-gradient-to-r from-accent/40 via-primary/60 to-primary-dark/80 z-0" />
          {/* Arrow dots on line */}
          <div className="hidden lg:flex absolute top-[68px] left-[10%] right-[10%] justify-between items-center z-0 px-[12%]">
            {[0, 1, 2]?.map((i) => (
              <div key={i} className="flex items-center">
                <svg className="w-5 h-5 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5l8 7-8 7" />
                </svg>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps?.map((step, i) => (
              <div
                key={step?.step}
                className={`animate-on-scroll delay-${(i + 1) * 100}`}
              >
                <div className={`rounded-2xl border p-6 h-full flex flex-col gap-4 spotlight-card spotlight-card-dark transition-all duration-400 ${step?.color}`}>
                  {/* Step number + icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-white/30 tracking-widest">{step?.step}</span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${step?.iconBg}`}>
                      {step?.icon}
                    </div>
                  </div>

                  {/* Phase label */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold">{step?.phase}</span>
                    <h3 className="font-serif text-2xl text-white font-semibold mt-1">{step?.title}</h3>
                    <p className="text-white/60 text-sm mt-0.5">{step?.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed flex-1">{step?.description}</p>

                  {/* Metric */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-accent-light font-semibold text-sm">{step?.metric}</p>
                    <p className="text-white/40 text-xs mt-0.5">{step?.metricDetail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom insight */}
        <div className="mt-16 text-center animate-on-scroll delay-500">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-accent/20 bg-accent/5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="text-accent-light text-sm font-medium">
              Mỗi bước trong hành trình đều tạo ra doanh thu và dữ liệu cho bước tiếp theo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
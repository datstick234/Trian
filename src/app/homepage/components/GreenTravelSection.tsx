'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const experiences = [
{
  type: 'Glamping',
  description: 'Lều glamping view hồ, bình minh trên mặt nước, hoàng hôn giữa rừng thông.',
  image: "https://images.unsplash.com/photo-1626158977594-53e2796c1cd9",
  imageAlt: 'Lều glamping sang trọng nhìn ra hồ nước xanh trong rừng',
  duration: '1–3 Đêm',
  price: 'Từ 2.500.000đ',
  icon: '⛺'
},
{
  type: 'Retreat',
  description: 'Chương trình 3–5 ngày: yoga, thiền, detox, kết nối thiên nhiên và tái tạo năng lượng.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_113629d75-1772095764377.png",
  imageAlt: 'Người tập yoga buổi sáng sớm trong thiên nhiên yên bình',
  duration: '3–5 Ngày',
  price: 'Từ 8.500.000đ',
  icon: '🧘'
},
{
  type: 'Team Building',
  description: 'Chương trình dã ngoại doanh nghiệp, kết hợp trải nghiệm thiên nhiên và gắn kết đội nhóm.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_157a9030c-1764648555191.png",
  imageAlt: 'Nhóm doanh nghiệp tham gia hoạt động team building ngoài trời',
  duration: '1–2 Ngày',
  price: 'Từ 1.200.000đ/người',
  icon: '🤝'
}];


export default function GreenTravelSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.08 }
    );
    sectionRef?.current?.querySelectorAll('.animate-on-scroll')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="green-travel" ref={sectionRef} className="bg-primary-dark py-24 md:py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/30 blur-3xl pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl pointer-events-none opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 animate-on-scroll">
          <div>
            <span className="section-label mb-4 block" style={{ color: '#C49A1E' }}>
              Trải Nghiệm · Travel
            </span>
            <h2 className="font-serif text-display-md text-white max-w-xl">
              Green Travel —{' '}
              <span className="italic text-accent-light">rời thành phố, về với thiên nhiên</span>
            </h2>
          </div>
          <Link
            href="/green-travel-landing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-light border-b border-accent-light/40 pb-0.5 hover:border-accent-light transition-colors self-start lg:self-auto">
            
            Xem tất cả trải nghiệm
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Hero image + story */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 animate-on-scroll delay-100">
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden h-[360px] md:h-[440px] img-zoom">
            <AppImage
              src="https://images.unsplash.com/photo-1650821205951-a40dfb7383a4"
              alt="Mặt hồ Trị An bình yên lúc sáng sớm, mặt nước phẳng lặng phản chiếu bầu trời"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Điểm đến</p>
              <p className="text-white font-serif text-xl font-semibold">Hồ Trị An · Đồng Nai</p>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Hồ Trị An — lá phổi xanh của vùng Đông Nam Bộ — là nơi lý tưởng để rời xa nhịp sống đô thị, kết nối lại với thiên nhiên và tìm lại trạng thái tốt nhất của bản thân.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Green Travel không chỉ là một chuyến đi. Đây là trải nghiệm chữa lành được thiết kế có chủ đích — kết hợp không gian thiên nhiên độc đáo của hệ sinh thái Trị An với chương trình wellness chuyên sâu.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
              { label: 'Diện Tích Hồ', value: '323 km²' },
              { label: 'Cách TP.HCM', value: '~80km' },
              { label: 'Loài Cây Rừng', value: '200+' },
              { label: 'Đảo CEO', value: 'Độc Quyền' }]?.
              map((stat) =>
              <div key={stat?.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white/50 text-[10px] uppercase tracking-widest">{stat?.label}</p>
                  <p className="text-white font-serif text-lg font-semibold mt-0.5">{stat?.value}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Experience Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {experiences?.map((exp, i) =>
          <div
            key={exp?.type}
            className={`animate-on-scroll delay-${(i + 1) * 100} group`}>
            
              <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 spotlight-card spotlight-card-dark card-lift">
                <div className="relative h-48 img-zoom overflow-hidden">
                  <AppImage
                  src={exp?.image}
                  alt={exp?.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
                  <div className="absolute top-4 left-4 text-2xl">{exp?.icon}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-xl text-white font-semibold">{exp?.type}</h3>
                    <span className="text-[10px] text-white/50 uppercase tracking-widest">{exp?.duration}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{exp?.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-accent-light font-semibold text-sm">{exp?.price}</p>
                    <Link
                    href="/green-travel-landing"
                    className="text-xs font-semibold text-white/60 hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-all">
                    
                      Đặt Lịch →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll delay-400">
          <Link
            href="/green-travel-landing"
            className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-white font-semibold rounded-full text-sm hover:bg-accent-dark transition-all duration-300 hover:-translate-y-1 shadow-lg">
            
            Đặt Lịch Trải Nghiệm
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <p className="text-white/40 text-xs mt-3">Hoặc tham gia waitlist để nhận ưu đãi ra mắt</p>
        </div>

      </div>
    </section>);

}
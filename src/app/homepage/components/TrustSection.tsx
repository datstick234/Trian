'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const certifications = [
{ name: 'VSATTP', desc: 'Vệ sinh an toàn thực phẩm', icon: '🏅' },
{ name: 'Truy Xuất Nguồn Gốc', desc: 'QR code từng sản phẩm', icon: '🔍' },
{ name: 'Cold Chain Certified', desc: 'Chuỗi lạnh 4 tầng chuẩn quốc tế', icon: '❄️' },
{ name: 'Đồng Nai Origin', desc: 'Xác nhận xuất xứ hồ Trị An', icon: '📍' }];


export default function TrustSection() {
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
    <section id="trust" ref={sectionRef} className="py-24 md:py-32 bg-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-label mb-4 justify-center">Tín Nhiệm · Chứng Nhận</span>
          <h2 className="font-serif text-display-md text-foreground mt-2 max-w-xl mx-auto">
            Chất lượng được{' '}
            <span className="italic text-primary">chứng minh bằng hệ thống</span>
          </h2>
        </div>

        {/* Row 1: certifications (3 cards) = 3/3 ✓ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-on-scroll delay-100">
          {certifications?.map((cert) =>
          <div key={cert?.name} className="bg-white rounded-xl p-5 border border-primary/10 text-center spotlight-card card-lift">
              <div className="text-3xl mb-3">{cert?.icon}</div>
              <p className="font-semibold text-foreground text-sm mb-1">{cert?.name}</p>
              <p className="text-muted text-xs leading-snug">{cert?.desc}</p>
            </div>
          )}
        </div>

        {/* Behind the scenes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-on-scroll delay-200">
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden h-[320px] img-zoom">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_11ed5d7ed-1768521231988.png"
              alt="Xưởng chế biến cá sạch sẽ, công nhân mặc đồng phục vệ sinh đang sơ chế"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white/70 text-xs uppercase tracking-widest mb-1">Behind The Scenes</p>
              <p className="text-white font-serif text-xl font-semibold">Xưởng chế biến đạt chuẩn</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden h-[150px] img-zoom">
              <AppImage
                src="https://images.unsplash.com/photo-1658980372161-96491d7e35d2"
                alt="Cá được đóng gói hút chân không cẩn thận trong túi trong suốt"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
              <div className="absolute inset-0 bg-primary/40" />
              <p className="absolute bottom-3 left-4 right-4 text-white text-sm font-semibold font-serif">Đóng gói hút chân không</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[150px] img-zoom">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_195e3f581-1764684658218.png"
                alt="Xe tải lạnh chuyên dụng vận chuyển thực phẩm tươi sống"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
              <div className="absolute inset-0 bg-primary/40" />
              <p className="absolute bottom-3 left-4 right-4 text-white text-sm font-semibold font-serif">Logistics lạnh chuyên dụng</p>
            </div>
          </div>
        </div>

      </div>
    </section>);

}
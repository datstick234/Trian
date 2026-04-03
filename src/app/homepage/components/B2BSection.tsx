'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const b2bServices = [
{
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>,

  title: 'Horeca Supply',
  desc: 'Nguồn cung cá lăng chuẩn cho nhà hàng, khách sạn, chuỗi ẩm thực. Hồ sơ VSATTP, VAT đầy đủ.',
  detail: 'Tối thiểu 20kg/tuần · Giao lạnh chuyên dụng'
},
{
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>,

  title: 'Corporate Gift',
  desc: 'Giỏ quà đặc sản hồ Trị An cho doanh nghiệp — độc lạ, có câu chuyện, đóng gói sang trọng.',
  detail: 'Từ 50 hộp · In logo thương hiệu · Giao toàn quốc'
},
{
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>,

  title: 'Private Retreat',
  desc: 'Đảo CEO độc quyền — không gian retreat riêng tư cho lãnh đạo, nhà đầu tư và đội nhóm cốt lõi.',
  detail: 'Tối đa 20 người · Trọn gói ẩm thực · Tùy chỉnh chương trình'
}];


export default function B2BSection() {
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
    <section id="b2b" ref={sectionRef} className="py-24 md:py-32 bg-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div className="animate-on-scroll">
            <span className="section-label mb-4 block">Doanh Nghiệp · B2B</span>
            <h2 className="font-serif text-display-md text-foreground mb-6">
              Đối tác chiến lược{' '}
              <span className="italic text-primary">từ bếp đến boardroom</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-10">
              Tri An Heritage cung cấp giải pháp toàn diện cho doanh nghiệp — từ nguồn thực phẩm chuẩn Horeca đến quà tặng doanh nghiệp độc đáo và không gian retreat riêng tư cho lãnh đạo.
            </p>

            {/* Services */}
            <div className="flex flex-col gap-5 mb-10">
              {b2bServices?.map((service) =>
              <div
                key={service?.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-primary/10 hover:border-primary/30 hover:shadow-card transition-all duration-300 spotlight-card group">
                
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                    {service?.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{service?.title}</h4>
                    <p className="text-muted text-sm leading-relaxed mb-2">{service?.desc}</p>
                    <p className="text-primary/70 text-xs font-medium">{service?.detail}</p>
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#crm"
                className="flex-1 text-center py-3.5 bg-primary text-white font-semibold rounded-full text-sm hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 shadow-sm">
                
                Đặt Lịch Tư Vấn
              </a>
              <a
                href="#"
                className="flex-1 text-center py-3.5 border border-primary text-primary font-semibold rounded-full text-sm hover:bg-primary/5 transition-all duration-300">
                
                Tải Profile Công Ty
              </a>
            </div>
          </div>

          {/* Right: image + stats */}
          <div className="animate-on-scroll delay-200 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden h-[340px] img-zoom">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_18174fe5d-1774974060584.png"
                alt="Nhà hàng sang trọng phục vụ đặc sản cá lăng hồ Trị An"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
              { value: '50+', label: 'Đối Tác Horeca' },
              { value: '200+', label: 'Giỏ Quà / Tháng' },
              { value: '15+', label: 'Corporate Retreat' }]?.
              map((stat) =>
              <div key={stat?.label} className="bg-white rounded-xl p-4 border border-primary/10 text-center">
                  <p className="font-serif text-2xl text-primary font-semibold">{stat?.value}</p>
                  <p className="text-muted text-xs mt-1 leading-snug">{stat?.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}
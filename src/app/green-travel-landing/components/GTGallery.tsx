'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

// Gallery bento grid audit (4-col grid):
// Row 1: [img0 cs-2 rs-2] + [img1 cs-1] + [img2 cs-1] = 4/4 ✓
// Row 2: [img0 cs-2 rs-2 pre-filled] + [img3 cs-2] = 4/4 ✓
// Row 3: [img4 cs-1] + [img5 cs-1] + [img6 cs-2] = 4/4 ✓
const galleryImages = [
{
  src: "https://images.unsplash.com/photo-1689428616261-49b8c276ba69",
  alt: 'Cảnh hồ Trị An nhìn từ trên cao, mặt nước xanh ngọc bích bao quanh bởi rừng xanh',
  colSpan: 'md:col-span-2',
  rowSpan: 'md:row-span-2',
  caption: 'Hồ Trị An'
},
{
  src: "https://images.unsplash.com/photo-1671783181591-55f8e18fbb21",
  alt: 'Lều glamping sang trọng bên hồ, đèn ấm áp về đêm',
  colSpan: 'md:col-span-1',
  rowSpan: '',
  caption: 'Glamping'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1aeeae613-1772828292264.png",
  alt: 'Người tập yoga lúc bình minh trong thiên nhiên yên bình',
  colSpan: 'md:col-span-1',
  rowSpan: '',
  caption: 'Morning Yoga'
},
{
  src: "https://images.unsplash.com/photo-1601089747137-0364fab09dab",
  alt: 'Bữa ăn đặc sản bản địa được bày trí đẹp mắt trên bàn gỗ ngoài trời',
  colSpan: 'md:col-span-2',
  rowSpan: '',
  caption: 'Ẩm Thực Bản Địa'
},
{
  src: "https://images.unsplash.com/photo-1664218359514-cecbbaaf5ea8",
  alt: 'Rừng xanh nguyên sinh bao quanh hồ, ánh sáng chiều xuyên qua tán cây',
  colSpan: 'md:col-span-1',
  rowSpan: '',
  caption: 'Rừng Xanh'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_157a9030c-1764648555191.png",
  alt: 'Nhóm người vui vẻ tham gia team building ngoài trời',
  colSpan: 'md:col-span-1',
  rowSpan: '',
  caption: 'Team Building'
},
{
  src: "https://images.unsplash.com/photo-1657549514686-d5baec93c22a",
  alt: 'Khu nghỉ dưỡng sang trọng nhìn ra mặt hồ, không gian riêng tư và yên tĩnh',
  colSpan: 'md:col-span-2',
  rowSpan: '',
  caption: 'Đảo CEO'
}];


export default function GTGallery() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-beige-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-label mb-4 justify-center">Hình Ảnh Thực Tế</span>
          <h2 className="font-serif text-display-md text-foreground mt-2 max-w-xl mx-auto">
            Cảm nhận trước khi{' '}
            <span className="italic text-primary">trải nghiệm</span>
          </h2>
        </div>

        {/* Bento gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px] animate-on-scroll delay-100">
          {galleryImages?.map((img, i) =>
          <div
            key={img?.caption}
            className={`relative rounded-xl overflow-hidden group img-zoom ${img?.colSpan} ${img?.rowSpan}`}>
            
              <AppImage
              src={img?.src}
              alt={img?.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-serif text-sm font-semibold">{img?.caption}</p>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-on-scroll delay-200">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-semibold rounded-full text-sm hover:bg-primary-dark transition-all duration-300 hover:-translate-y-1 shadow-lg">
            
            Đặt Lịch Trải Nghiệm
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>);

}
'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const experiences = [
{
  id: 'glamping',
  type: 'Glamping',
  tagline: 'Ngủ dưới trời sao, thức dậy bên hồ',
  description: 'Lều glamping sang trọng view hồ Trị An — trải nghiệm thiên nhiên mà không từ bỏ tiện nghi. Bình minh trên mặt nước, hoàng hôn giữa rừng thông, bữa tối nướng BBQ bên hồ.',
  image: "https://images.unsplash.com/photo-1726165501548-2619df5fc427",
  imageAlt: 'Lều glamping sang trọng nhìn ra mặt hồ xanh trong, ánh đèn ấm áp về đêm',
  duration: '1 – 3 Đêm',
  groupSize: '2 – 8 Người',
  price: 'Từ 2.500.000đ/đêm',
  includes: [
  'Lều glamping cao cấp view hồ',
  'Bữa sáng đặc sản địa phương',
  'BBQ tối bên hồ',
  'Kayak & thuyền buồm',
  'Hướng dẫn viên sinh thái'],

  highlight: 'View Hồ Độc Quyền',
  icon: '⛺',
  color: 'from-primary-dark to-primary'
},
{
  id: 'retreat',
  type: 'Wellness Retreat',
  tagline: 'Reset hoàn toàn, trở về trạng thái tốt nhất',
  description: 'Chương trình 3–5 ngày được thiết kế có chủ đích: yoga bình minh, thiền giữa rừng, detox ẩm thực, liệu pháp âm thanh và kết nối sâu với thiên nhiên. Dành cho ai đang burnout và cần tái tạo năng lượng.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_126fe4536-1774156714514.png",
  imageAlt: 'Người tập yoga trên bãi cỏ xanh lúc bình minh, bầu trời trong sáng, không khí yên tĩnh',
  duration: '3 – 5 Ngày',
  groupSize: '4 – 20 Người',
  price: 'Từ 8.500.000đ/người',
  includes: [
  'Yoga & thiền buổi sáng',
  'Liệu pháp âm thanh (sound healing)',
  'Detox ẩm thực 100% tự nhiên',
  'Hướng dẫn thiền chuyên sâu',
  'Không gian riêng tư hoàn toàn'],

  highlight: 'Chuyển Hoá Thật Sự',
  icon: '🧘',
  color: 'from-earth-dark to-earth'
},
{
  id: 'teambuilding',
  type: 'Corporate Team Building',
  tagline: 'Gắn kết đội nhóm giữa thiên nhiên',
  description: 'Chương trình team building thiên nhiên 1–2 ngày dành cho doanh nghiệp — kết hợp hoạt động ngoài trời, thử thách tập thể, ẩm thực đặc sản và không gian họp sáng tạo. Phù hợp từ 20 đến 200 người.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cfb09126-1772262459334.png",
  imageAlt: 'Nhóm nhân viên doanh nghiệp tham gia hoạt động ngoài trời, vui vẻ và gắn kết',
  duration: '1 – 2 Ngày',
  groupSize: '20 – 200 Người',
  price: 'Từ 1.200.000đ/người',
  includes: [
  'Hoạt động ngoài trời đa dạng',
  'Bữa ăn đặc sản hồ Trị An',
  'Không gian họp sáng tạo',
  'Facilitator chuyên nghiệp',
  'Photo/video kỷ niệm'],

  highlight: 'Phù Hợp Mọi Quy Mô',
  icon: '🤝',
  color: 'from-accent-dark to-accent'
},
{
  id: 'ceo-island',
  type: 'Đảo CEO',
  tagline: 'Không gian riêng tư cho người lãnh đạo',
  description: 'Đảo CEO độc quyền thuộc hệ sinh thái Tri An Holding — không gian retreat hoàn toàn riêng tư dành cho CEO, nhà đầu tư và lãnh đạo cấp cao. Kết hợp networking chọn lọc, nghỉ dưỡng cao cấp và ẩm thực đặc sản.',
  image: "https://images.unsplash.com/photo-1706197024342-4f3f556c9060",
  imageAlt: 'Khu nghỉ dưỡng sang trọng trên đảo, nhìn ra mặt hồ xanh, không gian riêng tư',
  duration: '2 – 7 Ngày',
  groupSize: '4 – 20 Người',
  price: 'Liên hệ để báo giá',
  includes: [
  'Đảo riêng hoàn toàn',
  'Bếp riêng + đầu bếp cá nhân',
  'Chương trình networking curated',
  'Helicopter/speedboat transfer',
  'Bảo mật tuyệt đối'],

  highlight: 'Độc Quyền · Riêng Tư',
  icon: '👑',
  color: 'from-primary-dark to-primary-dark'
}];


export default function GTExperiences() {
  const [active, setActive] = useState('glamping');
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
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeExp = experiences.find((e) => e.id === active)!;

  return (
    <section id="experiences" ref={sectionRef} className="py-24 md:py-32 bg-beige-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 animate-on-scroll">
          <span className="section-label mb-4 block">Trải Nghiệm</span>
          <h2 className="font-serif text-display-md text-foreground max-w-2xl">
            Bốn hành trình —{' '}
            <span className="italic text-primary">một điểm đến</span>
          </h2>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-3 mb-10 animate-on-scroll delay-100">
          {experiences.map((exp) =>
          <button
            key={exp.id}
            onClick={() => setActive(exp.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            active === exp.id ?
            'bg-primary text-white shadow-sm' :
            'bg-white border border-primary/15 text-muted hover:text-foreground hover:border-primary/30'}`
            }>
            
              <span>{exp.icon}</span>
              {exp.type}
            </button>
          )}
        </div>

        {/* Active experience detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-on-scroll delay-200">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] img-zoom">
            <AppImage
              src={activeExp.image}
              alt={activeExp.imageAlt}
              fill
              className="object-cover transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                {activeExp.highlight}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-serif text-xl font-semibold italic">&ldquo;{activeExp.tagline}&rdquo;</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{activeExp.icon}</span>
                <div>
                  <p className="text-muted text-xs uppercase tracking-widest">Loại Trải Nghiệm</p>
                  <h3 className="font-serif text-2xl text-foreground font-semibold">{activeExp.type}</h3>
                </div>
              </div>

              <p className="text-muted text-base leading-relaxed mb-6">{activeExp.description}</p>

              {/* Meta */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                { label: 'Thời Gian', value: activeExp.duration },
                { label: 'Nhóm', value: activeExp.groupSize },
                { label: 'Giá Từ', value: activeExp.price }].
                map((m) =>
                <div key={m.label} className="bg-white rounded-xl p-3 border border-primary/10 text-center">
                    <p className="text-muted text-[10px] uppercase tracking-widest mb-1">{m.label}</p>
                    <p className="text-foreground font-semibold text-sm leading-snug">{m.value}</p>
                  </div>
                )}
              </div>

              {/* Includes */}
              <div className="mb-6">
                <p className="text-foreground/60 text-xs uppercase tracking-widest mb-3 font-medium">Bao Gồm</p>
                <ul className="flex flex-col gap-2">
                  {activeExp.includes.map((item) =>
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="#booking"
                className="flex-1 text-center py-3.5 bg-primary text-white font-semibold rounded-full text-sm hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 shadow-sm">
                
                Đặt Lịch Ngay
              </a>
              <a
                href="#booking"
                className="flex-1 text-center py-3.5 border border-primary text-primary font-semibold rounded-full text-sm hover:bg-primary/5 transition-all duration-300">
                
                Tham Gia Waitlist
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>);

}
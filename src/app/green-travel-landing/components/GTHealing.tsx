'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const healingPillars = [
{
  icon: '🌊',
  title: 'Nước Sạch Tự Nhiên',
  desc: 'Hồ Trị An là nguồn nước ngọt tự nhiên lớn nhất vùng Đông Nam Bộ — nước sạch, không ô nhiễm, không tiếng ồn đô thị.'
},
{
  icon: '🌲',
  title: 'Rừng Xanh Nguyên Sinh',
  desc: 'Hệ sinh thái rừng nhiệt đới phong phú bao quanh hồ — không khí trong lành, âm thanh tự nhiên, phytoncide từ cây rừng.'
},
{
  icon: '🌅',
  title: 'Nhịp Sống Chậm',
  desc: 'Không Wi-Fi bắt buộc, không lịch trình dày đặc — chỉ có thiên nhiên, cơ thể và khoảnh khắc hiện tại.'
},
{
  icon: '🍃',
  title: 'Ẩm Thực Chữa Lành',
  desc: 'Toàn bộ ẩm thực từ nguyên liệu bản địa hồ Trị An — cá lăng, rau rừng, trái cây địa phương. Sạch từ nguồn gốc.'
}];


export default function GTHealing() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-primary-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-light/30 to-transparent" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl opacity-50" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 rounded-full bg-accent/15 blur-3xl opacity-40" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-label mb-4 justify-center" style={{ color: '#4da792' }}>
            Triết Lý Chữa Lành
          </span>
          <h2 className="font-serif text-display-md text-white mt-2 max-w-2xl mx-auto">
            Thiên nhiên là{' '}
            <span className="italic text-primary-light">phương thuốc tốt nhất</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto text-base leading-relaxed">
            Green Travel không bán một chuyến đi — mà bán quyền tiếp cận vào một hệ sinh thái tự nhiên được bảo tồn, nơi cơ thể và tâm trí có thể thực sự phục hồi.
          </p>
        </div>

        {/* Split: image + pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: cinematic image */}
          <div className="animate-on-scroll delay-100">
            <div className="relative rounded-2xl overflow-hidden h-[480px] img-zoom">
              <AppImage
                src="https://images.unsplash.com/photo-1669298523253-99f60356e9ee"
                alt="Cảnh rừng xanh và hồ nước yên tĩnh lúc bình minh, ánh sáng dịu nhẹ xuyên qua tán cây"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />

              {/* Quote overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <p className="text-white font-serif text-lg italic leading-snug mb-3">
                    &ldquo;Rời thành phố không chỉ để đi chơi, mà để trở về trạng thái tốt hơn.&rdquo;
                  </p>
                  <p className="text-white/60 text-xs uppercase tracking-widest">Green Travel · Tri An Heritage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: healing pillars */}
          <div className="flex flex-col gap-5 animate-on-scroll delay-200">
            {healingPillars?.map((pillar, i) =>
            <div
              key={pillar?.title}
              className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-300 group">
              
                <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary/50 transition-colors">
                  {pillar?.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1.5">{pillar?.title}</h4>
                  <p className="text-white/55 text-sm leading-relaxed">{pillar?.desc}</p>
                </div>
              </div>
            )}

            <div className="mt-2">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light border-b border-primary-light/40 pb-0.5 hover:border-primary-light transition-colors">
                
                Bắt đầu hành trình chữa lành của bạn
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Testimonial from a retreat guest */}
        <div className="mt-20 animate-on-scroll delay-300">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <div className="flex gap-0.5 justify-center mb-4">
              {Array.from({ length: 5 })?.map((_, i) =>
              <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              )}
            </div>
            <p className="text-white/80 font-serif text-xl md:text-2xl italic leading-relaxed mb-6">
              &ldquo;5 ngày retreat tại Trị An là quyết định tốt nhất tôi đã làm trong năm. Không có mạng, không họp online — chỉ có thiên nhiên, yoga và những bữa ăn ngon. Tôi trở về với năng lượng hoàn toàn mới.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1ee1e8e9a-1763295200796.png"
                  alt="Giám đốc điều hành doanh nghiệp Việt Nam, nụ cười tự tin sau retreat"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full" />
                
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">Nguyễn Hữu Phúc</p>
                <p className="text-white/50 text-xs">CEO, Công ty Phát triển Bền vững Đông Nam Bộ</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>);

}
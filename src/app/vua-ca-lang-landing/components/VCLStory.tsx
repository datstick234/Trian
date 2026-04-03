'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const storySteps = [
{
  num: 'i.',
  title: 'Đánh Bắt Tự Nhiên',
  desc: 'Cá lăng được đánh bắt từ hồ Trị An — hồ nước ngọt lớn nhất vùng Đông Nam Bộ với nguồn nước sạch tự nhiên. Không nuôi nhốt, không kháng sinh.',
  image: "https://images.unsplash.com/photo-1502166943298-a6b631523442",
  imageAlt: 'Ngư dân đánh bắt cá trên hồ Trị An lúc bình minh'
},
{
  num: 'ii.',
  title: 'Sơ Chế Tại Xưởng',
  desc: 'Cá được đưa vào xưởng sơ chế đạt tiêu chuẩn VSATTP trong vòng 2 giờ sau khi đánh bắt. Đội ngũ kỹ thuật xử lý theo quy trình chuẩn hoá nghiêm ngặt.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b761cf42-1774974060912.png",
  imageAlt: 'Xưởng sơ chế cá sạch sẽ, đạt chuẩn vệ sinh an toàn thực phẩm'
},
{
  num: 'iii.',
  title: 'Cấp Đông & Đóng Gói',
  desc: 'Hút chân không loại bỏ 99% vi khuẩn, cấp đông sâu -40°C tại xưởng, đóng gói 3 lớp bảo vệ. Bảo quản tươi ngon lên đến 6 tháng mà không cần chất bảo quản.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1afb3d1b9-1764672084892.png",
  imageAlt: 'Cá được đóng gói hút chân không trong túi trong suốt chuyên dụng'
},
{
  num: 'iv.',
  title: 'Giao Đến Tận Nhà',
  desc: 'Logistics lạnh chuyên dụng duy trì nhiệt độ từ -18°C đến -22°C trong suốt hành trình. Giao hàng trong ngày tại TP.HCM, 1–2 ngày toàn quốc.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_195e3f581-1764684658218.png",
  imageAlt: 'Xe tải lạnh chuyên dụng giao hàng thực phẩm đông lạnh'
}];


export default function VCLStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stickyImageRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = stepRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveStep(idx);
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '-35% 0% -35% 0%', threshold: 0 }
    );
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );

    stepRefs.current.forEach((el) => {if (el) observer.observe(el);});
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => scrollObserver.observe(el));
    return () => {observer.disconnect();scrollObserver.disconnect();};
  }, []);

  return (
    <section id="story" ref={sectionRef} className="py-24 md:py-32 bg-beige-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 animate-on-scroll">
          <span className="section-label mb-4 block">Câu Chuyện Sản Phẩm</span>
          <h2 className="font-serif text-display-md text-foreground max-w-2xl">
            Từ hồ đến bàn ăn —{' '}
            <span className="italic text-primary">4 bước giữ trọn hương vị</span>
          </h2>
        </div>

        {/* Sticky scroll layout */}
        <div className="relative flex flex-col lg:flex-row gap-12 items-start">

          {/* Steps (Left) */}
          <div className="w-full lg:w-1/2 space-y-16 py-8 lg:py-[10vh]">
            {storySteps.map((step, i) =>
            <div
              key={step.num}
              ref={(el) => {stepRefs.current[i] = el;}}
              className="step-item animate-on-scroll opacity-100 transition-all duration-500"
              data-step={i}>
              
                <span className="text-sm font-serif italic text-muted mb-4 block">{step.num}</span>
                <h3
                className={`font-serif text-3xl md:text-4xl mb-4 transition-colors duration-500 ${
                activeStep === i ? 'text-primary' : 'text-foreground/40'}`
                }>
                
                  {step.title}
                </h3>
                <p
                className={`text-base leading-relaxed max-w-sm transition-colors duration-500 ${
                activeStep === i ? 'text-muted' : 'text-muted/40'}`
                }>
                
                  {step.desc}
                </p>
              </div>
            )}
          </div>

          {/* Sticky graphic (Right) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-[15vh] h-[60vh] flex items-center justify-center">
            <div
              ref={stickyImageRef}
              className="w-full max-w-[520px] aspect-square rounded-2xl overflow-hidden relative shadow-premium-lg">
              
              {storySteps.map((step, i) =>
              <div
                key={step.num}
                className={`absolute inset-0 transition-opacity duration-700 ${
                activeStep === i ? 'opacity-100' : 'opacity-0'}`
                }>
                
                  <AppImage
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                      <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1">Bước {i + 1}/4</p>
                      <p className="text-white font-serif text-lg font-semibold">{step.title}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>);

}
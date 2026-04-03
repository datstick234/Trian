'use client';

import React, { useEffect, useRef } from 'react';

const benefits = [
  {
    icon: '💰',
    title: 'Hoa Hồng Hấp Dẫn',
    desc: 'Nhận 8–15% hoa hồng trên mỗi đơn hàng thành công. Không giới hạn thu nhập.',
  },
  {
    icon: '📦',
    title: 'Không Cần Ôm Hàng',
    desc: 'Bán qua link riêng, Tri An Heritage xử lý kho và vận chuyển. Bạn chỉ cần chia sẻ.',
  },
  {
    icon: '🎁',
    title: 'Quyền Trải Nghiệm',
    desc: 'CTV xuất sắc được mời tham dự trải nghiệm Green Travel độc quyền tại đảo CEO.',
  },
  {
    icon: '📊',
    title: 'Dashboard Theo Dõi',
    desc: 'Xem đơn hàng, hoa hồng và hiệu suất theo thời gian thực trên hệ thống affiliate.',
  },
];

export default function CommunitySection() {
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
    <section id="community" ref={sectionRef} className="py-24 md:py-32 bg-beige-dark relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(0,77,63,0.15) 0%, transparent 50%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-label mb-4 justify-center">Cộng Đồng · Affiliate</span>
          <h2 className="font-serif text-display-md text-foreground mt-2 max-w-2xl mx-auto">
            Cùng nhau xây dựng{' '}
            <span className="italic text-primary">hệ sinh thái di sản</span>
          </h2>
          <p className="text-muted mt-4 max-w-lg mx-auto text-base leading-relaxed">
            Tham gia cộng đồng ăn sạch – sống xanh hoặc trở thành cộng tác viên và kiếm thu nhập từ mạng lưới của bạn.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Community Join */}
          <div className="animate-on-scroll delay-100">
            <div className="bg-primary rounded-2xl p-8 md:p-10 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="font-serif text-2xl md:text-3xl text-white font-semibold mb-4">
                  Tham Gia Cộng Đồng
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Cộng đồng Tri An Heritage — nơi những người yêu ẩm thực sạch, sống xanh và trải nghiệm bản địa kết nối với nhau. Nhận tin tức, công thức nấu ăn, ưu đãi thành viên và lịch sự kiện độc quyền.
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {['Công thức nấu đặc sản cá lăng', 'Ưu đãi thành viên ưu tiên', 'Cập nhật mùa vụ & sản phẩm mới', 'Lịch sự kiện trải nghiệm']?.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#crm"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-semibold rounded-full text-sm hover:bg-beige transition-all duration-300 hover:-translate-y-0.5"
                >
                  Tham Gia Miễn Phí
                </a>
              </div>
            </div>
          </div>

          {/* Affiliate */}
          <div className="animate-on-scroll delay-200">
            <div className="bg-foreground rounded-2xl p-8 md:p-10 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-serif text-2xl md:text-3xl text-white font-semibold mb-4">
                  Trở Thành Cộng Tác Viên
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Chia sẻ sản phẩm Tri An Heritage — không cần vốn, không cần kho hàng. Kiếm hoa hồng từ mỗi đơn hàng qua link của bạn.
                </p>

                {/* Benefits grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {benefits?.map((benefit) => (
                    <div key={benefit?.title} className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="text-2xl mb-2">{benefit?.icon}</div>
                      <h4 className="text-white font-semibold text-sm mb-1">{benefit?.title}</h4>
                      <p className="text-white/50 text-xs leading-snug">{benefit?.desc}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#crm"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-full text-sm hover:bg-accent-dark transition-all duration-300 hover:-translate-y-0.5"
                >
                  Đăng Ký Ngay
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
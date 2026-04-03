'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const reviews = [
{
  name: 'Nguyễn Thị Hương',
  role: 'Nội trợ, Quận 7 TP.HCM',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19037a4b7-1772095514019.png",
  avatarAlt: 'Người phụ nữ Việt Nam trung niên, nụ cười thân thiện',
  rating: 5,
  product: 'Combo Gia Đình M',
  text: 'Lần đầu thử mà mê luôn. Cá tươi hơn mình nghĩ rất nhiều, thịt trắng ngon, nấu canh chua cực ngon. Giao đúng giờ, đóng gói chắc chắn. Cả nhà đều khen!',
  verified: true,
  date: 'Tháng 3, 2026'
},
{
  name: 'Trần Minh Khoa',
  role: 'Kỹ sư, Biên Hoà Đồng Nai',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_11dc7e683-1763293107593.png",
  avatarAlt: 'Đàn ông Việt Nam trung niên, chuyên nghiệp',
  rating: 5,
  product: 'Gói Đăng Ký Tháng Gia Đình',
  text: 'Mình đặt gói tháng đã 3 tháng rồi. Chất lượng ổn định qua từng đợt, giá tốt hơn mua ngoài chợ mà sạch hơn nhiều. Dịch vụ khách hàng cũng rất nhiệt tình.',
  verified: true,
  date: 'Tháng 3, 2026'
},
{
  name: 'Lê Thị Phương Anh',
  role: 'Giám đốc Marketing, Bình Dương',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1733b1bb6-1763300430650.png",
  avatarAlt: 'Phụ nữ trẻ chuyên nghiệp Việt Nam, tự tin',
  rating: 5,
  product: 'Quà Tặng Premium',
  text: 'Mua làm quà biếu sếp dịp Tết, ai nhận cũng hỏi mua ở đâu. Hộp quà đẹp, câu chuyện thương hiệu rất hay, cảm giác rất premium. Chắc chắn mua lại!',
  verified: true,
  date: 'Tháng 2, 2026'
},
{
  name: 'Phạm Quốc Bảo',
  role: 'Bếp trưởng, Nhà hàng Sài Gòn',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1047ae0d8-1767416743026.png",
  avatarAlt: 'Đàn ông Việt Nam, bếp trưởng nhà hàng chuyên nghiệp',
  rating: 5,
  product: 'Horeca Supply',
  text: 'Nguồn cung ổn định, size đồng đều, giấy tờ VSATTP đầy đủ. Khách hàng nhà hàng rất thích món cá lăng. Đã ký hợp đồng cung cấp dài hạn.',
  verified: true,
  date: 'Tháng 1, 2026'
},
{
  name: 'Võ Thị Thanh Tuyền',
  role: 'Blogger ẩm thực, TP.HCM',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_185c443de-1774974062902.png",
  avatarAlt: 'Phụ nữ trẻ Việt Nam, blogger, sáng tạo nội dung',
  rating: 5,
  product: 'Combo Gia Đình L',
  text: 'Làm content về cá lăng Trị An mà được thử sản phẩm thật — chất lượng vượt kỳ vọng. Cá tươi, thịt dày, ít xương. Sẽ giới thiệu cho followers của mình.',
  verified: true,
  date: 'Tháng 3, 2026'
},
{
  name: 'Nguyễn Văn Đức',
  role: 'Chủ shop thực phẩm sạch, Quận 2',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_149425572-1772996388369.png",
  avatarAlt: 'Đàn ông trung niên Việt Nam, chủ doanh nghiệp nhỏ',
  rating: 5,
  product: 'Chương Trình CTV',
  text: 'Tham gia CTV từ tháng 1, tháng đầu đã thu về hoa hồng hơn 3 triệu mà không cần ôm hàng. Hệ thống tracking rõ ràng, team hỗ trợ nhiệt tình.',
  verified: true,
  date: 'Tháng 2, 2026'
}];


export default function VCLReviews() {
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-label mb-4 justify-center" style={{ color: '#C49A1E' }}>
            Đánh Giá Thực Tế
          </span>
          <h2 className="font-serif text-display-md text-white mt-2 max-w-xl mx-auto">
            Hơn 500 khách hàng{' '}
            <span className="italic text-accent-light">đã tin tưởng</span>
          </h2>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {Array.from({ length: 5 })?.map((_, i) =>
              <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              )}
            </div>
            <span className="text-white font-serif text-2xl font-semibold">4.9</span>
            <span className="text-white/50 text-sm">(547 đánh giá)</span>
          </div>
        </div>

        {/* Reviews grid */}
        {/* Row 1: [r0 cs-1] + [r1 cs-1] + [r2 cs-1] = 3/3 ✓ */}
        {/* Row 2: [r3 cs-1] + [r4 cs-1] + [r5 cs-1] = 3/3 ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews?.map((review, i) =>
          <div
            key={review?.name}
            className={`animate-on-scroll delay-${Math.min((i % 3 + 1) * 100, 300)} spotlight-card spotlight-card-dark rounded-2xl p-6 bg-white/5 border border-white/10`}>
            
              {/* Header */}
              <div className="flex items-start justify-between pb-5 mb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <AppImage
                    src={review?.avatar}
                    alt={review?.avatarAlt}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full" />
                  
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{review?.name}</p>
                    <p className="text-white/50 text-xs">{review?.role}</p>
                  </div>
                </div>
                {review?.verified &&
              <span className="flex items-center gap-1 text-[9px] text-emerald-400 font-semibold uppercase tracking-wider">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Đã mua
                  </span>
              }
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review?.rating })?.map((_, idx) =>
              <svg key={idx} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
              )}
              </div>

              {/* Quote */}
              <p className="text-white/75 text-sm leading-relaxed italic mb-4">&ldquo;{review?.text}&rdquo;</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                <span className="text-accent-light/80 text-xs font-medium">{review?.product}</span>
                <span className="text-white/30 text-xs">{review?.date}</span>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-on-scroll delay-400">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white font-semibold rounded-full text-sm hover:bg-accent-dark transition-all duration-300 hover:-translate-y-1 shadow-lg">
            
            Đặt Mua Ngay
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>);

}
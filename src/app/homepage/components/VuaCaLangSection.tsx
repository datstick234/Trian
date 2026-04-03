'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const products = [
{
  name: 'Combo Gia Đình',
  weight: '2kg',
  price: '480.000đ',
  originalPrice: '580.000đ',
  description: 'Cá lăng cắt khúc, hút chân không, cấp đông sâu — đủ cho 4 người.',
  badge: 'Bán Chạy',
  badgeColor: 'bg-accent text-white'
},
{
  name: 'Gói Đăng Ký Tháng',
  weight: '4kg/tháng',
  price: '880.000đ',
  originalPrice: '1.160.000đ',
  description: 'Nhận cá tươi mỗi 2 tuần. Tiết kiệm 24% so với mua lẻ.',
  badge: 'Tiết Kiệm',
  badgeColor: 'bg-primary text-white'
},
{
  name: 'Quà Tặng Premium',
  weight: '1.5kg',
  price: '650.000đ',
  originalPrice: '750.000đ',
  description: 'Hộp quà sang trọng, đóng gói 3 lớp, kèm câu chuyện thương hiệu.',
  badge: 'Premium',
  badgeColor: 'bg-foreground text-white'
}];


const coldChainSteps = [
{ step: '01', label: 'Đánh Bắt', desc: 'Từ hồ Trị An tự nhiên', icon: '🎣' },
{ step: '02', label: 'Sơ Chế', desc: 'Xưởng đạt chuẩn VSATTP', icon: '🏭' },
{ step: '03', label: 'Hút Chân Không', desc: 'Loại bỏ 99% vi khuẩn', icon: '💨' },
{ step: '04', label: 'Cấp Đông Sâu', desc: '-40°C tại xưởng', icon: '❄️' },
{ step: '05', label: 'Đóng Gói 3 Lớp', desc: 'Bảo quản tối đa 6 tháng', icon: '📦' },
{ step: '06', label: 'Giao Lạnh', desc: 'Logistics lạnh chuyên dụng', icon: '🚚' }];


const reviews = [
{
  name: 'Nguyễn Thị Hương',
  location: 'Quận 7, TP.HCM',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19037a4b7-1772095514019.png",
  avatarAlt: 'Chân dung phụ nữ Việt Nam trung niên, mặt tươi cười',
  rating: 5,
  text: 'Cá tươi hơn mình nghĩ rất nhiều. Giao đúng giờ, đóng gói chắc chắn. Cả nhà đều khen!',
  product: 'Combo Gia Đình'
},
{
  name: 'Trần Minh Khoa',
  location: 'Biên Hoà, Đồng Nai',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe667966-1763296594320.png",
  avatarAlt: 'Chân dung đàn ông Việt Nam, nụ cười thân thiện',
  rating: 5,
  text: 'Mình đặt hàng tháng đã 3 tháng rồi. Chất lượng ổn định, giá tốt hơn mua ngoài chợ mà sạch hơn nhiều.',
  product: 'Gói Đăng Ký Tháng'
},
{
  name: 'Lê Thị Phương Anh',
  location: 'Bình Dương',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17380f704-1763295204873.png",
  avatarAlt: 'Chân dung phụ nữ trẻ Việt Nam, chuyên nghiệp',
  rating: 5,
  text: 'Mua làm quà biếu sếp, ai cũng hỏi mua ở đâu. Hộp quà đẹp, câu chuyện thương hiệu rất hay.',
  product: 'Quà Tặng Premium'
}];


export default function VuaCaLangSection() {
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
    <section id="vua-ca-lang" ref={sectionRef} className="bg-beige-dark py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 animate-on-scroll">
          <div>
            <span className="section-label mb-4 block">Sản Phẩm · Food</span>
            <h2 className="font-serif text-display-md text-foreground max-w-xl">
              Vua Cá Lăng —{' '}
              <span className="italic text-primary">từ hồ đến bàn ăn</span>
            </h2>
          </div>
          <Link
            href="/vua-ca-lang-landing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary/40 pb-0.5 hover:border-primary transition-colors self-start lg:self-auto">
            
            Xem toàn bộ sản phẩm
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Split layout: story + products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Left: Story image */}
          <div className="animate-on-scroll delay-100">
            <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] img-zoom">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ad8de63f-1774974061936.png"
                alt="Cá lăng tươi ngon được đánh bắt từ hồ Trị An, Đồng Nai"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              {/* Floating stats */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex-1">
                  <p className="text-white/60 text-[10px] uppercase tracking-widest">Cold Chain</p>
                  <p className="text-white font-serif text-xl font-semibold">4 Lớp</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex-1">
                  <p className="text-white/60 text-[10px] uppercase tracking-widest">Bảo quản</p>
                  <p className="text-white font-serif text-xl font-semibold">6 Tháng</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex-1">
                  <p className="text-white/60 text-[10px] uppercase tracking-widest">Trị An</p>
                  <p className="text-white font-serif text-xl font-semibold">100%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Products + CTA */}
          <div className="flex flex-col justify-between gap-6 animate-on-scroll delay-200">
            <p className="text-muted text-base leading-relaxed">
              Cá lăng là đặc sản quý của hồ Trị An — thịt trắng, ít xương, vị ngọt tự nhiên. Chúng tôi chuẩn hoá quy trình đánh bắt → sơ chế → cấp đông → vận chuyển để đưa đặc sản này đến bàn ăn thành thị với chất lượng nguyên vẹn.
            </p>

            {/* Products */}
            <div className="flex flex-col gap-3">
              {products?.map((product, i) =>
              <div
                key={product?.name}
                className="flex items-center justify-between p-4 rounded-xl bg-white border border-primary/10 hover:border-primary/30 hover:shadow-card transition-all duration-300 group cursor-pointer">
                
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground text-sm">{product?.name}</h4>
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${product?.badgeColor}`}>
                        {product?.badge}
                      </span>
                    </div>
                    <p className="text-muted text-xs leading-snug max-w-xs">{product?.description}</p>
                  </div>
                  <div className="text-right pl-4 shrink-0">
                    <p className="font-serif font-semibold text-primary text-base">{product?.price}</p>
                    <p className="text-muted text-xs line-through">{product?.originalPrice}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <Link
                href="/vua-ca-lang-landing"
                className="flex-1 text-center py-3.5 bg-primary text-white font-semibold rounded-full text-sm hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 shadow-sm">
                
                Mua Ngay
              </Link>
              <Link
                href="/vua-ca-lang-landing"
                className="flex-1 text-center py-3.5 border border-primary text-primary font-semibold rounded-full text-sm hover:bg-primary/5 transition-all duration-300">
                
                Đặt Hàng
              </Link>
            </div>
          </div>
        </div>

        {/* Cold Chain Process */}
        <div className="animate-on-scroll delay-300">
          <h3 className="font-serif text-2xl text-foreground mb-8 text-center">
            Quy trình cold chain — <span className="italic text-primary">4 tầng bảo vệ</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {coldChainSteps?.map((s, i) =>
            <div key={s?.step} className="text-center group">
                <div className="relative">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xl mb-3 group-hover:bg-primary/20 transition-colors">
                    {s?.icon}
                  </div>
                  {i < coldChainSteps?.length - 1 &&
                <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] right-0 h-px bg-primary/20" />
                }
                </div>
                <p className="text-[10px] text-muted uppercase tracking-widest mb-1">{s?.step}</p>
                <p className="text-sm font-semibold text-foreground">{s?.label}</p>
                <p className="text-xs text-muted mt-0.5">{s?.desc}</p>
              </div>
            )}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-20 animate-on-scroll delay-400">
          <h3 className="font-serif text-2xl text-foreground mb-8">Khách hàng nói gì?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews?.map((review) =>
            <div
              key={review?.name}
              className="bg-white rounded-2xl p-6 border border-primary/10 spotlight-card card-lift">
              
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-primary/10">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <AppImage
                    src={review?.avatar}
                    alt={review?.avatarAlt}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full" />
                  
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{review?.name}</p>
                    <p className="text-muted text-xs">{review?.location}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: review?.rating })?.map((_, i) =>
                  <svg key={i} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                  )}
                  </div>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed italic">&ldquo;{review?.text}&rdquo;</p>
                <p className="text-muted text-xs mt-3">Sản phẩm: {review?.product}</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>);

}
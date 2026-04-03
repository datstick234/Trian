'use client';

import React, { useEffect, useRef, useState } from 'react';

const productCategories = [
  {
    id: 'combo',
    label: 'Combo',
    products: [
      {
        name: 'Combo Gia Đình S',
        weight: '1kg',
        cuts: 'Cắt khúc ~5cm',
        price: 260000,
        originalPrice: 320000,
        badge: null,
        desc: 'Phù hợp gia đình 2–3 người. Lý tưởng cho canh chua, kho tộ.',
        includes: ['500g cá lăng cắt khúc', 'Hút chân không', 'Bảo quản 6 tháng', 'Hướng dẫn nấu'],
      },
      {
        name: 'Combo Gia Đình M',
        weight: '2kg',
        cuts: 'Cắt khúc ~5cm',
        price: 480000,
        originalPrice: 580000,
        badge: 'Bán Chạy',
        desc: 'Phù hợp gia đình 4–5 người. Tiết kiệm 17% so với mua lẻ.',
        includes: ['2kg cá lăng cắt khúc', 'Hút chân không', 'Bảo quản 6 tháng', 'Giao lạnh miễn phí TP.HCM'],
      },
      {
        name: 'Combo Gia Đình L',
        weight: '4kg',
        cuts: 'Cắt khúc + Phi lê',
        price: 880000,
        originalPrice: 1100000,
        badge: 'Tiết Kiệm Nhất',
        desc: 'Cho gia đình lớn hoặc tích trữ. Tiết kiệm 20% so với mua lẻ.',
        includes: ['4kg cá lăng đa dạng', 'Hút chân không 3 lớp', 'Bảo quản 6 tháng', 'Giao lạnh miễn phí toàn quốc'],
      },
    ],
  },
  {
    id: 'subscription',
    label: 'Đăng Ký Tháng',
    products: [
      {
        name: 'Gói Cơ Bản',
        weight: '2kg/tháng',
        cuts: 'Cắt khúc',
        price: 420000,
        originalPrice: 480000,
        badge: null,
        desc: 'Nhận 2kg cá mỗi tháng. Giao 1 lần/tháng vào ngày bạn chọn.',
        includes: ['2kg/tháng', 'Lịch giao linh hoạt', 'Ưu tiên sản phẩm mới', 'Huỷ bất cứ lúc nào'],
      },
      {
        name: 'Gói Gia Đình',
        weight: '4kg/tháng',
        cuts: 'Cắt khúc + Phi lê',
        price: 800000,
        originalPrice: 960000,
        badge: 'Phổ Biến',
        desc: 'Nhận 4kg cá mỗi tháng. Giao 2 lần/tháng. Tiết kiệm 24%.',
        includes: ['4kg/tháng (2 lần giao)', 'Đa dạng cách cắt', 'Ưu đãi thành viên', 'Ưu tiên đặt trải nghiệm Green Travel'],
      },
      {
        name: 'Gói Premium',
        weight: '8kg/tháng',
        cuts: 'Combo toàn bộ',
        price: 1500000,
        originalPrice: 1900000,
        badge: 'VIP',
        desc: 'Dành cho gia đình lớn hoặc nhà hàng nhỏ. Giao 4 lần/tháng.',
        includes: ['8kg/tháng (4 lần giao)', 'Toàn bộ sản phẩm', 'Account manager riêng', 'Ưu đãi đặc biệt Green Travel'],
      },
    ],
  },
  {
    id: 'gift',
    label: 'Quà Tặng',
    products: [
      {
        name: 'Quà Tặng Classic',
        weight: '1kg',
        cuts: 'Phi lê cao cấp',
        price: 380000,
        originalPrice: 450000,
        badge: null,
        desc: 'Hộp quà sang trọng kèm câu chuyện thương hiệu. Phù hợp biếu tặng.',
        includes: ['1kg phi lê cá lăng', 'Hộp quà cao cấp', 'Card câu chuyện thương hiệu', 'Giao nhanh trong ngày'],
      },
      {
        name: 'Quà Tặng Premium',
        weight: '1.5kg',
        cuts: 'Combo phi lê + khúc',
        price: 650000,
        originalPrice: 750000,
        badge: 'Được Chọn Nhiều',
        desc: 'Hộp quà đặc biệt kèm gia vị ướp truyền thống. Ấn tượng, độc đáo.',
        includes: ['1.5kg cá lăng', 'Hộp quà gỗ cao cấp', 'Gia vị ướp truyền thống', 'In tên người nhận'],
      },
      {
        name: 'Quà Tặng Corporate',
        weight: '3kg',
        cuts: 'Combo đặc biệt',
        price: 1200000,
        originalPrice: 1500000,
        badge: 'B2B',
        desc: 'Bộ quà doanh nghiệp — in logo, số lượng từ 20 hộp, giảm thêm 10%.',
        includes: ['3kg cá lăng cao cấp', 'Hộp quà in logo DN', 'Certificate xuất xứ', 'Hoá đơn VAT'],
      },
    ],
  },
];

export default function VCLProducts() {
  const [activeCategory, setActiveCategory] = useState('combo');
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

  const activeCat = productCategories?.find((c) => c?.id === activeCategory);

  return (
    <section id="products" ref={sectionRef} className="py-24 md:py-32 bg-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-label mb-4 justify-center">Sản Phẩm</span>
          <h2 className="font-serif text-display-md text-foreground mt-2 max-w-xl mx-auto">
            Chọn sản phẩm{' '}
            <span className="italic text-primary">phù hợp với bạn</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10 animate-on-scroll delay-100">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-beige-dark border border-primary/15">
            {productCategories?.map((cat) => (
              <button
                key={cat?.id}
                onClick={() => setActiveCategory(cat?.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat?.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {cat?.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {/* Row audit for 3-col grid: */}
        {/* Row 1: [Product 0 cs-1] + [Product 1 cs-1] + [Product 2 cs-1] = 3/3 ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll delay-200">
          {activeCat?.products?.map((product, i) => (
            <div
              key={product?.name}
              className={`bg-white rounded-2xl border overflow-hidden spotlight-card card-lift flex flex-col ${
                product?.badge === 'Bán Chạy' || product?.badge === 'Phổ Biến' || product?.badge === 'Tiết Kiệm Nhất' ?'border-primary/30 shadow-premium' :'border-primary/10'
              }`}
            >
              {/* Badge */}
              {product?.badge && (
                <div className="bg-primary px-4 py-2 text-center">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">{product?.badge}</span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif text-xl text-foreground font-semibold">{product?.name}</h3>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <span className="flex items-center gap-1">
                      <span className="text-primary">⚖️</span> {product?.weight}
                    </span>
                    <span>·</span>
                    <span>{product?.cuts}</span>
                  </div>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-5">{product?.desc}</p>

                {/* Includes */}
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {product?.includes?.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="border-t border-primary/10 pt-5">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="font-serif text-2xl text-primary font-semibold">
                        {product?.price?.toLocaleString('vi-VN')}đ
                      </p>
                      <p className="text-muted text-xs line-through">
                        {product?.originalPrice?.toLocaleString('vi-VN')}đ
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                      -{Math.round((1 - product?.price / product?.originalPrice) * 100)}%
                    </span>
                  </div>
                  <button className="w-full py-3.5 bg-primary text-white font-semibold rounded-full text-sm hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 shadow-sm">
                    Đặt Mua Ngay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll delay-300">
          {[
            { icon: '🔄', label: 'Đổi Trả 48h', desc: 'Nếu không hài lòng' },
            { icon: '❄️', label: 'Giao Lạnh', desc: 'Duy trì -18°C' },
            { icon: '🏅', label: 'VSATTP', desc: 'Chứng nhận đầy đủ' },
            { icon: '🇻🇳', label: 'Xuất Xứ Rõ', desc: 'Hồ Trị An, Đồng Nai' },
          ]?.map((g) => (
            <div key={g?.label} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-primary/10">
              <span className="text-2xl">{g?.icon}</span>
              <div>
                <p className="text-foreground font-semibold text-sm">{g?.label}</p>
                <p className="text-muted text-xs">{g?.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
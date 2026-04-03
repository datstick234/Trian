'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function VCLOrderForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    product: 'combo-m',
    quantity: '1',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit — backend/Zalo ZNS integration point
    setSubmitted(true);
  };

  return (
    <section id="order" ref={sectionRef} className="py-24 md:py-32 bg-beige relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 animate-on-scroll">
          <span className="section-label mb-4 justify-center">Đặt Hàng</span>
          <h2 className="font-serif text-display-md text-foreground mt-2">
            Đặt hàng{' '}
            <span className="italic text-primary">nhanh chóng</span>
          </h2>
          <p className="text-muted mt-3 text-base">
            Điền thông tin — chúng tôi sẽ xác nhận qua Zalo trong 30 phút
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-primary/10 p-8 shadow-card animate-on-scroll delay-100">
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-serif text-2xl text-foreground font-semibold mb-3">Đặt hàng thành công!</h3>
              <p className="text-muted text-sm leading-relaxed max-w-sm mx-auto">
                Cảm ơn bạn đã tin tưởng Vua Cá Lăng. Chúng tôi sẽ xác nhận đơn hàng qua Zalo trong 30 phút. Hẹn gặp bạn!
              </p>
            </div>
          ) : (
            /* Backend integration point: connect to order management / Zalo ZNS */
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-foreground/60 text-xs uppercase tracking-widest mb-1.5 block font-medium">
                    Họ & Tên *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-primary/20 rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/50 focus:outline-none focus:border-primary/50 transition-colors bg-beige/50"
                    placeholder="Nguyễn Thị Lan"
                  />
                </div>
                <div>
                  <label className="text-foreground/60 text-xs uppercase tracking-widest mb-1.5 block font-medium">
                    Số Điện Thoại / Zalo *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-primary/20 rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/50 focus:outline-none focus:border-primary/50 transition-colors bg-beige/50"
                    placeholder="0901 234 567"
                  />
                </div>
              </div>

              <div>
                <label className="text-foreground/60 text-xs uppercase tracking-widest mb-1.5 block font-medium">
                  Địa Chỉ Giao Hàng *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full border border-primary/20 rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/50 focus:outline-none focus:border-primary/50 transition-colors bg-beige/50"
                  placeholder="Số nhà, đường, phường, quận, tỉnh/thành phố"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-foreground/60 text-xs uppercase tracking-widest mb-1.5 block font-medium">
                    Sản Phẩm
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full border border-primary/20 rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors bg-beige/50"
                  >
                    <option value="combo-s">Combo Gia Đình S — 1kg — 260.000đ</option>
                    <option value="combo-m">Combo Gia Đình M — 2kg — 480.000đ ★</option>
                    <option value="combo-l">Combo Gia Đình L — 4kg — 880.000đ</option>
                    <option value="sub-basic">Gói Tháng Cơ Bản — 2kg/tháng — 420.000đ</option>
                    <option value="sub-family">Gói Tháng Gia Đình — 4kg/tháng — 800.000đ</option>
                    <option value="gift-classic">Quà Tặng Classic — 1kg — 380.000đ</option>
                    <option value="gift-premium">Quà Tặng Premium — 1.5kg — 650.000đ</option>
                  </select>
                </div>
                <div>
                  <label className="text-foreground/60 text-xs uppercase tracking-widest mb-1.5 block font-medium">
                    Số Lượng
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full border border-primary/20 rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors bg-beige/50"
                  >
                    {['1', '2', '3', '4', '5', '6', '10+'].map((q) => (
                      <option key={q} value={q}>{q} {q === '10+' ? '(Liên hệ giá sỉ)' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-foreground/60 text-xs uppercase tracking-widest mb-1.5 block font-medium">
                  Ghi Chú
                </label>
                <textarea
                  rows={3}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full border border-primary/20 rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/50 focus:outline-none focus:border-primary/50 transition-colors bg-beige/50 resize-none"
                  placeholder="Yêu cầu đặc biệt, thời gian giao hàng, in tên người nhận (quà tặng)..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-semibold rounded-full text-sm hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 shadow-md mt-2"
              >
                Xác Nhận Đặt Hàng
              </button>

              <div className="flex items-center justify-center gap-6 text-xs text-muted">
                <span className="flex items-center gap-1">✓ Xác nhận qua Zalo trong 30 phút</span>
                <span className="flex items-center gap-1">✓ Giao lạnh tận nhà</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function CRMSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'food',
    message: '',
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
    // Mock submit handler — backend integration point
    setSubmitted(true);
  };

  return (
    <section id="crm" ref={sectionRef} className="py-24 md:py-32 bg-primary-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/30 blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-accent/20 blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div className="animate-on-scroll">
            <span className="section-label mb-4 block" style={{ color: '#C49A1E' }}>
              Kết Nối · CRM
            </span>
            <h2 className="font-serif text-display-md text-white mb-6">
              Nhận ưu đãi{' '}
              <span className="italic text-accent-light">trải nghiệm đầu tiên</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              Để lại thông tin để nhận ưu đãi đặc biệt cho lần đặt hàng hoặc đặt lịch đầu tiên — và được tư vấn trực tiếp qua Zalo.
            </p>

            {/* Contact options */}
            <div className="flex flex-col gap-4">
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0068FF]/20 flex items-center justify-center text-xl shrink-0">
                  💬
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Chat Zalo Ngay</p>
                  <p className="text-white/50 text-xs mt-0.5">Phản hồi trong 15 phút trong giờ làm việc</p>
                </div>
                <svg className="w-4 h-4 text-white/40 ml-auto group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-xl shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Hotline: 0901 234 567</p>
                  <p className="text-white/50 text-xs mt-0.5">8:00 – 18:00 · Thứ 2 – Thứ 7</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center text-xl shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Hồ Trị An, Đồng Nai</p>
                  <p className="text-white/50 text-xs mt-0.5">~80km từ TP.HCM · Dễ dàng di chuyển</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="animate-on-scroll delay-200">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🌿</div>
                  <h3 className="font-serif text-2xl text-white font-semibold mb-3">Cảm ơn bạn!</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Chúng tôi sẽ liên hệ với bạn qua Zalo/điện thoại trong vòng 2 giờ làm việc. Hẹn gặp bạn tại hệ sinh thái Tri An Heritage!
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-xl text-white font-semibold mb-6">
                    Đăng ký nhận ưu đãi
                  </h3>
                  {/* Backend integration point: connect form to CRM/Zalo ZNS */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/60 text-xs uppercase tracking-widest mb-1.5 block">
                          Họ & Tên *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors"
                          placeholder="Nguyễn Văn A"
                        />
                      </div>
                      <div>
                        <label className="text-white/60 text-xs uppercase tracking-widest mb-1.5 block">
                          Số Điện Thoại *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors"
                          placeholder="0901 234 567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white/60 text-xs uppercase tracking-widest mb-1.5 block">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label className="text-white/60 text-xs uppercase tracking-widest mb-1.5 block">
                        Quan Tâm Đến
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-accent/60 transition-colors"
                      >
                        <option value="food" className="bg-primary-dark">Vua Cá Lăng — Thực Phẩm</option>
                        <option value="travel" className="bg-primary-dark">Green Travel — Trải Nghiệm</option>
                        <option value="b2b" className="bg-primary-dark">B2B / Horeca / Corporate Gift</option>
                        <option value="affiliate" className="bg-primary-dark">Cộng Tác Viên / Affiliate</option>
                        <option value="elite" className="bg-primary-dark">Elite Network / Đầu Tư</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-white/60 text-xs uppercase tracking-widest mb-1.5 block">
                        Tin Nhắn (Tuỳ Chọn)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors resize-none"
                        placeholder="Bạn muốn hỏi thêm điều gì?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-accent text-white font-semibold rounded-full text-sm hover:bg-accent-dark transition-all duration-300 hover:-translate-y-0.5 shadow-lg mt-2"
                    >
                      Nhận Ưu Đãi Ngay
                    </button>

                    <p className="text-white/30 text-xs text-center">
                      Thông tin của bạn được bảo mật tuyệt đối. Chúng tôi không spam.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
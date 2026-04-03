'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function GTBooking() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<'booking' | 'waitlist'>('booking');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: 'glamping',
    guests: '2',
    date: '',
    company: '',
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
    // Mock submit — backend/booking system integration point
    setSubmitted(true);
  };

  return (
    <section id="booking" ref={sectionRef} className="py-24 md:py-32 bg-beige relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(0,77,63,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139,105,20,0.07) 0%, transparent 40%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-label mb-4 justify-center">Đặt Lịch</span>
          <h2 className="font-serif text-display-md text-foreground mt-2 max-w-xl mx-auto">
            Bắt đầu hành trình{' '}
            <span className="italic text-primary">của bạn</span>
          </h2>
          <p className="text-muted mt-3 text-base max-w-md mx-auto">
            Điền thông tin để đặt lịch hoặc tham gia waitlist nhận ưu đãi ra mắt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left: info + contact */}
          <div className="lg:col-span-2 flex flex-col gap-6 animate-on-scroll delay-100">
            <div className="bg-primary rounded-2xl p-6 text-white">
              <h3 className="font-serif text-xl font-semibold mb-4">Liên hệ trực tiếp</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://zalo.me"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <span className="text-xl">💬</span>
                  <div>
                    <p className="font-semibold text-sm">Chat Zalo</p>
                    <p className="text-white/60 text-xs">Tư vấn ngay</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-semibold text-sm">0901 234 567</p>
                    <p className="text-white/60 text-xs">8h–18h · T2–T7</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-semibold text-sm">Hồ Trị An, Đồng Nai</p>
                    <p className="text-white/60 text-xs">~80km từ TP.HCM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-foreground rounded-2xl p-6 text-white">
              <h3 className="font-serif text-lg font-semibold mb-3">Waitlist Độc Quyền</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Tham gia waitlist để nhận ưu đãi ra mắt — giảm 20% cho booking đầu tiên và quyền ưu tiên chọn ngày.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent-light text-xs font-semibold">47 người đang trong waitlist</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 animate-on-scroll delay-200">
            <div className="bg-white rounded-2xl border border-primary/10 p-8 shadow-card">

              {/* Mode toggle */}
              <div className="flex gap-1 p-1.5 rounded-full bg-beige border border-primary/10 mb-8">
                <button
                  onClick={() => setMode('booking')}
                  className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    mode === 'booking' ? 'bg-primary text-white shadow-sm' : 'text-muted'
                  }`}
                >
                  Đặt Lịch
                </button>
                <button
                  onClick={() => setMode('waitlist')}
                  className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    mode === 'waitlist' ? 'bg-primary text-white shadow-sm' : 'text-muted'
                  }`}
                >
                  Tham Gia Waitlist
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🌿</div>
                  <h3 className="font-serif text-2xl text-foreground font-semibold mb-3">
                    {mode === 'booking' ? 'Đặt lịch thành công!' : 'Đã vào waitlist!'}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed max-w-sm mx-auto">
                    {mode === 'booking' ?'Chúng tôi sẽ liên hệ xác nhận lịch trong 2 giờ làm việc. Hẹn gặp bạn tại hồ Trị An!' :'Bạn đã vào waitlist. Chúng tôi sẽ thông báo ưu đãi ra mắt qua Zalo sớm nhất!'}
                  </p>
                </div>
              ) : (
                /* Backend integration point: connect to booking system / Zalo ZNS */
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-foreground/60 text-xs uppercase tracking-widest mb-1.5 block font-medium">Họ & Tên *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-primary/20 rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/50 focus:outline-none focus:border-primary/50 transition-colors bg-beige/50"
                        placeholder="Trần Thị Bích Liên"
                      />
                    </div>
                    <div>
                      <label className="text-foreground/60 text-xs uppercase tracking-widest mb-1.5 block font-medium">Điện Thoại / Zalo *</label>
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
                    <label className="text-foreground/60 text-xs uppercase tracking-widest mb-1.5 block font-medium">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-primary/20 rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/50 focus:outline-none focus:border-primary/50 transition-colors bg-beige/50"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-foreground/60 text-xs uppercase tracking-widest mb-1.5 block font-medium">Loại Trải Nghiệm</label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full border border-primary/20 rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors bg-beige/50"
                      >
                        <option value="glamping">⛺ Glamping</option>
                        <option value="retreat">🧘 Wellness Retreat</option>
                        <option value="teambuilding">🤝 Team Building</option>
                        <option value="ceo-island">👑 Đảo CEO</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-foreground/60 text-xs uppercase tracking-widest mb-1.5 block font-medium">Số Người</label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full border border-primary/20 rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors bg-beige/50"
                      >
                        {['2', '3', '4', '5–8', '9–15', '16–30', '30+'].map((g) => (
                          <option key={g} value={g}>{g} người</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {mode === 'booking' && (
                    <div>
                      <label className="text-foreground/60 text-xs uppercase tracking-widest mb-1.5 block font-medium">Ngày Mong Muốn</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full border border-primary/20 rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors bg-beige/50"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-foreground/60 text-xs uppercase tracking-widest mb-1.5 block font-medium">Ghi Chú / Yêu Cầu</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-primary/20 rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/50 focus:outline-none focus:border-primary/50 transition-colors bg-beige/50 resize-none"
                      placeholder="Yêu cầu đặc biệt, dịp kỷ niệm, chế độ ăn kiêng, câu hỏi..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white font-semibold rounded-full text-sm hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 shadow-md mt-1"
                  >
                    {mode === 'booking' ? 'Gửi Yêu Cầu Đặt Lịch' : 'Tham Gia Waitlist'}
                  </button>

                  <p className="text-muted text-xs text-center">
                    Phản hồi trong 2 giờ làm việc · Không spam · Có thể huỷ bất cứ lúc nào
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-white/10 relative overflow-hidden">
      {/* Atmospheric blob */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Arc Browser Split Pattern */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-12">
          {/* Left: Logo + tagline */}
          <div className="lg:max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <AppLogo size={40} className="brightness-0 invert opacity-90" />
              <div>
                <span className="font-serif text-lg text-white font-semibold block">Tri An Heritage</span>
                <span className="text-xs text-white/50 tracking-widest uppercase">Tri An Holding</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Từ di sản sống đến giá trị sống — kết nối hệ sinh thái bản địa Trị An thành sản phẩm, trải nghiệm và cộng đồng.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="TikTok" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
              </a>
              <a href="#" aria-label="Zalo" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all text-[10px] font-bold">
                ZL
              </a>
            </div>
          </div>

          {/* Right: Links compact */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white/90 text-xs font-semibold uppercase tracking-widest mb-4">Sản Phẩm</h4>
              <ul className="space-y-2.5">
                <li><Link href="/vua-ca-lang-landing" className="text-white/50 text-sm hover:text-white transition-colors">Vua Cá Lăng</Link></li>
                <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Combo Gia Đình</a></li>
                <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Quà Tặng</a></li>
                <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Đăng Ký Định Kỳ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white/90 text-xs font-semibold uppercase tracking-widest mb-4">Trải Nghiệm</h4>
              <ul className="space-y-2.5">
                <li><Link href="/green-travel-landing" className="text-white/50 text-sm hover:text-white transition-colors">Green Travel</Link></li>
                <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Glamping</a></li>
                <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Retreat</a></li>
                <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Team Building</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white/90 text-xs font-semibold uppercase tracking-widest mb-4">Doanh Nghiệp</h4>
              <ul className="space-y-2.5">
                <li><a href="#b2b" className="text-white/50 text-sm hover:text-white transition-colors">Horeca</a></li>
                <li><a href="#b2b" className="text-white/50 text-sm hover:text-white transition-colors">Corporate Gift</a></li>
                <li><a href="#b2b" className="text-white/50 text-sm hover:text-white transition-colors">Private Retreat</a></li>
                <li><a href="#community" className="text-white/50 text-sm hover:text-white transition-colors">Affiliate</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white/90 text-xs font-semibold uppercase tracking-widest mb-4">Thương Hiệu</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Về Chúng Tôi</a></li>
                <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Tri An Holding</a></li>
                <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Blog</a></li>
                <li><a href="#crm" className="text-white/50 text-sm hover:text-white transition-colors">Liên Hệ</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Tri An Heritage · Tri An Holding. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">Chính Sách Bảo Mật</a>
            <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">Điều Khoản</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
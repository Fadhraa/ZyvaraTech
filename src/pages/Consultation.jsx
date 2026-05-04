import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Consultation() {
  return (
    <div className="bg-background text-on-background antialiased min-h-screen flex flex-col">


      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Content and Contact Info */}
          <div className="space-y-12">
            {/* Hero Content */}
            <section>
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
                Mari bangun sesuatu <span className="text-primary">bersama.</span>
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                Punya proyek yang ingin diwujudkan atau sekadar ingin menyapa? Kami siap memandu perjalanan digital Anda dengan arsitektur web kelas atas.
              </p>
            </section>

            {/* Contact Channels */}
            <div className="space-y-8">
              {/* WhatsApp Card */}
              <section>
                <a className="flex items-center gap-4 p-5 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/15 hover:border-primary/30 transition-all group" href="https://wa.me/6285233724944" target="_blank" rel="noopener noreferrer">
                  <div className="w-14 h-14 rounded-full bg-tertiary-container/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-tertiary-container text-3xl" data-icon="chat" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">Chat via WhatsApp</h3>
                    <p className="text-sm text-on-surface-variant">Balasan instan dalam 1 jam</p>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-outline group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
                </a>
              </section>

              {/* Direct Details */}
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6" data-aos="fade-right">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest/50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" data-icon="mail">mail</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Email Kami</p>
                    <a className="text-on-surface font-semibold hover:text-primary transition-colors" href="mailto:zyvaratech.id@gmail.com">zyvaratech.id@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest/50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" data-icon="call">call</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Hubungi kami</p>
                    <p className="text-on-surface font-semibold">+62 852-3372-4944</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <section className="bg-surface-container-low rounded-3xl p-8 lg:p-10 shadow-sm border border-outline-variant/10" data-aos="fade-left">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-on-surface mb-2">Kirim pesan ke kami</h2>
              <p className="text-on-surface-variant text-sm">Isi formulir di bawah ini dan kami akan segera membalasnya.</p>
            </div>
            
            <form action="#" className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2 ml-1" htmlFor="name">Nama</label>
                <input className="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-lg focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant transition-all" id="name" placeholder="Alex Johnson" type="text" />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2 ml-1" htmlFor="email">Email</label>
                <input className="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-lg focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant transition-all" id="email" placeholder="alex@example.com" type="email" />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2 ml-1" htmlFor="request">Permintaan Anda</label>
                <textarea className="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-lg focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant transition-all" id="request" placeholder="Ceritakan pada kami tentang website impian Anda..." rows="5"></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-full text-lg font-extrabold shadow-lg shadow-primary/20 active:scale-[0.98] transition-all" type="submit">
                Kirim Pesan
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Consultation;

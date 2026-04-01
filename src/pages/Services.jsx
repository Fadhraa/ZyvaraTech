import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Services() {
  return (
    <>

      
      <main className="pt-28 pb-12 px-6 max-w-7xl mx-auto">
        <section className="mb-16" data-aos="fade-down">
          <h1 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface mb-4 leading-tight">
            Pilih Paket Website Impian Anda
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Solusi profesional untuk bisnis Anda, mulai dari landing page sederhana hingga e-commerce kompleks.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/15 flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div className="bg-surface-container-low p-3 rounded-lg">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="rocket_launch">rocket_launch</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-headline font-bold text-on-surface">Paket Dasar (Basic)</h3>
              <p className="text-on-surface-variant text-sm mt-1">Solusi cepat untuk mulai online hari ini.</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-headline font-extrabold text-primary">Rp 1.5jt</span>
              <span className="text-on-surface-variant text-sm">/proyek</span>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                <span>1 Halaman (Landing Page)</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                <span>Optimasi Mobile</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                <span>Hosting & Domain 1 Tahun</span>
              </li>
            </ul>
            <button className="mt-auto w-full py-4 rounded-full border border-outline text-primary font-bold hover:bg-surface-container-high transition-colors">
              Pilih Paket Dasar
            </button>
          </div>

          <div className="relative bg-surface-container-lowest rounded-xl p-8 border-2 border-primary flex flex-col gap-6 overflow-hidden">
            <div className="absolute top-4 right-[-35px] bg-secondary-container text-on-secondary-container px-10 py-1 rotate-45 text-[10px] font-bold uppercase tracking-widest shadow-sm">
              Populer
            </div>
            <div className="flex justify-between items-start">
              <div className="bg-primary-container p-3 rounded-lg">
                <span className="material-symbols-outlined text-on-primary-container text-3xl" data-icon="business_center">business_center</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-headline font-bold text-on-surface">Paket Bisnis (Business)</h3>
              <p className="text-on-surface-variant text-sm mt-1">Desain kustom eksklusif untuk profil perusahaan.</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-headline font-extrabold text-primary">Rp 3.5jt</span>
              <span className="text-on-surface-variant text-sm">/proyek</span>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-medium">Hingga 5 Halaman Kustom</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-medium">SEO On-Page Dasar</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-medium">Integrasi Media Sosial</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-medium">Konten Copywriting</span>
              </li>
            </ul>
            <button className="mt-auto w-full py-4 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Pilih Paket Bisnis
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/15 flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div className="bg-surface-container-low p-3 rounded-lg">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="shopping_bag">shopping_bag</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-headline font-bold text-on-surface">Paket Pro</h3>
              <p className="text-on-surface-variant text-sm mt-1">E-commerce penuh dengan sistem manajemen konten.</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-headline font-extrabold text-primary">Rp 7.5jt+</span>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                <span>Toko Online & Payment Gateway</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                <span>Halaman Tak Terbatas</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                <span>Maintenance & Backup Bulanan</span>
              </li>
            </ul>
            <button className="mt-auto w-full py-4 rounded-full border border-outline text-primary font-bold hover:bg-surface-container-high transition-colors">
              Hubungi Konsultan
            </button>
          </div>
        </section>

        <section className="mt-20" data-aos="fade-up">
          <h2 className="text-2xl font-headline font-bold mb-8">Bagaimana Kami Bekerja</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">1</div>
              <span className="font-medium">Konsultasi Desain</span>
            </div>
            <div className="flex items-center gap-4 bg-secondary-container/10 p-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">2</div>
              <span className="font-medium text-on-secondary-container">Pengembangan (In-Progress)</span>
            </div>
            <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">3</div>
              <span className="font-medium">Peluncuran & Support</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      

    </>
  );
}

export default Services;

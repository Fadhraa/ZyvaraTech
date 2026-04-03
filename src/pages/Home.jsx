import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  return (
    <>


      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85svh] md:min-h-[500px] flex items-center pt-20 pb-10 md:pt-3 md:pb-8 overflow-hidden px-6 lg:px-8" data-aos="fade-in">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
            <div className="md:col-span-6 z-10 pt-10 md:pt-0">
              <span className="text-secondary font-headline font-bold tracking-widest text-xs uppercase mb-6 block">AGENSI WEB PROFESIONAL</span>
              <h1 className="text-on-surface text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] md:-ml-1">
                Jasa Pembuatan Website: Berkualitas dan Terjangkau
              </h1>
              <p className="text-on-surface-variant text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
                Membangun arsitektur digital yang presisi, estetis, dan fungsional untuk pertumbuhan bisnis Anda di era modern.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Link to="/consultation" className="text-center bg-gradient-to-br from-[#005a71] to-[#0e7490] text-white font-headline font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:opacity-90 transition-all">
                  Konsultasi Gratis
                </Link>
                <Link to="/services" className="text-center bg-surface-container-highest text-primary font-headline font-bold px-8 py-4 rounded-full text-lg hover:bg-surface-container-high transition-all">
                  Lihat Portfolio
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 relative h-[360px] sm:h-[450px] md:h-full md:min-h-[500px] mb-10 md:mb-0 mt-8 md:mt-0">
              <div className="absolute inset-0 bg-surface-container-low rounded-3xl overflow-hidden transform rotate-2"></div>
              <img alt="Architectural Workspace" className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl transform md:-rotate-2 hover:rotate-0 transition-transform duration-700" src="/images/pages_home.webp" />
              <div className="absolute -bottom-8 md:-bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-6 z-20 bg-surface-container-lowest p-5 md:p-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] w-[88%] sm:w-[320px] border border-outline-variant/10 md:border-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-secondary-container animate-pulse"></div>
                  <span className="text-sm font-headline font-bold text-on-surface">Tersedia untuk proyek</span>
                </div>
                <p className="text-xs text-on-surface-variant font-body leading-relaxed md:block hidden">Saat ini menerima komisi desain dan pengembangan web baru.</p>
                <p className="text-xs text-on-surface-variant font-body leading-relaxed md:hidden">Menerima komisi baru.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-12 md:py-16 mt-6 md:mt-12 relative z-20" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-cyan-900/10 border border-slate-100 dark:border-slate-800 p-8 md:p-12 relative overflow-hidden group">
        
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 via-transparent to-orange-50/50 dark:from-cyan-900/10 dark:to-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 relative z-10">
                <div className="flex flex-col items-center justify-center text-center px-2 md:px-6 group/stat hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-900/30 flex items-center justify-center mb-5 text-[#166e85] dark:text-cyan-400 group-hover/stat:rotate-12 transition-transform shadow-sm">
                     <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                  </div>
                  <h3 className="text-[#166e85] dark:text-cyan-400 text-4xl lg:text-5xl font-extrabold font-headline mb-2 tracking-tight">150+</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-body font-bold text-[10px] md:text-xs tracking-widest uppercase">Proyek Selesai</p>
                </div>
                
                <div className="flex flex-col items-center justify-center text-center px-2 md:px-6 group/stat hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center mb-5 text-[#fd761a] dark:text-orange-400 group-hover/stat:rotate-12 transition-transform shadow-sm">
                     <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>sentiment_satisfied</span>
                  </div>
                  <h3 className="text-[#166e85] dark:text-cyan-400 text-4xl lg:text-5xl font-extrabold font-headline mb-2 tracking-tight">98%</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-body font-bold text-[10px] md:text-xs tracking-widest uppercase">Klien Puas</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center px-2 md:px-6 group/stat hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-5 text-blue-600 dark:text-blue-400 group-hover/stat:rotate-12 transition-transform shadow-sm">
                     <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
                  </div>
                  <h3 className="text-[#166e85] dark:text-cyan-400 text-4xl lg:text-5xl font-extrabold font-headline mb-2 tracking-tight">24/7</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-body font-bold text-[10px] md:text-xs tracking-widest uppercase">Dukungan Ahli</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center px-2 md:px-6 group/stat hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-50 dark:bg-yellow-900/30 flex items-center justify-center mb-5 text-yellow-500 dark:text-yellow-400 group-hover/stat:rotate-12 transition-transform shadow-sm">
                     <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <h3 className="text-[#166e85] dark:text-cyan-400 text-4xl lg:text-5xl font-extrabold font-headline mb-2 tracking-tight">5.0</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-body font-bold text-[10px] md:text-xs tracking-widest uppercase">Rating Google</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Workflow Section */}
        <section className="py-20 md:py-32 bg-background" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-0 md:px-8">
            <div className="text-center mb-12 md:mb-20 px-8">
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface mb-6">Cara Kerja Kami</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed font-body">
                Proses transparan dan terukur untuk memastikan setiap detail website Anda dibangun dengan presisi arsitektural.
              </p>
            </div>
            
            <div className="relative z-10 px-8 lg:px-0">
              {/* Line decoration (Desktop) */}
              <div className="hidden md:block absolute top-[4.5rem] left-8 right-8 h-px border-t-2 border-dashed border-outline-variant/30 -z-10"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                
                {/* Step 1 */}
                <div className="bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#005a71] to-[#0e7490] rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-md">
                    <span className="material-symbols-outlined text-3xl">chat_bubble</span>
                  </div>
                  <h4 className="text-2xl font-bold font-headline mb-4 text-on-surface">Konsultasi</h4>
                  <p className="text-on-surface-variant leading-relaxed font-body">Kami mendengar visi Anda, menganalisis pasar, dan menyusun strategi blueprint digital yang unik.</p>
                </div>

                {/* Step 2 */}
                <div className="bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#005a71] to-[#0e7490] rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-md">
                    <span className="material-symbols-outlined text-3xl">architecture</span>
                  </div>
                  <h4 className="text-2xl font-bold font-headline mb-4 text-on-surface">Desain &amp; Bangun</h4>
                  <p className="text-on-surface-variant leading-relaxed font-body">Desain visual dikerjakan dengan presisi tinggi, memastikan UI/UX yang intuitif dan profesional.</p>
                </div>

                {/* Step 3 */}
                <div className="bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#005a71] to-[#0e7490] rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-md">
                    <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                  </div>
                  <h4 className="text-2xl font-bold font-headline mb-4 text-on-surface">Peluncuran</h4>
                  <p className="text-on-surface-variant leading-relaxed font-body">Website Anda mengudara dengan optimasi penuh untuk kecepatan, SEO, dan performa tinggi.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovative Featured Project Section */}
        <section className="py-24 md:py-32 bg-white dark:bg-slate-950 overflow-hidden" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              {/* Mockup Presentation */}
              <div className="lg:col-span-7 relative group">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-100 dark:bg-cyan-900/30 rounded-full blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity"></div>
                
                <Link to="/portfolio/ketenangan-jiwa" className="block relative z-10 transform-gpu transition-transform duration-700 hover:scale-[1.02] hover:-rotate-1">
                  <div className="bg-slate-800 dark:bg-slate-900 rounded-t-xl p-3 flex gap-1.5 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-b-2xl shadow-2xl shadow-cyan-900/10">
                    <img 
                      src="/images/portofolio/ketenanganjiwa/porto_ketenanganjiwa.jpeg" 
                      alt="Ketenangan Jiwa Platform" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent"></div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 hidden md:flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#166e85] rounded-full flex items-center justify-center text-white">
                       <span className="material-symbols-outlined">visibility</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Klik untuk</p>
                      <p className="text-sm font-black text-slate-800 dark:text-white">Lihat Detail Kasus</p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Content Description */}
              <div className="lg:col-span-5">
                <span className="text-secondary font-headline font-bold tracking-widest text-xs uppercase mb-6 block">PROYEK UNGGULAN</span>
                <h2 className="text-4xl md:text-6xl font-black font-headline text-slate-900 dark:text-white mb-8 leading-tight tracking-tighter">
                  Ketenangan <br/> <span className="text-[#166e85] dark:text-cyan-400">Jiwa.id</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 font-body leading-relaxed">
                  Platform manajemen kajian terpadu yang menyatukan teknologi ticketing modern dengan kemudahan sistem administrasi real-time.
                </p>
                
                <ul className="space-y-6 mb-12">
                   <li className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-[#166e85] flex-shrink-0">
                         <span className="material-symbols-outlined text-sm font-bold">check</span>
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-800 dark:text-white">Automated Ticketing</h4>
                         <p className="text-sm text-slate-500">Sistem pembelian tiket & invoice otomatis via email.</p>
                      </div>
                   </li>
                   <li className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-[#166e85] flex-shrink-0">
                         <span className="material-symbols-outlined text-sm font-bold">check</span>
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-800 dark:text-white">Barcode Verification</h4>
                         <p className="text-sm text-slate-500">Scan barcode invoice untuk validasi kehadiran instan.</p>
                      </div>
                   </li>
                   <li className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-[#166e85] flex-shrink-0">
                         <span className="material-symbols-outlined text-sm font-bold">check</span>
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-800 dark:text-white">Admin Dashboard</h4>
                         <p className="text-sm text-slate-500">Kontrol penuh statistik dan manajemen event.</p>
                      </div>
                   </li>
                </ul>

                <Link to="/portfolio/ketenangan-jiwa" className="inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-5 rounded-full font-black hover:scale-105 transition-transform shadow-xl">
                  Pelajari Proyek
                  <span className="material-symbols-outlined">trending_flat</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Reviews Section */}
        {/* <section className="py-20 md:py-32 bg-surface-container-low" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-0 md:px-8">
            <div className="flex flex-col mx-8 md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface mb-6">Apa Kata Mereka?</h2>
                <p className="text-on-surface-variant text-lg font-body leading-relaxed">
                  Kepercayaan klien adalah pondasi dari setiap baris kode yang kami tulis.
                </p>
              </div>
              <div className="hidden md:flex gap-4">
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 px-8 md:px-0">
       
              <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:-translate-y-2 hover:shadow-md transition-all">
                <div className="flex items-center gap-1 text-secondary-container mb-4">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                </div>
                <p className="text-on-surface font-body text-lg italic leading-relaxed mb-6">
                  "ZyvaraTech benar-benar memahami visi bisnis saya. Websitenya rapi, cepat, dan sangat elegan. Arsitektur digital yang luar biasa!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden border-2 border-white shadow-sm">
                    <img alt="Client 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxmEL6AbKkh5Rg9pqYrI0cra-CnrGTPmB9UPk3UY08V9g6X0kxkIDnXFWXQpe0F1JMo4zuyraTGRQYdIt1R2tm5QLOQcvDiyO3SBDaLjfO8DkBoLYcdwEbZS_KrI-gtRJxI7zcDULsdxo5zzD_NnbmoLaas2EWNgKc0mMM-qy0zEBqveErUfs7huoLvK3Fy6d8_z6UkGSL44GwZyG_ykcDtAoxl5HWSdFyP6A2JKXEM_5leUMsE_DzZbj7Ik5eL0k6Yb85yD-6SNex" />
                  </div>
                  <div>
                    <h5 className="font-bold font-headline text-on-surface">Budi Santoso</h5>
                    <p className="text-xs text-on-surface-variant">CEO TechVenture</p>
                  </div>
                </div>
              </div>


              <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:-translate-y-2 hover:shadow-md transition-all">
                <div className="flex items-center gap-1 text-secondary-container mb-4">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                </div>
                <p className="text-on-surface font-body text-lg italic leading-relaxed mb-6">
                  "Hasil kerjanya jauh di atas ekspektasi untuk harga yang ditawarkan. Sangat rekomen untuk UMKM yang ingin naik kelas."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden border-2 border-white shadow-sm">
                    <img alt="Client 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2-3JiyD9TD34zTK4z9KTH7bqTvYbGI5tRUYQq5FkpCi0U3mu87UQpdWQC680WvRZP0k6ayNzm5n5V0YLYMiLi8ex2GZKN9mO8TLKBJZpaTWmfyj_J8fzPIj8iYCB2FUt1mIUMGDuv8VL_p9vsm0er6KrUsOB3OjvnA42IbqisNfSpeM3uF7lwhNBu5wSVpkqB7Kv1g6dEzSh_O4Emv-5dC2MCYMeKjFHhZYGTqUdo_FbdVQmnCA48ZYPWm36HQD-jbginyoENGfbx" />
                  </div>
                  <div>
                    <h5 className="font-bold font-headline text-on-surface">Sari Wijaya</h5>
                    <p className="text-xs text-on-surface-variant">Founder Bloom Décor</p>
                  </div>
                </div>
              </div>


              <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:-translate-y-2 hover:shadow-md transition-all">
                <div className="flex items-center gap-1 text-secondary-container mb-4">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                </div>
                <p className="text-on-surface font-body text-lg italic leading-relaxed mb-6">
                  "Support 24/7-nya bukan sekadar janji. Mereka sangat responsif membantu transisi digital toko kami."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden border-2 border-white shadow-sm">
                    <img alt="Client 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHyX1qAL63uZ5dwoPkeAkkrS4bllGy_8iCITmppQNu252rHlqBbuiCIbh_3yKLknaln8PLgbNLzRyixiXO2YfG70V6gO_ZLXXf1Gp3eFsP-0nHnmMsIbv4b5IEeUR8hlfjbCCtZbnBhQffthwn4MhpLKwMN3JS1kxuP-YasdZSp5wHxEVN-0KxbIZU3jxUU76vWZ6gs1krpIQHkzaXKQ6rP3-HQrOaESP1mzul7JM3X7MMfvTN9MM6OW0xL7DNPiWtcwT8biCvBKYd" />
                  </div>
                  <div>
                    <h5 className="font-bold font-headline text-on-surface">Andi Pratama</h5>
                    <p className="text-xs text-on-surface-variant">Manager Logistik Kita</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-24 px-8 mb-20 md:mb-0" data-aos="zoom-in">
          <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#005a71] to-[#0e7490] rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative shadow-xl">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] pointer-events-none"></div>
            {/* Abstract architectural shapes */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-on-primary text-white text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline mb-8 leading-tight">
                Siap Membangun Kehadiran Digital Anda?
              </h2>
              <p className="text-on-primary-container text-[#d3f1ff] text-xl md:text-2xl font-body mb-12 max-w-2xl mx-auto opacity-90">
                Wujudkan website impian dengan tim yang peduli pada setiap pixel dan performa bisnis Anda.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Link to="/services" className="bg-secondary-container bg-[#fd761a] text-on-secondary-container text-[#5c2400] font-headline font-bold px-12 py-5 rounded-full text-xl shadow-2xl hover:scale-105 transition-transform text-center">
                  Mulai Sekarang
                </Link>
                <a href="https://wa.me/6285233724944" target="_blank" rel="noopener noreferrer" className="bg-white/10 text-on-primary text-white font-headline font-bold px-12 py-5 rounded-full text-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-center">
                  Konsultasi WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />


    </>
  );
}

export default Home;

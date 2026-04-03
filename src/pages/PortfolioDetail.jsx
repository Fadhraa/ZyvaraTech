import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function PortfolioDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Online Ticketing & E-Invoice",
      desc: "Sistem pembelian tiket kajian yang terintegrasi secara otomatis. Setelah transaksi, sistem secara cerdas membuat dan mengirimkan e-invoice langsung ke alamat email pengguna.",
      image: "/images/portofolio/ketenanganjiwa/ticket_invoice.png",
      icon: "shopping_cart",
      color: "bg-cyan-50 text-[#166e85] dark:bg-cyan-900/30 dark:text-cyan-400"
    },
    {
      title: "Smart Barcode Check-in",
      desc: "Setiap invoice dilengkapi dengan barcode unik yang berfungsi sebagai tiket digital. Peserta cukup menunjukkan barcode ini di lokasi untuk divalidasi oleh petugas lapangan secara instan.",
      image: "/images/portofolio/ketenanganjiwa/barcode_check_in.png",
      icon: "qr_code_scanner",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
      title: "Admin Analytics Dashboard",
      desc: "Panel pusat bagi admin untuk melihat performa statistik secara real-time, mulai dari jumlah penjualan hingga demografi peserta, memberikan kendali penuh atas event yang berjalan.",
      image: "/images/portofolio/ketenanganjiwa/admin_dashboard.png",
      icon: "monitoring",
      color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
    },
    {
      title: "Event & Resource Management",
      desc: "Kemudahan bagi administrator untuk mengatur harga tiket, deskripsi event, hingga penjadwalan. Semua perubahan dilakukan secara dinamis dan langsung ter-update di sisi user.",
      image: "/images/portofolio/ketenanganjiwa/event_management.png",
      icon: "edit_calendar",
      color: "bg-orange-50 text-[#fd761a] dark:bg-orange-900/30 dark:text-orange-400"
    }
  ];

  return (
    <div className="bg-[#faf8ff] dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col font-body selection:bg-cyan-200 dark:selection:bg-cyan-900">
      <main className="flex-grow pt-32 pb-24 overflow-hidden">
        
        {/* Project Hero Section */}
        <header className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 relative z-10" data-aos="fade-up">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#166e85] dark:hover:text-cyan-400 transition-colors mb-10 font-bold group">
            <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
            Portfolio
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
            <div className="max-w-3xl">
              <span className="px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6 inline-block">Platform Kajian & Ticketing</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-[#001f29] dark:text-white leading-[1.0] font-headline">
                Ketenangan<br/>Jiwa.id
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-body max-w-2xl">
                Digitalisasi manajemen kajian melalui solusi ticketing pintar yang menghemat waktu operasional hingga 80%.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
               <div className="flex flex-wrap items-center gap-4">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center min-w-[120px]">
                    <span className="text-xs text-slate-400 font-bold uppercase">Tahun</span>
                    <span className="text-lg font-bold text-slate-800 dark:text-white">2025</span>
                  </div>
                  <div className="bg-[#166e85] p-6 rounded-2xl shadow-lg shadow-cyan-900/20 flex flex-col items-center min-w-[120px] text-white">
                    <span className="text-xs opacity-70 font-bold uppercase">Status</span>
                    <span className="text-lg font-bold">Live</span>
                  </div>
               </div>
               <div className="bg-white/40 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm self-start">
                  <div className="flex items-center gap-3">
                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Client Project - Indonesia</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Sophisticated Split-Layout Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-24">
            
            {/* Visual presentation (Left) */}
            <div className="lg:col-span-6 relative group order-2 lg:order-1" data-aos="fade-right">
              {/* Dynamic Tilted Frame */}
              <div className="relative z-10 transform-gpu transition-all duration-700 group-hover:rotate-0 -rotate-2 group-hover:scale-[1.02]">
                <div className="bg-slate-300 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900 aspect-[4/3] md:aspect-video lg:aspect-[4/3]">
                  <img 
                    src="/images/portofolio/ketenanganjiwa/porto_ketenanganjiwa.jpeg" 
                    alt="Ketenangan Jiwa Platform" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#166e85]/20 to-transparent"></div>
                </div>

                {/* Floating Project Tag */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/20 whitespace-nowrap">
                   <span className="text-[10px] font-black font-headline text-[#166e85] uppercase tracking-widest">Case Study - 2025</span>
                </div>
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-cyan-100 dark:bg-cyan-900/30 rounded-full blur-[100px] opacity-60 -z-10 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-[120px] opacity-40 -z-10 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Content & Tech Stack (Right) */}
            <div className="lg:col-span-6 order-1 lg:order-2" data-aos="fade-left">
              <div className="max-w-xl">
                 <h3 className="text-xl font-black font-headline mb-4 text-[#166e85] dark:text-cyan-400 uppercase tracking-tighter flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#166e85] rounded-full"></span>
                    Tentang Proyek
                 </h3>
                 <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-300 font-body leading-relaxed mb-8 font-medium">
                    "Ketenanganjiwa.id adalah lompatan digital untuk memanajemen majelis ilmu dengan standar modern dan efisien."
                 </p>
                 
                 <div className="space-y-6 mb-12">
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-body">
                       Melalui ekosistem terpadu, platform ini mengotomatisasi pendaftaran, memproses invoice digital secara instan, dan mempermudah absensi menggunakan teknologi barcode.
                    </p>
                    
                    {/* Tech Stack Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                       {[
                         { name: 'Node.js', icon: 'terminal' },
                         { name: 'Google Cloud', icon: 'cloud' },
                         { name: 'Firebase', icon: 'electric_bolt' },
                         { name: 'Javascript', icon: 'code' }
                       ].map((tech) => (
                         <div key={tech.name} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl flex flex-col items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-default group/tech">
                            <span className="material-symbols-outlined text-xl text-slate-400 group-hover/tech:text-[#166e85] transition-colors">{tech.icon}</span>
                            <span className="text-[10px] font-black font-headline text-slate-800 dark:text-white uppercase tracking-tighter">{tech.name}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="flex flex-col sm:flex-row items-center gap-6">
                    <a 
                       href="https://ketenanganjiwa.id" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="group/btn w-full sm:w-auto h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 rounded-2xl font-black flex items-center justify-center gap-4 hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                       Visit Live Site
                       <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">open_in_new</span>
                    </a>
                    
                    <div className="flex items-center gap-3">
                       <div className="flex -space-x-3">
                          {[1,2,3].map(i => (
                             <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-950 bg-slate-100 overflow-hidden">
                                <img src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${i}`} alt="user" />
                             </div>
                          ))}
                       </div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">TRUSTED BY 2K+ USERS</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Project Features Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter mb-4 text-[#001f29] dark:text-white">
              Eksplorasi <span className="text-[#166e85] dark:text-cyan-400">Fitur Utama.</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#166e85] dark:bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-32">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                {/* Feature Description */}
                <div className="lg:w-1/2">
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm`}>
                    <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>{feature.icon}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black font-headline mb-6 text-slate-800 dark:text-white leading-tight underline decoration-[#166e85]/20 decoration-8 underline-offset-4">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-body">
                    {feature.desc}
                  </p>
                </div>

                {/* Feature Visual */}
                <div className="lg:w-1/2 relative">
                   <div className="absolute -inset-4 bg-gradient-to-br from-[#166e85]/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="bg-slate-200 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transform hover:scale-[1.02] transition-transform duration-700">
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-auto object-cover" 
                      />
                   </div>
                   {/* Annotation or Stat (Decorative) */}
                   <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 hidden md:flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-[#166e85]"></span>
                       <span className="text-[10px] font-black font-headline text-slate-400 uppercase tracking-widest leading-none">Automated System</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Showcase Stats or Testimonial Placeholder */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32" data-aos="fade-up">
           <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] p-12 md:p-20 text-center flex flex-col items-center">
              <span className="text-[#166e85] font-black text-xl mb-6">"Digitalisasi yang sangat solutif. Mengubah antrean manual menjadi sistem validasi barcode instan yang sangat efisien."</span>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Admin Mockup" />
                 </div>
                 <div className="text-left">
                    <p className="font-black text-slate-900 dark:text-white leading-none mb-1 text-lg">Penyelenggara Kajian</p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Ketenangan Jiwa</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Action Link to Consultation */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8" data-aos="zoom-in">
           <div className="bg-gradient-to-br from-[#003847] to-[#04617a] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10 max-w-3xl mx-auto">
                 <h2 className="text-4xl md:text-7xl font-black font-headline text-white mb-8 tracking-tighter leading-tight">
                    Bangun Platform <br className="hidden md:block" /> Impian Bersama Kami.
                 </h2>
                 <p className="text-xl text-cyan-100 mb-12 font-body opacity-90 leading-relaxed mx-auto max-w-xl">
                    Siap mentransformasi manajemen bisnis Anda dengan arsitektur digital profesional?
                 </p>
                 <Link to="/consultation" className="group h-20 bg-white text-[#003847] px-12 rounded-full text-xl font-black shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-6">
                    Mulai Proyek Sekarang
                    <span className="material-symbols-outlined text-3xl transform group-hover:translate-x-3 transition-transform">trending_flat</span>
                 </Link>
              </div>
              {/* Blurred Decorative Gradients */}
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/20 blur-[150px] rounded-full"></div>
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400/20 blur-[150px] rounded-full"></div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PortfolioDetail;

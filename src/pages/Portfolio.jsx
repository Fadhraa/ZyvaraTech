import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const projects = [
    {
      id: 1,
      title: 'Ketenangan Jiwa',
      category: 'Platform Kajian',
      image: '/images/portofolio/ketenanganjiwa/porto_ketenanganjiwa.jpeg',
      desc: 'Platform digital terintegrasi untuk pengelolaan kajian islami, dilengkapi sistem ticketing otomatis, invoice barcode, dan dashboard admin analitik.',
      gridClass: 'md:col-span-12', 
      aspectClass: 'aspect-[16/10] md:aspect-[21/9]'
    }
  ];

  return (
    <div className="bg-[#faf8ff] dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col selection:bg-cyan-200 dark:selection:bg-cyan-900">
      <main className="flex-grow pt-32 pb-24 overflow-hidden">
        
        {/* Abstract Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-cyan-100/50 to-transparent dark:from-cyan-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        {/* Hero Innovation */}
        <header className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 relative z-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8" data-aos="fade-down">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-[#001f29] dark:text-white leading-[1.1] font-headline bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-[#166e85] dark:from-white dark:to-cyan-400">
              Karya <br/> Pilihan.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-body max-w-xl">
              Sebuah koleksi proyek rill yang menggabungkan kematangan teknis dengan kegunaan yang bermakna. Saat ini menampilkan mahakarya digital unggulan kami.
            </p>
          </div>
        </header>

        {/* Bento Grid Portfolio */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 min-h-[50vh]" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <Link 
                  to="/portfolio/ketenangan-jiwa"
                  key={project.id} 
                  className={`${project.gridClass} group relative cursor-pointer overflow-hidden rounded-[2rem] bg-slate-200 dark:bg-slate-800 transform-gpu transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-900/20 block`}
                  style={{ animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s both` }}
                >
                  <style>{`
                    @keyframes fadeInUp {
                      from { opacity: 0; transform: translateY(40px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                  `}</style>
                  
                  {/* Image Container with Zoom */}
                  <div className={`w-full ${project.aspectClass} overflow-hidden bg-slate-300 dark:bg-slate-700`}>
                    <img 
                      alt={project.title} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-90 group-hover:opacity-100" 
                      src={project.image} 
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Full-size Solid Transparent Overlay */}
                  <div className="absolute inset-0 p-6 md:p-12 translate-y-0 md:translate-y-10 md:group-hover:translate-y-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 bg-black/50 transition-all duration-500 ease-out flex justify-between items-end">
                    <div className="text-white">
                      <span className="inline-block px-3 py-1 mb-3 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
                        {project.category}
                      </span>
                      <h3 className="text-2xl md:text-5xl font-black font-headline mb-2 text-white">
                        {project.title}
                      </h3>
                      <p className="max-w-2xl font-body text-xs md:text-lg text-slate-200 opacity-90 block">
                        {project.desc}
                      </p>
                    </div>
                    
                    {/* Action Arrow */}
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transform rotate-0 md:rotate-45 md:group-hover:rotate-0 transition-transform duration-500 ease-out flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl md:text-4xl">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
        </section>

        {/* Immersive CTA Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-32 md:mt-48" data-aos="zoom-in">
          <div className="relative bg-gradient-to-br from-[#003847] to-[#04617a] border border-cyan-800/50 rounded-[3rem] p-12 md:p-24 overflow-hidden text-center flex flex-col items-center shadow-2xl">
            {/* Glowing Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyan-400/10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-cyan-400/5 pointer-events-none delay-150"></div>

            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-900/50 border border-cyan-500/30 text-cyan-200 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Tersedia untuk Proyek Baru
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] font-headline tracking-tight">
                Mari Bangun <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">Warisan Anda.</span>
              </h2>
              <p className="text-xl md:text-2xl text-cyan-100/80 mb-12 font-body max-w-2xl mx-auto">
                Siap mengubah kehadiran digital Anda menjadi mahakarya arsitektur yang menghasilkan konversi tinggi? 
              </p>
              <Link to="/consultation" className="group relative bg-white text-[#003847] px-10 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-extrabold shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 inline-flex items-center gap-4 overflow-hidden">
                <span className="relative z-10">Mulai Sekarang</span>
                <span className="relative z-10 material-symbols-outlined transform group-hover:translate-x-2 transition-transform">rocket_launch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Portfolio;

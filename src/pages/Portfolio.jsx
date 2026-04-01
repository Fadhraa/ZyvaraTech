import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Corporate', 'E-commerce', 'Editorial', 'Agency'];

  const projects = [
    {
      id: 1,
      title: 'Apex Architectural',
      category: 'Corporate',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTM851jEH0e6HhElOLCAxBwr06wNmqRykwn1llFzvm-ljoWrH73m0pobucC143H7GE8Enn1jHlFTTgFIEiuxp8o8LmzGtE1yqGd-OANOp7Stqht5Q6WlZWNuBh8s2k1jSVnOhBs9aTHj8w-Qgo84Ix90dyZxg4Zfgx9DkRNNlM5_tv8nJuvJJAzHBAF9lm7tUtJ7ey6t22fvOePoEWm5JJ9jpA4TN3vJUX8Ne-oiK7xvsAbekGi4drKcXqb57HZYW0TUIVtMrmkm-x',
      desc: 'A digital home for high-end urban design, focusing on structural purity and spatial storytelling.',
      gridClass: 'md:col-span-12', // Bento Full Width
      aspectClass: 'aspect-[16/10] md:aspect-[21/9]'
    },
    {
      id: 2,
      title: 'Lumina Watch Co.',
      category: 'E-commerce',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS9r0ZVJ9mhI_7ypH670KkDDfm_EQR9KV6Ot_JPkkVx8NcFkvoFS4QsGnCkHiLvR-5pqyp5w5eqwxedbqwTQYMKrqNyBJeULMUSgRU9mbiX6im4EuyXr3ibbNOW1AI_qeXvGnwsOgNrReXaEKYKGK5Cgziaa-HJrtzmMnpsQR62WV1pNaSsWjQs_4rztRUcsM9ilkLAU6Dk5iEKv3o31ZBVlYhtaTlMYEJEDoavtXf5ID3FpsHCs2sol3_5zf20gCcsKSvJKFsAuBA',
      desc: 'Merging timeless aesthetics with modern conversion tactics for a premium horology experience.',
      gridClass: 'md:col-span-7', // Bento Left Large
      aspectClass: 'aspect-square md:aspect-[4/3]'
    },
    {
      id: 3,
      title: 'The Mindful Maker',
      category: 'Editorial',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp9zttHKwt33RYdkGS1FshRLw8g4TTx02nZXbgWl9XW7bV29Ys9kz1ecRHV91csoR-XOUT7mtucnLOx6ZNfum8T3R5jfNyoqHjuVdKk0kSZw0YPW_YQxoIr3OXmKrRsDaPH6VK7UWI8SyeSkTNMKkW7H9PYoPa1j_5Dxu9mRGMhgI9HzVmI7UCkAgIERZwYMP6Cadi_zw1BKCzwAhMdtWqsw5ySmYESpJljtIwup1RKeCGCtOUkHZdHnBa6K168omXP14KcbYe7gkz',
      desc: 'An editorial platform designed to breathe, using wide margins and delicate typography.',
      gridClass: 'md:col-span-5', // Bento Right Tall
      aspectClass: 'aspect-square md:aspect-[3/4]' // Taller to match the 4/3 next to it
    },
    {
      id: 4,
      title: 'Studio Nova',
      category: 'Agency',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAipp-nuRyij3FpvgGS_lYVr3ao1_GgSkp7v9uXOPn0ErbqyzNeAPQpb6Bw4uxN6vRt4LdLumbGRexmfR2vgdcsNP-pg_LpNRuppd2sBSdvBcQSrKgt1S5MCLe_2aLjOXBIGOMqJ9E-SOGXzeFe-UwSwgr7Iyx-hCOkTXa8-H1kg4HbTbKxqxEWq246zFWUyegACzoXZIBTYibtDmqqF7lBu1S3jTWX15cmj1xSXFFN22pXnwT1IwL8GBzM9YCY-oxQVKfyMwSRnJSL',
      desc: 'Breaking the mold with bold colors and unconventional grids to showcase artistic fearlessness.',
      gridClass: 'md:col-span-12', // Bento Full Width Bottom
      aspectClass: 'aspect-[16/10] md:aspect-[16/7]'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#faf8ff] dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col selection:bg-cyan-200 dark:selection:bg-cyan-900">
      <main className="flex-grow pt-32 pb-24 overflow-hidden">
        
        {/* Abstract Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-cyan-100/50 to-transparent dark:from-cyan-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        {/* Hero Innovation */}
        <header className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 relative z-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8" data-aos="fade-down">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-[#001f29] dark:text-white leading-[1.1] font-headline bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-[#166e85] dark:from-white dark:to-cyan-400">
              Selected <br/> Works.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-body max-w-xl">
              A curated collection of digital architecture. Where engineering precision meets emotional design.
            </p>
          </div>

          {/* Dynamic Filter Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 md:pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold font-headline transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-[#166e85] text-white shadow-lg shadow-cyan-900/30 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:text-cyan-700 dark:hover:text-cyan-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Bento Grid Portfolio */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 min-h-[50vh]" data-aos="fade-up">
          {filteredProjects.length === 0 ? (
             <div className="text-center py-20 bg-white/50 backdrop-blur-sm rounded-[2rem] border border-dashed border-slate-300">
               <h3 className="text-2xl font-bold text-slate-400">No projects found in this category.</h3>
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <article 
                  key={project.id} 
                  className={`${project.gridClass} group relative cursor-pointer overflow-hidden rounded-[2rem] bg-slate-200 dark:bg-slate-800 transform-gpu transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-900/20`}
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
                  
                  {/* Glassmorphism Sliding Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent backdrop-blur-sm transition-all duration-500 ease-out flex justify-between items-end">
                    <div className="text-white">
                      <span className="inline-block px-3 py-1 mb-3 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
                        {project.category}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-black font-headline mb-2 text-white">
                        {project.title}
                      </h3>
                      <p className="max-w-md font-body text-sm md:text-base text-slate-200 opacity-90 hidden sm:block">
                        {project.desc}
                      </p>
                    </div>
                    
                    {/* Action Arrow */}
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transform rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl md:text-3xl">arrow_forward</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
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
                Available for New Projects
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] font-headline tracking-tight">
                Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">Legacy.</span>
              </h2>
              <p className="text-xl md:text-2xl text-cyan-100/80 mb-12 font-body max-w-2xl mx-auto">
                Ready to transform your digital presence into a high-converting architectural masterpiece? 
              </p>
              <Link to="/consultation" className="group relative bg-white text-[#003847] px-10 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-extrabold shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 inline-flex items-center gap-4 overflow-hidden">
                <span className="relative z-10">Initiate Protocol</span>
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

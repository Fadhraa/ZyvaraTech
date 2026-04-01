import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <nav className="bg-[#faf8ff]/90 dark:bg-slate-950/90 backdrop-blur-xl w-full top-0 sticky z-50 border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-200 ease-in-out hidden md:block">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
          <Link to="/" className="text-xl font-bold tracking-tight text-[#166e85] dark:text-cyan-400 font-headline">
            ZyraTech
          </Link>
          <div className="hidden md:flex items-center gap-10 font-headline font-medium text-sm">
            <Link className={`pb-1 transition-colors ${currentPath === '/' ? 'text-cyan-700 dark:text-cyan-400 border-b-2 border-cyan-700' : 'text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300'}`} to="/">Home</Link>
            <Link className={`pb-1 transition-colors ${currentPath === '/services' ? 'text-cyan-700 dark:text-cyan-400 border-b-2 border-cyan-700' : 'text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300'}`} to="/services">Services</Link>
            <Link className={`pb-1 transition-colors ${currentPath === '/portfolio' ? 'text-cyan-700 dark:text-cyan-400 border-b-2 border-cyan-700' : 'text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300'}`} to="/portfolio">Portfolio</Link>
            <Link className={`pb-1 transition-colors ${currentPath === '/consultation' ? 'text-cyan-700 dark:text-cyan-400 border-b-2 border-cyan-700' : 'text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300'}`} to="/consultation">Consultation</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/consultation" className="bg-[#006781] text-white font-headline font-semibold px-6 py-2.5 rounded-full hover:bg-[#005a71] hover:scale-95 transition-all duration-200 shadow-sm">
              Start Project
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Action Button (FAB) */}
      <Link to="/consultation" className="md:hidden fixed bottom-20 right-6 bg-[#fd761a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-[60] active:scale-95 transition-transform">
        <span className="material-symbols-outlined" data-icon="add_comment" style={{ fontVariationSettings: "'FILL' 1" }}>add_comment</span>
      </Link>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/80 dark:border-slate-800/80 h-16 flex items-center justify-around px-2 z-50 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
        <Link to="/" className={`flex flex-col items-center gap-1 ${currentPath === '/' ? 'text-cyan-700 dark:text-cyan-400' : 'text-slate-500 dark:text-slate-400'}`}>
          <div className={`${currentPath === '/' ? 'bg-cyan-100 dark:bg-cyan-900/50' : ''} px-4 py-0.5 rounded-full flex items-center justify-center transition-all`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: currentPath === '/' ? "'FILL' 1" : undefined }}>home</span>
          </div>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link to="/services" className={`flex flex-col items-center gap-1 ${currentPath === '/services' ? 'text-cyan-700 dark:text-cyan-400' : 'text-slate-500 dark:text-slate-400 active:text-cyan-700 hover:text-cyan-600'}`}>
          <div className={`${currentPath === '/services' ? 'bg-cyan-100 dark:bg-cyan-900/50' : ''} px-4 py-0.5 rounded-full flex items-center justify-center transition-all`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: currentPath === '/services' ? "'FILL' 1" : undefined }}>design_services</span>
          </div>
          <span className="text-[10px] font-bold">Services</span>
        </Link>
        <Link to="/portfolio" className={`flex flex-col items-center gap-1 ${currentPath === '/portfolio' ? 'text-cyan-700 dark:text-cyan-400' : 'text-slate-500 dark:text-slate-400 active:text-cyan-700 hover:text-cyan-600'}`}>
          <div className={`${currentPath === '/portfolio' ? 'bg-cyan-100 dark:bg-cyan-900/50' : ''} px-4 py-0.5 rounded-full flex items-center justify-center transition-all`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: currentPath === '/portfolio' ? "'FILL' 1" : undefined }}>photo_library</span>
          </div>
          <span className="text-[10px] font-bold">Portfolio</span>
        </Link>
        <Link to="/consultation" className={`flex flex-col items-center gap-1 ${currentPath === '/consultation' ? 'text-cyan-700 dark:text-cyan-400' : 'text-slate-500 dark:text-slate-400 active:text-cyan-700 hover:text-cyan-600'}`}>
          <div className={`${currentPath === '/consultation' ? 'bg-cyan-100 dark:bg-cyan-900/50' : ''} px-4 py-0.5 rounded-full flex items-center justify-center transition-all`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: currentPath === '/consultation' ? "'FILL' 1" : undefined }}>chat</span>
          </div>
          <span className="text-[10px] font-bold">Consult</span>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  const NavLink = ({ to, children }) => {
    const isActive = currentPath === to;
    return (
      <Link 
        to={to} 
        className={`px-1 py-0.5 text-sm md:text-base font-medium transition-colors border-b-2 
          ${isActive 
            ? 'border-[#166e85] text-[#166e85] dark:border-cyan-400 dark:text-cyan-300' 
            : 'border-slate-300 text-slate-500 hover:text-[#166e85] hover:border-[#166e85] dark:border-slate-700 dark:text-slate-400'
          }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <footer className="w-full bg-[#f8f9fa] dark:bg-slate-950 py-10 px-6 sm:px-12 border-t border-slate-200 dark:border-slate-800 mt-auto pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side: Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-bold font-headline text-[#166e85] dark:text-cyan-400">
            ZyraTech
          </div>
          <div className="text-slate-500 font-body text-sm md:text-base opacity-90">
            © 2024 ZyraTech. Premium Web Architecture.
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/consultation">Consultation</NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

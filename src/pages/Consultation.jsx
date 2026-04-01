import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Consultation() {
  return (
    <div className="bg-background text-on-background antialiased min-h-screen flex flex-col">


      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Content and Contact Info */}
          <div className="space-y-12">
            {/* Hero Content */}
            <section>
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
                Let's build something <span className="text-primary">together.</span>
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                Have a project in mind or just want to say hi? We're here to help you navigate your digital journey with premium web architecture.
              </p>
            </section>

            {/* Contact Channels */}
            <div className="space-y-8">
              {/* WhatsApp Card */}
              <section>
                <a className="flex items-center gap-4 p-5 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/15 hover:border-primary/30 transition-all group" href="#">
                  <div className="w-14 h-14 rounded-full bg-tertiary-container/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-tertiary-container text-3xl" data-icon="chat" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">Chat via WhatsApp</h3>
                    <p className="text-sm text-on-surface-variant">Instant response within 1 hour</p>
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
                    <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Email us</p>
                    <p className="text-on-surface font-semibold">hello@zyratech.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest/50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" data-icon="call">call</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Call us</p>
                    <p className="text-on-surface font-semibold">+1 (555) 000-MIO</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <section className="bg-surface-container-low rounded-3xl p-8 lg:p-10 shadow-sm border border-outline-variant/10" data-aos="fade-left">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-on-surface mb-2">Send us a message</h2>
              <p className="text-on-surface-variant text-sm">Fill out the form below and we'll get back to you shortly.</p>
            </div>
            
            <form action="#" className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2 ml-1" htmlFor="name">Name</label>
                <input className="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-lg focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant transition-all" id="name" placeholder="Alex Johnson" type="text" />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2 ml-1" htmlFor="email">Email</label>
                <input className="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-lg focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant transition-all" id="email" placeholder="alex@example.com" type="email" />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2 ml-1" htmlFor="request">Your Request</label>
                <textarea className="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-lg focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant transition-all" id="request" placeholder="Tell us about your dream website..." rows="5"></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-full text-lg font-extrabold shadow-lg shadow-primary/20 active:scale-[0.98] transition-all" type="submit">
                Send Message
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

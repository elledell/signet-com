import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png'; // Make sure this path is correct

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t-4 border-[#FFC107]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand & Info Column */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img src={logo} alt="Signet Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
              <div className="flex flex-col justify-center">
                <span className="font-black uppercase tracking-widest text-xl leading-none text-white">
                  SIGNET
                </span>
                <span className="text-[#FFC107] font-bold text-xs uppercase tracking-widest leading-none mt-1">
                  Contractor Limited
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              We provide high-quality construction projects and innovative design for residential, commercial, and infrastructure needs.
            </p>
            <p className="text-[#FFC107] font-bold italic text-sm border-l-2 border-[#FFC107] pl-3">
              Where future meets execution.
            </p>
          </div>

          {/* 2. Quick Links Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/#hero" className="text-slate-400 hover:text-[#FFC107] text-sm transition-colors flex items-center gap-2">Home</a></li>
              <li><a href="/#about" className="text-slate-400 hover:text-[#FFC107] text-sm transition-colors flex items-center gap-2">About Us</a></li>
              <li><Link to="/services" className="text-slate-400 hover:text-[#FFC107] text-sm transition-colors flex items-center gap-2">Services</Link></li>
              <li><a href="/#projects" className="text-slate-400 hover:text-[#FFC107] text-sm transition-colors flex items-center gap-2">Projects</a></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-[#FFC107] text-sm transition-colors flex items-center gap-2">Contact Us</Link></li>
            </ul>
          </div>

          {/* 3. Company Links Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="/#why-choose-us" className="text-slate-400 hover:text-[#FFC107] text-sm transition-colors flex items-center gap-2">Why Choose Us</a></li>
              <li><a href="/#testimonials" className="text-slate-400 hover:text-[#FFC107] text-sm transition-colors flex items-center gap-2">Testimonies</a></li>
              <li><a href="/#build" className="text-slate-400 hover:text-[#FFC107] text-sm transition-colors flex items-center gap-2">Start a Project</a></li>
              <li><a href="/#blog" className="text-slate-400 hover:text-[#FFC107] text-sm transition-colors flex items-center gap-2">Industry Insights</a></li>
            </ul>
          </div>

          {/* 4. Contact Information Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-slate-400 text-sm">P.O. Box 2427-30100<br/>Eldoret, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#FFC107] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-slate-400 text-sm">+254 703 490 346</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#FFC107] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-slate-400 text-sm">info@signet.co.ke</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; {currentYear} Signet Contractor Limited. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            {/* Facebook */}
            <a href="https://facebook.com/" className="text-slate-500 hover:text-[#FFC107] transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/" className="text-slate-500 hover:text-[#FFC107] transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/#" className="text-slate-500 hover:text-[#FFC107] transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
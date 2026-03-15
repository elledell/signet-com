import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = (menu) => {
    setMobileExpandedMenu(mobileExpandedMenu === menu ? null : menu);
  };

  const closeSidebar = () => {
    setIsMobileMenuOpen(false);
    setMobileExpandedMenu(null);
  };

  const textColor = isScrolled ? 'text-slate-800' : 'text-white';
  const logoTextColor = isScrolled ? 'text-slate-900' : 'text-white';

  return (
    <>
      <nav 
        className={`w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'fixed top-0 bg-white shadow-md border-b border-gray-100' 
            : 'absolute top-10 bg-transparent border-b border-white/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo & Company Name */}
            <div className="flex-shrink-0 flex items-center">
              {/* FIXED: Added / before # */}
              <a href="/#hero" className="flex items-center gap-3 group">
                <img src={logo} alt="Signet Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
                <div className="flex flex-col justify-center">
                  <span className={`font-black uppercase tracking-widest text-lg sm:text-xl leading-none transition-colors duration-300 ${logoTextColor}`}>
                    SIGNET
                  </span>
                  <span className="text-[#FFC107] font-bold text-[10px] sm:text-xs uppercase tracking-widest leading-none mt-1.5 drop-shadow-sm">
                    Contractor Limited
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 h-full">
              
              {/* FIXED: Added / before # */}
              <a href="/#hero" className={`${textColor} hover:text-[#FFC107] font-semibold text-sm transition-colors uppercase tracking-widest`}>Home</a>

              {/* COMPANY DROPDOWN WITH ICONS */}
              <div className="group h-full flex items-center relative">
                <button className={`${textColor} group-hover:text-[#FFC107] font-semibold text-sm transition-colors uppercase tracking-widest flex items-center gap-1 h-full`}>
                  Company
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>

                <div className="absolute left-0 top-full mt-0 w-64 bg-white shadow-xl border-t-2 border-[#FFC107] rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out py-3">
                  
                  {/* FIXED: Added / before # for all sections below */}
                  <a href="/#about" className="flex items-center gap-4 px-6 py-3 hover:bg-slate-50 transition-colors group/link">
                    <div className="bg-slate-100 p-2 rounded-lg text-slate-600 group-hover/link:text-[#FFC107] group-hover/link:bg-slate-900 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="text-sm font-bold text-slate-700 uppercase tracking-wider group-hover/link:text-[#FFC107]">About Us</span>
                  </a>
                  
                  <a href="/#why-choose-us" className="flex items-center gap-4 px-6 py-3 hover:bg-slate-50 transition-colors group/link">
                    <div className="bg-slate-100 p-2 rounded-lg text-slate-600 group-hover/link:text-[#FFC107] group-hover/link:bg-slate-900 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <span className="text-sm font-bold text-slate-700 uppercase tracking-wider group-hover/link:text-[#FFC107]">Why Choose Us</span>
                  </a>

                  <a href="/#testimonials" className="flex items-center gap-4 px-6 py-3 hover:bg-slate-50 transition-colors group/link">
                    <div className="bg-slate-100 p-2 rounded-lg text-slate-600 group-hover/link:text-[#FFC107] group-hover/link:bg-slate-900 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                    </div>
                    <span className="text-sm font-bold text-slate-700 uppercase tracking-wider group-hover/link:text-[#FFC107]">Testimonies</span>
                  </a>

                  <a href="/#blog" className="flex items-center gap-4 px-6 py-3 hover:bg-slate-50 transition-colors group/link">
                    <div className="bg-slate-100 p-2 rounded-lg text-slate-600 group-hover/link:text-[#FFC107] group-hover/link:bg-slate-900 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                    </div>
                    <span className="text-sm font-bold text-slate-700 uppercase tracking-wider group-hover/link:text-[#FFC107]">Insights</span>
                  </a>
                </div>
              </div>

              {/* MAIN NAV LINKS */}
              {/* FIXED: Services now explicitly links to the dedicated /services page */}
              <Link to="/services" className={`${textColor} hover:text-[#FFC107] font-semibold text-sm transition-colors uppercase tracking-widest`}>Services</Link>
              
              <a href="/#projects" className={`${textColor} hover:text-[#FFC107] font-semibold text-sm transition-colors uppercase tracking-widest`}>Projects</a>
              <a href="/#build" className={`${textColor} hover:text-[#FFC107] font-semibold text-sm transition-colors uppercase tracking-widest`}>Build</a>
            </div>

            {/* Right Side Action Button -> Points to Contact Form */}
            <div className="hidden lg:flex items-center">
              <Link 
                to="/contact" 
                className={`border-2 border-[#FFC107] hover:bg-[#FFC107] hover:text-slate-900 font-bold py-2.5 px-6 transition-colors uppercase tracking-widest text-sm ${textColor}`}
              >
                Get A Quote
              </Link>
            </div>

            {/* Mobile menu hamburger button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className={`${textColor} hover:text-[#FFC107] focus:outline-none transition-colors`}
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR DRAWER --- */}
      <div 
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeSidebar}
      />

      <div className={`fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col text-left ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <img src={logo} alt="Signet Logo" className="h-10 w-auto object-contain" />
          <button onClick={closeSidebar} className="text-slate-500 hover:text-red-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex flex-col py-2 overflow-y-auto px-4 space-y-2">
          {/* FIXED: Added / before # */}
          <a href="/#hero" onClick={closeSidebar} className="px-3 py-2 text-slate-800 font-semibold uppercase tracking-widest text-sm hover:text-[#FFC107]">Home</a>
          
          <div className="border-b border-gray-100 pb-2">
            <div className="flex items-center justify-between px-3 py-2 cursor-pointer hover:text-[#FFC107]" onClick={() => toggleMobileMenu('company')}>
              <span className="text-slate-800 font-semibold uppercase tracking-widest text-sm">Company</span>
              <span className="text-2xl text-slate-400 leading-none">{mobileExpandedMenu === 'company' ? '-' : '+'}</span>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${mobileExpandedMenu === 'company' ? 'max-h-[500px]' : 'max-h-0'}`}>
              <div className="flex flex-col px-4 pt-1 pb-2 space-y-4 mt-2">
                
                {/* FIXED: Added / before # */}
                <a href="/#about" onClick={closeSidebar} className="flex items-center gap-2 text-slate-600 hover:text-[#FFC107] text-sm uppercase tracking-wider font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  About Us
                </a>
                
                <a href="/#why-choose-us" onClick={closeSidebar} className="flex items-center gap-2 text-slate-600 hover:text-[#FFC107] text-sm uppercase tracking-wider font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Why Choose Us
                </a>
                
                <a href="/#testimonials" onClick={closeSidebar} className="flex items-center gap-2 text-slate-600 hover:text-[#FFC107] text-sm uppercase tracking-wider font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  Testimonies
                </a>

                <a href="/#blog" onClick={closeSidebar} className="flex items-center gap-2 text-slate-600 hover:text-[#FFC107] text-sm uppercase tracking-wider font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                  Insights
                </a>
              </div>
            </div>
          </div>

          {/* FIXED: Linked directly to the /services page */}
          <Link to="/services" onClick={closeSidebar} className="px-3 py-2 text-slate-800 font-semibold uppercase tracking-widest text-sm hover:text-[#FFC107]">Services</Link>
          
          {/* FIXED: Added / before # */}
          <a href="/#projects" onClick={closeSidebar} className="px-3 py-2 text-slate-800 font-semibold uppercase tracking-widest text-sm hover:text-[#FFC107]">Projects</a>
          <a href="/#build" onClick={closeSidebar} className="px-3 py-2 text-slate-800 font-semibold uppercase tracking-widest text-sm hover:text-[#FFC107]">Build</a>
        </div>

        <div className="mt-auto p-6">
          <Link to="/contact" onClick={closeSidebar} className="block w-full text-center bg-[#FFC107] text-slate-900 font-bold py-3 uppercase tracking-widest text-sm transition-colors">
            Get A Quote
          </Link>
        </div>

      </div>
    </>
  );
};

export default Navbar;
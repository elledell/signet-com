// Import your local video asset
import vid2 from '../assets/vid2.mp4'; 

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-10 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row relative shadow-2xl rounded-2xl lg:rounded-[2rem] overflow-hidden">
          
          {/* --- LEFT SIDE: The Yellow Content Block --- */}
          <div className="w-full lg:w-[55%] bg-[#FFC107] p-8 md:p-12 relative z-10 flex flex-col justify-center text-slate-900">
            
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <span className="font-bold uppercase tracking-widest text-xs text-slate-700">Why Choose Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight mb-8 drop-shadow-sm text-slate-900">
              High Quality Construction Projects & Innovate Design!
            </h2>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              <div className="bg-white rounded-xl p-3.5 flex items-center gap-3 border border-slate-100 hover:bg-slate-100 transition-colors cursor-default">
                <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-semibold text-sm text-slate-900">Quality Control System</span>
              </div>
              <div className="bg-white rounded-xl p-3.5 flex items-center gap-3 border border-slate-100 hover:bg-slate-100 transition-colors cursor-default">
                <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-semibold text-sm text-slate-900">100% Satisfaction</span>
              </div>
              <div className="bg-white rounded-xl p-3.5 flex items-center gap-3 border border-slate-100 hover:bg-slate-100 transition-colors cursor-default">
                <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-semibold text-sm text-slate-900">Highly Professional Staff</span>
              </div>
              <div className="bg-white rounded-xl p-3.5 flex items-center gap-3 border border-slate-100 hover:bg-slate-100 transition-colors cursor-default">
                <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-semibold text-sm text-slate-900">Accurate Testing</span>
              </div>
            </div>

            {/* --- ACTION BUTTONS (Updated to scroll to sections) --- */}
            <div className="flex flex-wrap items-center gap-6">
              <a href="/#about" className="bg-slate-900 text-white hover:bg-slate-800 font-bold py-3.5 px-6 uppercase tracking-widest text-xs transition-colors shadow-lg rounded-sm">
                Learn More
              </a>
              <a href="/#gallery" className="text-slate-900 hover:text-slate-800 font-bold uppercase tracking-widest text-xs flex items-center gap-2 transition-colors">
                Our Projects <span className="text-lg leading-none">→</span>
              </a>
            </div>

            {/* The Angled Overlap Diamonds */}
            <div className="hidden lg:block absolute right-0 bottom-16 translate-x-1/2 w-24 h-24 bg-[#FFC107] rotate-45 rounded-xl shadow-xl z-10"></div>
            <div className="block lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-[#FFC107] rotate-45 rounded-xl shadow-xl z-10"></div>

          </div>

          {/* --- RIGHT SIDE: The Video --- */}
          <div className="w-full lg:w-[45%] h-[300px] lg:h-auto relative z-0">
            <video 
                src={vid2}
                autoPlay loop muted playsInline
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/10 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
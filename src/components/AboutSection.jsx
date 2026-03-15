// Import your local video and image assets
import vid1 from '../assets/vid1.mp4';
import aboutImg from '../assets/about.jfif';

const AboutSection = () => {
  return (
    // Increased bottom padding slightly to accommodate the larger overlapping image
    <section id="about" className="pt-20 pb-28 lg:pt-32 lg:pb-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Scaled-up Video & Image Grid */}
          <div className="w-full lg:w-1/2 relative">
            
            {/* Main large VIDEO component - Increased width to 90% and height to 550px */}
            <div className="relative z-10 w-[90%] rounded-lg overflow-hidden shadow-2xl">
              <video 
                src={vid1}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-[450px] lg:h-[550px] object-cover"
              />
            </div>
            
            {/* Smaller overlapping IMAGE component - Increased width to 70% and height to 350px */}
            {/* Shifted it slightly further down and to the right to maintain the layered effect with larger sizes */}
            <div className="absolute right-0 lg:-right-6 bottom-[-60px] lg:bottom-[-80px] z-20 w-3/4 lg:w-[70%] rounded-lg overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={aboutImg} 
                alt="Signet Construction Site" 
                className="w-full h-[280px] lg:h-[350px] object-cover"
              />
            </div>

            {/* Floating Experience Badge - Moved slightly to fit the new larger video */}
            <div className="absolute top-8 right-4 lg:right-0 z-30 bg-[#FFC107] text-slate-900 p-6 rounded-sm shadow-xl flex flex-col items-center justify-center animate-bounce-slow">
              <span className="text-4xl lg:text-5xl font-black leading-none mb-1">15+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-center">Years of<br/>Excellence</span>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute top-[-30px] left-[-30px] w-40 h-40 bg-slate-100 rounded-full z-0"></div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 mt-20 lg:mt-0">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-1 bg-[#FFC107]"></span>
              <h3 className="text-[#FFC107] font-bold text-sm uppercase tracking-widest">About Signet</h3>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight uppercase tracking-wide">
              Building with Precision, <br className="hidden md:block"/> Engineering the Future.
            </h2>
            
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              At Signet Contractor Limited, we don't just build structures; we forge lasting infrastructure. With a steadfast commitment to quality and safety, we transform architectural visions into tangible realities. 
            </p>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed italic border-l-4 border-[#FFC107] pl-4 bg-slate-50 py-3">
              We operate on a simple but powerful philosophy: this is exactly where future meets execution.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center mt-1">
                  <svg className="w-3.5 h-3.5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold uppercase tracking-wider text-sm mb-1">Expert Engineering</h4>
                  <p className="text-slate-500 text-sm">Industry-leading professionals delivering unparalleled precision on every site.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center mt-1">
                  <svg className="w-3.5 h-3.5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold uppercase tracking-wider text-sm mb-1">ISO 9001 Certified</h4>
                  <p className="text-slate-500 text-sm">Strict adherence to global safety, quality, and environmental standards.</p>
                </div>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
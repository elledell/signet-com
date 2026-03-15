import { useState, useEffect } from 'react';

// Assuming standard relative imports. Update to use your @ alias if preferred, 
// e.g., import slide1 from '@/assets/slide1.jfif';
import slide1 from '../assets/slide1.jfif';
import slide2 from '../assets/slide2.jfif';
import slide3 from '../assets/slide3.jfif';
import slide4 from '../assets/slide4.jfif';
import slide5 from '../assets/slide5.jfif';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Helper object for custom construction-themed icons
  const icons = {
    trophy: (
      <svg className="w-8 h-8 text-[#FFC107]" fill="currentColor" viewBox="0 0 24 24"><path d="M11 11.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zM4.75 3a.75.75 0 00-.75.75v3.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75v-3.5a.75.75 0 00-.75-.75H4.75z M17.75 3a.75.75 0 00-.75.75v3.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75v-3.5a.75.75 0 00-.75-.75H17.75z M2 3a1 1 0 011-1h2.75A.75.75 0 016.5 2.75v1.25a.75.75 0 01-.75.75H4.75a.25.25 0 00-.25.25v3.5a.25.25 0 00.25.25h1.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25H4.25A1.75 1.75 0 012.5 5.75V3.75C2.5 3.336 2.836 3 3.25 3H2zm20 1a1 1 0 00-1-1h-2.75a.75.75 0 00-.75.75v1.25a.75.75 0 00.75.75h1.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25v-3.5a.25.25 0 01.25-.25h.5A1.75 1.75 0 0021.5 5.75V3.75C21.5 3.336 21.164 3 20.75 3h-.75z M12 3a.75.75 0 00-.75.75v10.5a.75.75 0 00.75.75h.01a.75.75 0 00.75-.75V3.75A.75.75 0 0012.76 3z M10 14h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1z"/></svg>
    ),
    building: (
      <svg className="w-8 h-8 text-[#FFC107]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
    checkCircle: (
      <svg className="w-8 h-8 text-[#FFC107]" fill="currentColor" viewBox="0 0 24 24"><path d="M19.707 9.293a1 1 0 00-1.414 0L10 13.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l5-5a1 1 0 000-1.414z M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H11V11h2v5zm0-7H11V7h2v2z"/></svg>
    ),
    area: (
       <svg className="w-8 h-8 text-[#FFC107]" fill="currentColor" viewBox="0 0 24 24"><path d="M2.5 1.5a1 1 0 00-1 1v19a1 1 0 001 1h19a1 1 0 001-1v-19a1 1 0 00-1-1h-19zm0 1h19v19h-19v-19zm4.5 4.5v10a1 1 0 001 1h8a1 1 0 001 1v-10zm1 1h8v10h-8v-10zm-3-3v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5zm1.5.5a.25.25 0 100 .5.25.25 0 000-.5zM17 19v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5zm1.5.5a.25.25 0 100 .5.25.25 0 000-.5z"/></svg>
    )
  };

  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Building the Future",
      desc: "Signet combines forward-thinking engineering with precision execution to build the future you envision.",
      subtitle: "Where future meets execution.",
      ctaText: "Explore Projects",
      ctaLink: "#gallery", // Links directly to gallery section
      stats: [
        { value: "15+", label: "Years of Excellence", icon: icons.checkCircle },
        { value: "50+", label: "Completed Projects", icon: icons.building }
      ]
    },
    {
      id: 2,
      image: slide2,
      title: "Commercial Excellence",
      desc: "We design and build innovative commercial spaces that drive business growth and community value.",
      subtitle: "Innovative spaces for thriving businesses.",
      ctaText: "Commercial Services",
      ctaLink: "#services", // Links to services section
      stats: [
        { value: "10K+", label: "Sq Ft Commercial", icon: icons.area },
        { value: "20+", label: "Industry Awards", icon: icons.trophy }
      ]
    },
    {
      id: 3,
      image: slide3,
      title: "Robust Infrastructure",
      desc: "Our civil engineering expertise lays the foundation for reliable and sustainable public infrastructure.",
      subtitle: "The civil systems of tomorrow.",
      ctaText: "Civil Engineering",
      ctaLink: "#services", // Links to services section
      stats: [
        { value: "25+", label: "Bridge Projects", icon: icons.building },
        { value: "100+", label: "Miles of Road", icon: icons.area }
      ]
    },
    {
      id: 4,
      image: slide4,
      title: "Residential Development",
      desc: "We craft beautiful, efficient, and sustainable modern homes that foster quality living and enduring value.",
      subtitle: "Crafting beautiful modern homes.",
      ctaText: "View Residential",
      ctaLink: "#services", // Links to services section
      stats: [
        { value: "30+", label: "Communities Developed", icon: icons.building },
        { value: "98%", label: "Client Satisfaction", icon: icons.checkCircle }
      ]
    },
    {
      id: 5,
      image: slide5,
      title: "Uncompromising Safety",
      desc: "Our commitment to safety is our foundation. ISO 9001 certification ensures excellence in every project.",
      subtitle: "A foundation of safety.",
      ctaText: "Our Safety Standards",
      ctaLink: "#about", // Links to about section
      stats: [
        { value: "ZERO", label: "Lost Time Incidents", icon: icons.checkCircle },
        { value: "ISO", label: "9001 Certified", icon: icons.checkCircle }
      ]
    }
  ];

  const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide(nextIndex);
  const prevSlide = () => setCurrentSlide(prevIndex);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    // Changed h-[80vh] md:h-[90vh] to h-screen to fill the entire screen height.
    <div id="hero" className="relative w-full h-screen bg-slate-950 overflow-hidden group">
      
      {/* Slides Container */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        
        return (
          <div 
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Background Image with slow zoom effect */}
            <div 
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-linear ${isActive ? 'scale-105' : 'scale-100'}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex justify-start items-center px-4 sm:px-6 lg:px-12">
              {/* Removed the background and padding classes here to remove the rectangular overlay */}
              <div 
                className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center"
              >
                
                {/* Text and CTA - Left Column */}
                <div className="md:w-3/5 text-left md:pr-12">
                  <h1 
                    className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-widest drop-shadow-xl transition-all duration-700 ease-out transform ${isActive ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-12 opacity-0'}`}
                  >
                    {slide.title}
                  </h1>
                  
                  <p 
                    className={`text-lg md:text-xl text-slate-200 mb-6 drop-shadow-lg max-w-2xl transition-all duration-700 ease-out transform ${isActive ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-12 opacity-0'}`}
                  >
                    {slide.desc}
                  </p>

                  <div 
                    className={`flex items-center gap-2 text-slate-300 italic mb-10 drop-shadow-md transition-all duration-700 ease-out transform ${isActive ? 'translate-y-0 opacity-100 delay-600' : 'translate-y-12 opacity-0'}`}
                  >
                    <svg className="w-5 h-5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{slide.subtitle}</span>
                  </div>
                  
                  <div 
                    className={`transition-all duration-700 ease-out transform ${isActive ? 'translate-y-0 opacity-100 delay-700' : 'translate-y-12 opacity-0'}`}
                  >
                    {/* Changed from <Link> to standard <a> tag for smooth scrolling */}
                    <a 
                      href={slide.ctaLink}
                      className="inline-block bg-[#FFC107] hover:bg-yellow-500 text-black font-bold py-3.5 px-8 uppercase tracking-widest text-sm transition-colors shadow-xl rounded-sm"
                    >
                      {slide.ctaText}
                    </a>
                  </div>
                </div>

                {/* Stats Counter - Right Column */}
                <div 
                  className={`hidden md:flex flex-col gap-10 md:w-2/5 md:pl-12 border-l border-slate-500/50 transition-all duration-700 ease-out transform ${isActive ? 'translate-y-0 opacity-100 delay-800' : 'translate-y-12 opacity-0'}`}
                >
                  {slide.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center gap-6 text-left">
                      <div className="flex-shrink-0 p-3 bg-slate-800/80 rounded-full border-2 border-slate-600 shadow-inner backdrop-blur-sm">
                        {stat.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-5xl font-black text-white mb-1 tracking-tight drop-shadow-md">{stat.value}</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-300 drop-shadow-sm">{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* --- NAVIGATION ARROWS --- */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-16 h-16 rounded-full border border-slate-500/50 bg-slate-900/60 transition-transform hover:scale-110 md:cursor-pointer overflow-hidden group/arrowPrev backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <div className="absolute inset-0 z-0 bg-cover bg-center rounded-full opacity-0 group-hover/arrowPrev:opacity-100 transition-opacity duration-300 flex-shrink-0"
               style={{ backgroundImage: `url(${slides[prevIndex].image})` }}
        />
        <div className="relative z-10 text-white drop-shadow-md">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </div>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-16 h-16 rounded-full border border-slate-500/50 bg-slate-900/60 transition-transform hover:scale-110 md:cursor-pointer overflow-hidden group/arrowNext backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <div className="absolute inset-0 z-0 bg-cover bg-center rounded-full opacity-0 group-hover/arrowNext:opacity-100 transition-opacity duration-300 flex-shrink-0"
               style={{ backgroundImage: `url(${slides[nextIndex].image})` }}
        />
        <div className="relative z-10 text-white drop-shadow-md">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </div>
      </button>

      {/* --- BOTTOM NAVIGATION DOTS --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 transition-all duration-300 ${currentSlide === index ? 'w-8 bg-[#FFC107] rounded-full shadow-lg' : 'w-2.5 bg-white/50 hover:bg-white rounded-full'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Hero;
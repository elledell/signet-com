import { useState } from 'react';

// Import your local image assets
import project1 from '../assets/project1.jfif';
import project2 from '../assets/project2.jfif'; // Assumed name, change if needed!
import project3 from '../assets/project3.jfif'; // Assumed name, change if needed!

const ProjectInquiry = () => {
  // State for all form fields so we can send them to WhatsApp
  const [location, setLocation] = useState('');
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState(5000000); // Default starts in the middle
  const [startDate, setStartDate] = useState('');

  // Function to format the data and open WhatsApp
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Format the message
    const message = `Hello Signet Contractor Limited, I would like to request a project estimate.\n\n*Location:* ${location || 'Not specified'}\n*Project Type:* ${projectType || 'Not specified'}\n*Estimated Budget:* Ksh ${Number(budget).toLocaleString()}\n*Target Start Date:* ${startDate || 'Not specified'}`;
    
    // Convert the 079... number to the international format required by WhatsApp API (254)
    const phoneNumber = "254703490346"; 
    
    // Create the WhatsApp link and open it in a new tab
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="build" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* --- LEFT SIDE: Text & Image Gallery --- */}
          <div className="w-full lg:w-1/2 flex flex-col">
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight uppercase tracking-wide">
              Start Your <span className="text-[#FFC107]">Project</span><br />
              With Signet
            </h2>
            
            <p className="text-slate-600 mb-10 text-lg">
              Use the form to define your project parameters, and let's connect directly via WhatsApp to discuss bringing your vision to life.
            </p>

            {/* Masonry Image Gallery (Using your local images) */}
            <div className="grid grid-cols-2 gap-4">
              {/* Top Large Image */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-md h-64 md:h-80">
                <img 
                  src={project1} 
                  alt="Signet Project 1" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Bottom Left Image */}
              <div className="col-span-1 rounded-2xl overflow-hidden shadow-md h-40 md:h-48">
                <img 
                  src={project2} 
                  alt="Signet Project 2" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Bottom Right Image */}
              <div className="col-span-1 rounded-2xl overflow-hidden shadow-md h-40 md:h-48">
                <img 
                  src={project3} 
                  alt="Signet Project 3" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>


          {/* --- RIGHT SIDE: Inquiry Form Card --- */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-10">
              
              {/* Form triggers the WhatsApp function on submit */}
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                
                {/* 1. Location Field */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-transparent focus-within:border-[#FFC107] transition-colors flex items-start gap-4">
                  <div className="pt-1 text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div className="flex-1 w-full">
                    <label className="block text-sm font-bold text-slate-900 mb-1">Project Location</label>
                    <input 
                      type="text" 
                      placeholder="City, Region, or Site Address" 
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-transparent outline-none text-slate-600 text-sm" 
                    />
                  </div>
                </div>

                {/* 2. Property / Project Type Field */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-transparent focus-within:border-[#FFC107] transition-colors flex items-start gap-4">
                  <div className="pt-1 text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div className="flex-1 w-full">
                    <label className="block text-sm font-bold text-slate-900 mb-1">Project Type</label>
                    <select 
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-transparent outline-none text-slate-600 text-sm cursor-pointer appearance-none"
                    >
                      <option value="">Select Project Type</option>
                      <option value="Commercial Construction">Commercial Construction</option>
                      <option value="Residential Development">Residential Development</option>
                      <option value="Civil / Infrastructure">Civil / Infrastructure</option>
                      <option value="Renovation">Renovation</option>
                    </select>
                  </div>
                </div>

                {/* 3. Budget Range Field */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-gray-50 flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="pt-1 text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-bold text-slate-900 mb-1">Estimated Budget (Ksh)</label>
                    </div>
                  </div>
                  
                  {/* Range Slider: 10,000 to 10,000,000 */}
                  <div className="px-2">
                    <input 
                      type="range" 
                      min="10000" 
                      max="10000000" 
                      step="10000"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                    />
                  </div>
                  
                  {/* Min/Max Inputs mimicking the design */}
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex-1">
                      <span className="text-xs text-slate-400 block mb-1">Estimated Minimum</span>
                      <div className="bg-white rounded-lg p-2 text-sm text-slate-700 border border-gray-100 font-semibold">
                        Ksh {Number(budget).toLocaleString()}
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-slate-400 block mb-1">Maximum Amount</span>
                      <div className="bg-white rounded-lg p-2 text-sm text-slate-700 border border-gray-100 font-semibold">
                        Ksh 10,000,000+
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Target Date Field */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-transparent focus-within:border-[#FFC107] transition-colors flex items-start gap-4">
                  <div className="pt-1 text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="flex-1 w-full">
                    <label className="block text-sm font-bold text-slate-900 mb-1">Target Start Date</label>
                    <input 
                      type="date" 
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-transparent outline-none text-slate-600 text-sm cursor-pointer" 
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-slate-900 hover:bg-[#FFC107] hover:text-slate-900 text-white font-bold py-4 rounded-2xl transition-colors mt-4 text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 2.19.7 4.2 1.88 5.86L3 22l4.28-.85A9.957 9.957 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.63 0-3.16-.4-4.5-1.11l-.32-.17-2.61.52.53-2.55-.19-.3A7.957 7.957 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.24-5.46c-.23-.12-1.38-.68-1.59-.76-.21-.08-.36-.12-.51.12-.15.24-.61.76-.74.92-.14.16-.27.18-.51.06-1.18-.58-2.22-1.3-3.05-2.26-.23-.27-.03-.42.09-.54.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.51-1.23-.7-1.68-.19-.44-.38-.38-.51-.39-.12-.01-.26-.01-.4-.01-.15 0-.38.06-.58.28-.2.22-.76.74-.76 1.81s.78 2.1 .89 2.25c.11.15 1.54 2.35 3.73 3.3.52.22 1.05.39 1.55.51.5.12.96.11 1.32.07.41-.05 1.38-.56 1.57-1.11.19-.55.19-1.02.14-1.11-.05-.09-.2-.14-.43-.26z" clipRule="evenodd"/></svg>
                  Request Quote
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectInquiry;
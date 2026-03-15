
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import a local image for the header background
import pic1 from '../assets/pic1.jpg'; 

const Contact = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const waMessage = `Hello Signet Contractor Limited, I have an inquiry from your website.\n\n*Client Details:*\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n🏢 *Interest:* ${projectType || 'General Inquiry'}\n\n*Message:*\n${message}`;
    
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(waMessage);
    
    // Open WhatsApp with your specific number
    window.open(`https://wa.me/254703490346?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* --- HERO HEADER SECTION --- */}
      <div className="relative h-[350px] flex items-center justify-center">
        <img 
          src={pic1} 
          alt="Contact Header" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center mt-10">
          <h1 className="text-4xl md:text-5xl font-black text-[#FFC107] mb-4 tracking-wide uppercase">
            Contact Us
          </h1>
          <div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase">
            <Link to="/" className="text-[#FFC107] hover:text-white transition-colors">Home</Link>
            <span className="text-white">»</span>
            <span className="text-white">Contact</span>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* --- LEFT SIDE: Info & Social Card --- */}
          <div className="w-full lg:w-[45%] flex flex-col">
            
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-1 bg-[#FFC107]"></span>
                <h3 className="text-[#FFC107] font-bold text-sm uppercase tracking-widest">Get In Touch</h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                Let's Discuss Your Next Big Project.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Whether you have a fully drafted architectural plan or just an idea, our team is ready to execute. Reach out today and let's build the future together.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center flex-shrink-0 text-[#FFC107]">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold uppercase tracking-wider text-sm mb-1">Head Office</h4>
                  <p className="text-slate-600">P.O. Box 2427-30100<br/>Eldoret, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center flex-shrink-0 text-[#FFC107]">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold uppercase tracking-wider text-sm mb-1">Direct Line</h4>
                  <p className="text-slate-600">+254 703 490 346<br/>Mon - Sat: 8:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center flex-shrink-0 text-[#FFC107]">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold uppercase tracking-wider text-sm mb-1">Email Support</h4>
                  <p className="text-slate-600">info@signetcontractorslimited.co.ke</p>
                </div>
              </div>
            </div>

            {/* --- SOCIAL MEDIA CARD --- */}
            <div className="bg-slate-900 rounded-2xl p-8 shadow-xl mt-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC107] rounded-full translate-x-1/2 -translate-y-1/2 opacity-20"></div>
              
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2 relative z-10">Connect With Us</h4>
              <p className="text-slate-400 text-sm mb-6 relative z-10 italic">Where future meets execution.</p>
              
              <div className="flex gap-4 relative z-10">
                {/* Facebook */}
                <a href="https://facebook.com/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-[#FFC107] hover:text-slate-900 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-[#FFC107] hover:text-slate-900 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-[#FFC107] hover:text-slate-900 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

          </div>

          {/* --- RIGHT SIDE: WhatsApp Form --- */}
          <div className="w-full lg:w-[55%]">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              
              <h3 className="text-2xl font-black text-slate-900 mb-8">Send Us A Message</h3>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                
                {/* Grid for Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 focus-within:border-[#FFC107] focus-within:ring-1 focus-within:ring-[#FFC107] transition-all">
                    <label className="font-bold text-slate-900 text-xs uppercase tracking-wider block mb-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Signet Contractor" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent border-none focus:ring-0 text-slate-700 placeholder-slate-400 p-0 text-sm"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 focus-within:border-[#FFC107] focus-within:ring-1 focus-within:ring-[#FFC107] transition-all">
                    <label className="font-bold text-slate-900 text-xs uppercase tracking-wider block mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. 0712 345 678" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-transparent border-none focus:ring-0 text-slate-700 placeholder-slate-400 p-0 text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Project Interest */}
                <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 focus-within:border-[#FFC107] focus-within:ring-1 focus-within:ring-[#FFC107] transition-all">
                  <label className="font-bold text-slate-900 text-xs uppercase tracking-wider block mb-1">Inquiry Type</label>
                  <select 
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-transparent border-none focus:ring-0 text-slate-700 p-0 text-sm cursor-pointer"
                    required
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Commercial Build">Commercial Build</option>
                    <option value="Residential Project">Residential Project</option>
                    <option value="Infrastructure / Civil">Infrastructure / Civil</option>
                    <option value="General Inquiry">General Inquiry / Other</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 focus-within:border-[#FFC107] focus-within:ring-1 focus-within:ring-[#FFC107] transition-all">
                  <label className="font-bold text-slate-900 text-xs uppercase tracking-wider block mb-2">Project Details</label>
                  <textarea 
                    placeholder="Tell us a bit about your timeline, budget, or specific requirements..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full bg-transparent border-none focus:ring-0 text-slate-700 placeholder-slate-400 p-0 text-sm resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-[#FFC107] text-white hover:text-slate-900 font-bold py-4 rounded-xl uppercase tracking-widest text-sm transition-colors flex justify-center items-center gap-2 mt-4 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Message Us on WhatsApp
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
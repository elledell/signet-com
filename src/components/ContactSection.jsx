import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const text = `Hello Signet Contractor Limited,\n\nI am reaching out via your website contact form.\n\n*Name:* ${formData.firstName} ${formData.lastName}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || 'Not provided'}\n\n*Message:*\n${formData.message}`;
    
    // Your WhatsApp number (formatted for API)
    const phoneNumber = "254703490346"; 
    
    // Create the WhatsApp link and open it
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    // Optional: Clear the form after sending
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* --- LEFT SIDE: Contact Form --- */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
              Send us a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-2">First name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    placeholder="Enter your first name" 
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition-all text-slate-700"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Enter your last name" 
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition-all text-slate-700"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  placeholder="Enter your email address" 
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition-all text-slate-700"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone number (optional)</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  placeholder="Enter your phone number" 
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition-all text-slate-700"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  placeholder="Tell us how we can help you" 
                  rows="4"
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition-all text-slate-700 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-start pt-2">
                <button 
                  type="submit" 
                  className="bg-slate-900 hover:bg-[#FFC107] hover:text-slate-900 text-white font-bold py-3.5 px-8 rounded-lg transition-colors text-sm uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 2.19.7 4.2 1.88 5.86L3 22l4.28-.85A9.957 9.957 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.63 0-3.16-.4-4.5-1.11l-.32-.17-2.61.52.53-2.55-.19-.3A7.957 7.957 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.24-5.46c-.23-.12-1.38-.68-1.59-.76-.21-.08-.36-.12-.51.12-.15.24-.61.76-.74.92-.14.16-.27.18-.51.06-1.18-.58-2.22-1.3-3.05-2.26-.23-.27-.03-.42.09-.54.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.51-1.23-.7-1.68-.19-.44-.38-.38-.51-.39-.12-.01-.26-.01-.4-.01-.15 0-.38.06-.58.28-.2.22-.76.74-.76 1.81s.78 2.1 .89 2.25c.11.15 1.54 2.35 3.73 3.3.52.22 1.05.39 1.55.51.5.12.96.11 1.32.07.41-.05 1.38-.56 1.57-1.11.19-.55.19-1.02.14-1.11-.05-.09-.2-.14-.43-.26z" clipRule="evenodd"/></svg>
                  Send to WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* --- RIGHT SIDE: Info Box & Map --- */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            
            {/* Info Card */}
            <div className="bg-slate-900 rounded-2xl p-8 lg:p-10 text-white shadow-xl">
              <h2 className="text-3xl font-black mb-4">Get in touch</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Signet Contractor Limited is your trusted partner in innovative construction solutions. Whether you're looking to develop commercial spaces, build residential homes, or require expert civil engineering, our team is here to help. Get in touch today to discuss how we can bring your vision to life.
              </p>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="pt-1">
                    <svg className="w-6 h-6 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Head Office</h4>
                    <p className="text-slate-300 text-sm">P.O. Box 2427-30100<br/>Eldoret, Kenya</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div>
                    <svg className="w-6 h-6 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <p className="text-slate-300 text-sm font-medium">+254 703 490 346</p>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div>
                    <svg className="w-6 h-6 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <p className="text-slate-300 text-sm font-medium">info@signet.com</p>
                </div>
              </div>
            </div>

            {/* Map Iframe */}
            <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden shadow-md border border-gray-100 relative">
               <iframe 
                title="Signet Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.1718919634!2d35.20138965646146!3d0.5203554904838618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101ae37f9f535%3A0xebd4ea9ae0edce48!2sEldoret!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { Link } from 'react-router-dom';

// Import your local video asset
import vid3 from '../assets/vid3.mp4';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Timeless Structures, <span className="italic font-light">Thoughtfully Crafted For</span> <br />
            Functionality, Safety, And Style.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            We offer a comprehensive range of construction services tailored to meet modern demands. From commercial skyscrapers to bespoke residential homes, we ensure every project is built to absolute perfection.
          </p>
        </div>

        {/* Bottom Split Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Side: 2x2 Stats & Features Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-3xl font-black text-slate-900 mb-2">150+</h3>
              <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-sm">Completed Projects</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Delivered on time and strictly within budget across various sectors.</p>
            </div>

            {/* Card 2: Dark Inverted Card */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-lg transform transition-transform hover:-translate-y-1">
              <h3 className="text-3xl font-black text-white mb-2">100%</h3>
              <h4 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">Safety Compliance</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Zero compromise on ISO 9001 safety and environmental standards.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-3xl font-black text-slate-900 mb-2">50+</h3>
              <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-sm">Expert Engineers</h4>
              <p className="text-slate-500 text-sm leading-relaxed">A dedicated team of industry-leading construction professionals.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-3xl font-black text-slate-900 mb-2">10+</h3>
              <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-sm">Active Sites</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Simultaneously managing complex builds across the entire region.</p>
            </div>

          </div>

          {/* Right Side: Highlight Service Card */}
          <div className="w-full lg:w-1/2 bg-slate-50 border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-8 items-center">
            
            {/* Text & Button Area */}
            <div className="w-full sm:w-1/2 flex flex-col h-full justify-center">
              <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">
                Comprehensive <br/> Construction Services
              </h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                Explore our full capabilities. Whether you need heavy civil infrastructure, commercial fit-outs, or luxury residential developments, we have the tools and talent to execute.
              </p>
              
              <div className="mt-auto">
                {/* Properly linked to the new dedicated Services page */}
                <Link to="/services" className="inline-block bg-slate-900 hover:bg-[#FFC107] hover:text-slate-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-colors text-center">
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Video Area */}
            <div className="w-full sm:w-1/2 h-64 sm:h-full min-h-[250px] rounded-2xl overflow-hidden shadow-md">
              <video 
                src={vid3}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
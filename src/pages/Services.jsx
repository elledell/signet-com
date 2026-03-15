import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import your local images
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jfif';
import pic3 from '../assets/pic3.jfif';
import pic4 from '../assets/pic4.jfif';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';

const Services = () => {
  // Automatically scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Services data based on your homepage sections
  const services = [
    {
      id: 1,
      title: "Commercial Construction",
      description: "We specialize in building scalable commercial solutions, from multi-story office buildings and retail spaces to large-scale warehouses. Our focus is on creating environments that drive business success while strictly adhering to safety and zoning regulations.",
      image: pic1
    },
    {
      id: 2,
      title: "Residential Development",
      description: "Building your dream home is one of the most important projects of your life. We deliver luxury custom homes, modern apartment complexes, and gated communities. We focus on quality craftsmanship, ensuring your space reflects your personality and meets your needs.",
      image: pic2
    },
    {
      id: 3,
      title: "Civil Infrastructure",
      description: "Driving economic growth through durable infrastructure. We offer top-tier civil engineering services, including road construction, bridge foundations, and public utility works. We are a trusted partner in developing networks that serve growing communities.",
      image: pic3
    },
    {
      id: 4,
      title: "Building Renovation",
      description: "Transform your existing spaces with our award-winning remodeling and fit-out services. Whether it is modernizing an old commercial office or expanding a residential property, we create spaces that are stunningly beautiful and undeniably functional.",
      image: pic4
    },
    {
      id: 5,
      title: "Project Management",
      description: "Comprehensive end-to-end management for your construction projects. From initial budget tracking and material procurement to on-site quality control and scheduling, we ensure your project is delivered on time, within budget, and to the highest standards.",
      image: pic5
    },
    {
      id: 6,
      title: "Architectural Design",
      description: "Great execution starts with a perfect blueprint. We collaborate closely with you to understand your vision, offering sustainable, climate-responsive architectural designs that perfectly balance form, functionality, and the local Kenyan context.",
      image: pic6
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* --- HERO HEADER SECTION --- */}
      <div className="relative h-[350px] flex items-center justify-center">
        {/* Background Image - Using pic1 for a local, fast-loading header */}
        <img 
          src={pic1} 
          alt="Services Header" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-black text-[#FFC107] mb-4 tracking-wide">
            Services
          </h1>
          <div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase">
            {/* Added Link to make the Home breadcrumb clickable */}
            <Link to="/" className="text-[#FFC107] hover:text-white transition-colors">Home</Link>
            <span className="text-white">»</span>
            <span className="text-white">Services</span>
          </div>
        </div>
      </div>

      {/* --- INTRO SECTION --- */}
      <div className="max-w-4xl mx-auto text-center px-4 pt-20 pb-16">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
          Our Services
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          We have a long and proud history, giving emphasis to environmental, social, and economic outcomes to deliver spaces that respond to the modern needs of our clients across Kenya.
        </p>
      </div>

      {/* --- SERVICES GRID --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Service Image */}
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Service Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-[#FFC107] mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Services;
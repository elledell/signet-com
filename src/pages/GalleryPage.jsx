import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import all 10 local images
import g1 from '../assets/g1.jfif';
import g2 from '../assets/g2.jfif';
import g3 from '../assets/g3.jfif';
import g4 from '../assets/g4.jfif';
import g5 from '../assets/g5.jfif';
import g6 from '../assets/g6.jfif';
import g7 from '../assets/g7.jfif';
import g8 from '../assets/g8.jfif';
import g9 from '../assets/g9.jfif';
import g10 from '../assets/g10.jfif';

const GalleryPage = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState('All');

  // Updated array to use the 10 local images
  const galleryItems = [
    {
      id: 1,
      title: "Nairobi Commercial Hub",
      category: "Commercial",
      image: g1 
    },
    {
      id: 2,
      title: "Karen Luxury Villa",
      category: "Residential",
      image: g2
    },
    {
      id: 3,
      title: "Eldoret Highway Overpass",
      category: "Infrastructure",
      image: g3
    },
    {
      id: 4,
      title: "Modern Apartment Interior",
      category: "Interior",
      image: g4
    },
    {
      id: 5,
      title: "Tech Park Phase 2",
      category: "Commercial",
      image: g5
    },
    {
      id: 6,
      title: "City Bridge Foundation",
      category: "Infrastructure",
      image: g6
    },
    {
      id: 7,
      title: "Runda Family Home",
      category: "Residential",
      image: g7
    },
    {
      id: 8,
      title: "Corporate Office Fit-out",
      category: "Interior",
      image: g8
    },
    {
      id: 9,
      title: "Industrial Warehouse",
      category: "Commercial",
      image: g9
    },
    {
      id: 10,
      title: "Suburban Complex",
      category: "Residential",
      image: g10
    }
  ];

  const filters = ['All', 'Commercial', 'Residential', 'Infrastructure', 'Interior'];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* --- HERO HEADER SECTION --- */}
      <div className="relative h-[350px] flex items-center justify-center">
        {/* Using the first gallery image as the header background for consistency */}
        <img 
          src={g1} 
          alt="Gallery Header" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center mt-10">
          <h1 className="text-4xl md:text-5xl font-black text-[#FFC107] mb-4 tracking-wide uppercase">
            Project Gallery
          </h1>
          <div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase">
            <Link to="/" className="text-[#FFC107] hover:text-white transition-colors">Home</Link>
            <span className="text-white">»</span>
            <span className="text-white">Gallery</span>
          </div>
        </div>
      </div>

      {/* --- GALLERY CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Intro Text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-wide">
            Visualizing <span className="text-[#FFC107]">Excellence.</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Browse through our extensive portfolio of completed projects. From heavy civil infrastructure to bespoke residential builds, see how Signet brings blueprints to life.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-slate-900 text-[#FFC107] shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-[#FFC107] font-bold text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 leading-tight">
                  {item.title}
                </h3>
                
                {/* Plus Icon Circle */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-[#FFC107] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
                  <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default GalleryPage;
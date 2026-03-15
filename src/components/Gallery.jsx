import { useState } from 'react';

// 1. Import all 10 local images
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

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // 2. Updated Gallery Data with 10 items and mixed sizes for the Masonry Grid
  const galleryItems = [
    {
      id: 1,
      title: "Skyline Commercial Hub",
      category: "Commercial",
      size: "large", // Spans 2 columns, 2 rows
      image: g1
    },
    {
      id: 2,
      title: "Modern Minimalist Villa",
      category: "Residential",
      size: "small", // Spans 1 column, 1 row
      image: g2
    },
    {
      id: 3,
      title: "Highway Overpass",
      category: "Infrastructure",
      size: "medium", // Spans 1 column, 2 rows (tall)
      image: g3
    },
    {
      id: 4,
      title: "Luxury Apartment Interior",
      category: "Residential",
      size: "small",
      image: g4
    },
    {
      id: 5,
      title: "Tech Park Phase 2",
      category: "Commercial",
      size: "large",
      image: g5
    },
    {
      id: 6,
      title: "City Bridge Foundation",
      category: "Infrastructure",
      size: "small",
      image: g6
    },
    {
      id: 7,
      title: "Corporate Fit-out",
      category: "Commercial",
      size: "small",
      image: g7
    },
    {
      id: 8,
      title: "Runda Family Estate",
      category: "Residential",
      size: "medium", // Tall image
      image: g8
    },
    {
      id: 9,
      title: "Underground Metro",
      category: "Infrastructure",
      size: "small",
      image: g9
    },
    {
      id: 10,
      title: "Suburban Complex",
      category: "Residential",
      size: "small",
      image: g10
    }
  ];

  const filters = ['All', 'Commercial', 'Residential', 'Infrastructure'];

  // Filter the items based on the active button
  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-1 bg-[#FFC107]"></span>
              <h3 className="text-[#FFC107] font-bold text-sm uppercase tracking-widest">Our Portfolio</h3>
            </div>
            {/* Added the first part of the title here so it renders correctly */}
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight uppercase tracking-wide">
              Visualizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] to-yellow-600">Excellence.</span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-slate-900 text-[#FFC107] shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {filteredItems.map((item) => {
            // Determine grid span based on the size property for a bento-box feel
            let spanClass = "col-span-1 row-span-1";
            if (item.size === 'large') spanClass = "md:col-span-2 md:row-span-2";
            if (item.size === 'medium') spanClass = "md:col-span-1 md:row-span-2";

            return (
              <div 
                key={item.id} 
                className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${spanClass}`}
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-[#FFC107] font-bold text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {item.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    {item.title}
                  </h3>
                  
                  {/* Plus Icon Circle */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
                    <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
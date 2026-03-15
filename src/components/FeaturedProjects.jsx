import { Link } from 'react-router-dom';

// Importing your local assets
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jfif'; 
import pic3 from '../assets/pic3.jfif'; 
import pic4 from '../assets/pic4.jfif'; 

const FeaturedProjects = () => {
  // Updated project data: Changed CTA text and added dynamic link routing
  const projects = [
    {
      id: 1,
      title: "Modern Commercial Complex",
      category: "Office Spaces",
      type: "Commercial",
      image: pic1, 
      desc: "Engineered for maximum spatial efficiency and energy savings, ensuring a high return on investment.",
      cta: "View Gallery",
      link: "/gallery"
    },
    {
      id: 2,
      title: "Luxury Family Bungalow",
      category: "Bungalow",
      type: "Residential",
      image: pic2, 
      desc: "Built with premium, durable materials providing lifelong comfort and minimal long-term maintenance costs.",
      cta: "View Gallery",
      link: "/gallery"
    },
    {
      id: 3,
      title: "State-of-the-Art Classrooms",
      category: "Educational",
      type: "Institutional",
      image: pic3, 
      desc: "Cost-effective, scalable structural designs tailored to create optimal learning environments strictly within budget.",
      cta: "View Gallery",
      link: "/gallery"
    },
    {
      id: 4,
      title: "Community Church Sanctuary",
      category: "Church",
      type: "Institutional",
      image: pic4, 
      desc: "A timeless build combining acoustic excellence with structural longevity to serve generations to come.",
      cta: "View Gallery",
      link: "/gallery"
    }
  ];

  return (
    <section id="projects" className="pt-10 pb-24 lg:pt-16 lg:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Featured Projects <span className="italic font-light">Executed</span> <br />
            With <span className="text-[#FFC107]">Precision.</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Discover our portfolio of landmark builds. Every project is thoughtfully engineered to guarantee maximum durability, safety, and unmatched value for your investment.
          </p>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-12">
          {projects.map((project, index) => {
            // Pushes every even-indexed card down on large screens
            const isStaggered = index % 2 !== 0;

            return (
              <div 
                key={project.id} 
                className={`flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 pb-6 group ${isStaggered ? 'lg:translate-y-16' : ''}`}
              >
                {/* Project Image */}
                <div className="w-full h-64 md:h-72 overflow-hidden rounded-t-[2rem] p-2">
                  <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="px-6 pt-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  
                  {/* Value For Money Explanation */}
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  {/* Category Pills */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                      <svg className="w-3.5 h-3.5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                      <svg className="w-3.5 h-3.5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {project.type}
                    </span>
                  </div>

                  {/* Dark Pill Button linked to Gallery */}
                  <div>
                    <Link to={project.link} className="inline-block bg-slate-900 hover:bg-[#FFC107] hover:text-slate-900 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-colors">
                      {project.cta}
                    </Link>
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

export default FeaturedProjects;
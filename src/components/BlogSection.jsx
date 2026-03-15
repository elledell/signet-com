import { Link } from 'react-router-dom';

// Import your local blog images
import b1 from '../assets/b1.jfif';
import b2 from '../assets/b2.jfif';
import b3 from '../assets/b3.jfif';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Rise of Sustainable Building Materials in 2026",
      category: "Sustainability",
      date: "March 10, 2026",
      excerpt: "Discover how eco-friendly concrete alternatives and smart glass are reshaping commercial developments across Nairobi and beyond.",
      image: b1, 
      link: "/blog/sustainable-materials" 
    },
    {
      id: 2,
      title: "Navigating Commercial Zoning Regulations in Kenya",
      category: "Industry Insights",
      date: "February 28, 2026",
      excerpt: "A comprehensive guide for developers looking to understand the latest compliance and zoning laws for high-rise constructions.",
      image: b2, 
      link: "/blog/zoning-regulations"
    },
    {
      id: 3,
      title: "Signet Awarded Excellence in Civil Infrastructure",
      category: "Company News",
      date: "February 15, 2026",
      excerpt: "We are proud to announce our recent recognition for the timely and safe completion of the new metropolitan highway overpass.",
      image: b3, 
      link: "/blog/excellence-award"
    }
  ];

  return (
    <section id="blog" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-1 bg-[#FFC107]"></span>
              <h3 className="text-[#FFC107] font-bold text-sm uppercase tracking-widest">News & Updates</h3>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight uppercase tracking-wide">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">Insights.</span>
            </h2>
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              
              <div className="w-full h-64 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#FFC107] text-slate-900 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm shadow-md">
                  {post.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {post.date}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#FFC107] transition-colors leading-snug">
                  <Link to={post.link}>{post.title}</Link>
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                {/* --- READ ARTICLE BUTTON --- */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link to={post.link} className="inline-flex items-center gap-2 text-slate-900 group-hover:text-[#FFC107] font-bold text-xs uppercase tracking-widest transition-colors">
                    READ ARTICLE 
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
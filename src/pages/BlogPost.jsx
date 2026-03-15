import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

const BlogPost = () => {
  const { slug } = useParams();

  // Scroll to top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Our mock database of full articles
  const articles = {
    'sustainable-materials': {
      title: "The Rise of Sustainable Building Materials in 2026",
      category: "Sustainability",
      date: "March 10, 2026",
      author: "Signet Engineering Team",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1920&auto=format&fit=crop",
      content: (
        <>
          <p>
            The construction landscape in Kenya is undergoing a massive transformation. As urbanization accelerates across Nairobi and major counties, developers are increasingly looking for ways to reduce their carbon footprint without compromising on structural integrity or aesthetic appeal. 
          </p>
          <p>
            At Signet Contractor Limited, we believe that the environment and modern infrastructure do not have to be at odds. In 2026, we are seeing a massive shift towards <strong>eco-friendly concrete alternatives</strong>, which utilize industrial byproducts like fly ash and slag to significantly lower CO2 emissions during production.
          </p>
          <blockquote className="border-l-4 border-[#FFC107] pl-6 italic text-xl my-10 text-slate-800 font-medium">
            "Sustainability isn't just a trend; it's the baseline for the future of African infrastructure."
          </blockquote>
          <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Smart Glass and Energy Efficiency</h3>
          <p>
            Beyond the foundation, the integration of smart glass technology in commercial high-rises is becoming standard. This dynamic glass adjusts its tint based on the sun's position, drastically reducing the reliance on artificial cooling and heating systems. For a climate like ours, this means massive long-term energy savings for building owners.
          </p>
          <p>
            As we push forward into the rest of the year, our commitment remains clear: to execute projects that not only meet the demands of today but preserve the world of tomorrow. Because at Signet, this is exactly where the future meets execution.
          </p>
        </>
      )
    },
    'zoning-regulations': {
      title: "Navigating Commercial Zoning Regulations in Kenya",
      category: "Industry Insights",
      date: "February 28, 2026",
      author: "Signet Legal & Planning",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop",
      content: (
        <>
          <p>
            For any commercial developer looking to break ground in Kenya's fast-growing urban centers, understanding zoning regulations is just as critical as the architectural blueprint itself. The legal landscape governs everything from building heights and land use to environmental impact.
          </p>
          <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">The NEMA and NCA Approvals</h3>
          <p>
            Before excavation begins, securing approvals from the National Environment Management Authority (NEMA) and the National Construction Authority (NCA) is mandatory. NEMA ensures that your commercial project won't negatively disrupt the local ecosystem or community, requiring a comprehensive Environmental Impact Assessment (EIA).
          </p>
          <p>
            Simultaneously, the NCA oversees the safety and quality standards of the build. They dictate that certified contractors—like Signet—must oversee the site to ensure strict adherence to ISO 9001 safety protocols.
          </p>
          <ul className="list-disc pl-6 my-8 space-y-3 text-slate-700">
            <li><strong>Change of User:</strong> If you are purchasing residential land for commercial development, you must apply for a 'Change of User' through the local county government.</li>
            <li><strong>Riparian Land:</strong> Strict buffer zones must be maintained if your plot borders a river or water body.</li>
            <li><strong>Traffic Impact:</strong> Large commercial hubs now require a Traffic Impact Assessment to ensure local roads can handle the influx of vehicles.</li>
          </ul>
          <p>
            Navigating this red tape can be daunting, but with an experienced partner managing your project end-to-end, you can avoid costly delays and ensure your build is 100% compliant from day one.
          </p>
        </>
      )
    },
    'excellence-award': {
      title: "Signet Awarded Excellence in Civil Infrastructure",
      category: "Company News",
      date: "February 15, 2026",
      author: "Signet PR Desk",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop",
      content: (
        <>
          <p>
            We are incredibly proud to announce that Signet Contractor Limited has been recognized with the <strong>2026 Excellence in Civil Infrastructure Award</strong>. This prestigious accolade was presented to our team in recognition of our recent work on the metropolitan highway expansion project.
          </p>
          <p>
            This project presented unique challenges, requiring our engineering teams to operate in highly congested urban zones without bringing the city's daily commute to a halt. Through rigorous project management, innovative material handling, and a zero-compromise approach to safety, we delivered the overpass three weeks ahead of schedule.
          </p>
          <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">A Testament to Our Team</h3>
          <p>
            This award does not just belong to the company; it belongs to every site manager, architect, civil engineer, and laborer who worked tirelessly on the ground. It is a direct reflection of our highly professional staff and our unwavering 100% satisfaction guarantee.
          </p>
          <p>
            As we celebrate this milestone, we are already looking ahead. The standard has been raised, and we are ready to bring this same level of award-winning execution to our upcoming commercial and residential projects across the region.
          </p>
        </>
      )
    }
  };

  // Fallback content in case someone types a random URL
  const defaultArticle = {
    title: "Article Not Found",
    category: "404",
    date: "",
    author: "",
    image: "https://images.unsplash.com/photo-1541888081666-857e31b70d58?q=80&w=1920&auto=format&fit=crop",
    content: <p>We couldn't find the article you were looking for. It may have been moved or deleted.</p>
  };

  const post = articles[slug] || defaultArticle;

  return (
    <article className="bg-white min-h-screen pb-24">
      
      {/* --- HERO IMAGE HEADER --- */}
      <div className="relative h-[400px] lg:h-[500px] w-full">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Gradient Overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-0"></div>
        
        {/* Hero Content (Pushed to the bottom of the image) */}
        <div className="absolute bottom-0 left-0 w-full z-10 pb-12 pt-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block bg-[#FFC107] text-slate-900 font-bold text-xs uppercase tracking-widest px-4 py-2 mb-6 rounded-sm">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              {post.title}
            </h1>
            
            {post.author && (
              <div className="flex items-center gap-4 text-slate-300 text-sm font-medium">
                <span>By {post.author}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC107]"></span>
                <span>{post.date}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- ARTICLE CONTENT --- */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* The rich text content area */}
        <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-loose space-y-6">
          {post.content}
        </div>

        {/* --- BOTTOM ACTIONS --- */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-900 hover:text-[#FFC107] font-bold uppercase tracking-widest text-sm transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </Link>

          {/* Share Buttons (Visual only for the template) */}
          <div className="flex gap-3">
             <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#FFC107] hover:text-slate-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
             </button>
             <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#FFC107] hover:text-slate-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </button>
          </div>
        </div>

      </div>
    </article>
  );
};

export default BlogPost;
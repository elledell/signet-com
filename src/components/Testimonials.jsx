// Import your local testimonial avatar images
import t1 from '../assets/t1.jfif';
import t2 from '../assets/t2.jfif';
import t3 from '../assets/t3.jfif';

const Testimonials = () => {
  // Roles have been removed, images replaced with local imports
  const testimonials = [
    {
      id: 1,
      name: "David Ochieng",
      image: t1,
      text: "Signet exceeded our expectations on the new warehouse facility in Industrial Area. Their project management was flawless, delivering on time and strictly within the agreed budget. True professionals.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Mutuku",
      image: t2,
      text: "Building our family home was a massive investment, but the Signet team gave us absolute peace of mind. The attention to detail, the quality of finishes, and their constant communication made the journey seamless.",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. John Kamau",
      image: t3,
      text: "We contracted Signet for the structural expansion of our clinic. They navigated the strict medical zoning regulations perfectly and maintained a safe site without disrupting our ongoing operations. Highly recommended.",
      rating: 5
    }
  ];

  // Helper function to render 5 solid stars
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-slate-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-1 bg-[#FFC107]"></span>
            <h3 className="text-[#FFC107] font-bold text-sm uppercase tracking-widest">Client Testimonials</h3>
            <span className="w-12 h-1 bg-[#FFC107]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight uppercase tracking-wide">
            Trust Built On <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] to-yellow-600">Results.</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Don't just take our word for it. Hear from the business leaders, homeowners, and institutions who have trusted Signet with their most important builds.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative"
            >
              {/* Giant Quote Icon Background Overlay */}
              <svg className="absolute top-6 right-6 w-16 h-16 text-slate-50 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {renderStars(testimonial.rating)}
                
                <p className="text-slate-600 italic leading-relaxed mb-8 flex-grow">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info - Role removed here */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFC107] flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
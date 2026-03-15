import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Global Components
import TopBar from '@/components/TopBar'; 
import Navbar from '@/components/Navbar';
import WhatsAppWidget from '@/components/WhatsAppWidget'; 
import Footer from '@/components/Footer';

// Import Pages
import Home from '@/pages/Home'; 
import BlogPost from '@/pages/BlogPost'; 
import Services from '@/pages/Services';
import GalleryPage from '@/pages/GalleryPage';
import Contact from '@/pages/Contact';

function App() {
  // 1. The Splash Screen State
  const [isLoading, setIsLoading] = useState(true);

  // 2. The Timer (Gives heavy images 2.5 seconds to load in the background)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // 3. What the user sees while loading
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900">
        {/* The Spinning Loader */}
        <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        
        {/* The Company Name / Branding */}
        <h1 className="mt-6 text-3xl font-bold text-white tracking-widest uppercase">
          Signet
        </h1>
        <p className="mt-2 text-sm text-yellow-500 uppercase tracking-[0.3em] animate-pulse">
          Building the future...
        </p>
      </div>
    );
  }

  // 4. The Actual Website (Renders after 2.5 seconds)
  return (
    <Router>
      {/* Using flex flex-col and min-h-screen ensures the footer 
        always sticks to the bottom even on short pages!
      */}
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
        
        {/* Contact Bar & Navigation */}
        <TopBar />
        <Navbar />

        {/* Main Content Rendering Area (flex-grow pushes footer down) */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 Catch-all */}
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center py-40 text-center px-4">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Page Coming Soon</h2>
                <p className="text-slate-600">We are currently building out this section of the site.</p>
              </div>
            } />
          </Routes>
        </main>
        <WhatsAppWidget />

        {/* Global Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
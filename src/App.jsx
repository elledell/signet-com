import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Global Components
import TopBar from '@/components/TopBar'; 
import Navbar from '@/components/Navbar';
import WhatsAppWidget from '@/components/WhatsAppWidget'; 
import Footer from '@/components/Footer'; // <--- Import Footer here

// Import Pages
import Home from '@/pages/Home'; 
import BlogPost from '@/pages/BlogPost'; 
import Services from '@/pages/Services';
// Import the new page at the top
import GalleryPage from '@/pages/GalleryPage';
import Contact from '@/pages/Contact';
// Then inside your <Routes> block, add:


function App() {
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
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { Contact } from './pages/Contact';
import { CustomProject } from './pages/CustomProject';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Portfolio } from './pages/Portfolio';
import { Products } from './pages/Products';

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (location.hash) {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.hash, location.pathname]);

  return null;
}

function Site() {
  const { pathname } = useLocation();

  return (
    <>
      <RouteEffects />
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/custom-project" element={<CustomProject />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      {pathname !== '/' && <WhatsAppButton floating />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}

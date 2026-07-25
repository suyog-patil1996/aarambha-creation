import { AnimatedOutlet } from '../components/Common';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ScrollProgress from '../components/ScrollProgress';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import FloatingCall from '../components/FloatingCall';
import { COMPANY } from '../data/company';

function MainLayout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <AnimatedOutlet />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp phone={COMPANY.whatsapp} />
      <FloatingCall phone={COMPANY.phone} />
    </>
  );
}

export default MainLayout;

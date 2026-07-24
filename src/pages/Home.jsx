import useDocumentTitle from '../hooks/useDocumentTitle';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Statistics from '../sections/Statistics';
import Testimonials from '../sections/Testimonials';
import Partners from '../sections/Partners';
import CTA from '../sections/CTA';

function Home() {
  useDocumentTitle('Home');

  return (
    <>
  <Hero />

  <About />

  <Services />

  <Portfolio />

  <CTA />
</>
  );
}

export default Home;

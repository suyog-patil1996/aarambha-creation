import { useEffect } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import CTA from '../sections/CTA';
import Contact from '../sections/Contact';
import { useContactSection } from '../context/ContactSectionContext';
import designDeskImage from '../assets/images/design-desk.jpg';

function Home() {
  useDocumentTitle('Home');
  const { isContactVisible, contactRequestCount } = useContactSection();

  // Contact only enters the page once requested (nav link, "Get in Touch",
  // "Start a Project"). Once it's rendered, scroll it into view — re-run on
  // every request so a later click re-scrolls even if it's already visible.
  useEffect(() => {
    if (contactRequestCount === 0) return;
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [contactRequestCount]);

  return (
    <>
      <Hero />
      <About
        id="about"
        tag="The Studio — Est. 2018"
        title="Where Ideas Begin, Designs Speak"
        description={[
          '"Aarambha" means beginning in Sanskrit. We believe every new project, every blank page, is an opportunity to create something unforgettable.',
          "Founded on November 9, 2018, by a passionate graphic designer, Aarambha Creation bridges the gap between artistic vision and tangible craftsmanship. We don't just design; we build identities. We don't just print; we bring texture, color, and life to ideas.",
          'Located in the heart of Sangli, we are the creative engine for businesses, events, and individuals who refuse to settle for generic.',
        ]}
        features={['Offset & large-format printing', 'In-house design & branding', 'End-to-end creative production']}
        image={designDeskImage}
        imageAlt="Design desk with Pantone swatches and sketches at the Aarambha Creation studio"
      />
      <Services
        id="services"
        tag="Our Craft"
        title="Tangible Impact"
        subtitle="From the first digital stroke to the final printed impression, we handle the entire creative spectrum."
      />
      <Portfolio
        id="portfolio"
        tag="Selected Work"
        title="Design. Print. Deliver."
        subtitle="A look at recent projects across offset printing, large-format displays, and brand design."
      />
      <CTA />
      {isContactVisible && <Contact id="contact" />}
    </>
  );
}

export default Home;

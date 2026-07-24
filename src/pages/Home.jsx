import useDocumentTitle from '../hooks/useDocumentTitle';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import CTA from '../sections/CTA';
import Contact from '../sections/Contact';
import designDeskImage from '../assets/images/design-desk.jpg';

function Home() {
  useDocumentTitle('Home');

  return (
    <>
      <Hero />
      <About
        id="about"
        tag="The Studio"
        title="Where Ideas Begin, Designs Speak"
        description="Located in the heart of Sangli, we are the creative engine for businesses, events, and individuals who refuse to settle for generic."
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
        title="Print. Design. Deliver."
        subtitle="A look at recent projects across offset printing, large-format displays, and brand design."
      />
      <CTA />
      <Contact id="contact" />
    </>
  );
}

export default Home;

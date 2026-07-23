import PageLayout from '../layouts/PageLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import About from '../sections/About';
import Timeline from '../sections/Timeline';
import Team from '../sections/Team';
import CTA from '../sections/CTA';

function AboutPage() {
  useDocumentTitle('About');

  return (
    <PageLayout title="About Us" subtitle="Get to know the story, mission and people behind our work.">
      <About
        tag="Our Mission"
        title="We're a team dedicated to your success"
        description="We combine design and technology to build digital experiences that help businesses grow, one thoughtful decision at a time."
        features={['Client-first approach', 'Proven track record', 'Long-term partnerships']}
      />
      <Timeline />
      <Team />
      <CTA />
    </PageLayout>
  );
}

export default AboutPage;

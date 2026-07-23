import PageLayout from '../layouts/PageLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Services from '../sections/Services';
import CTA from '../sections/CTA';

function ServicesPage() {
  useDocumentTitle('Services');

  return (
    <PageLayout title="Our Services" subtitle="Explore what we can do for you.">
      <Services />
      <CTA />
    </PageLayout>
  );
}

export default ServicesPage;

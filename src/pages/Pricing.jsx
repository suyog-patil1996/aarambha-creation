import PageLayout from '../layouts/PageLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';

function PricingPage() {
  useDocumentTitle('Pricing');

  return (
    <PageLayout title="Pricing Plans" subtitle="Simple, transparent pricing for every need.">
      <Pricing tag="" title="" subtitle="" />
      <FAQ />
      <CTA />
    </PageLayout>
  );
}

export default PricingPage;

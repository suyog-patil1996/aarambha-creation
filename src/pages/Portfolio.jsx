import PageLayout from '../layouts/PageLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Portfolio from '../sections/Portfolio';

function PortfolioPage() {
  useDocumentTitle('Portfolio');

  return (
    <PageLayout title="Our Portfolio" subtitle="A selection of projects we're proud of.">
      <Portfolio />
    </PageLayout>
  );
}

export default PortfolioPage;

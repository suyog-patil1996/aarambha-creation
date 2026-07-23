import PageLayout from '../layouts/PageLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import FAQ from '../sections/FAQ';

function FAQPage() {
  useDocumentTitle('FAQ');

  return (
    <PageLayout title="Frequently Asked Questions" subtitle="Answers to the questions we hear most often.">
      <FAQ tag="" title="" subtitle="" />
    </PageLayout>
  );
}

export default FAQPage;

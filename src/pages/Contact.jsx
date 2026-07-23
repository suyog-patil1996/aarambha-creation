import PageLayout from '../layouts/PageLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Contact from '../sections/Contact';

function ContactPage() {
  useDocumentTitle('Contact');

  return (
    <PageLayout title="Contact Us" subtitle="We'd love to hear from you.">
      <Contact tag="" title="" subtitle="" />
    </PageLayout>
  );
}

export default ContactPage;

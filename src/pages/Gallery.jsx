import PageLayout from '../layouts/PageLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Gallery from '../sections/Gallery';

function GalleryPage() {
  useDocumentTitle('Gallery');

  return (
    <PageLayout title="Gallery" subtitle="A visual look at our work and the moments that matter.">
      <Gallery />
    </PageLayout>
  );
}

export default GalleryPage;

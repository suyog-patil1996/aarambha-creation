import PageLayout from '../layouts/PageLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Team from '../sections/Team';

function TeamPage() {
  useDocumentTitle('Team');

  return (
    <PageLayout title="Meet the Team" subtitle="The people who make it all happen.">
      <Team />
    </PageLayout>
  );
}

export default TeamPage;

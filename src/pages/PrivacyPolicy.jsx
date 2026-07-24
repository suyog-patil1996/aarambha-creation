import PageLayout from '../layouts/PageLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import styles from './Legal.module.css';

function PrivacyPolicy() {
  useDocumentTitle('Privacy Policy');

  return (
    <PageLayout title="Privacy Policy" subtitle="Last updated: July 23, 2026">
      <div className={`container ${styles.content}`}>
        <div className={styles.block}>
          <h2>Introduction</h2>
          <p>
            We respect your privacy and are committed to protecting the personal information you
            share with us while browsing this website.
          </p>
        </div>
        <div className={styles.block}>
          <h2>Information We Collect</h2>
          <p>
            This is a static website and does not collect personal data through forms, cookies, or
            third-party trackers unless explicitly stated.
          </p>
        </div>
        <div className={styles.block}>
          <h2>Cookies</h2>
          <p>
            We may use essential cookies to ensure the website functions correctly. No tracking or
            advertising cookies are used by default.
          </p>
        </div>
        <div className={styles.block}>
          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to external sites. We are not responsible for the privacy
            practices of those websites.
          </p>
        </div>
        <div className={styles.block}>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be reflected on this page
            with an updated revision date.
          </p>
        </div>
        <div className={styles.block}>
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please reach out through our contact page.</p>
        </div>
      </div>
    </PageLayout>
  );
}

export default PrivacyPolicy;

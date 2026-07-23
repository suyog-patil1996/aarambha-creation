import PageLayout from '../layouts/PageLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import styles from './Legal.module.css';

function TermsConditions() {
  useDocumentTitle('Terms & Conditions');

  return (
    <PageLayout title="Terms & Conditions" subtitle="Last updated: July 23, 2026">
      <div className="container">
        <div className={styles.block}>
          <h2>Introduction</h2>
          <p>
            By accessing this website, you agree to be bound by these terms and conditions and all
            applicable laws and regulations.
          </p>
        </div>
        <div className={styles.block}>
          <h2>Use of Website</h2>
          <p>
            The content on this website is provided for general information purposes only and may be
            changed without notice.
          </p>
        </div>
        <div className={styles.block}>
          <h2>Intellectual Property</h2>
          <p>
            Unless otherwise stated, we own the intellectual property rights for all material on this
            website. Content may not be reproduced without permission.
          </p>
        </div>
        <div className={styles.block}>
          <h2>Limitation of Liability</h2>
          <p>
            We will not be held liable for any damages arising from the use, or inability to use, the
            materials on this website.
          </p>
        </div>
        <div className={styles.block}>
          <h2>Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with applicable local laws and
            regulations.
          </p>
        </div>
        <div className={styles.block}>
          <h2>Changes to These Terms</h2>
          <p>
            We reserve the right to revise these terms at any time. Continued use of the website
            constitutes acceptance of the revised terms.
          </p>
        </div>
        <div className={styles.block}>
          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms & Conditions, please reach out through our contact page.</p>
        </div>
      </div>
    </PageLayout>
  );
}

export default TermsConditions;

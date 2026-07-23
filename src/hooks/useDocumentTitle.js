import { useEffect } from 'react';
import { SITE_NAME } from '../utils/siteConfig';

export default function useDocumentTitle(title) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}

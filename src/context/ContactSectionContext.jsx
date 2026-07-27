import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const ContactSectionContext = createContext(null);

// The Contact section stays out of the page until the user asks for it (nav
// "Contact" link, "Get in Touch", "Start a Project"). contactRequestCount
// (rather than a plain boolean) lets Home re-scroll to it on every request,
// even if it's already visible but the user has since scrolled away.
export function ContactSectionProvider({ children }) {
  const [requestCount, setRequestCount] = useState(0);

  const showContactSection = useCallback(() => setRequestCount((count) => count + 1), []);

  const value = useMemo(
    () => ({
      isContactVisible: requestCount > 0,
      contactRequestCount: requestCount,
      showContactSection,
    }),
    [requestCount, showContactSection]
  );

  return <ContactSectionContext.Provider value={value}>{children}</ContactSectionContext.Provider>;
}

export function useContactSection() {
  const context = useContext(ContactSectionContext);
  if (!context) {
    throw new Error('useContactSection must be used within a ContactSectionProvider');
  }
  return context;
}

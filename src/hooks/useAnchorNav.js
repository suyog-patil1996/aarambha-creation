import { useLocation, useNavigate } from 'react-router-dom';
import { useContactSection } from '../context/ContactSectionContext';

// Shared click handling for NAV_LINKS-style entries, where '/' is a real route
// and '#id' targets a section that only exists on Home. Used by both Navbar
// (which also needs scroll-spy) and Footer (which just needs the same navigation).
export default function useAnchorNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { showContactSection } = useContactSection();

  const handleAnchorClick = (event, to) => {
    event.preventDefault();

    // Contact stays out of the page until requested. Reveal it, then navigate
    // Home if we're not already there — Home's own effect handles the scroll
    // once the section actually mounts.
    if (to === '#contact') {
      showContactSection();
      if (location.pathname !== '/') navigate('/');
      return;
    }

    if (to === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (location.pathname !== '/') {
      navigate(`/${to}`);
      return;
    }

    const id = to.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', to);
    }
  };

  return { handleAnchorClick, location };
}

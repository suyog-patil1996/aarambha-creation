import { useLocation, useNavigate } from 'react-router-dom';

// Shared click handling for NAV_LINKS-style entries, where '/' is a real route
// and '#id' targets a section that only exists on Home. Used by both Navbar
// (which also needs scroll-spy) and Footer (which just needs the same navigation).
export default function useAnchorNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (event, to) => {
    event.preventDefault();

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

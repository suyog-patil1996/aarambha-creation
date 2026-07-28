import logo from '../../assets/images/aarambha-logo.png';
import logoScrolled from '../../assets/images/aarambha-logo-scrolled.png';

// 'scrolled' swaps in the purple-text variant for light/white backgrounds
// (e.g. the navbar once it scrolls) — the default variant's text is too
// light to read there.
function BrandLogo({ className, title = 'Aarambha Creation', variant = 'default' }) {
  const src = variant === 'scrolled' ? logoScrolled : logo;
  return <img className={className} src={src} alt={title} />;
}

export default BrandLogo;

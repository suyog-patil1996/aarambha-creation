// Hand-built recreation of the "आरंभ क्रिएशन" wordmark as an inline SVG so it
// stays crisp at any size and drops its background onto any section color.
function BrandLogo({ className, title = 'Aarambha Creation' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 400"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brandLogoDripPink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBC7DC" />
          <stop offset="100%" stopColor="#F48FB1" />
        </linearGradient>
        <linearGradient id="brandLogoDripMagenta" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F06AA0" />
          <stop offset="100%" stopColor="#D81B60" />
        </linearGradient>
        <linearGradient id="brandLogoDripRed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF7043" />
          <stop offset="100%" stopColor="#D84315" />
        </linearGradient>
        <linearGradient id="brandLogoDripYellow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="100%" stopColor="#FBC02D" />
        </linearGradient>
      </defs>

      <path d="M210,0 L240,0 L240,55 A15,15 0 0 1 210,55 Z" fill="url(#brandLogoDripPink)" />
      <path d="M255,0 L289,0 L289,93 A17,17 0 0 1 255,93 Z" fill="url(#brandLogoDripMagenta)" />
      <path d="M305,0 L341,0 L341,132 A18,18 0 0 1 305,132 Z" fill="url(#brandLogoDripRed)" />
      <path d="M400,0 L432,0 L432,79 A16,16 0 0 1 400,79 Z" fill="url(#brandLogoDripYellow)" />

      <text
        x="320"
        y="290"
        textAnchor="middle"
        fontFamily="'Yatra One', cursive"
        fontSize="150"
        fill="var(--color-primary, #F4511E)"
      >
        आरंभ
      </text>

      <text
        x="320"
        y="345"
        textAnchor="middle"
        fontFamily="'Noto Sans Devanagari', sans-serif"
        fontWeight="600"
        fontSize="38"
        letterSpacing="4"
        fill="#FFFFFF"
      >
        क्रिएशन
      </text>

      <path
        d="M596,362 L601,374 L613,379 L601,384 L596,396 L591,384 L579,379 L591,374 Z"
        fill="rgba(255,255,255,0.55)"
      />
    </svg>
  );
}

export default BrandLogo;

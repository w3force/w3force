export default function W3ForceLogoMark({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="w3force-mark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <radialGradient id="w3force-mark-soft" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft glow background */}
      <circle cx="60" cy="60" r="52" fill="url(#w3force-mark-soft)" />
      <circle
        cx="60"
        cy="60"
        r="50"
        stroke="url(#w3force-mark-gradient)"
        strokeWidth="3"
        strokeDasharray="6 8"
        opacity="0.6"
      />

      {/* Monogram W */}
      <path
        d="M28 45 L40 80 L52 55 L64 80 L76 45"
        stroke="url(#w3force-mark-gradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Stylized numeral 3 */}
      <path
        d="M72 45 C90 38 98 50 90 58 C105 63 98 82 78 78"
        stroke="url(#w3force-mark-gradient)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Orbit arc */}
      <path
        d="M30 70 C40 95 80 100 95 70"
        stroke="url(#w3force-mark-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Signal nodes */}
      <circle cx="30" cy="70" r="3" fill="url(#w3force-mark-gradient)" />
      <circle cx="60" cy="90" r="3" fill="url(#w3force-mark-gradient)" />
      <circle cx="90" cy="70" r="3" fill="url(#w3force-mark-gradient)" />
    </svg>
  );
}

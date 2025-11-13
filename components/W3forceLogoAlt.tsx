export default function W3ForceLogoAlt({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="w3force-alt-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="w3force-alt-glow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {/* Outer Hexagon - Tech Frame */}
      <path
        d="M50 8 L80 25 L80 60 L50 77 L20 60 L20 25 Z"
        stroke="url(#w3force-alt-gradient)"
        strokeWidth="3"
        fill="none"
      />
      
      {/* W3 Typography - Bold Modern */}
      <text
        x="50"
        y="48"
        fontFamily="Arial, sans-serif"
        fontSize="28"
        fontWeight="bold"
        textAnchor="middle"
        fill="url(#w3force-alt-gradient)"
      >
        W3
      </text>
      
      {/* Neural Network Nodes */}
      <circle cx="35" cy="30" r="3" fill="url(#w3force-alt-gradient)" />
      <circle cx="50" cy="25" r="3" fill="url(#w3force-alt-gradient)" />
      <circle cx="65" cy="30" r="3" fill="url(#w3force-alt-gradient)" />
      
      <circle cx="30" cy="70" r="2.5" fill="url(#w3force-alt-gradient)" opacity="0.7" />
      <circle cx="50" cy="65" r="2.5" fill="url(#w3force-alt-gradient)" opacity="0.7" />
      <circle cx="70" cy="70" r="2.5" fill="url(#w3force-alt-gradient)" opacity="0.7" />
      
      {/* Connection Lines - AI Neural Network */}
      <line x1="35" y1="30" x2="50" y2="25" stroke="url(#w3force-alt-gradient)" strokeWidth="1.5" opacity="0.5" />
      <line x1="50" y1="25" x2="65" y2="30" stroke="url(#w3force-alt-gradient)" strokeWidth="1.5" opacity="0.5" />
      <line x1="35" y1="30" x2="30" y2="70" stroke="url(#w3force-alt-gradient)" strokeWidth="1" opacity="0.3" />
      <line x1="50" y1="25" x2="50" y2="65" stroke="url(#w3force-alt-gradient)" strokeWidth="1" opacity="0.3" />
      <line x1="65" y1="30" x2="70" y2="70" stroke="url(#w3force-alt-gradient)" strokeWidth="1" opacity="0.3" />
      
      {/* Force Energy Pulse - Bottom */}
      <circle cx="50" cy="75" r="4" fill="url(#w3force-alt-gradient)" opacity="0.6" />
      <circle cx="50" cy="75" r="7" stroke="url(#w3force-alt-gradient)" strokeWidth="2" fill="none" opacity="0.3" />
    </svg>
  );
}

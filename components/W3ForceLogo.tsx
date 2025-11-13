export default function W3ForceLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="w3force-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      
      {/* Main W3 Shape */}
      <path
        d="M15 25 L25 65 L35 35 L45 65 L55 35 L65 65 L75 25"
        stroke="url(#w3force-gradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Force Symbol - Lightning Bolt */}
      <path
        d="M70 45 L60 60 L68 60 L58 80 L72 62 L64 62 Z"
        fill="url(#w3force-gradient)"
      />
      
      {/* AI Circuit Pattern */}
      <circle cx="30" cy="20" r="2.5" fill="url(#w3force-gradient)" />
      <circle cx="50" cy="20" r="2.5" fill="url(#w3force-gradient)" />
      <circle cx="70" cy="30" r="2.5" fill="url(#w3force-gradient)" />
      
      <line x1="30" y1="22" x2="30" y2="25" stroke="url(#w3force-gradient)" strokeWidth="1.5" />
      <line x1="50" y1="22" x2="50" y2="25" stroke="url(#w3force-gradient)" strokeWidth="1.5" />
      <line x1="70" y1="32" x2="73" y2="35" stroke="url(#w3force-gradient)" strokeWidth="1.5" />
    </svg>
  );
}

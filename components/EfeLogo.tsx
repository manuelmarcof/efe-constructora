export default function EfeLogo({ className = '', height = 32 }: { className?: string; height?: number }) {
  // Aspect ratio: ~2.8:1
  const width = height * 2.8;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 90 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="efe"
    >
      {/* First "e" */}
      {/* Counter (the hole) */}
      <path d="
        M2 20.5
        C2 13.5 6.5 9 13 9
        C19 9 22.5 13 22.5 18.5
        L22.5 20
        L6.5 20
        C7 24 9.5 26.5 13.5 26.5
        C16.5 26.5 18.5 25 19.8 23
        L22 24.5
        C20 27.5 17 29.5 13 29.5
        C6.5 29.5 2 25.5 2 20.5
        Z
        M6.8 17.5 L18.5 17.5
        C18 14 15.5 11.5 13 11.5
        C10 11.5 7.5 13.5 6.8 17.5
        Z
      " fillRule="evenodd" />

      {/* "f" with forward-only crossbar */}
      {/* Vertical stem */}
      <rect x="32" y="3" width="3.2" height="26" rx="0.3" />
      {/* Top hook curving right */}
      <path d="M35.2 3 C35.2 3 35.2 1.5 37 0.8 C38 0.4 39.5 0.3 41 0.5 L41 3 C39.5 2.8 38 2.9 37.2 3.3 C36.2 3.8 35.2 4.5 35.2 4.5 Z" />
      {/* Crossbar - ONLY goes right from the stem */}
      <rect x="35.2" y="13.5" width="8" height="2.5" rx="0.3" />

      {/* Second "e" */}
      <path d="
        M52 20.5
        C52 13.5 56.5 9 63 9
        C69 9 72.5 13 72.5 18.5
        L72.5 20
        L56.5 20
        C57 24 59.5 26.5 63.5 26.5
        C66.5 26.5 68.5 25 69.8 23
        L72 24.5
        C70 27.5 67 29.5 63 29.5
        C56.5 29.5 52 25.5 52 20.5
        Z
        M56.8 17.5 L68.5 17.5
        C68 14 65.5 11.5 63 11.5
        C60 11.5 57.5 13.5 56.8 17.5
        Z
      " fillRule="evenodd" />
    </svg>
  );
}

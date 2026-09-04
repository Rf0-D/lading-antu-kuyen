const OrbitalComposition = ({ className = '' }: { className?: string }) => {
  return (
    <svg viewBox="0 0 600 600" fill="none" className={className} aria-hidden="true">
      {/* Outer rings */}
      <circle cx="300" cy="300" r="280" stroke="#4f46e5" strokeWidth="0.6" strokeDasharray="6 12" opacity="0.15" />
      <circle cx="300" cy="300" r="240" stroke="#4f46e5" strokeWidth="0.5" strokeDasharray="4 16" opacity="0.1" />
      <circle cx="300" cy="300" r="180" stroke="#818cf8" strokeWidth="0.8" strokeDasharray="3 9" opacity="0.18" />
      {/* Sun */}
      <circle cx="300" cy="300" r="70" fill="#f97316" opacity="0.06" />
      <circle cx="300" cy="300" r="48" fill="#f97316" opacity="0.1" />
      <circle cx="300" cy="300" r="32" fill="#f97316" opacity="0.2" />
      <circle cx="300" cy="300" r="18" fill="#f97316" opacity="0.55" />
      {/* Sun rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180
        const x1 = 300 + 55 * Math.cos(rad)
        const y1 = 300 + 55 * Math.sin(rad)
        const x2 = 300 + 90 * Math.cos(rad)
        const y2 = 300 + 90 * Math.sin(rad)
        return (
          <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#f97316" strokeWidth="1" opacity="0.3" />
        )
      })}
      {/* Moon orbit */}
      <ellipse cx="300" cy="300" rx="220" ry="220"
        stroke="#a5b4fc" strokeWidth="0.6" opacity="0.12" />
      {/* Moon */}
      <path
        d="M480 270C470 276 463 288 463 302C463 318 472 332 485 337C479 343 471 346 463 346C445 346 430 331 430 313C430 295 445 280 463 280C469 280 474 281 480 284V270Z"
        fill="#818cf8"
        opacity="0.5"
      />
      {/* Stars */}
      {[
        [120, 140], [450, 90], [80, 380], [510, 450],
        [200, 80], [390, 510], [160, 480], [500, 200],
        [330, 50], [60, 260]
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.8 : 1} fill="#e0e7ff" opacity={0.2 + (i % 4) * 0.1} />
      ))}
    </svg>
  )
}


export default OrbitalComposition;
export default function Cover({ tones }: { tones: [string, string, string] }) {
  const [a, b, c] = tones;
  return (
    <svg viewBox="0 0 600 400" className="cover-art" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="600" height="400" fill={b} />
      <rect x="70" y="70" width="170" height="220" fill={a} opacity="0.9" />
      <rect x="270" y="110" width="120" height="150" fill={c} opacity="0.85" />
      <rect x="420" y="80" width="110" height="140" fill={a} opacity="0.55" />
      <rect x="420" y="240" width="110" height="80" fill={c} opacity="0.45" />
      <line x1="0" y1="340" x2="600" y2="340" stroke={c} strokeOpacity="0.25" />
    </svg>
  );
}

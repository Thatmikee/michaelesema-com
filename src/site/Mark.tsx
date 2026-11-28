// The logo: a penguin in teal and black, built from plain geometric shapes.
// `onDark` puts it on a white disc so it still reads on the deep green panels.
export default function Mark({ onDark = false }: { onDark?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true" focusable="false">
      {onDark && <circle cx="32" cy="32" r="32" fill="#ffffff" />}
      <g transform={onDark ? 'translate(7.04 6) scale(0.78)' : undefined}>
        <path d="M12.5 30C6 33 5 45 9.5 52c4-5 5.5-12 6.5-19z" fill="#0b1512" />
        <path d="M51.5 30c6.5 3 7.5 15 3 22-4-5-5.500-12-6.500-19z" fill="#0b1512" />
        <path d="M32 3C19 3 12 14 12 29c0 17 5 32 20 32s20-15 20-32C52 14 45 3 32 3z" fill="#0b1512" />
        <path d="M32 24c-9 2-12.500 12-11.500 22C21.500 55 26 59 32 59s10.500-4 11.500-13C44.500 36 41 26 32 24z" fill="#1fb8a8" />
        <circle cx="25.500" cy="17" r="4.200" fill="#ffffff" />
        <circle cx="38.500" cy="17" r="4.200" fill="#ffffff" />
        <circle cx="26.600" cy="17.600" r="1.900" fill="#0b1512" />
        <circle cx="37.400" cy="17.600" r="1.900" fill="#0b1512" />
        <path d="M28.200 22h7.600L32 28.500z" fill="#35d4c4" />
        <ellipse cx="24" cy="61.500" rx="5.500" ry="2.200" fill="#1fb8a8" />
        <ellipse cx="40" cy="61.500" rx="5.500" ry="2.200" fill="#1fb8a8" />
      </g>
    </svg>
  )
}

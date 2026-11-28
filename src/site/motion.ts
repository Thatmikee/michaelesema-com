import { useEffect, useState } from 'react'

const REDUCE = '(prefers-reduced-motion: reduce)'

// Read straight from the browser. Use inside effects and event handlers only.
export const prefersReduced = () => typeof window !== 'undefined' && window.matchMedia(REDUCE).matches

// Starts false on server and client alike, then follows the real screen after mount,
// so prerendered HTML and the first client render always agree.
export function useMedia(q: string) {
  const [on, setOn] = useState(false)
  useEffect(() => {
    const m = window.matchMedia(q)
    const f = () => setOn(m.matches)
    f()
    m.addEventListener('change', f)
    return () => m.removeEventListener('change', f)
  }, [q])
  return on
}

export const useReducedMotion = () => useMedia(REDUCE)

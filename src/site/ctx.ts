import { createContext, useContext } from 'react'

// `ready` is false while the intro curtain covers the page, so text lines wait
// to unmask until the curtain lifts. With no intro it is true from the start.
export const SxCtx = createContext({ ready: true })
export const useSx = () => useContext(SxCtx)

export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]
export const EASE_IO: [number, number, number, number] = [0.76, 0, 0.24, 1]

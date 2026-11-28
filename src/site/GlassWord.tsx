import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { INK, TEAL } from './tokens'

// The wordmark, drawn to a texture and shown through a glass shader. Near the
// cursor or finger the letters split into thin strips that slide, lean and
// ripple while you move, with a lens pull and a faint teal fringe; they settle
// when you let go. With `auto` (touch screens, which have no hover) a sweep
// passes through the name every few seconds so it moves on its own.
// The real text stays in the page for readers, search and selection, and is
// what shows when WebGL or motion is unavailable.

const VERT = `attribute vec2 p; varying vec2 vUv;
void main(){ vUv = vec2(p.x * 0.5 + 0.5, 0.5 - p.y * 0.5); gl_Position = vec4(p, 0.0, 1.0); }`

const FRAG = `precision mediump float;
varying vec2 vUv;
uniform sampler2D uTex; uniform vec2 uRes; uniform vec2 uMouse;
uniform float uTime; uniform float uStr; uniform float uR; uniform float uS;
uniform vec3 uInk; uniform vec3 uTeal;
float hash(float n){ return fract(sin(n) * 43758.5453); }
void main(){
  vec2 px = vUv * uRes;
  vec2 d = px - uMouse;
  float dist = length(d);
  float w = smoothstep(uR, 0.0, dist) * uStr;
  float row = floor(px.y / (3.0 * uS));
  float jit = hash(row + floor(uTime * 22.0)) - 0.5;
  float wave = 0.5 * sin(px.y / uS * 0.05 + uTime * 5.0) + 0.5 * sin(px.y / uS * 0.12 - uTime * 7.3);
  float shear = (px.y - uMouse.y) * 0.36;
  float dx = w * (wave * 13.0 * uS + jit * 4.0 * uS + shear);
  float dy = w * sin(px.x / uS * 0.03 + uTime * 4.0) * 3.0 * uS;
  vec2 dir = d / max(dist, 0.001);
  vec2 off = vec2(dx, dy) + dir * w * w * 16.0 * uS;
  vec2 sp = vec2(2.0 * uS * w, 0.0);
  float aR = texture2D(uTex, (px - off - sp) / uRes).a;
  float aG = texture2D(uTex, (px - off) / uRes).a;
  float aB = texture2D(uTex, (px - off + sp) / uRes).a;
  float a = max(aG, max(aR, aB));
  vec3 col = mix(uInk, uTeal, clamp(abs(aR - aB) * 1.6, 0.0, 1.0));
  gl_FragColor = vec4(col * a, a);
}`

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)
  if (!s) return null
  gl.shaderSource(s, src)
  gl.compileShader(s)
  return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null
}

type Props = { lines: string[]; auto?: boolean; onInteract?: () => void }

export default function GlassWord({ lines, auto = false, onInteract }: Props) {
  const wrap = useRef<HTMLSpanElement>(null)
  const cv = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()
  const [live, setLive] = useState(false)
  const [fs, setFs] = useState<number | null>(null)
  const [h, setH] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  const key = lines.join('|')
  const interact = useRef(onInteract)
  useEffect(() => { interact.current = onInteract }, [onInteract])
  // The canvas exists only on the client, after mount, so server and client HTML match.
  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (reduce || !mounted) return
    const wrapEl = wrap.current
    const canvas = cv.current
    if (!wrapEl || !canvas) return
    const gl = canvas.getContext('webgl', { premultipliedAlpha: true, alpha: true, antialias: false })
    if (!gl) return
    const vs = compile(gl, gl.VERTEX_SHADER, VERT)
    const fsh = compile(gl, gl.FRAGMENT_SHADER, FRAG)
    const prog = gl.createProgram()
    if (!vs || !fsh || !prog) return
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fsh)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'p')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
    const U = (n: string) => gl.getUniformLocation(prog, n)
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    const st = {
      mx: -9999, my: -9999, tx: -9999, ty: -9999, str: 0, active: false, t0: performance.now(), W: 0, H: 0,
      sweep: null as null | { t0: number; dur: number },
    }
    const textLines = key.split('|')
    let tex: WebGLTexture | null = null
    let raf = 0
    let dead = false

    const draw = (t: number) => {
      gl.viewport(0, 0, st.W, st.H)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.uniform2f(U('uRes'), st.W, st.H)
      gl.uniform2f(U('uMouse'), st.mx, st.my)
      gl.uniform1f(U('uTime'), t)
      gl.uniform1f(U('uStr'), st.str)
      gl.uniform1f(U('uR'), Math.max(st.W * 0.16, st.H * 0.45))
      gl.uniform1f(U('uS'), dpr)
      gl.uniform3f(U('uInk'), INK.rgb[0] / 255, INK.rgb[1] / 255, INK.rgb[2] / 255)
      gl.uniform3f(U('uTeal'), TEAL.rgb[0] / 255, TEAL.rgb[1] / 255, TEAL.rgb[2] / 255)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }
    const loop = (now: number) => {
      if (st.sweep) {
        const f = (now - st.sweep.t0) / st.sweep.dur
        if (f >= 1) { st.sweep = null; st.active = false }
        else {
          st.tx = st.W * (0.06 + 0.88 * f)
          st.ty = st.H * (0.45 + 0.2 * Math.sin(f * 9))
          if (!st.active) { st.mx = st.tx; st.my = st.ty }
          st.active = true
        }
      }
      st.mx += (st.tx - st.mx) * 0.22
      st.my += (st.ty - st.my) * 0.22
      st.str += ((st.active ? 1 : 0) - st.str) * 0.09
      draw((now - st.t0) / 1000)
      if (st.active || st.sweep || st.str > 0.004) raf = requestAnimationFrame(loop)
      else { raf = 0; st.str = 0; draw(0) }
    }
    const kick = () => { if (!raf) raf = requestAnimationFrame(loop) }

    const build = async () => {
      await document.fonts.load('500 100px Satoshi')
      if (dead) return
      const cssW = wrapEl.clientWidth
      if (cssW < 10) return
      const c2 = document.createElement('canvas')
      const ctx = c2.getContext('2d')
      if (!ctx) return
      ctx.font = '500 100px Satoshi, sans-serif'
      if ('letterSpacing' in ctx) ctx.letterSpacing = '-4.5px'
      const widest = Math.max(...textLines.map(l => ctx.measureText(l).width))
      const size = cssW / (widest / 100)
      const lead = textLines.length > 1 ? 0.98 : 0
      const cssH = Math.ceil(size * (0.84 + lead * (textLines.length - 1) + 0.28))
      st.W = Math.round(cssW * dpr)
      st.H = Math.round(cssH * dpr)
      c2.width = st.W
      c2.height = st.H
      ctx.font = `500 ${size * dpr}px Satoshi, sans-serif`
      if ('letterSpacing' in ctx) ctx.letterSpacing = `${-0.045 * size * dpr}px`
      ctx.fillStyle = INK.hex
      ctx.textBaseline = 'alphabetic'
      textLines.forEach((l, i) => ctx.fillText(l, 0, size * dpr * (0.84 + lead * i)))
      canvas.width = st.W
      canvas.height = st.H
      canvas.style.height = `${cssH}px`
      if (tex) gl.deleteTexture(tex)
      tex = gl.createTexture()
      gl.bindTexture(gl.TEXTURE_2D, tex)
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c2)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      setFs(size)
      setH(cssH)
      draw(0)
      setLive(true)
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      st.sweep = null
      st.tx = (e.clientX - r.left) * dpr
      st.ty = (e.clientY - r.top) * dpr
      if (!st.active) { st.mx = st.tx; st.my = st.ty }
      st.active = true
      if (e.type === 'pointerdown') interact.current?.()
      kick()
    }
    const onLeave = () => { st.active = false; kick() }
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerdown', onMove)
    canvas.addEventListener('pointerleave', onLeave)
    canvas.addEventListener('pointercancel', onLeave)
    canvas.addEventListener('pointerup', onLeave)

    let timer = 0
    let first = 0
    if (auto) {
      const go = () => { if (document.visibilityState === 'visible' && !st.active && st.W) { st.sweep = { t0: performance.now(), dur: 1900 }; kick() } }
      first = window.setTimeout(go, 1600)
      timer = window.setInterval(go, 5200)
    }

    let pending = 0
    const ro = new ResizeObserver(() => { cancelAnimationFrame(pending); pending = requestAnimationFrame(() => { void build() }) })
    ro.observe(wrapEl)
    void build()

    return () => {
      dead = true
      cancelAnimationFrame(raf)
      cancelAnimationFrame(pending)
      window.clearTimeout(first)
      window.clearInterval(timer)
      ro.disconnect()
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerdown', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
      canvas.removeEventListener('pointercancel', onLeave)
      canvas.removeEventListener('pointerup', onLeave)
      if (tex) gl.deleteTexture(tex)
    }
  }, [reduce, key, auto, mounted])

  const longest = Math.max(...lines.map(l => l.length))
  return (
    <span ref={wrap} className="sx-gw" style={h ? { height: h } : undefined}>
      <span className={`sx-gw-txt${live ? ' on' : ''}`} style={fs ? { fontSize: fs, lineHeight: lines.length > 1 ? 0.98 : 1.12 } : { fontSize: `calc((100vw - 32px) / ${(longest * 0.5).toFixed(2)})` }}>
        {lines.map((l, i) => <span key={l}>{l}{i < lines.length - 1 ? <br /> : null}</span>)}
      </span>
      {mounted && !reduce && <canvas ref={cv} className="sx-gw-cv" aria-hidden="true" />}
    </span>
  )
}

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// The wordmark, drawn to a texture and shown through a glass shader. Near the
// cursor the letters split into thin strips that slide, lean and ripple while
// you move, with a lens pull and a faint teal fringe; they settle when you leave.
// The real text stays in the page for readers, search and selection, and is
// what shows when WebGL or motion is unavailable.

const VERT = `attribute vec2 p; varying vec2 vUv;
void main(){ vUv = vec2(p.x * 0.5 + 0.5, 0.5 - p.y * 0.5); gl_Position = vec4(p, 0.0, 1.0); }`

const FRAG = `precision mediump float;
varying vec2 vUv;
uniform sampler2D uTex; uniform vec2 uRes; uniform vec2 uMouse;
uniform float uTime; uniform float uStr; uniform float uR; uniform float uS;
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
  vec3 ink = vec3(0.059, 0.239, 0.180);
  vec3 teal = vec3(0.039, 0.478, 0.439);
  vec3 col = mix(ink, teal, clamp(abs(aR - aB) * 1.6, 0.0, 1.0));
  gl_FragColor = vec4(col * a, a);
}`

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)
  if (!s) return null
  gl.shaderSource(s, src)
  gl.compileShader(s)
  return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null
}

export default function GlassWord({ text }: { text: string }) {
  const wrap = useRef<HTMLSpanElement>(null)
  const cv = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()
  const [live, setLive] = useState(false)
  const [fs, setFs] = useState<number | null>(null)

  useEffect(() => {
    if (reduce) return
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
    const st = { mx: -9999, my: -9999, tx: -9999, ty: -9999, str: 0, active: false, t0: performance.now(), W: 0, H: 0 }
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
      gl.uniform1f(U('uR'), st.W * 0.16)
      gl.uniform1f(U('uS'), dpr)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }
    const loop = (now: number) => {
      st.mx += (st.tx - st.mx) * 0.22
      st.my += (st.ty - st.my) * 0.22
      st.str += ((st.active ? 1 : 0) - st.str) * 0.09
      draw((now - st.t0) / 1000)
      if (st.active || st.str > 0.004) raf = requestAnimationFrame(loop)
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
      const size = cssW / (ctx.measureText(text).width / 100)
      const cssH = Math.ceil(size * 1.12)
      st.W = Math.round(cssW * dpr)
      st.H = Math.round(cssH * dpr)
      c2.width = st.W
      c2.height = st.H
      ctx.font = `500 ${size * dpr}px Satoshi, sans-serif`
      if ('letterSpacing' in ctx) ctx.letterSpacing = `${-0.045 * size * dpr}px`
      ctx.fillStyle = 'rgb(15,61,46)'
      ctx.textBaseline = 'alphabetic'
      ctx.fillText(text, 0, size * dpr * 0.84)
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
      draw(0)
      setLive(true)
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      st.tx = (e.clientX - r.left) * dpr
      st.ty = (e.clientY - r.top) * dpr
      if (!st.active) { st.mx = st.tx; st.my = st.ty }
      st.active = true
      kick()
    }
    const onLeave = () => { st.active = false; kick() }
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerleave', onLeave)
    canvas.addEventListener('pointercancel', onLeave)
    canvas.addEventListener('pointerup', onLeave)

    let pending = 0
    const ro = new ResizeObserver(() => { cancelAnimationFrame(pending); pending = requestAnimationFrame(() => { void build() }) })
    ro.observe(wrapEl)
    void build()

    return () => {
      dead = true
      cancelAnimationFrame(raf)
      cancelAnimationFrame(pending)
      ro.disconnect()
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
      canvas.removeEventListener('pointercancel', onLeave)
      canvas.removeEventListener('pointerup', onLeave)
      if (tex) gl.deleteTexture(tex)
    }
  }, [reduce, text])

  return (
    <span ref={wrap} className="sx-gw">
      <span className={`sx-gw-txt${live ? ' on' : ''}`} style={fs ? { fontSize: fs } : { fontSize: `calc((100vw - 32px) / ${(text.length * 0.5).toFixed(2)})` }}>{text}</span>
      {!reduce && <canvas ref={cv} className="sx-gw-cv" aria-hidden="true" />}
    </span>
  )
}

// Runs before first paint. On a first visit it marks <html> so the page cannot flash
// ahead of the intro curtain: `sx-gate` is a snow veil, `sx-held` pauses the text
// reveals. The decision mirrors src/site/Shell.tsx, which takes over once the app
// starts. If the app never starts, everything is released after 8 seconds.
(function () {
  try {
    var p = location.pathname
    var site = p === '/' || p === '/work' || p === '/blog' || p === '/about'
    var seen = false
    try { seen = sessionStorage.getItem('sx-intro') === '1' } catch (e) { /* storage blocked */ }
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!site || seen || reduced || /[?&]nointro\b/.test(location.search)) return
    var d = document.documentElement
    d.classList.add('sx-gate', 'sx-held')
    setTimeout(function () {
      if (!d.dataset.sxApp) d.classList.remove('sx-gate', 'sx-held')
    }, 8000)
  } catch (e) { /* never block the page */ }
})()

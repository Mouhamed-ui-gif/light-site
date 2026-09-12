/* Interactions — GHENNAI build (guarded, safe) */
document.addEventListener('DOMContentLoaded', function () {
  const el = (id) => document.getElementById(id)

  // Mobile menu
  const burger = el('burger')
  const menu = el('menu')
  if (burger && menu) {
    burger.addEventListener('click', () => menu.classList.toggle('open'))
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => menu.classList.remove('open')))
  }

  // Back to top
  const toTop = el('toTop')
  if (toTop) {
    toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }))
    addEventListener('scroll', () => toTop.classList.toggle('show', scrollY > 600), { passive: true })
  }

  // Reveal on scroll
  const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('in')), { threshold: 0.12 })
  document.querySelectorAll('.reveal, .skill, .bio').forEach((e) => {
    e.classList.add('reveal')
    io.observe(e)
  })

  // Parallax tilt cards
  if (matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.tilt').forEach((c) => {
      c.addEventListener('mousemove', (e) => {
        const r = c.getBoundingClientRect()
        c.style.transform = `rotateZ(${(((e.clientX - r.left) / r.width) - 0.5) * 10}deg) translateY(-4px)`
      })
      c.addEventListener('mouseleave', () => (c.style.transform = ''))
    })
  }

  // Contact form
  const form = el('contactForm')
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      form.innerHTML = '<p class="trust" style="text-align:center;color:#34d399;font-weight:700">✓ تم إرسال رسالتك. سأرد عليك قريبًا!</p>'
    })
  }
})
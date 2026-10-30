// Adds .is-in to [data-reveal] elements as they enter the viewport.
export function initReveal() {
  const root = document.documentElement;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  root.classList.add('js');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
}

export const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Run cb once when el is roughly in the middle of the viewport (height-independent). */
export function whenInView(el: Element, cb: (visible: boolean) => void) {
  if (!('IntersectionObserver' in window)) { cb(true); return; }
  const io = new IntersectionObserver((es) => es.forEach((e) => cb(e.isIntersecting)), { threshold: 0, rootMargin: '-30% 0px -30% 0px' });
  io.observe(el);
  return io;
}

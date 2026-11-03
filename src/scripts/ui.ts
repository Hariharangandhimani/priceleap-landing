// Lightweight client helpers. Import once in the base layout: <script>import '../scripts/ui.ts'</script>
// 1) Scroll reveal
const io = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io!.unobserve(e.target); } }), { rootMargin: '0px 0px -10% 0px' }) : null;
document.querySelectorAll('[data-reveal]').forEach(el => io ? io.observe(el) : el.classList.add('is-in'));
// 2) Scroll progress → CSS var --pl-scroll (0..1) on <html>
const setScroll = () => { const d = document.documentElement, max = d.scrollHeight - innerHeight; d.style.setProperty('--pl-scroll', String(max > 0 ? scrollY / max : 0)); d.toggleAttribute('data-scrolled-900', scrollY > 900); };
addEventListener('scroll', setScroll, { passive: true }); setScroll();
// 3) Toasts: window.plToast('Saved', 'success' | 'error')
(window as any).plToast = (text: string, kind: 'success' | 'error' = 'success') => {
  let host = document.getElementById('pl-toasts');
  if (!host) { host = document.createElement('div'); host.id = 'pl-toasts'; host.setAttribute('aria-live', 'polite'); document.body.appendChild(host); }
  const t = document.createElement('div'); t.className = 'pl-toast pl-toast--' + kind; t.innerHTML = '<span class="pl-toast__ic">' + (kind === 'error' ? '!' : '✓') + '</span>'; t.append(text);
  host.appendChild(t); setTimeout(() => t.remove(), 3200);
};
// 4) Dialogs: any [data-open="id"] opens <dialog id>, [data-close] closes
document.addEventListener('click', (e) => {
  const o = (e.target as HTMLElement).closest('[data-open]'); if (o) { (document.getElementById(o.getAttribute('data-open')!) as HTMLDialogElement)?.showModal(); }
  const c = (e.target as HTMLElement).closest('[data-close]'); if (c) { c.closest('dialog')?.close(); }
});
document.querySelectorAll('dialog.pl-dialog').forEach(d => d.addEventListener('click', (e) => { if (e.target === d) (d as HTMLDialogElement).close(); }));

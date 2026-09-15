// One-time reveal for [data-reveal] blocks. CSS keeps content visible when JS
// is off or reduced motion is requested (see .js-reveal rules in global.css).
const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce && 'IntersectionObserver' in window && els.length) {
  document.documentElement.classList.add('js-reveal');
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  els.forEach((el) => io.observe(el));
}

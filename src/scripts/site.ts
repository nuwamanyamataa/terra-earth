// Small, dependency-free behaviour: sticky header, menus, filters, reveal on scroll.

// Sticky header shrink
const header = document.querySelector<HTMLElement>('[data-header]');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Desktop dropdown (keyboard / touch toggle; hover is handled in CSS)
document.querySelectorAll<HTMLElement>('[data-dropdown]').forEach((item) => {
  const btn = item.querySelector<HTMLButtonElement>('[data-dropdown-toggle]');
  btn?.addEventListener('click', () => {
    const open = item.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
  });
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { item.classList.remove('is-open'); btn?.setAttribute('aria-expanded', 'false'); btn?.focus(); }
  });
  document.addEventListener('click', (e) => {
    if (!item.contains(e.target as Node)) { item.classList.remove('is-open'); btn?.setAttribute('aria-expanded', 'false'); }
  });
});

// Mobile menu
const menu = document.querySelector<HTMLElement>('[data-menu]');
const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
const closeBtn = document.querySelector<HTMLButtonElement>('[data-menu-close]');
const setMenu = (open: boolean) => {
  if (!menu) return;
  menu.hidden = !open;
  document.body.style.overflow = open ? 'hidden' : '';
  openBtn?.setAttribute('aria-expanded', String(open));
  if (open) closeBtn?.focus(); else openBtn?.focus();
};
openBtn?.addEventListener('click', () => setMenu(true));
closeBtn?.addEventListener('click', () => setMenu(false));
menu?.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Project filters (no page reload)
const filterBar = document.querySelector<HTMLElement>('[data-filters]');
if (filterBar) {
  const cards = document.querySelectorAll<HTMLElement>('[data-categories]');
  const status = document.querySelector<HTMLElement>('[data-filter-status]');
  filterBar.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-filter]');
    if (!btn) return;
    const f = btn.dataset.filter!;
    filterBar.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    let shown = 0;
    cards.forEach((c) => {
      const match = f === 'All' || (c.dataset.categories || '').split('|').includes(f);
      c.hidden = !match;
      if (match) shown++;
    });
    if (status) status.textContent = `Showing ${shown} ${shown === 1 ? 'item' : 'items'}${f === 'All' ? '' : ` in ${f}`}.`;
  });
}

// Reveal on scroll
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Footer year is rendered at build; nothing else needed.

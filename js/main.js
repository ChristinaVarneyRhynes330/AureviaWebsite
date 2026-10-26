(() => {
  const menu = document.getElementById('mobile-nav');
  const toggle = document.getElementById('menu-toggle');
  const setMenu = open => { menu.hidden = !open; toggle.setAttribute('aria-expanded', String(open)); };
  toggle.addEventListener('click', () => setMenu(menu.hidden));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

  const filters = [...document.querySelectorAll('[data-filter]')];
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(f => f.setAttribute('aria-pressed', String(f === btn)));
    document.querySelectorAll('.portfolio-item').forEach(item => {
      item.hidden = btn.dataset.filter !== 'all' && item.dataset.category !== btn.dataset.filter;
    });
  }));

  const date = document.getElementById('booking-date');
  const now = new Date();
  date.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

  document.querySelectorAll('form[data-form]').forEach(form => {
    const btn = form.querySelector('[type=submit]');
    const ok = form.querySelector('.success');
    const err = form.querySelector('.error');
    form.addEventListener('submit', async e => {
      e.preventDefault();
      ok.hidden = err.hidden = true;
      if (form.elements._gotcha && form.elements._gotcha.value) return;
      btn.disabled = true;
      try {
        const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        ok.hidden = false;
      } catch {
        err.hidden = false;
      } finally {
        btn.disabled = false;
      }
    });
  });
})();

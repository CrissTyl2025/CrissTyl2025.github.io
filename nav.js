/* Nav interactions: dropdown toggle (click, for touch) + mobile menu.
   Desktop hover is handled in CSS; this adds click/tap + keyboard support. */
(function () {
  // Mobile menu toggle
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Dropdown toggle (click/tap)
  var dds = document.querySelectorAll('.has-dropdown');
  dds.forEach(function (dd) {
    var btn = dd.querySelector('.dropdown-toggle');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var open = dd.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    dds.forEach(function (dd) {
      if (!dd.contains(e.target)) {
        dd.classList.remove('open');
        var btn = dd.querySelector('.dropdown-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Theme toggle (persisted in localStorage; anti-flash script in each page head)
  var root = document.documentElement;
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dds.forEach(function (dd) { dd.classList.remove('open'); });
      if (nav) nav.classList.remove('open');
    }
  });
})();

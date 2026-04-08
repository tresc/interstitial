/* nav.js — Interstitial Studies Archive
   Renders the sidebar and sets the active link based on current page.
   Include at end of <body> on every page.
   Usage: <div id="sidebar-nav"></div>
          <script src="/assets/js/nav.js"></script>
   For pages in subfolders, pass root path:
          <script>NAV_ROOT = '/'; </script>
          <script src="/assets/js/nav.js"></script>
*/

(function () {
  const root = (typeof NAV_ROOT !== 'undefined') ? NAV_ROOT : '../';

  const sections = [
    {
      label: 'Archive',
      items: [
        { text: 'About this archive',       href: root + 'index.html' },
        { text: 'Editorial board',           href: root + 'index.html#board', meta: false },
        { text: 'Notice: disputed articles', href: root + 'admin/disputed.html', meta: true },
        { text: 'Notice: redacted entries',  href: root + 'admin/redacted.html', meta: true },
      ]
    },
    {
      label: 'Cosmology',
      items: [
        { text: 'The Substrate',             href: root + 'cosmology/index.html' },
        { text: 'The Substrate and time',    href: root + 'cosmology/substrate-time.html' },
        { text: 'The recording mechanism',   href: root + 'cosmology/recording-mechanism.html' },
        { text: 'Competing theories',        href: root + 'cosmology/competing-theories.html' },
      ]
    },
    {
      label: 'History',
      items: [
        { text: 'Dr. Elias Thorne',          href: root + 'figures/elias-thorne.html' },
        { text: 'The Centralia event',        href: root + 'history/centralia-event.html' },
        { text: 'The filing room',            href: root + 'history/filing-room.html' },
        { text: 'Conduit Deck Zero',          href: root + 'history/conduit-deck-zero.html' },
      ]
    },
    {
      label: 'The Commission',
      items: [
        { text: 'Overview',                   href: root + 'commission/index.html' },
        { text: 'The Discarded',              href: root + 'commission/the-discarded.html' },
        { text: 'The Players',                href: root + 'commission/the-players.html' },
        { text: 'The Assessors',              href: root + 'commission/the-assessors.html' },
        { text: 'The Face Cards',             href: root + 'commission/face-cards.html' },
        { text: 'The Red Suits',              href: root + 'commission/red-suits.html' },
        { text: 'The Black Suits',            href: root + 'commission/black-suits.html' },
      ]
    },
    {
      label: 'Accrual',
      items: [
        { text: 'Overview',                   href: root + 'accrual/index.html' },
        { text: 'Stage One — The Echoes',     href: root + 'accrual/stage-one.html', sub: true },
        { text: 'Stage Two — Desaturation',   href: root + 'accrual/stage-two.html', sub: true },
        { text: 'Stage Three — Crystallization', href: root + 'accrual/stage-three.html', sub: true },
        { text: 'Stage Four — The Fold',      href: root + 'accrual/stage-four.html', sub: true },
        { text: 'The handwriting phenomenon', href: root + 'accrual/handwriting.html' },
        { text: 'The reflection delay',       href: root + 'accrual/reflection-delay.html' },
      ]
    },
    {
      label: 'The Deck',
      items: [
        { text: 'Overview',                   href: root + 'concordance/index.html' },
        { text: 'The count dispute',          href: root + 'concordance/count-dispute.html' },
        { text: 'Physical properties',        href: root + 'concordance/physical-properties.html' },
        { text: 'Card Concordance',           href: root + 'concordance/concordance.html' },
      ]
    },
    {
      label: 'Concordance',
      items: [
        { text: 'The Empty Mirror',           href: root + 'concordance/empty-mirror.html' },
        { text: 'The Collapsing Star',        href: root + 'concordance/collapsing-star.html' },
        { text: 'The Tethered Man',           href: root + 'concordance/tethered-man.html' },
        { text: "The Assessor's Desk",        href: root + "concordance/assessors-desk.html" },
        { text: 'The Second Horizon',         href: root + 'concordance/second-horizon.html' },
        { text: 'The Interior Angle',         href: root + 'concordance/interior-angle.html' },
        { text: 'The Patient Shape',          href: root + 'concordance/patient-shape.html' },
        { text: 'The Outer Notation',         href: root + 'concordance/outer-notation.html' },
        { text: 'The Severed Correspondence', href: root + 'concordance/severed-correspondence.html' },
      ]
    },
    {
      label: 'Notable Figures',
      items: [
        { text: 'Dr. Elias Thorne',           href: root + 'figures/elias-thorne.html' },
        { text: 'Dr. Yael Ostroff',           href: root + 'figures/yael-ostroff.html' },
        { text: 'Otto Vess',                  href: root + 'figures/otto-vess.html' },
        { text: 'Clara [redacted]',           href: root + 'figures/clara.html' },
      ]
    },
    {
      label: 'Recovered Documents',
      items: [
        { text: 'Index',                      href: root + 'recovered/index.html' },
        { text: '001 — Procedural Oversight', href: root + 'recovered/001.html', sub: true },
        { text: '002 — R.V. testimonial',     href: root + 'recovered/002.html', sub: true },
        { text: '003 — On the Record',        href: root + 'recovered/003.html', sub: true },
        { text: '004 — The Voss Matter',      href: root + 'recovered/004.html', sub: true },
        { text: '005 — Daniel [form series]', href: root + 'recovered/005.html', sub: true },
        { text: '006 — A Brief Statement',    href: root + 'recovered/006.html', sub: true },
        { text: '007 — First Contact letter', href: root + 'recovered/007.html', sub: true },
        { text: '008 — Fragment',             href: root + 'recovered/008.html', sub: true, meta: true },
        { text: '009 — Response [no inquiry]',href: root + 'recovered/009.html', sub: true, meta: true },
        { text: '010 — Form 7-C [pre-emptive]',href: root + 'recovered/010.html', sub: true, meta: true },
        { text: '011 — Index card',           href: root + 'recovered/011.html', sub: true, meta: true },
        { text: '012 — Table [unbounded]',    href: root + 'recovered/012.html', sub: true, meta: true },
      ]
    },
    {
      label: 'Administration',
      items: [
        { text: 'Editor revision log',        href: root + 'admin/revision-log.html', meta: true },
        { text: 'Anonymous edits',            href: root + 'admin/anonymous-edits.html', meta: true },
        { text: 'Missing pages',              href: root + 'admin/missing-pages.html', meta: true },
        { text: 'Talk: The Fold (disputed)',  href: root + 'admin/talk-the-fold.html', meta: true },
      ]
    },
  ];

  const current = window.location.pathname.split('/').pop() || 'index.html';
  const currentFull = window.location.pathname;

  function isActive(href) {
    const page = href.split('/').pop().split('#')[0];
    return page === current || currentFull.endsWith(href.replace(/^\.\.\//, '/'));
  }

  const html = sections.map(s => {
    const items = s.items.map(item => {
      const active = isActive(item.href) ? ' active' : '';
      const meta   = item.meta ? ' meta' : '';
      const sub    = item.sub  ? ' sub'  : '';
      return `<a class="nav-item${active}${meta}${sub}" href="${item.href}">${item.text}</a>`;
    }).join('');
    return `
      <div class="nav-section">
        <span class="nav-label">${s.label}</span>
        ${items}
      </div>
      <div class="nav-divider"></div>`;
  }).join('');

  const target = document.getElementById('sidebar-nav');
  if (target) {
    target.innerHTML = `<div class="sidebar-inner">${html}</div>`;
  }
})();

if (block.classList.contains('insights')) {
  block.querySelectorAll(':scope > ul > li').forEach((li) => {
    const tag = li.querySelector('.cards-card-body > p:first-child');
    const image = li.querySelector('.cards-card-image');
    if (tag && image) { tag.classList.add('cards-card-tag'); image.append(tag); }
  });
  const list = block.querySelector('ul');
  const nav = document.createElement('div');
  nav.className = 'cards-nav';
  ['prev', 'next'].forEach((dir) => {
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', dir);
    btn.textContent = dir === 'prev' ? '‹' : '›';
    btn.addEventListener('click', () => list.scrollBy({ left: (dir === 'prev' ? -1 : 1) * list.clientWidth, behavior: 'smooth' }));
    nav.append(btn);
  });
  block.append(nav);
}

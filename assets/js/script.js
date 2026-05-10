(function(){
  const cfg = window.NUTMUNK_CONFIG || {};
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const encode = (text) => encodeURIComponent(text || cfg.whatsappMessages?.general || 'Hi Nutmunk');
  const wa = (key='general') => `https://wa.me/${cfg.whatsappNumber}?text=${encode(cfg.whatsappMessages?.[key] || cfg.whatsappMessages?.general)}`;

  function applyLinks(){
    $$('.call-link').forEach(a => { a.href = `tel:${cfg.phoneLink}`; if(!a.textContent.trim() || a.classList.contains('phone-text')) a.textContent = cfg.phoneDisplay; });
    $$('.whatsapp-link').forEach(a => { a.href = wa(a.dataset.message || 'general'); a.target = '_blank'; a.rel = 'noopener'; });
    $$('.email-link').forEach(a => { a.href = `mailto:${cfg.email}`; if(!a.textContent.trim()) a.textContent = cfg.email; });
    $$('.location-text').forEach(el => el.textContent = cfg.location || '');
  }

  function renderBenefits(){
    const mount = $('#benefits'); if(!mount) return;
    const icons = ['♧','◈','☘','◇'];
    mount.innerHTML = (cfg.benefits||[]).map((b,i)=>`<div class="benefit reveal"><div class="benefit-icon">${icons[i%icons.length]}</div><div><strong>${b.title}</strong><span>${b.text}</span></div></div>`).join('');
  }

  function renderCollections(){
    const mount = $('#collectionGrid'); if(!mount) return;
    mount.innerHTML = (cfg.collections||[]).map((c,i)=>`<article class="collection-card reveal"><img src="${c.image}" alt="${c.title}"><div class="card-body"><h3>${c.title}</h3><p>${c.text}</p><a class="card-link whatsapp-link" data-message="catalogue" href="#">Explore →</a></div></article>`).join('');
  }

  function renderProducts(){
    const mount = $('#productGrid'); if(!mount) return;
    mount.innerHTML = (cfg.products||[]).map(p=>`<article class="product-card reveal"><img src="${p.image}" alt="${p.name}"><div class="card-body"><h3>${p.name}</h3><p>${p.line}</p><a class="card-link whatsapp-link" data-message="catalogue" href="#">Enquire →</a></div></article>`).join('');
  }

  function menu(){
    const btn = $('#menuToggle'), nav = $('#siteNav');
    if(!btn || !nav) return;
    btn.addEventListener('click',()=>{ const open = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', open); });
    $$('#siteNav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
  }

  function enquiryForm(){
    const form = $('#whatsappForm'); if(!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = $('#name').value.trim();
      const city = $('#city').value.trim();
      const type = $('#type').value;
      const msg = $('#message').value.trim();
      const text = `Hi Nutmunk, my name is ${name || 'a customer'}.\nCity: ${city || '-'}\nEnquiry Type: ${type}\nMessage: ${msg || 'Please share details.'}`;
      window.open(`https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    });
  }

  function reveals(){
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
    },{threshold:.12});
    $$('.reveal').forEach(el=>io.observe(el));
  }

  document.addEventListener('DOMContentLoaded',()=>{
    renderBenefits(); renderCollections(); renderProducts(); applyLinks(); menu(); enquiryForm(); reveals();
  });
})();

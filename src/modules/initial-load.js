function createrHeader(id, text) {
  const header = document.createElement('header');
  header.setAttribute('id', id);
  const name = document.createElement('h1');
  name.textContent = text;
  const btnCtn = document.createElement('div');

  const homeBtn = createBtn('home', 'Home');
  homeBtn.classList.add('b-nav-tab');
  homeBtn.dataset.tab = 'home-div';
  homeBtn.href = '#home-div';

  const menuBtn = createBtn('menu', 'Menu');
  menuBtn.classList.add('b-nav-tab');
  menuBtn.dataset.tab = 'menu-div';
  menuBtn.href = '#menu-div';

  const contactBtn = createBtn('contact', 'Contact');
  contactBtn.classList.add('b-nav-tab');
  contactBtn.dataset.tab = 'contact-div';
  contactBtn.href = '#contact-div';

  header.appendChild(name);
  header.appendChild(btnCtn);
  btnCtn.appendChild(homeBtn);
  btnCtn.appendChild(menuBtn);
  btnCtn.appendChild(contactBtn);
  return header;
}

function createBtn(id, text) {
  const btn = document.createElement('a');
  btn.setAttribute('id', id);
  const span = document.createElement('span');
  span.textContent = text;
  btn.appendChild(span);
  return btn;
}

function createMain(id) {
  const main = document.createElement('main');
  main.classList.add('b-tab');
  main.classList.add('hero');
  main.classList.add('active');
  main.setAttribute('id', id);
  const title = document.createElement('h1');
  title.innerHTML = 'Artisan Bread';
  main.appendChild(title);
  return main;
}

function createFooter(id, text) {
  const footer = document.createElement('footer');
  footer.setAttribute('id', id);
  const brand = document.createElement('h1');
  brand.textContent = text;
  footer.appendChild(brand);
  return footer;
}

function loadPage() {
  const content = document.getElementById('content');

  const header = createrHeader('header', 'Raw Wheat');
  content.appendChild(header);

  const hero = createMain('home-div');
  content.appendChild(hero);

  const footer = createFooter('footer', 'The Best Rest');
  content.appendChild(footer);
}

export default loadPage;

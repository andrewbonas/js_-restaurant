function createrHeader(id, text) {
  const header = document.createElement('header');
  header.setAttribute('id', id);
  const name = document.createElement('h1');
  name.textContent = text;
  const btnCtn = document.createElement('div');
  const homeBtn = createBtn('home','home');
  const menuBtn = createBtn('menu', 'menu');
  header.appendChild(name);
  header.appendChild(btnCtn);
  btnCtn.appendChild(homeBtn);
  btnCtn.appendChild(menuBtn);
  return header;
}

function createBtn(id, text) {
  const btn = document.createElement('button');
  btn.setAttribute('id', id);
  const span = document.createElement('span');
  span.textContent = text;
  btn.appendChild(span);
  return btn;
}

function createMain(id) {
  const main = document.createElement('main');
  main.setAttribute('id', id);
  const aboutBtn = createBtn('about', 'about');
  main.appendChild(aboutBtn);
  return main
}

function loadPage() {
  const content = document.getElementById('content');

  const header = createrHeader('header', 'The best');
  content.appendChild(header);

  const hero = createMain('hero');
  content.appendChild(hero)
}

export default loadPage;

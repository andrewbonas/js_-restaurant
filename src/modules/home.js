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
  const div = document.createElement('div')

  const aboutBtn = createBtn('about', 'Find Out More');
  main.appendChild(div);
  div.appendChild(aboutBtn);
  return main;
}

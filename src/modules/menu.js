
function createDiv(id, text) {
  const div = document.createElement('div');
  div.setAttribute('id', id);
  div.classList.add('b-tab');

  const span = document.createElement('span');
  span.textContent = text;
  div.appendChild(span);
  return div;
}



function menuPage() {
  const content = document.getElementById('content');
  const menuDiv = createDiv('menu-div','test');
  content.appendChild(menuDiv);
  console.log('check');

}

export default menuPage;

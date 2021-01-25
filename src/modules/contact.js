
function createDiv(id, text) {
  const div = document.createElement('div');
  div.setAttribute('id', id);
  div.classList.add('b-tab');

  const span = document.createElement('span');
  span.textContent = text;
  div.appendChild(span);
  return div;
}



function contactPage() {
  const content = document.getElementById('content');
  const contactDiv = createDiv('contact-div','test # 2');
  content.appendChild(contactDiv);
  console.log('check1');

}

export default contactPage;
